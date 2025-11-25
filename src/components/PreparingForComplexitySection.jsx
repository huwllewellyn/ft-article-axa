import styled from "styled-components";
import { motion } from "framer-motion";
import LottieAnimation from "./LottieAnimation";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #D7D7D7;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

const ContentWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

const TitleGroup = styled.div`
    text-align: center;
    margin-bottom: 80px;
`;

const Chapter = styled.p`
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 42px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.2;
    color: #000000;
    margin: 0 0 20px 0;
    letter-spacing: 0;
`;

const Title = styled.h2`
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 100px;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    max-width: 1000px;
    margin: 0 auto;
`;

const TextBlock = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 40px;
    letter-spacing: 0;

    a {
        color: #000000;
        text-decoration: underline;
    }

    strong {
        font-weight: 700;
    }

    &:last-of-type {
        margin-bottom: 80px;
    }
`;

const VizContainer = styled(motion.div)`
    width: 100%;
    height: 600px;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 80px 0;
    position: relative;
`;

const Quote = styled(motion.div)`
    background: rgba(255, 255, 255, 0.8);
    padding: 40px;
    margin: 40px 0;
    border-radius: 4px;
`;

const QuoteText = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.3;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    font-style: italic;

    &:before {
        content: '"';
    }

    &:after {
        content: '"';
    }
`;

const QuoteAttribution = styled.p`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.2;
    color: #000000;
    margin: 16px 0 0 0;
    letter-spacing: 0;
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

export default function PreparingForComplexitySection() {
    return (
        <Container>
            <ContentWrapper>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                >
                    <TitleGroup>
                        <Chapter>Chapter four</Chapter>
                        <Title>Preparing for complexity: rethinking resilience</Title>
                    </TitleGroup>

                    <TextBlock variants={itemVariants}>
                        Against the polycrisis backdrop, bright spots are
                        emerging. One is that a large majority of respondents –
                        86 per cent of experts and 84 per cent of the public –
                        agree that the risks that worry them most could be at
                        least partially avoided by strong preventive action.
                        Another is that 89 per cent of experts and 72 per cent
                        of the general population agree that insurers have an
                        important role in protecting against future risks. But
                        how?
                    </TextBlock>

                    <Quote variants={itemVariants}>
                        <QuoteText>
                            Insurers are integrating emerging technologies such
                            as AI-driven risk assessments, predictive analytics
                            and automation to stay a step ahead of evolving
                            threats. They are also designing insurance coverage
                            to industry-specific risks or to address other
                            fast-changing cyber risks.
                        </QuoteText>
                        <QuoteAttribution>
                            Andrew Farr, AXA XL's Global Chief Underwriting
                            Officer for Financial Lines
                        </QuoteAttribution>
                    </Quote>

                    <TextBlock variants={itemVariants}>
                        This year's AXA Future Risks Report found that the
                        advent of AI is one of the biggest perceived risks
                        today. Yet Gunter argues that it cuts both ways. "There's
                        an acceleration in the use of AI in the cyberthreat
                        world, but AI and big data is also a powerful tool for
                        helping us to manage clients' risk," he says.
                    </TextBlock>

                    <VizContainer
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <LottieAnimation
                            path="/lottie/AXA_Scrolly_Desktop_DP073.json"
                            height="600px"
                            width="100%"
                            loop={true}
                            autoplay={true}
                        />
                    </VizContainer>

                    <Quote variants={itemVariants}>
                        <QuoteText>
                            Fostering better industry-wide information sharing
                            and best practices will improve our collective
                            defences and make everyone more resilient against
                            cyber threats.
                        </QuoteText>
                        <QuoteAttribution>Andrew Farr</QuoteAttribution>
                    </Quote>

                    <TextBlock variants={itemVariants}>
                        Insurers are also promoting cyber resilience through
                        consulting, employee training, and incident response
                        planning. The combination of advanced risk analytics,
                        technology integration, and collaborative approaches is
                        reshaping how organizations prepare for and manage
                        complex, interconnected risks in the polycrisis era.
                    </TextBlock>
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
