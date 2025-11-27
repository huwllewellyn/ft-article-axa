import styled from "styled-components";
import { media } from "../../utils/breakpoints";

export const ChapterNumber = styled.p`
    color: #000000;
    text-align: center;
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 42px;
    font-style: italic;
    font-weight: 400;
    line-height: 120%; /* 50.4px */
    margin: 105px 0 0 0;
    letter-spacing: 0;

    /* Responsive sizing */
    ${media.tablet`
        font-size: 36px;
        line-height: 120%;
        margin-top: 80px;
    `}

    ${media.mobile`
        font-size: 28px;
        line-height: 120%;
        margin-top: 60px;
    `}
`;

export default ChapterNumber;
