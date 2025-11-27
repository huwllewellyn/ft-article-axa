import styled from "styled-components";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";

const AnimationTrack = styled.div`
    position: relative;
    width: 100vw;
    margin-left: calc(-50vw + 50%);
    height: ${(props) => props.$trackHeight || "4000px"};
`;

const StickyContainer = styled.div`
    position: sticky;
    top: 0;
    width: 100vw;
    height: 100svh;
    background-color: ${(props) => props.$backgroundColor || "#FFFFFF"};
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
 * @param {string} backgroundColor - Background color for the animation container (optional, default: "#FFFFFF")
 * @param {string} trackHeight - Height of the scrollable track area (optional, default: "4000px")
 * @param {boolean} loop - Whether animation should loop (default: false for scrolljack)
 * @param {boolean} autoplay - Whether animation should autoplay (default: false for scrolljack)
 */
export default function LottieScrolljack({
    animations,
    backgroundColor = "#FFFFFF",
    trackHeight = "4000px",
    loop = false,
    autoplay = false,
}) {
    const animationTrackRef = useRef(null);
    const [aspectRatioDecimal, setAspectRatioDecimal] = useState(16 / 9);
    const [dimensions, setDimensions] = useState({ width: "100%", height: "auto" });

    // Fetch animation data to get aspect ratio
    useEffect(() => {
        const getAspectRatio = async () => {
            try {
                // Try to get the desktop animation first
                const path = animations.desktop || animations.mobile || Object.values(animations)[0];
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

            // Calculate height if width is 100vw
            const calculatedHeight = viewportWidth / aspectRatioDecimal;

            // If calculated height exceeds viewport height, constrain to viewport height
            // and calculate width based on that
            if (calculatedHeight > viewportHeight) {
                const constrainedWidth = (viewportHeight * aspectRatioDecimal) / viewportWidth * 100;
                setDimensions({
                    width: `${constrainedWidth}vw`,
                    height: "100svh",
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
    }, [aspectRatioDecimal]);

    // Track scroll progress within the animation track
    const { scrollYProgress } = useScroll({
        target: animationTrackRef,
        offset: ["start start", "end end"],
    });

    return (
        <AnimationTrack ref={animationTrackRef} $trackHeight={trackHeight}>
            <StickyContainer
                $width={dimensions.width}
                $height={dimensions.height}
                $backgroundColor={backgroundColor}
            >
                <ResponsiveLottieAnimation
                    animations={animations}
                    backgroundColor={backgroundColor}
                    loop={loop}
                    autoplay={autoplay}
                    scrollProgress={scrollYProgress}
                />
            </StickyContainer>
        </AnimationTrack>
    );
}
