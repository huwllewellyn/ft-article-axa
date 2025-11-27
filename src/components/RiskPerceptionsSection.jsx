import styled from "styled-components";
import { motion } from "framer-motion";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";
import SectionTitleGroup from "./shared/SectionTitleGroup";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #ed5027;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

const ContentWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const Description = styled(motion.p)`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 20px;
    letter-spacing: 0;

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

export default function RiskPerceptionsSection() {
    return (
        <Container>
            <ContentWrapper>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <SectionTitleGroup
                        chapter="Chapter three"
                        title="Risk perceptions around the world"
                    />

                    <ResponsiveLottieAnimation
                        animations={{
                            mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP05.json",
                            tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP05.json",
                            desktop:
                                "/lottie/desktop/AXA_Scrolly_Desktop_DP05.json",
                        }}
                        heights={{
                            mobile: "300px",
                            tablet: "400px",
                            desktop: "600px",
                        }}
                        backgroundColor="#ED5027"
                        loop={true}
                        autoplay={true}
                    />

                    <Description variants={itemVariants}>
                        The visualization above demonstrates the common ground
                        that exists across different perspectives and
                        populations. Despite the challenges posed by the nexus
                        of risks, there are shared values and concerns that can
                        serve as a foundation for collaborative action.
                    </Description>

                    <Description variants={itemVariants}>
                        Organizations looking to navigate the polycrisis era
                        must recognize these uniting factors and build
                        strategies that bring stakeholders together around
                        common goals. Insurance and reinsurance partners are
                        uniquely positioned to facilitate this dialogue and
                        provide the risk intelligence needed to drive resilient,
                        inclusive solutions.
                    </Description>
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
