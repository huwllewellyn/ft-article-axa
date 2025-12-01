import styled from "styled-components";
import { ChapterNumber } from "./ChapterNumber";
import { SectionTitle } from "./SectionTitle";

export const TitleGroup = styled.div`
    padding-top: 80px;
    text-align: center;
    margin-bottom: 80px;
`;

/**
 * SectionTitleGroup
 * A convenient wrapper that combines ChapterNumber and SectionTitle with proper spacing
 *
 * @param {string} chapter - Chapter number text (e.g., "Chapter one")
 * @param {string} title - Section title text
 * @param {object} style - Optional additional styles
 */
export default function SectionTitleGroup({ chapter, title, style }) {
    return (
        <TitleGroup style={style}>
            <SectionTitle>{title}</SectionTitle>
            <ChapterNumber>{chapter}</ChapterNumber>
        </TitleGroup>
    );
}
