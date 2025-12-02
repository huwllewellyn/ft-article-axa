import { useState, useEffect } from "react";
import styled from "styled-components";
import { getCurrentBreakpoint, breakpoints } from "../utils/breakpoints";
import LottieAnimation from "./LottieAnimation";

const Container = styled.div`
    width: ${(props) => props.$width || "100%"};
    height: ${(props) => props.$height || "auto"};
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
 * @param {Object} animations - Object mapping breakpoints to animation paths
 *   Example: { mobile: "/lottie/mobile/anim.json", tablet: "/lottie/tablet/anim.json", desktop: "/lottie/desktop/anim.json" }
 * @param {Object} heights - Object mapping breakpoints to heights (optional, defaults to auto)
 *   Example: { mobile: "300px", tablet: "400px", desktop: "600px" }
 * @param {Object} widths - Object mapping breakpoints to widths (optional, defaults to 100%)
 * @param {boolean} loop - Whether animation should loop (default: true)
 * @param {boolean} autoplay - Whether animation should autoplay (default: true)
 * @param {boolean} scrollSync - Whether animation should sync with scroll (default: false)
 * @param {MotionValue} scrollProgress - Framer Motion scroll progress value (0-1) for animation control
 */
export default function ResponsiveLottieAnimation({
    animations,
    heights = null,
    widths = {},
    loop = true,
    autoplay = true,
    scrollSync = false,
    scrollProgress = null,
    initialFrame = 0,
}) {
    const [currentBreakpoint, setCurrentBreakpoint] = useState("desktop");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);

        // Set initial breakpoint
        setCurrentBreakpoint(getCurrentBreakpoint());

        // Handle window resize
        const handleResize = () => {
            setCurrentBreakpoint(getCurrentBreakpoint());
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Don't render until client-side to avoid hydration mismatch
    if (!isClient) {
        return null;
    }

    const animationPath = animations[currentBreakpoint] || animations.desktop;
    const height = heights
        ? heights[currentBreakpoint] || heights.desktop
        : undefined;
    const width = widths[currentBreakpoint] || widths.desktop || "100%";

    return (
        <Container $height={height} $width={width}>
            <LottieAnimation
                path={animationPath}
                fallbackPath={
                    currentBreakpoint !== "desktop"
                        ? animations.desktop
                        : undefined
                }
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
