import styled from "styled-components";
import { useScroll } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";
import { getCurrentBreakpoint } from "../utils/breakpoints";

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
        max-height: calc(100svh - ${(props) => props.$headerHeight || "60px"});
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
 * @param {number} initialFrameMobile - Mobile-specific initial frame position (0-1, optional)
 * @param {number} initialFrameTablet - Tablet-specific initial frame position (0-1, optional)
 * @param {number} initialFrameDesktop - Desktop-specific initial frame position (0-1, optional)
 */
export default function LottieScrolljack({
    animations,
    trackHeight = "4000px",
    headerHeight = "60px",
    loop = false,
    autoplay = false,
    initialFrame = 0,
    initialFrameMobile,
    initialFrameTablet,
    initialFrameDesktop,
}) {
    const animationTrackRef = useRef(null);
    const [currentBreakpoint, setCurrentBreakpoint] = useState(
        () => getCurrentBreakpoint()
    );
    const [aspectRatioDecimal, setAspectRatioDecimal] = useState(16 / 9);
    const [dimensions, setDimensions] = useState({
        width: "100%",
        height: "auto",
    });

    // Track breakpoint changes for initial frame
    useEffect(() => {
        const handleResize = () => {
            setCurrentBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Determine the appropriate initial frame based on breakpoint
    const getInitialFrame = () => {
        if (currentBreakpoint === "mobile" && initialFrameMobile !== undefined) {
            return initialFrameMobile;
        }
        if (currentBreakpoint === "tablet" && initialFrameTablet !== undefined) {
            return initialFrameTablet;
        }
        if (currentBreakpoint === "desktop" && initialFrameDesktop !== undefined) {
            return initialFrameDesktop;
        }
        return initialFrame;
    };

    // Fetch animation dimensions from config
    useEffect(() => {
        const getDimensionsFromConfig = async () => {
            try {
                // Fetch the animation dimensions config
                const response = await fetch("/lottie/animationDimensions.json");
                const dimensionsConfig = await response.json();

                // Get the animation identifier
                // Handle both string and object formats
                let animationName;

                if (typeof animations === "string") {
                    // If animations is a string, extract the filename without extension
                    // e.g., "AXA_Scrolly_DP02.json" -> "AXA_Scrolly_DP02"
                    animationName = animations
                        .split("/")
                        .pop()
                        ?.replace(".json", "");
                } else {
                    // If animations is an object, get the animation for current breakpoint
                    const animationPath =
                        animations[currentBreakpoint] ||
                        animations.desktop ||
                        animations.mobile ||
                        Object.values(animations)[0];

                    // Extract the animation name from the path
                    animationName = animationPath
                        ?.split("/")
                        .pop()
                        ?.replace(".json", "");
                }

                console.log(
                    `[LottieScrolljack] currentBreakpoint: ${currentBreakpoint}, extracted name: ${animationName}`
                );
                console.log(
                    `[LottieScrolljack] Available animation names in config:`,
                    Object.keys(dimensionsConfig)
                );

                if (animationName && dimensionsConfig[animationName]) {
                    const dims = dimensionsConfig[animationName][currentBreakpoint];
                    console.log(
                        `[LottieScrolljack] Found config for ${animationName}:`,
                        dimensionsConfig[animationName]
                    );
                    if (dims && dims.w && dims.h) {
                        const aspectRatio = dims.w / dims.h;
                        console.log(
                            `[LottieScrolljack] Loaded dimensions: ${dims.w}x${dims.h} = ${aspectRatio}`
                        );
                        setAspectRatioDecimal(aspectRatio);
                    } else {
                        console.warn(
                            `[LottieScrolljack] No dimensions found for breakpoint ${currentBreakpoint}`
                        );
                    }
                } else {
                    console.warn(
                        `[LottieScrolljack] Animation ${animationName} not found in config`
                    );
                }
            } catch (err) {
                console.warn("Could not fetch animation dimensions config", err);
            }
        };

        if (animations) {
            getDimensionsFromConfig();
        }
    }, [animations, currentBreakpoint]);

    // Calculate dimensions based on viewport and aspect ratio
    useEffect(() => {
        const calculateDimensions = () => {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Parse header height to get pixel value
            const headerHeightPixels = parseInt(headerHeight) || 60;
            const availableHeight = viewportHeight - headerHeightPixels;

            // Always fill the available height
            // Calculate width to maintain aspect ratio
            const calculatedWidth = availableHeight * aspectRatioDecimal;

            // If calculated width fits in viewport, use it
            // Otherwise, use 100% width and calculate height from that
            if (calculatedWidth <= viewportWidth) {
                // Width fits, fill the height and set width based on aspect ratio
                const widthPercentage = (calculatedWidth / viewportWidth) * 100;
                setDimensions({
                    width: `${widthPercentage}vw`,
                    height: `calc(100svh - ${headerHeight})`,
                });
            } else {
                // Width exceeds viewport, use 100% width
                const calculatedHeight = viewportWidth / aspectRatioDecimal;
                setDimensions({
                    width: "100%",
                    height: `${calculatedHeight}px`,
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
                    width={dimensions.width}
                    height={dimensions.height}
                    loop={loop}
                    autoplay={autoplay}
                    scrollProgress={scrollYProgress}
                    initialFrame={getInitialFrame()}
                />
            </StickyContainer>
        </AnimationTrack>
    );
}
