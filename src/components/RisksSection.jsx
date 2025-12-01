import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Quote from "./shared/Quote";
import LottieScrolljack from "./LottieScrolljack";

const CIRCLE_SIZE = 22.8;

const BackgroundContainer = styled.div`
    width: 100%;
    background: #f2f0ea;
    z-index: -1;
`;

const Container = styled.section`
    width: 100%;
    max-width: 1036px;
    margin: 0 auto;
    padding: 0px 40px;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

const ContentWrapper = styled(motion.div)`
    margin: 0 auto;
    position: relative;
`;

const SVGWrapper = styled(motion.svg)`
    top: 0;
    left: 0;
    width: 50%;
    height: 150px;
    pointer-events: none;
`;

const FirstSVGWrapper = styled(SVGWrapper)`
    transform: translateY(10px);
`;

const FullWidthSVGWrapper = styled(SVGWrapper)`
    width: 100%;
    height: 300px;
`;

const HalfWidthRightSVGWrapper = styled(SVGWrapper)`
    width: 50%;
    height: 200px;
    margin-left: 50%;
`;

const Circle = styled.div`
    width: ${CIRCLE_SIZE}px;
    height: ${CIRCLE_SIZE}px;
    border-radius: 50%;
    background-color: #000000;
    flex-shrink: 0;
    margin-right: 16px;
    transform: translateX(-50%);
`;

const SecondCircle = styled(Circle)`
    transform: translateX(-50%) translateY(-10px);
`;

const ParagraphFourCircle = styled(Circle)`
    margin-right: 0;
    margin-bottom: auto;
    margin-top: 0;
    transform: none;
`;

const ParagraphWithCircle = styled(motion.div)`
    display: flex;
    align-items: center;
    margin: 0;
`;

const CirclesWrapper = styled(motion.div)`
    padding-left: ${CIRCLE_SIZE / 2}px;
`;

const Paragraph = styled(motion.p)`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin: 0;
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

const ParagraphThree = styled(Paragraph)`
    width: 40%;
`;

const ParagraphFour = styled(Paragraph)`
    display: flex !important;
    align-items: center;
    width: 100%;
    padding-right: 40%;
    gap: 32px;
`;

const ParagraphFourText = styled.span`
    flex: 1;
    display: block;
`;

const ParagraphFive = styled(Paragraph)`
    width: 50%;
    display: flex;
    align-items: flex-start;
    gap: 16px;
`;

const ParagraphFiveCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

const QuoteWrapper = styled(motion.div)`
    transform: translateY(-8px);
    position: relative;
    background: transparent;
    height: 720px; //hardcode height as designs have changed... this design is fucked
`;

const QuoteSVGWrapper = styled.svg`
    width: 100%;
    height: 100%;
    display: block;
`;

const QuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    margin: 40px;
`;

const ParagraphSixWrapper = styled(motion.div)`
    max-width: 518px;
    margin: -20px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
`;

const ParagraphSixCircle = styled(Circle)`
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
`;

const ParagraphSix = styled(Paragraph)`
    text-align: left;
    max-width: 100%;
`;

const FinalQuoteWrapper = styled(motion.div)`
    position: relative;
    background: transparent;
`;

const FinalQuoteSVGWrapper = styled.svg`
    width: 100%;
    height: 100%;
    display: block;
`;

const FinalQuoteContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 50px;
`;

