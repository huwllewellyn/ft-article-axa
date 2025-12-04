import { useState, useEffect } from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";

const MenuContainer = styled.div`
    position: fixed;
    top: ${(props) =>
        props.$isScrolled
            ? "50px"
            : "105px"}; /* 60px header + 20px spacing, or + 55px top header */
    right: 20px;
    z-index: 1000;
    transition: top 0.3s ease;
`;

const MenuButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #0f0707;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: #2a2a2a;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    }

    &:active {
        transform: scale(0.95);
    }

    ${media.mobile(`
        width: 40px;
        height: 40px;
    `)}
`;

const MenuDropdown = styled.div`
    position: absolute;
    top: 60px;
    right: 0;
    background-color: white;
    border: 1px solid #ddd;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    min-width: 250px;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    transform: ${(props) =>
        props.$isOpen ? "translateY(0)" : "translateY(-10px)"};
    transition: all 0.3s ease;
    max-height: 80vh;
    overflow-y: auto;

    ${media.mobile(`
        min-width: 200px;
    `)}
`;

const MenuItem = styled.button`
    width: 100%;
    padding: 15px 20px;
    border: none;
    background: none;
    text-align: left;
    cursor: pointer;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #0f0707;
    border-bottom: 1px solid #f0f0f0;
    transition: background-color 0.2s ease;

    &:hover {
        background-color: #f9f9f9;
    }

    &:last-child {
        border-bottom: none;
    }

    ${media.mobile(`
        padding: 12px 16px;
        font-size: 13px;
    `)}
`;

const sections = [
    { id: "polycrisis", label: "The age of polycrisis" },
    { id: "nexus-in-action", label: "The nexus in action" },
    { id: "risk-perceptions", label: "Risk perceptions" },
    { id: "preparing-for-complexity", label: "Preparing for complexity" },
    { id: "collaborative-approach", label: "A collaborative approach" },
];

export default function SectionMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Consider scrolled if user has scrolled more than 50px
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setIsOpen(false);
        }
    };

    return (
        <MenuContainer $isScrolled={isScrolled}>
            <MenuButton onClick={toggleMenu} aria-label="Section menu" />
            <MenuDropdown $isOpen={isOpen}>
                {sections.map((section) => (
                    <MenuItem
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                    >
                        {section.label}
                    </MenuItem>
                ))}
            </MenuDropdown>
        </MenuContainer>
    );
}
