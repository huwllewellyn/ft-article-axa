import styled from "styled-components";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";

// ============================================================================
// CORE CONSTANTS
// ============================================================================

export const CIRCLE_SIZE = 22.8;

// ============================================================================
// HOOKS
// ============================================================================

export const useDrawingAnimation = (animationDuration = 5, reverse = false) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const animatePathChildren = (children) => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child) && child.type === "path") {
                // --- THE FIX ---
                // We define specific animation variants for Normal vs Reverse

                const variants = {
                    hidden: {
                        pathLength: 0,
                        pathOffset: reverse ? 1.5 : 0, // If reverse, start the dash at the very end
                    },
                    visible: {
                        pathLength: 1.5, // Overshoot slightly to ensure full closure
                        pathOffset: 0, // Always end at 0 offset (covering the whole line)
                    },
                };

                return (
                    <motion.path
                        key={child.key}
                        {...child.props}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        variants={variants}
                        transition={{
                            duration: animationDuration,
                            ease: "easeInOut",
                        }}
                    />
                );
            }
            return child;
        });
    };

    return { ref, animatePathChildren, inView };
};

export const useIndependentParagraphAnimation = (animationDuration = 0.6) => {
    const [inView, setInView] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -10% 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const variants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: animationDuration, ease: "easeOut" },
        },
    };

    return { ref, variants, inView };
};

// ============================================================================
// BACKGROUND & CONTAINER
// ============================================================================

export const BackgroundContainer = styled.div`
    width: 100%;
    background: ${(props) => props.backgroundColor || "#f2f0ea"};
    z-index: -1;
`;

export const Container = styled.section`
    width: 100%;
    max-width: ${(props) => props.maxWidth || "1036px"};
    margin: 0 auto;
    padding: ${(props) => props.padding || "0px 40px"};
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

export const ContentWrapper = styled.div`
    margin: 0 auto;
    position: relative;
`;

// ============================================================================
// SVG WRAPPERS
// ============================================================================

const StyledSVGWrapper = styled(motion.svg)`
    top: 0;
    left: 0;
    width: 100%;
    height: ${(props) => props.height || "150px"};
    pointer-events: none;
    display: block;
`;

export const SVGWrapper = React.forwardRef(
    ({ children, animationDuration = 1, reverse = false, ...props }, ref) => {
        const { ref: internalRef, animatePathChildren } = useDrawingAnimation(
            animationDuration,
            reverse
        );
        const animatedChildren = animatePathChildren(children);

        return (
            <StyledSVGWrapper ref={internalRef} {...props}>
                {animatedChildren}
            </StyledSVGWrapper>
        );
    }
);

export const FirstSVGWrapper = (props) => (
    <SVGWrapper
        {...props}
        style={{ transform: "translateY(10px)", ...props.style }}
    />
);

export const FullWidthSVGWrapper = (props) => (
    <SVGWrapper {...props} style={{ width: "100%", ...props.style }} />
);

export const HalfWidthRightSVGWrapper = (props) => (
    <SVGWrapper
        {...props}
        height={props.height || "200px"}
        style={{ width: "50%", marginLeft: "50%", ...props.style }}
    />
);

export const HalfWidthLeftSVGContainer = styled.div`
    position: relative;
    width: 50%;
    margin-right: auto;
`;

export const HalfWidthRightSVGContainer = styled.div`
    position: relative;
    width: 50%;
    margin-left: auto;
`;

export const HalfWidthRightParagraph = styled.div`
    z-index: 1;
    position: relative;
    width: 50%;
    margin-left: auto;
    margin-right: 10%;
    padding-left: 40px;
    background: ${(props) => props.backgroundColor || "transparent"};
    outline: 2px solid ${(props) => props.backgroundColor || "transparent"};

    @media (max-width: 1024px) {
        width: 60%;
    }
`;

export const HalfWidthLeftParagraph = styled.div`
    position: relative;
    width: 50%;
    margin-right: auto;
    padding-right: 40px;
    background: ${(props) => props.backgroundColor || "transparent"};
    outline: 2px solid ${(props) => props.backgroundColor || "transparent"};
    z-index: 1;

    @media (max-width: 1024px) {
        width: 60%;
    }
