import styled from "styled-components";
import { motion } from "framer-motion";

// ============================================================================
// CORE CONSTANTS
// ============================================================================

export const CIRCLE_SIZE = 22.8;

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

export const ContentWrapper = styled(motion.div)`
    margin: 0 auto;
    position: relative;
`;

// ============================================================================
// SVG WRAPPERS
// ============================================================================

export const SVGWrapper = styled(motion.svg)`
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    pointer-events: none;
    display: block;
`;

export const FirstSVGWrapper = styled(SVGWrapper)`
    transform: translateY(10px);
`;

export const FullWidthSVGWrapper = styled(SVGWrapper)`
    width: 100%;
    height: 300px;
`;

export const HalfWidthRightSVGWrapper = styled(SVGWrapper)`
    width: 50%;
    height: 200px;
    margin-left: 50%;
`;

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

export const ParagraphFourCircle = styled(Circle)`
    margin-right: 0;
    margin-bottom: auto;
    margin-top: 0;
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
    left: 40px;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const BottomLeftCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: 0;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

export const CirclesWrapper = styled(motion.div)`
    padding-left: ${CIRCLE_SIZE / 2}px;
`;

// ============================================================================
// TEXT & PARAGRAPH STYLES
// ============================================================================

export const Paragraph = styled(motion.p)`
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
    gap: 16px;
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

export const QuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
    height: 720px;
`;

export const QuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 40px;
`;

export const FinalQuoteWrapper = styled(motion.div)`
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
