import styled from "styled-components";
import { media } from "../../utils/breakpoints";

export const QuoteContainer = styled.div`
    padding: 0;
`;

export const QuoteText = styled.p`
    color: #000000;
    text-align: center;
    font-family: "EB Garamond", serif;
    font-size: 40px;
    font-style: italic;
    font-weight: 400;
    line-height: 120%; /* 48px */
    margin: 0 0 32px 0;
    letter-spacing: 0;

    ${media.tablet(`

    `)}
    ${media.mobile(`
        font-size: 21px;
    `)}
`;

export const QuoteAttribution = styled.p`
    color: #000000;
    text-align: center;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    font-size: 17px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 20.4px */
    margin: 0;
    letter-spacing: 0;
    ${media.tablet(`

    `)}
    ${media.mobile(`
        font-size: 12px;
    `)}
`;

/**
 * Quote Component
 * A reusable quote block with text and attribution
 *
 * @param {string|ReactNode} text - The main quote text (supports strings or JSX elements like <br/>)
 * @param {string} attribution - The attribution (author/source)
 * @param {object} variants - Optional Framer Motion variants for animations
 */
export default function Quote({ text, attribution, variants }) {
    return (
        <QuoteContainer variants={variants}>
            <QuoteText>{text}</QuoteText>
            <QuoteAttribution>{attribution}</QuoteAttribution>
        </QuoteContainer>
    );
}
