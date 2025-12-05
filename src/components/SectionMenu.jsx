import { useState, useEffect } from "react";
import styled from "styled-components";
import { media } from "../utils/breakpoints";

const MenuContainer = styled.div`
    position: fixed;
    top: ${(props) => (props.$isScrolled ? "50px" : "105px")};
    opacity: ${(props) => (props.$pastIntro ? 1 : 0)};
    right: 20px;
    z-index: 5;
    transition: top 0.3s ease, opacity 0.3s ease;

    @media (max-width: 768px) {
        top: ${(props) => (props.$isScrolled ? "80px" : "135px")};
        right: 10px;
        pointer-events: ${(props) => (props.$pastIntro ? "auto" : "none")};
    }
`;

const MenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    padding: 6px;
    background-color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05);
    position: relative;
    z-index: 1002;

    &:hover {
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
        transform: scale(0.95);
    }

    svg {
        width: 20px;
        height: 20px;
    }

    ${media.mobile(`
        width: 32px;
        height: 32px;

        svg {
            width: 16px;
            height: 16px;
        }
    `)}
`;

const MenuDropdown = styled.div`
    position: fixed;
    top: 40px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #f2f0eb;
    opacity: ${(props) => (props.$isOpen ? 1 : 0)};
    visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
    transition: opacity 0.3s ease, visibility 0.3s ease;
    display: flex;
    flex-direction: column;
    z-index: 1000;

    @media (max-width: 767px) {
        top: 65px;
    }
`;

const MenuItem = styled.button`
    flex: 1;
    width: 100%;
    min-height: 20%;
    border: none;
    background: transparent;
    text-align: center;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    border-bottom: 1px solid #767676;
    transition: background-color 0.2s ease;
    padding: 20px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.3);
    }

    &:last-child {
        border-bottom: none;
    }
`;

const ChapterLabel = styled.p`
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    font-size: 15px;
    font-weight: 500;
    color: #222222;
    letter-spacing: 0.3px;
    line-height: 0.9;
    margin: 0;
    text-transform: uppercase;
`;

const ChapterTitle = styled.p`
    font-family: freight-big-pro, Georgia, serif;
    font-size: 32px;
    font-weight: 400;
    color: #000000;
    line-height: 1;
    margin: 0;
    max-width: 300px;

    ${media.mobile(`
        font-size: 24px;
    `)}
`;

const sections = [
    {
        id: "polycrisis",
        chapter: "Chapter one",
        title: "The age of polycrisis",
    },
    {
        id: "nexus-in-action",
        chapter: "Chapter two",
        title: "The nexus in action",
    },
    {
        id: "risk-perceptions",
        chapter: "Chapter three",
        title: "Risk perceptions",
    },
    {
        id: "preparing-for-complexity",
        chapter: "Chapter four",
        title: "Preparing for complexity",
    },
    {
        id: "collaborative-approach",
        chapter: "Chapter five",
        title: "A collaborative approach",
    },
];

export default function SectionMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [pastIntro, setPastIntro] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Consider scrolled if user has scrolled more than 50px
            setIsScrolled(window.scrollY > 50);

            // Check if scrolled past IntroSection (approximately 100vh)
            const introHeight = window.innerHeight;
            setPastIntro(window.scrollY > introHeight * 0.8);
        };

        window.addEventListener("scroll", handleScroll);
        // Call once on mount to set initial state
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            const preventDefault = (e) => e.preventDefault();

            window.addEventListener("wheel", preventDefault, { passive: false });
            window.addEventListener("touchmove", preventDefault, { passive: false });

            return () => {
                window.removeEventListener("wheel", preventDefault);
                window.removeEventListener("touchmove", preventDefault);
            };
        }
    }, [isOpen]);

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
        <MenuContainer $isScrolled={isScrolled} $pastIntro={pastIntro}>
            <MenuButton onClick={toggleMenu} aria-label="Section menu">
                {isOpen ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="2"
                        viewBox="0 0 20 2"
                        fill="none"
                    >
                        <path
                            d="M20 1L-3.57628e-07 0.999999"
                            stroke="#222222"
                            strokeWidth="2"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                    >
                        <path d="M10 0V20" stroke="#222222" strokeWidth="2" />
                        <path
                            d="M20 10L-3.57628e-07 10"
                            stroke="#222222"
                            strokeWidth="2"
                        />
                    </svg>
                )}
            </MenuButton>
            <MenuDropdown $isOpen={isOpen}>
                {sections.map((section) => (
                    <MenuItem
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                    >
                        <ChapterLabel>{section.chapter}</ChapterLabel>
                        <ChapterTitle>{section.title}</ChapterTitle>
                    </MenuItem>
                ))}
            </MenuDropdown>
        </MenuContainer>
    );
}
