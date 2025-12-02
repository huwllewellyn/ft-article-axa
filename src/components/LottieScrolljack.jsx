import styled from "styled-components";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";

const AnimationTrack = styled.div`
    position: relative;
    width: 100%;
    height: ${(props) => props.$trackHeight || "4000px"};
    padding-top: ${(props) => props.$headerHeight || "60px"};
`;

const StickyContainer = styled.div`
    position: sticky;
    top: ${(props) => props.$headerHeight || "60px"};
    width: 100%;
    height: calc(100svh - ${(props) => props.$headerHeight || "60px"});
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;

    /* Allow animations inside to be interactive */
    & > * {
        pointer-events: auto;
        width: ${(props) => props.$width || "100%"};
        height: ${(props) => props.$height || "auto"};
    }
`;

/**
 * LottieScrolljack
 * A reusable component that creates a full-width sticky animation that scrubs through based on scroll position.
 * The animation width is always 100%, and height is responsive based on the animation's aspect ratio.
 *
 * @param {Object} animations - Object mapping breakpoints to animation paths (required)
 *   Example: { mobile: "/lottie/mobile/anim.json", tablet: "/lottie/tablet/anim.json", desktop: "/lottie/desktop/anim.json" }
 * @param {string} trackHeight - Height of the scrollable track area (optional, default: "4000px")
 * @param {string} headerHeight - Height of the page header to avoid overlap (optional, default: "60px")
 * @param {boolean} loop - Whether animation should loop (default: false for scrolljack)
 * @param {boolean} autoplay - Whether animation should autoplay (default: false for scrolljack)
 * @param {number} initialFrame - Initial frame position as a percentage (0-1, default: 0)
 */
export default function LottieScrolljack({
    animations,
    trackHeight = "4000px",
    headerHeight = "60px",
    loop = false,
    autoplay = false,
    initialFrame = 0,
}) {
    const animationTrackRef = useRef(null);
    const [aspectRatioDecimal, setAspectRatioDecimal] = useState(16 / 9);
    const [dimensions, setDimensions] = useState({
        width: "100%",
        height: "auto",
    });

    // Fetch animation data to get aspect ratio
    useEffect(() => {
        const getAspectRatio = async () => {
            try {
                // Try to get the desktop animation first
                const path =
                    animations.desktop ||
                    animations.mobile ||
                    Object.values(animations)[0];
                const response = await fetch(path);
                const data = await response.json();

                if (data.w && data.h) {
                    setAspectRatioDecimal(data.w / data.h);
                }
            } catch (err) {
                // Keep default if fetch fails
                console.warn("Could not fetch animation aspect ratio", err);
            }
        };

        if (animations) {
            getAspectRatio();
        }
    }, [animations]);

    // Calculate dimensions based on viewport and aspect ratio
    useEffect(() => {
        const calculateDimensions = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Parse header height to get pixel value
            const headerHeightPixels = parseInt(headerHeight) || 60;
            const availableHeight = viewportHeight - headerHeightPixels;

            // Calculate height if width is 100vw
            const calculatedHeight = viewportWidth / aspectRatioDecimal;

            // If calculated height exceeds available height, constrain to available height
            // and calculate width based on that
            if (calculatedHeight > availableHeight) {
                const constrainedWidth =
                    ((availableHeight * aspectRatioDecimal) / viewportWidth) *
                    100;
                setDimensions({
                    width: `${constrainedWidth}vw`,
                    height: `calc(100svh - ${headerHeight})`,
                });
            } else {
                setDimensions({
                    width: "100%",
                    height: "auto",
                });
            }
        };

        calculateDimensions();
        window.addEventListener("resize", calculateDimensions);
        return () => window.removeEventListener("resize", calculateDimensions);
    }, [aspectRatioDecimal, headerHeight]);

    // Track scroll progress within the animation track
    const { scrollYProgress } = useScroll({
        target: animationTrackRef,
        offset: ["start start", "end end"],
    });

    return (
        <AnimationTrack
            ref={animationTrackRef}
            $trackHeight={trackHeight}
            $headerHeight={headerHeight}
        >
            <StickyContainer
                $width={dimensions.width}
                $height={dimensions.height}
                $headerHeight={headerHeight}
            >
                <ResponsiveLottieAnimation
                    animations={animations}
                    loop={loop}
                    autoplay={autoplay}
                    scrollProgress={scrollYProgress}
                    initialFrame={initialFrame}
                />
            </StickyContainer>
        </AnimationTrack>
    );
}
