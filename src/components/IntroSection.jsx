import styled from "styled-components";

import { motion } from "framer-motion";
import { getAssetPath } from "../utils/assetPath";
import { TopCenterCircle, SVGWrapper } from "./shared/SectionLayout";

const Container = styled.section`
    width: 100%;
    height: 100vh;
    padding: 0;
    background: #f2f0ea;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
    overflow: hidden;
    padding-bottom: 0;
`;

const ContentWrapper = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    padding: 0 40px;
`;

const Subtitle = styled(motion.p)`
    position: absolute;
    bottom: 130px;
    right: 20px;
    font-size: 19px;
    font-weight: 500;
    line-height: 1.2;
    transform: none;
    color: #0f0707;
    margin: 0;
    max-width: 433px;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    z-index: 4;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 16px;
        left: 50%;
        bottom: 100px;
        max-width: 280px;
    }
`;

const TitleContainer = styled(motion.div)`
    position: absolute;
    top: 108px;
    left: 58px;
    width: 100%;
    max-width: 1100px;
    z-index: 3;
`;

const TitleWordWrapper = styled.div`
    overflow: hidden;
    display: block;
    height: auto;

    &.the {
        position: absolute;
        left: 0;
        top: 0;
        width: 283px;
    }

    &.new-nexus {
        position: absolute;
        left: 10px;
        top: 121px;
        width: 846px;
    }

    &.of {
        position: absolute;
        left: 678px;
        top: 245px;
        width: 186px;
    }

    &.global {
        position: absolute;
        left: 678px;
        top: 367px;
        width: 578px;
    }

    &.risk {
        position: absolute;
        left: 924px;
        top: 490px;
        width: 335px;
    }

    @media (max-width: 1024px) {
        &.the {
            width: 230px;
        }

        &.new-nexus {
            width: 700px;
            left: 10px;
            top: 100px;
        }

        &.of {
            left: 550px;
            top: 200px;
            width: 150px;
        }

        &.global {
            left: 550px;
            top: 300px;
            width: 470px;
        }

        &.risk {
            left: 750px;
            top: 400px;
            width: 280px;
        }
    }

    @media (max-width: 768px) {
        position: static;
        width: 100% !important;
        margin-bottom: 10px;

        &.the {
            width: 100% !important;
        }

        &.new-nexus {
            width: 100% !important;
            left: auto;
            top: auto;
        }

        &.of {
            width: 100% !important;
            left: auto;
            top: auto;
        }

        &.global {
            width: 100% !important;
            left: auto;
            top: auto;
        }

        &.risk {
            width: 100% !important;
            text-align: left;
            left: auto;
            top: auto;
        }
    }
`;

const TitleWord = styled(motion.h1)`
    position: relative;
    font-family: freight-big-pro, Georgia, serif;
    color: #0f0707;
    margin: 0;
    letter-spacing: -1.54px;
    line-height: 0.9;
    font-size: 154px;
    padding: 0;
    width: 100%;

    &.the {
        font-weight: 300;
        font-style: italic;
    }

    &.new-nexus {
        font-weight: 600;
        font-style: normal;
    }

    &.of {
        font-weight: 300;
        font-style: italic;
    }

    &.global {
        font-weight: 600;
        font-style: normal;
    }

    &.risk {
        font-weight: 600;
        font-style: normal;
        text-align: right;
    }

    @media (max-width: 1024px) {
        font-size: 100px;
        letter-spacing: -1px;
    }

    @media (max-width: 768px) {
        font-size: 60px;
        letter-spacing: -0.6px;
    }
`;

const SVGContainer = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100svw;
    height: 100svh;
    z-index: 1;
    pointer-events: none;
    display: flex;
    align-items: flex-end;
`;

const AnimationSVGWrapper = styled(SVGWrapper)`
    width: 50%;
    height: auto;
    pointer-events: none;
`;

const TopRightSVGContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    width: 50svw;
    height: 100svh;
    z-index: 1;
    pointer-events: none;
    display: flex;
    align-items: flex-start;
`;

const TopRightAnimationSVGWrapper = styled(SVGWrapper)`
    width: 100%;
    height: auto;
    pointer-events: none;
`;

const TextOverlay = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
`;

const ImageWrapper = styled(motion.div)`
    position: absolute;
    border-radius: 0;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
    z-index: 3;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &.image-1 {
        top: 35px;
        right: 670px;
        width: 121px;
        height: 182px;
    }

    &.image-2 {
        top: 219px;
        right: 184px;
        width: 121px;
        height: 182px;
    }

    &.image-3 {
        bottom: 180px;
        left: 40px;
        width: 121px;
        height: 182px;
    }

    &.image-4 {
        bottom: 90px;
        left: 400px;
        width: 121px;
        height: 182px;
    }

    @media (max-width: 1024px) {
        &.image-1 {
            width: 100px;
            height: 150px;
            right: 550px;
            top: 50px;
        }

        &.image-2 {
            width: 100px;
            height: 150px;
            right: 150px;
            top: 200px;
        }

        &.image-3 {
            width: 100px;
            height: 150px;
            left: 30px;
            bottom: 60px;
        }

        &.image-4 {
            width: 100px;
            height: 150px;
            left: 200px;
            top: 40px;
        }
    }

    @media (max-width: 768px) {
        display: none;
    }
`;

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.25,
            delayChildren: 0.2,
        },
    },
};

const titleWordVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const subtitleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

export default function IntroSection() {
    return (
        <Container
            as={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <SVGContainer>
                <AnimationSVGWrapper
                    xmlns="http://www.w3.org/2000/svg"
                    width="644"
                    height="407"
                    viewBox="0 0 644 407"
                    fill="none"
                    preserveAspectRatio="none"
                    animationDuration={3}
                >
                    <path
                        d="M642.552 499.727C642.552 499.727 642.321 411.659 642.321 370.527C642.321 339.063 649.947 220.684 614.078 170.321C553.179 84.8135 419.907 72.1747 411.338 128.457C406.705 158.886 491.839 213.184 411.338 261.225C370.834 285.397 319.75 273.055 280.898 234.832C200.582 155.816 341.798 62.7294 293.255 8.0679C259.583 -29.8481 189.108 84.8115 146.276 128.457C116.187 159.117 114.45 169.073 79.2249 190.343C55.5515 204.638 27.4986 210.65 0 208.642"
                        stroke="black"
                        strokeWidth="1"
                    />
                </AnimationSVGWrapper>
            </SVGContainer>
            <TopRightSVGContainer>
                <TopRightAnimationSVGWrapper
                    xmlns="http://www.w3.org/2000/svg"
                    width="682"
                    height="308"
                    viewBox="0 0 682 308"
                    fill="none"
                    preserveAspectRatio="none"
                    animationDuration={3}
                >
                    <path
                        d="M26.1383 -38.5C26.1383 -38.5 -31.5479 101.979 26.1383 143.5C67.6596 173.386 114.124 176.963 161.639 158C209.153 139.037 218.721 95.7096 250.138 57.5C287.139 12.5 350.616 22.5099 395.138 57.5C451.789 102.022 343.215 192.046 395.138 242C445.092 290.058 539.003 302.611 572.638 242C591.303 208.365 553.009 176.581 572.638 143.5C605.719 87.749 694.859 95.6886 738.638 143.5C778.725 187.279 691.226 259.784 738.638 295.5C774.354 322.404 853.138 295.5 853.138 295.5"
                        stroke="black"
                        strokeWidth="1"
                    />
                </TopRightAnimationSVGWrapper>
            </TopRightSVGContainer>
            <TextOverlay>
                <ContentWrapper>
                    <TitleContainer
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.15,
                                    delayChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <TitleWordWrapper className="the">
                            <TitleWord
                                className="the"
                                variants={titleWordVariants}
                            >
                                THE
                            </TitleWord>
                        </TitleWordWrapper>

                        <TitleWordWrapper className="new-nexus">
                            <TitleWord
                                className="new-nexus"
                                variants={titleWordVariants}
                            >
                                NEW NEXUS
                            </TitleWord>
                        </TitleWordWrapper>

                        <TitleWordWrapper className="of">
                            <TitleWord
                                className="of"
                                variants={titleWordVariants}
                            >
                                OF
                            </TitleWord>
                        </TitleWordWrapper>

                        <TitleWordWrapper className="global">
                            <TitleWord
                                className="global"
                                variants={titleWordVariants}
                            >
                                GLOBAL
                            </TitleWord>
                        </TitleWordWrapper>

                        <TitleWordWrapper className="risk">
                            <TitleWord
                                className="risk"
                                variants={titleWordVariants}
                            >
                                RISK
                            </TitleWord>
                        </TitleWordWrapper>
                    </TitleContainer>
                    <Subtitle variants={subtitleVariants}>
                        The biggest threats to global stability are no longer
                        emerging, they're converging – here's what the future
                        risk landscape reveals
                    </Subtitle>
                    {/* Images - positioned absolutely over content */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.6,
                                    delayChildren: 0.2,
                                },
                            },
                        }}
                    >
                        <ImageWrapper
                            className="image-1"
                            variants={imageVariants}
                        >
                            <img
                                src={getAssetPath(
                                    "/images/intro/33826e4e78dae38a1d28a7819c4065f5bb46fb42.jpg"
                                )}
                                alt="Climate activism"
                            />
                        </ImageWrapper>
                        <ImageWrapper
                            className="image-2"
                            variants={imageVariants}
                        >
                            <img
                                src={getAssetPath(
                                    "/images/intro/e59b14d8dde0f0f5dd99111d4463af7435d86470.jpg"
                                )}
                                alt="Infrastructure landscape"
                            />
                        </ImageWrapper>
                        <ImageWrapper
                            className="image-3"
                            variants={imageVariants}
                        >
                            <img
                                src={getAssetPath(
                                    "/images/intro/5dbe58bd6bd15101ac8c2ceca6dc43380c7b1b17.jpg"
                                )}
                                alt="Supporting image"
                            />
                        </ImageWrapper>
                        <ImageWrapper
                            className="image-4"
                            variants={imageVariants}
                        >
                            <img
                                src={getAssetPath(
                                    "/images/intro/e739ec907ac7bb647895a44f468ff46cc5d464a9.jpg"
                                )}
                                alt="Supporting image"
                            />
                        </ImageWrapper>
                    </motion.div>
                </ContentWrapper>
            </TextOverlay>
        </Container>
    );
}
