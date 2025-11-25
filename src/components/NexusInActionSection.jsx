import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #FDE432;
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

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin: 80px 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const StatItem = styled(motion.div)`
    text-align: center;
`;

const StatNumber = styled.p`
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 72px;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    margin: 0 0 20px 0;
    letter-spacing: 0;
`;

const StatLabel = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.3;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
`;

const Quote = styled(motion.div)`
    background: rgba(255, 255, 255, 0);
    padding: 60px 0;
    margin: 80px 0;
    border-left: 4px solid #000000;
    border-right: none;
    padding-left: 40px;
`;

const QuoteText = styled.p`
    font-family: "EB Garamond", Georgia, serif;
    font-size: 40px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.2;
    color: #000000;
    margin: 0;
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

export default function NexusInActionSection() {
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
                        <Chapter>Chapter two</Chapter>
                        <Title>The Nexus in Action</Title>
                    </TitleGroup>

                    <TextBlock variants={itemVariants}>
                        The interconnectedness of risk is on full display when
                        it comes to climate change, and its effects on other
                        aspects of social, political and economic life. For
                        example, climate change is leading people to question
                        whether authorities can provide adequate answers:
                        according to this year's{" "}
                        <a href="https://axaxl.com/fast-fast-forward/articles/axa-future-risks-report-2025">
                            AXA Future Risks Report
                        </a>
                        , only 12 per cent of experts who chose climate change
                        among their top risks believe that authorities are well
                        prepared to handle it, down two percentage points from
                        last year. That is the lowest figure since the question
                        first appeared in the annual survey.
                    </TextBlock>

                    <Quote variants={itemVariants}>
                        <QuoteText>
                            Climate change is a nexus issue, and it cannot be
                            solved in silos. It requires cooperation and
                            collaboration across industries, nations and
                            stakeholders
                        </QuoteText>
                    </Quote>

                    <TextBlock variants={itemVariants}>
                        It is not just climate change that is interconnected
                        with other risks. The polycrisis is complex, with
                        multiple risks interacting in unexpected ways. This
                        creates a challenge for risk managers and insurers, who
                        must understand not just individual risks, but how they
                        interact with one another.
                    </TextBlock>

                    <TextBlock variants={itemVariants}>
                        Organizations are increasingly recognizing the need for
                        integrated risk management approaches that account for
                        these interconnections. Insurance and reinsurance
                        partners play a critical role in helping businesses
                        identify, assess, and mitigate these complex,
                        interconnected risks through data-driven insights and
                        prevention services.
                    </TextBlock>
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
