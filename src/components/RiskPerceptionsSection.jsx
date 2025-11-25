import styled from "styled-components";
import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #ED5027;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

const ContentWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const TitleGroup = styled(motion.div)`
    text-align: center;
    margin-bottom: 80px;
`;

const Title = styled.h2`
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 50px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin: 0 0 20px 0;
    letter-spacing: 0;

    .italic {
        font-style: italic;
    }
`;

const Subtitle = styled.p`
    font-size: 24px;
    font-weight: 400;
    line-height: 1.3;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    max-width: 600px;
    margin: 0 auto;
`;

const VizContainer = styled(motion.div)`
    width: 100%;
    height: 600px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px 0;
    position: relative;
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
                    <TitleGroup variants={itemVariants}>
                        <Title>
                            What <span className="italic">unites</span> us
                        </Title>
                        <Subtitle>
                            While the majority both of experts and the general
                            population agree that their country faces a social
                            divide, uniting factors persist to provide hope
                            amidst the "nexus of risk"
                        </Subtitle>
                    </TitleGroup>

                    <VizContainer
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <LottieAnimation
                            path="/lottie/AXA_Scrolly_Desktop_DP05.json"
                            height="600px"
                            width="100%"
                            loop={true}
                            autoplay={true}
                        />
                    </VizContainer>

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
