import { useState, useEffect } from "react";
import styled from "styled-components";
import { getCurrentBreakpoint } from "../utils/breakpoints";
import LottieAnimation from "./LottieAnimation";

const Container = styled.div`
    width: ${(props) => props.$width || "100%"};
    height: ${(props) => props.$height || "auto"};
    max-height: 100%;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
`;

/**
 * ResponsiveLottieAnimation
 * Automatically selects the correct Lottie file based on screen size
 *
 * @param {string|Object} animations - Either a filename/path string (paths constructed automatically)
 *   or an object mapping breakpoints to animation paths
 *   Example string: "AXA_Scrolly_DP01.json" or "/lottie/AXA_Scrolly_DP01.json"
 *   Example object: { mobile: "/lottie/mobile/anim.json", tablet: "/lottie/tablet/anim.json", desktop: "/lottie/desktop/anim.json" }
 * @param {Object} heights - Object mapping breakpoints to heights (optional, defaults to auto)
 *   Example: { mobile: "300px", tablet: "400px", desktop: "600px" }
 * @param {Object} widths - Object mapping breakpoints to widths (optional, defaults to 100%)
 * @param {string} height - Direct height value (overrides heights object if provided)
 * @param {string} width - Direct width value (overrides widths object if provided)
 * @param {boolean} loop - Whether animation should loop (default: true)
 * @param {boolean} autoplay - Whether animation should autoplay (default: true)
 * @param {boolean} scrollSync - Whether animation should sync with scroll (default: false)
 * @param {MotionValue} scrollProgress - Framer Motion scroll progress value (0-1) for animation control
 */
export default function ResponsiveLottieAnimation({
    animations,
    heights = null,
    widths = {},
    height = null,
    width = null,
    loop = true,
    autoplay = true,
    scrollSync = false,
    scrollProgress = null,
    initialFrame = 0,
}) {
    const [currentBreakpoint, setCurrentBreakpoint] = useState(
        () => getCurrentBreakpoint()
    );

    useEffect(() => {
        // Handle window resize
        const handleResize = () => {
            setCurrentBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Helper function to construct animation path
    const getAnimationPath = (breakpoint) => {
        // If animations is a string, construct the path with the breakpoint directory
        if (typeof animations === "string") {
            // Remove leading /lottie/ if present, and any directory structure
            const filename = animations.split("/").pop();
            return `/lottie/${breakpoint}/${filename}`;
        }
        // If animations is an object, use the breakpoint key
        return animations[breakpoint] || animations.desktop;
    };

    const animationPath = getAnimationPath(currentBreakpoint);
    const fallbackPath =
        currentBreakpoint !== "desktop" ? getAnimationPath("desktop") : undefined;
    const finalHeight = height !== null
        ? height
        : (heights
            ? heights[currentBreakpoint] || heights.desktop
            : undefined);
    const finalWidth = width !== null
        ? width
        : (widths[currentBreakpoint] || widths.desktop || "100%");

    return (
        <Container $height={finalHeight} $width={finalWidth}>
            <LottieAnimation
                path={animationPath}
                fallbackPath={fallbackPath}
                height="100%"
                width="100%"
                loop={loop}
                autoplay={autoplay}
                scrollSync={scrollSync}
                scrollProgress={scrollProgress}
                initialFrame={initialFrame}
            />
        </Container>
    );
}
