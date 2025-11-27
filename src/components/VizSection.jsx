import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";
import { media } from "../utils/breakpoints";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 60px 40px;
    background: #ffffff;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    color: #000000;
    margin-bottom: 40px;
    letter-spacing: 0;
    font-family: "adobe-caslon-pro", "EB Garamond", Georgia, serif;
`;

const VizContainer = styled(motion.div)`
    width: 100%;
    height: 600px;
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    position: relative;

    ${media.tablet`
        height: 400px;
    `}

    ${media.mobile`
        height: 300px;
    `}
`;

const Description = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 20px;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;

    &:last-child {
        margin-bottom: 0;
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function VizSection() {
    return (
        <Container>
            <ContentWrapper>
                <Title>Converging Risks Landscape</Title>

                <VizContainer
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <ResponsiveLottieAnimation
                        animations={{
                            mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP01.json",
                            tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP01.json",
                            desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP01.json",
                        }}
                        heights={{
                            mobile: "300px",
                            tablet: "400px",
                            desktop: "600px",
                        }}
                        loop={true}
                        autoplay={true}
                    />
                </VizContainer>

                <Description variants={itemVariants}>
                    The complexity of modern risk management requires
                    understanding how different risks interconnect and influence
                    one another. Organizations must develop integrated
                    approaches to identify, assess, and mitigate these
                    converging threats.
                </Description>

                <Description variants={itemVariants}>
                    Insurance partners play a critical role in this landscape,
                    providing not just financial protection but also data-driven
                    insights and prevention services that help organizations
                    build resilience.
                </Description>
            </ContentWrapper>
        </Container>
    );
}
