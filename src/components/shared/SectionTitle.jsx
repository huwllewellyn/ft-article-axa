import styled from "styled-components";
import { media } from "../../utils/breakpoints";

export const SectionTitle = styled.h2`
    color: #000000;
    text-align: center;
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 100px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 100px */
    margin: 0;
    letter-spacing: 0;

    /* Responsive sizing */
    ${media.tablet`
        font-size: 80px;
        line-height: 80px;
    `}

    ${media.mobile`
        font-size: 60px;
        line-height: 60px;
    `}
`;

export default SectionTitle;
