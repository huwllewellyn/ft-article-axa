import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Quote from "./shared/Quote";
import LottieScrolljack from "./LottieScrolljack";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #f2f0ea;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
`;

const ContentWrapper = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
`;

const Title = styled(motion.h2)`
    font-size: 19px;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    margin: 0 0 60px 0;
    letter-spacing: 0;
    text-align: center;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
`;

const Paragraph = styled(motion.p)`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin: 0 0 32px 0;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    text-align: left;

    &:last-child {
        margin-bottom: 0;
    }

    a {
        color: #000000;
        text-decoration: underline;
        transition: opacity 0.2s ease;

        &:hover {
            opacity: 0.7;
        }
    }
`;

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
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

export default function RisksSection() {
    return (
        <>
            <Container
                as={motion.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <ContentWrapper>
                    <Title variants={itemVariants}>
                        Risk is all around us.
                    </Title>

                    <Paragraph variants={itemVariants}>
                        From climate change and geopolitical instability to
                        cyber threat and the rise of artificial intelligence,
                        the 21st century has brought new themes and threats that
                        diverse stakeholders need to understand and plan for.
                    </Paragraph>

                    <Paragraph variants={itemVariants}>
                        But what about the interplay between these new risks:
                        how do they relate to and influence one another, and
                        what is the appropriate response in terms of mitigating
                        today’s risk landscape while building long-term
                        resilience?
                    </Paragraph>

                    <Paragraph variants={itemVariants}>
                        Ben Cattaneo, founder of The Decision-Making Studio, a
                        consultancy that helps organisations make choices in an
                        increasingly uncertain world, argues that{" "}
                        <a href="https://www.weforum.org/publications/global-risks-report-2025/in-full/global-risks-2025-a-world-of-growing-divisions-c943fe3ba0/">
                            while the number of risks and their intensity have
                            grown in recent years
                        </a>
                        , organisations are struggling with their converging
                        nature.
                        <br />
                        <br />
                        “We’ve entered an era of overlapping risks where
                        everything is interconnected and hard to isolate,” he
                        says.
                    </Paragraph>

                    <Quote
                        text={
                            <>
                                “It’s difficult to talk about geopolitics
                                without also talking about AI, climate change or
                                societal polarisation — and no organisation has
                                a single unit that covers all of these together.
                                <br />
                                <br />
                                That’s why the emphasis needs to move away from
                                analysing risks in isolation, and towards
                                examining them in an integrated way at the
                                moments when key decisions are made”
                            </>
                        }
                        attribution="Ben Cattaneo, Founder, The Decision-Making Studio"
                        variants={itemVariants}
                    />

                    <Paragraph variants={itemVariants}>
                        All of that has profound implications for the role of
                        insurance in today’s rapidly changing world. From
                        helping organisations to transfer risk off their balance
                        sheets to providing prevention services and sharing
                        data-driven insights into anticipating and mitigating
                        risk, insurers can move <b>from payer to partner</b> as
                        they support clients along a more challenging journey.
                    </Paragraph>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP01.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP01.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP01.json",
                }}
                backgroundColor="#F2F0EA"
                loop={true}
            />
            <Container>
                <ContentWrapper>
                    <Quote
                        text={`"Insurers and reinsurers are in some ways the voice and the guide. Their expertise, especially when it comes to very large events such as hurricanes and floods, is what industry outside insurance relies on"`}
                        attribution="Daniel Ralph, Professor of Operations Research, Cambridge Judge Business School, Academic Director, Cambridge Centre for Risk Studies"
                        variants={itemVariants}
                    />
                </ContentWrapper>
            </Container>
        </>
    );
}
