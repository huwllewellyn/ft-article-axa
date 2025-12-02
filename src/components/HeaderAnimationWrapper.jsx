import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useMotionValue } from "framer-motion";
import styled from "styled-components";
import LottieAnimation from "./LottieAnimation";

const HeaderAnimationContainer = styled.div`
    width: 100%;
    height: ${(props) => props.$height || "150px"};
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function HeaderAnimationWrapper({
    filename = "AXA_HEAD_01_HALVED",
    animationPath,
    enableScrollSync = false,
}) {
    const path = animationPath || `/lottie/headers/${filename}.json`;
    const [height, setHeight] = useState("150px");
    const containerRef = useRef(null);
    const scrollProgress = useMotionValue(0);

    useEffect(() => {
        const fetchAspectRatio = async () => {
            try {
                const response = await fetch(path);
                const data = await response.json();

                if (data.w && data.h && containerRef.current) {
                    const aspectRatio = data.w / data.h;
                    // Get the actual width of the container div
                    const containerWidth = containerRef.current.offsetWidth;
                    // Calculate height based on the container's width
                    const calculatedHeight = containerWidth / aspectRatio;
                    setHeight(`${calculatedHeight}px`);
                }
            } catch (err) {
                console.warn(
                    "Could not fetch header animation aspect ratio",
                    err
                );
            }
        };

        // Use a small delay to ensure the DOM is fully rendered
        const timer = setTimeout(fetchAspectRatio, 0);
        window.addEventListener("resize", fetchAspectRatio);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("resize", fetchAspectRatio);
        };
    }, [path]);

    // Custom scroll handler for viewport-based animation scrubbing
    useEffect(() => {
        const handleScroll = () => {
            const container = containerRef.current;
            if (!container) return;

            const rect = container.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const headerTop = rect.top;

            let progress = 0;

            // 1. Calculate raw progress based on the full distance
            // Range: Moves from 100% viewportHeight down to 50% viewportHeight
            let rawProgress =
                (viewportHeight - headerTop) / (2 * viewportHeight);

            // 2. Clamp the value between 0 and 1
            // This handles the "above viewport" and "below trigger" states automatically
            progress = Math.max(0, Math.min(1, rawProgress));

            scrollProgress.set(progress);
        };

        window.addEventListener("scroll", handleScroll, false);
        handleScroll(); // Call once on mount to set initial state
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [enableScrollSync, scrollProgress]);

    return (
        <HeaderAnimationContainer ref={containerRef} $height={height}>
            <LottieAnimation
                path={path}
                height={height}
                width="100%"
                loop={false}
                autoplay={false}
                scrollProgress={enableScrollSync ? scrollProgress : null}
            />
        </HeaderAnimationContainer>
    );
}
