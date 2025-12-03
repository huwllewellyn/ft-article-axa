import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import styled from "styled-components";
import { getAssetPath } from "../utils/assetPath";

const Container = styled.div`
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export default function LottieAnimation({
    path,
    fallbackPath,
    height = "600px",
    width = "100%",
    loop = true,
    autoplay = true,
    renderer = "svg",
    scrollSync = false,
    scrollProgress = null,
    initialFrame = 0,
}) {
    const containerRef = useRef(null);
    const animationLoadedRef = useRef(false);
    const animationRef = useRef(null);

    useEffect(() => {
        const loadAnimation = async () => {
            let data;

            try {
                const fullPath = getAssetPath(path);
                const response = await fetch(fullPath);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                data = await response.json();
            } catch (err) {
                // If primary path fails and fallback exists, try fallback
                if (fallbackPath) {
                    try {
                        console.warn(
                            `Primary animation path failed: ${path}, trying fallback: ${fallbackPath}`
                        );
                        const fullFallbackPath = getAssetPath(fallbackPath);
                        const fallbackResponse = await fetch(fullFallbackPath);
                        if (!fallbackResponse.ok) {
                            throw new Error(
                                `HTTP error! status: ${fallbackResponse.status}`
                            );
                        }
                        data = await fallbackResponse.json();
                    } catch (fallbackErr) {
                        console.error(
                            `Failed to load both primary and fallback animation`,
                            err,
                            fallbackErr
                        );
                        return;
                    }
                } else {
                    console.error(
                        `Failed to load lottie animation: ${path}`,
                        err
                    );
                    return;
                }
            }

            // Create Intersection Observer to trigger animation on view
            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (
                            entry.isIntersecting &&
                            containerRef.current &&
                            !animationLoadedRef.current
                        ) {
                            animationLoadedRef.current = true;
                            const anim = lottie.loadAnimation({
                                container: containerRef.current,
                                renderer: renderer,
                                loop: loop,
                                autoplay: scrollSync ? false : autoplay,
                                animationData: data,
                            });
                            animationRef.current = anim;

                            // Set initial frame based on initialFrame prop (0-1 range)
                            if (initialFrame > 0) {
                                const totalFrames = anim.getDuration(true);
                                const targetFrame = initialFrame * totalFrames;
                                anim.goToAndStop(Math.round(targetFrame), true);
                            }

                            observer.unobserve(entry.target);
                        }
                    });
                },
                { threshold: 0.1 }
            );

            if (containerRef.current) {
                observer.observe(containerRef.current);
            }

            return () => {
                observer.disconnect();
            };
        };

        loadAnimation();
    }, [path, fallbackPath, loop, autoplay, renderer, scrollSync, initialFrame]);

    // Handle scroll-synced animation (legacy window scroll)
    useEffect(() => {
        if (!scrollSync || !animationRef.current || !containerRef.current) {
            return;
        }

        const handleScroll = () => {
            const container = containerRef.current;
            const animation = animationRef.current;

            if (!container || !animation) return;

            // Get container position relative to viewport
            const rect = container.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate scroll progress (0 to 1)
            // Animation plays as element scrolls from bottom of viewport to top
            const scrollProgress = 1 - rect.top / (windowHeight + rect.height);
            const clampedProgress = Math.max(0, Math.min(1, scrollProgress));

            // Get total frames and calculate target frame
            const totalFrames = animation.getDuration(true); // true = in frames
            const targetFrame = clampedProgress * totalFrames;

            // Move animation to frame based on scroll
            animation.goToAndStop(targetFrame, true);
        };

        window.addEventListener("scroll", handleScroll, false);
        return () => {
            window.removeEventListener("scroll", handleScroll, false);
        };
    }, [scrollSync]);

    // Handle framer-motion scroll progress (only when scrollProgress MotionValue is provided)
    useEffect(() => {
        const unsubscribe = scrollProgress.onChange((latest) => {
            const animation = animationRef.current;
            if (!animation) {
                console.warn("[LottieAnimation] Animation not loaded yet");
                return;
            }

            const totalFrames = animation.getDuration(true);
            // If initialFrame is set, animate from initialFrame to end, not from 0 to end
            const targetFrame = (initialFrame + latest * (1 - initialFrame)) * totalFrames;

            // Move animation to frame based on scroll progress
            animation.goToAndStop(Math.round(targetFrame), true);
        });

        return () => unsubscribe();
    }, [scrollProgress, initialFrame]);

    return (
        <Container
            ref={containerRef}
            style={{
                width: width,
                height: height,
            }}
        />
    );
}
