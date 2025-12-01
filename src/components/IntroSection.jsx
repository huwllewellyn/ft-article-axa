import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { getAssetPath } from "../utils/assetPath";

const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 0;
    background: #f2f0ea;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0;
`;

const ContentWrapper = styled(motion.div)`
    width: 100%;
    max-width: 1441px;
    height: 802px;
    position: relative;
    z-index: 2;
    padding: 0 40px;
    padding: 0;
`;

const Subtitle = styled(motion.p)`
    position: absolute;
    bottom: 0;
    left: 50%;
    font-size: 19px;
    font-weight: 500;
    line-height: 1.2;
    color: #0f0707;
    margin: 0;
    max-width: 433px;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    z-index: 4;
    text-align: center;

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

const TitleWord = styled(motion.h1)`
    position: absolute;
    font-family: freight-big-pro, Georgia, serif;
    color: #0f0707;
    margin: 0;
    letter-spacing: -1.54px;
    line-height: 0.9;
    font-size: 154px;
    padding: 0;
    width: auto;

    &.the {
        font-weight: 300;
        font-style: italic;
        left: 0;
        top: 0;
        width: 283px;
    }

    &.new-nexus {
        font-weight: 600;
        font-style: normal;
        left: 10px;
        top: 121px;
        width: 846px;
    }

    &.of {
        font-weight: 300;
        font-style: italic;
        left: 678px;
        top: 245px;
        width: 186px;
    }

    &.global {
        font-weight: 600;
        font-style: normal;
        left: 678px;
        top: 367px;
        width: 578px;
    }

    &.risk {
        font-weight: 600;
        font-style: normal;
        text-align: right;
        left: 924px;
        top: 490px;
        width: 335px;
    }

    @media (max-width: 1024px) {
        font-size: 100px;
        letter-spacing: -1px;

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
        font-size: 60px;
        letter-spacing: -0.6px;
        position: static;
        margin-bottom: 10px;

        &.the {
            width: 100%;
        }

        &.new-nexus {
            width: 100%;
            left: auto;
            top: auto;
        }

        &.of {
            width: 100%;
            left: auto;
            top: auto;
        }

        &.global {
            width: 100%;
            left: auto;
            top: auto;
        }

        &.risk {
            width: 100%;
            text-align: left;
            left: auto;
            top: auto;
        }
    }
`;

const DecorativeVector = styled(motion.svg)`
    position: absolute;
    z-index: 1;
    pointer-events: none;
    overflow: visible;

    &.vector-1 {
        top: -59px;
        left: 588px;
        width: 852px;
        height: 370px;
    }

    &.vector-2 {
        top: -81px;
        left: -132px;
        width: 852px;
        height: 915px;
    }
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
        top: 219px;
        right: 184px;
        width: 121px;
        height: 182px;
    }

    &.image-2 {
        top: 35px;
        right: 670px;
        width: 121px;
        height: 182px;
    }

    &.image-3 {
        bottom: 80px;
        left: 40px;
        width: 121px;
        height: 182px;
    }

    &.image-4 {
        top: 50px;
        left: 280px;
        width: 121px;
        height: 182px;
    }

    @media (max-width: 1024px) {
        &.image-1 {
            width: 100px;
            height: 150px;
            right: 150px;
            top: 200px;
        }

        &.image-2 {
            width: 100px;
            height: 150px;
            right: 550px;
            top: 50px;
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

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const subtitleVariants = {
    hidden: { opacity: 0, y: 30, x: "20vh" },
    visible: {
        opacity: 1,
        y: 0,
        x: "20vh",
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
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
            <ContentWrapper>
                {/* Decorative vector elements - positioned absolutely */}
                <DecorativeVector
                    className="vector-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    viewBox="0 0 852 370"
                >
                    <path
                        d="M 852 0 Q 600 100, 400 250 Q 200 350, 0 370"
                        stroke="#000000"
                        strokeWidth="1"
                        fill="none"
                    />
                </DecorativeVector>

                <DecorativeVector
                    className="vector-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewBox="0 0 852 915"
                >
                    <path
                        d="M 0 0 Q 200 200, 400 400 Q 600 600, 852 915"
                        stroke="#000000"
                        strokeWidth="1"
                        fill="none"
                    />
                </DecorativeVector>

                <TitleContainer
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.08,
                                delayChildren: 0.2,
                            },
                        },
                    }}
                >
                    <TitleWord className="the" variants={itemVariants}>
                        THE
                    </TitleWord>

                    <TitleWord className="new-nexus" variants={itemVariants}>
                        NEW NEXUS
                    </TitleWord>

                    <TitleWord className="of" variants={itemVariants}>
                        OF
                    </TitleWord>

                    <TitleWord className="global" variants={itemVariants}>
                        GLOBAL
                    </TitleWord>

                    <TitleWord className="risk" variants={itemVariants}>
                        RISK
                    </TitleWord>
                </TitleContainer>

                <Subtitle variants={subtitleVariants}>
                    The biggest threats to global stability are no longer
                    emerging, they're converging – here's what the future risk
                    landscape reveals
                </Subtitle>

                {/* Images - positioned absolutely over content */}
                <ImageWrapper
                    className="image-1"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <img
                        src={getAssetPath(
                            "/intro/33826e4e78dae38a1d28a7819c4065f5bb46fb42.jpg"
                        )}
                        alt="Climate activism"
                    />
                </ImageWrapper>

                <ImageWrapper
                    className="image-2"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <img
                        src={getAssetPath(
                            "/intro/e59b14d8dde0f0f5dd99111d4463af7435d86470.jpg"
                        )}
                        alt="Infrastructure landscape"
                    />
                </ImageWrapper>

                <ImageWrapper
                    className="image-3"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <img
                        src={getAssetPath(
                            "/intro/5dbe58bd6bd15101ac8c2ceca6dc43380c7b1b17.jpg"
                        )}
                        alt="Supporting image"
                    />
                </ImageWrapper>

                <ImageWrapper
                    className="image-4"
                    variants={imageVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <img
                        src={getAssetPath(
                            "/intro/e739ec907ac7bb647895a44f468ff46cc5d464a9.jpg"
                        )}
                        alt="Supporting image"
                    />
                </ImageWrapper>
            </ContentWrapper>
        </Container>
    );
}