const FinalQuoteCircle = styled(Circle)`
    position: absolute;
    bottom: ${-CIRCLE_SIZE / 2}px;
    left: 40px;
    margin-right: 0;
    flex-shrink: 0;
    transform: none;
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

const paragraphFourVariants = {
    hidden: { opacity: 0, y: 20, x: "40%", scaleX: 1 },
    visible: {
        opacity: 1,
        y: -20,
        x: "40%",
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const paragraphFiveVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: -CIRCLE_SIZE,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function RisksSection() {
    return (
        <BackgroundContainer>
            <Container
                as={motion.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <ContentWrapper>
                    <CirclesWrapper>
                        <FirstSVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 523 290"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0.5 289.5V104.5V1H69.3292C84.3077 1 98.9236 5.60756 111.194 14.1976L205.19 80.0001C205.19 80.0001 521.764 295.5 521.764 54.5V0"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </FirstSVGWrapper>

                        <ParagraphWithCircle variants={itemVariants}>
                            <Circle />
                            <Paragraph>Risk is all around us.</Paragraph>
                        </ParagraphWithCircle>

                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1 388"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0 0L0 388"
                                stroke="black"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                        <ParagraphWithCircle variants={itemVariants}>
                            <SecondCircle />
                        </ParagraphWithCircle>
                    </CirclesWrapper>

                    <ParagraphThree variants={itemVariants}>
                        From climate change and geopolitical instability to
                        cyber threat and the rise of artificial intelligence,
                        the 21st century has brought new themes and threats that
                        diverse stakeholders need to understand and plan for.
                    </ParagraphThree>
                    <FullWidthSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1038 467"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M457.142 0.599609H936.6C991.828 0.599609 1036.6 45.3711 1036.6 100.6V139.286C1036.6 194.514 991.828 239.286 936.6 239.286H100.6C45.3711 239.286 0.599609 284.057 0.599609 339.286V365.6C0.599609 420.828 45.3711 465.6 100.6 465.6H392.442"
                            stroke="black"
                            strokeWidth="1.2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </FullWidthSVGWrapper>

                    <ParagraphFour variants={paragraphFourVariants}>
                        <ParagraphFourCircle />
                        <ParagraphFourText>
                            But what about the interplay between these new
                            risks: how do they relate to and influence one
                            another, and what is the appropriate response in
                            terms of mitigating today's risk landscape while
                            building long-term resilience?
                        </ParagraphFourText>
                    </ParagraphFour>

                    <HalfWidthRightSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 520 165"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M470.3 0.5C497.473 0.5 519.5 22.5275 519.5 49.6998V82.5C519.5 127.787 482.787 164.5 437.5 164.5H0"
                            stroke="black"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </HalfWidthRightSVGWrapper>

                    <ParagraphFive variants={paragraphFiveVariants}>
                        <span>
                            Ben Cattaneo, founder of The Decision-Making Studio,
                            a consultancy that helps organisations make choices
                            in an increasingly uncertain world, argues that{" "}
                            <a href="https://www.weforum.org/publications/global-risks-report-2025/in-full/global-risks-2025-a-world-of-growing-divisions-c943fe3ba0/">
                                while the number of risks and their intensity
                                have grown in recent years
                            </a>
                            , organisations are struggling with their converging
                            nature.
                            <br />
                            <br />
                            "We've entered an era of overlapping risks where
                            everything is interconnected and hard to isolate,"
                            he says.
                        </span>
                        <ParagraphFiveCircle />
                    </ParagraphFive>

                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1 121"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 0L0 121"
                            stroke="black"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </SVGWrapper>
                    <QuoteWrapper>
                        <QuoteSVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1037 667"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M1036.5 256.988L1036.5 100.5C1036.5 45.2711 991.73 0.499633 936.502 0.499631L-6.38027e-05 0.499604M1.00065 199.002L1.00063 413.502C1.00063 468.731 45.7722 513.502 101.001 513.502L300.5 513.502L346.002 513.502L446.894 513.502C487.35 513.502 520.091 546.403 519.894 586.859L519.502 667.003"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </QuoteSVGWrapper>
                        <QuoteContent>
                            <Quote
                                text={
                                    <>
                                        "It's difficult to talk about
                                        geopolitics without also talking about
                                        AI, climate change or societal
                                        polarisation — and no organisation has a
                                        single unit that covers all of these
                                        together.
                                        <br />
                                        <br />
                                        That's why the emphasis needs to move
                                        away from analysing risks in isolation,
                                        and towards examining them in an
                                        integrated way at the moments when key
                                        decisions are made"
                                    </>
                                }
                                attribution="Ben Cattaneo, Founder, The Decision-Making Studio"
                                variants={itemVariants}
                            />
                        </QuoteContent>
                    </QuoteWrapper>

                    <ParagraphSixWrapper variants={itemVariants}>
                        <ParagraphSixCircle />
                        <ParagraphSix>
                            All of that has profound implications for the role
                            of insurance in today's rapidly changing world. From
                            helping organisations to transfer risk off their
                            balance sheets to providing prevention services and
                            sharing data-driven insights into anticipating and
                            mitigating risk, insurers can move{" "}
                            <b>from payer to partner</b> as they support clients
                            along a more challenging journey.
                        </ParagraphSix>
                    </ParagraphSixWrapper>
                </ContentWrapper>
            </Container>
            <Container>
                <ContentWrapper>
                    <FinalQuoteWrapper>
                        <FinalQuoteSVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1038 558"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M1037.5 243.364V457C1037.5 512.228 992.729 557 937.5 557H15.4639M0.5 384.856L0.5 226.513C0.5 171.285 45.2715 126.513 100.5 126.513L521 126.945V0"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </FinalQuoteSVGWrapper>
                        <FinalQuoteContent>
                            <Quote
                                text={`"Insurers and reinsurers are in some ways the voice and the guide. Their expertise, especially when it comes to very large events such as hurricanes and floods, is what industry outside insurance relies on"`}
                                attribution="Daniel Ralph, Professor of Operations Research, Cambridge Judge Business School, Academic Director, Cambridge Centre for Risk Studies"
                                variants={itemVariants}
                            />
                        </FinalQuoteContent>
                    </FinalQuoteWrapper>
                </ContentWrapper>
                <FinalQuoteCircle />
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP01.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP01.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP01.json",
                }}
                loop={true}
            />
        </BackgroundContainer>
    );
}
