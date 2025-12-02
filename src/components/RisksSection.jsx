import { motion } from "framer-motion";
import Quote from "./shared/Quote";
import LottieScrolljack from "./LottieScrolljack";
import styled from "styled-components";
import {
    BackgroundContainer,
    Container,
    ContentWrapper,
    SVGWrapper,
    FullWidthSVGWrapper,
    BottomLeftCircle,
    HalfWidthRightSVGContainer,
    Circle,
    AboveTopLeftCircle,
    ParagraphFourCircle,
    Paragraph,
    ParagraphFourText,
    ParagraphFive,
    LeftToBottomQuoteWrapper,
    QuoteSVGWrapper,
    QuoteContent,
    ParagraphSixWrapper,
    ParagraphSixCircle,
    ParagraphSix,
    FinalLeftToBottomQuoteWrapper,
    FinalQuoteSVGWrapper,
    FinalQuoteContent,
    BottomCenterCircle,
    HalfWidthLeftParagraph,
    HalfWidthLeftSVGContainer,
    CIRCLE_SIZE,
    HalfWidthRightParagraph,
    TopLeftCircle,
    TopRightCircle,
} from "./shared/SectionLayout";

const ParagraphWithCircle = styled.div`
    display: flex;
    align-items: center;
    margin: 0;
`;

const ParagraphOne = styled.div`
    // Removed this styling to center the line
`;

export default function RisksSection({ backgroundColor = "#f2f0ea" }) {
    return (
        <BackgroundContainer backgroundColor={backgroundColor}>
            <Container
                as={motion.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <ContentWrapper>
                    <ParagraphOne>
                        <HalfWidthLeftSVGContainer>
                            <SVGWrapper
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 523 290"
                                fill="none"
                                preserveAspectRatio="none"
                                reverse="true"
                            >
                                <path
                                    d="M0.5 289.5V104.5V1H69.3292C84.3077 1 98.9236 5.60756 111.194 14.1976L205.19 80.0001C205.19 80.0001 521.764 295.5 521.764 54.5V0"
                                    stroke="black"
                                    strokeWidth="1"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </SVGWrapper>
                        </HalfWidthLeftSVGContainer>

                        <ParagraphWithCircle>
                            <Circle />
                            <Paragraph>Risk is all around us.</Paragraph>
                        </ParagraphWithCircle>

                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            // 1. Widen the viewBox width from 1 to 20 (or 100)
                            // This creates a stable coordinate system
                            viewBox="0 0 20 388"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                // 2. Center the line in the new width (x=10)
                                // This ensures the stroke is never clipped
                                d="M0 0 L0 388"
                                stroke="black"
                                strokeWidth="2"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                        <ParagraphWithCircle>
                            <AboveTopLeftCircle />
                        </ParagraphWithCircle>
                    </ParagraphOne>

                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <Paragraph>
                            From climate change and geopolitical instability to
                            cyber threat and the rise of artificial
                            intelligence, the 21st century has brought new
                            themes and threats that diverse stakeholders need to
                            understand and plan for.
                        </Paragraph>
                    </HalfWidthLeftParagraph>
                    <FullWidthSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1038 467"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                    >
                        <path
                            d="M457.142 0.599609H936.6C991.828 0.599609 1036.6 45.3711 1036.6 100.6V139.286C1036.6 194.514 991.828 239.286 936.6 239.286H100.6C45.3711 239.286 0.599609 284.057 0.599609 339.286V365.6C0.599609 420.828 45.3711 465.6 100.6 465.6H392.442"
                            stroke="black"
                            strokeWidth="1.2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </FullWidthSVGWrapper>

                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <TopLeftCircle style={{ left: "-20px" }} />
                        <Paragraph>
                            But what about the interplay between these new
                            risks: how do they relate to and influence one
                            another, and what is the appropriate response in
                            terms of mitigating today's risk landscape while
                            building long-term resilience?
                        </Paragraph>
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="200px"
                        >
                            <path
                                d="M392.5 0.5C442.068 0.5 483 40.6824 483 90.25C483 139.818 442.818 180 393.25 180H0"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                    </HalfWidthRightSVGContainer>
                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <Paragraph>
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
                        </Paragraph>
                        <TopRightCircle />
                    </HalfWidthLeftParagraph>

                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 388"
                        fill="none"
                        preserveAspectRatio="none"
                    >
                        <path
                            d="M0 0 L0 388"
                            stroke="black"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </SVGWrapper>
                    <LeftToBottomQuoteWrapper>
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
                                        decisions are made."
                                    </>
                                }
                                attribution="Ben Cattaneo, Founder, The Decision-Making Studio"
                            />
                        </QuoteContent>
                    </LeftToBottomQuoteWrapper>

                    <ParagraphSixWrapper>
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
                    <br />
                    <br />
                </ContentWrapper>
            </Container>
            <Container>
                <ContentWrapper>
                    <FinalLeftToBottomQuoteWrapper>
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
                            />
                        </FinalQuoteContent>
                    </FinalLeftToBottomQuoteWrapper>
                    <BottomLeftCircle />
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP01.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP01.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP01.json",
                }}
                trackHeight={"2000px"}
                loop={true}
            />
        </BackgroundContainer>
    );
}
