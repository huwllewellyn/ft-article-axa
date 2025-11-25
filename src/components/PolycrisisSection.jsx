import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #B6C1D3;
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

const Quote = styled(motion.div)`
    background: rgba(255, 255, 255, 0.6);
    padding: 60px;
    margin: 60px 0;
    border-left: 4px solid #000000;
`;

const QuoteText = styled.p`
    font-family: "EB Garamond", Georgia, serif;
    font-size: 40px;
    font-weight: 400;
    font-style: italic;
    line-height: 1.2;
    color: #000000;
    margin: 0 0 32px 0;
    letter-spacing: 0;
`;

const Attribution = styled.p`
    font-size: 17px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
    text-align: center;
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

export default function PolycrisisSection() {
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
                        <Chapter>Chapter one</Chapter>
                        <Title>The age of polycrisis</Title>
                    </TitleGroup>

                    <TextBlock variants={itemVariants}>
                        One dimension of this more complex threat landscape is
                        the emergence of new threats that were barely on the
                        horizon just a few years ago. GenAI has already had a
                        significant impact, with 78 per cent of companies
                        worldwide now using AI in some part of their operations,
                        according to{" "}
                        <a href="https://www.hostinger.com/in/tutorials/how-many-companies-use-ai">
                            Hostinger
                        </a>
                        , the web-hosting service. That is a 55 per cent
                        increase over the previous year.
                    </TextBlock>

                    <TextBlock variants={itemVariants}>
                        Yet, as the recently released{" "}
                        <a href="https://axaxl.com/fast-fast-forward/articles/axa-future-risks-report-2025">
                            <strong>AXA Future Risks Report, 2025</strong>
                        </a>{" "}
                        highlights, AI and big data have now consolidated their
                        place in the top 10 risks perceived by both experts and
                        the general public. That is a stark contrast with just
                        five years ago, when neither experts nor the general
                        public ranked them among their top 10 risks.
                    </TextBlock>

                    <Quote variants={itemVariants}>
                        <QuoteText>
                            "The polycrisis adds uncertainty to the mix, and
                            that is a challenge for insurance and reinsurance
                            companies to deal with. When it comes to risk, we've
                            got data, we've got information and we've got
                            answers. Uncertainty relates to perception, and we
                            have to go even deeper to understand what's going
                            on"
                        </QuoteText>
                        <Attribution>
                            Scott Gunter, Chief Executive Officer, AXA XL
                        </Attribution>
                    </Quote>
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
