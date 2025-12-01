import styled from "styled-components";
import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import LottieScrolljack from "./LottieScrolljack";
import {
    BackgroundContainer,
    Container,
    TextBlock,
    ContentWrapper,
    Paragraph,
    polycrisisContainerVariants,
    polycrisisItemVariants,
    AboveTopLeftCircle,
    BottomLeftCircle,
    HalfWidthRightSVGContainer,
    SVGWrapper,
    HalfWidthLeftSVGContainer,
} from "./shared/SectionLayout";

const ParagraphWrapper = styled.div`
    width: 493px;
`;

export default function PolycrisisSection({ backgroundColor = "#b6c1d3" }) {
    return (
        <BackgroundContainer backgroundColor={backgroundColor}>
            <Container
                as={motion.section}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                <ContentWrapper>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={polycrisisContainerVariants}
                    >
                        <SectionTitleGroup
                            chapter="Chapter one"
                            title="The age of polycrisis"
                        />

                        <HeaderAnimationWrapper />

                        <HalfWidthLeftSVGContainer>
                            <SVGWrapper
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 521 469"
                                fill="none"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0.5 469L0.5 324.536L447.5 324.536C487.817 324.536 520.5 291.853 520.5 251.536L520.5 7.78766e-06"
                                    stroke="black"
                                    strokeWidth="1"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </SVGWrapper>
                        </HalfWidthLeftSVGContainer>

                        <ParagraphWrapper>
                            <Paragraph variants={polycrisisItemVariants}>
                                <AboveTopLeftCircle />
                                One dimension of this more complex threat
                                landscape is the emergence of new threats that
                                were barely on the horizon just a few years ago.
                                <br />
                                <br />
                                GenAI has already had a significant impact, with{" "}
                                <a href="https://www.hostinger.com/in/tutorials/how-many-companies-use-ai">
                                    78 per cent of companies worldwide now using
                                    AI
                                </a>{" "}
                                in some part of their operations, according to
                                Hostinger, the web-hosting service. That is a{" "}
                                <b>55 per cent</b> increase over the previous
                                year.
                            </Paragraph>
                        </ParagraphWrapper>

                        <HalfWidthRightSVGContainer>
                            <SVGWrapper
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
                            </SVGWrapper>
                            <BottomLeftCircle />
                        </HalfWidthRightSVGContainer>
                    </motion.div>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP02.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP02.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP02.json",
                }}
                backgroundColor="#B6C1D3"
                loop={false}
            />
            <Container maxWidth="1440px" padding="80px 40px">
                <ContentWrapper>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={polycrisisContainerVariants}
                    >
                        <Paragraph variants={polycrisisItemVariants}>
                            Yet, as the recently released{" "}
                            <a href="https://axaxl.com/fast-fast-forward/articles/axa-future-risks-report-2025">
                                <strong>AXA Future Risks Report, 2025</strong>
                            </a>{" "}
                            highlights, AI and big data have now consolidated
                            their place in the top 10 risks perceived by both
                            experts and the general public.
                            <br />
                            <br />
                            That is a stark contrast with just five years ago,
                            when neither experts nor the general public ranked
                            them among their top 10 risks.
                        </Paragraph>

                        <Paragraph variants={polycrisisItemVariants}>
                            Beyond specific risks, both experts and members of
                            the public – 95 per cent and 93 per cent,
                            respectively – believe that{" "}
                            <b>risks in general are increasing</b>. More
                            importantly, the principal risks today are
                            intertwined as never before, says Scott Gunter,
                            Chief Executive Officer at AXA XL, the property and
                            casualty (P&C) and specialty risk division of AXA.
                        </Paragraph>

                        <Quote
                            text={`"The polycrisis adds uncertainty into the mix, and that is a challenge for insurance and reinsurance companies to deal with," he says. "When it comes to risk, we've got data, we've got information and we've got answers. Uncertainty relates to perception, and we have to go even deeper to understand what's going on"`}
                            attribution="Scott Gunter, Chief Executive Officer, AXA XL"
                            variants={polycrisisItemVariants}
                        />
                    </motion.div>
                </ContentWrapper>
            </Container>
        </BackgroundContainer>
    );
}