`;

export const QuoteSVGWrapper = styled.svg`
    width: 100%;
    height: 100%;
    display: block;
`;

export const FinalQuoteSVGWrapper = styled.svg`
    width: 100%;
    height: 100%;
    display: block;
`;

// ============================================================================
// CIRCLES
// ============================================================================

export const Circle = styled.div`
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    border-radius: 50%;
    background-color: #000000;
    flex-shrink: 0;
    margin-right: 16px;
    transform: translateX(-50%);
`;

export const AboveTopLeftCircle = styled(Circle)`
    transform: translateX(-50%) translateY(-10px);
`;

export const TopLeftCircle = styled(Circle)`
    position: absolute;
    left: ${(props) => props.left || `-${CIRCLE_SIZE / 2}px`};
    margin-bottom: auto;
    top: -${CIRCLE_SIZE / 2}px;
    transform: none;
`;

export const TopRightCircle = styled(Circle)`
    position: absolute;
    right: -${1.5 * CIRCLE_SIZE}px;
    margin-bottom: auto;
    top: -${CIRCLE_SIZE / 2}px;
    transform: none;
`;

export const ParagraphFourCircle = styled(Circle)`
    position: relative;
    left: -${CIRCLE_SIZE}px;
    margin-bottom: auto;
    margin-top: ${CIRCLE_SIZE / 3}px;
    transform: none;
`;

export const ParagraphFiveCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const ParagraphSixCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const BottomCenterCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: ${(props) => props.left || "50%"};
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const BottomLeftCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: ${-CIRCLE_SIZE / 2}px;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const BottomRightCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    right: ${-CIRCLE_SIZE / 2}px;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const NotQuiteBottomRightCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    right: calc(2% + ${CIRCLE_SIZE / 2}px);
    flex-shrink: 0;
    transform: none;
`;

// ============================================================================
// TEXT & PARAGRAPH STYLES
// ============================================================================

const StyledParagraph = styled(motion.p)`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    text-align: left;

    &:last-child {
        margin-bottom: 0;
    }

    a {
        color: #000000;
        text-decoration: underline;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 0.7;
        }
    }
`;

export const Paragraph = React.forwardRef(
    ({ children, animationDuration = 0.6, ...props }, ref) => {
        const {
            ref: animationRef,
            variants,
            inView,
        } = useIndependentParagraphAnimation(animationDuration);

        return (
            <motion.div
                ref={animationRef}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={variants}
            >
                <StyledParagraph {...props}>{children}</StyledParagraph>
            </motion.div>
        );
    }
);

export const TextBlock = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 40px;
    letter-spacing: 0;

    a {
        color: #000000;
        text-decoration: underline;
    }

    strong {
        font-weight: 700;
    }

    &:last-of-type {
        margin-bottom: 80px;
    }
`;

export const ParagraphFourText = styled.span`
    flex: 1;
    display: block;
`;

export const ParagraphFive = styled(Paragraph)`
    width: 50%;
    display: flex;
    align-items: flex-start;
    padding-right: 32px;
`;

export const ParagraphSixWrapper = styled(motion.div)`
    max-width: 518px;
    margin: -20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

export const ParagraphSix = styled(Paragraph)`
    text-align: left;
    max-width: 100%;
`;

// ============================================================================
// QUOTE WRAPPERS
// ============================================================================

export const LeftToBottomQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
    height: ${(props) => props.height || "720px"};
`;

export const QuoteContent = styled(motion.div)`
    position: absolute;
    bottom: 15px;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 40px;
    padding-bottom: 80px;
`;

export const FinalLeftToBottomQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
`;

export const FinalQuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
`;

// ============================================================================
// ANIMATION VARIANTS
// ============================================================================

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const paragraphFourVariants = {
    hidden: { opacity: 0, y: 20, x: "40%", scaleX: 1 },
    visible: {
        opacity: 1,
        y: -20,
        x: "40%",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const paragraphFiveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: -CIRCLE_SIZE,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export const polycrisisContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

export const polycrisisItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};
