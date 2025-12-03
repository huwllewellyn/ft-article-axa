import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import LottieScrolljack from "./LottieScrolljack";
import {
    BackgroundContainer,
    Container,
    ContentWrapper,
    Paragraph,
    polycrisisItemVariants,
    AboveTopLeftCircle,
    BottomLeftCircle,
    HalfWidthRightSVGContainer,
    SVGWrapper,
    HalfWidthLeftSVGContainer,
    TopLeftCircle,
    TopRightCircle,
    QuoteContent,
    QuoteSVGWrapper,
    LeftToBottomQuoteWrapper,
    HalfWidthRightParagraph,
    HalfWidthLeftParagraph,
    FullWidthSVGWrapper,
} from "./shared/SectionLayout";
import OverlayImage from "./shared/OverlayImage";

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
                    <SectionTitleGroup
                        chapter="Chapter one"
                        title="The age of polycrisis"
                    />

                    <HeaderAnimationWrapper
                        filename="AXA_HEAD_01_HALVED"
                        enableScrollSync={true}
                    />

                    <HalfWidthLeftSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 521 469"
                            fill="none"
                            preserveAspectRatio="none"
                            height="450px"
                            mobileHeight="200px"
                            reverse
                        >
                            <path
                                d="M0.5 469L0.5 324.536L447.5 324.536C487.817 324.536 520.5 291.853 520.5 251.536L520.5 7.78766e-06"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                    </HalfWidthLeftSVGContainer>

                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <Paragraph variants={polycrisisItemVariants}>
                            <AboveTopLeftCircle />
                            One dimension of this more complex threat landscape
                            is the emergence of new threats that were barely on
                            the horizon just a few years ago.
                            <br />
                            <br />
                            GenAI has already had a significant impact, with{" "}
                            <a href="https://www.hostinger.com/in/tutorials/how-many-companies-use-ai">
                                78 per cent of companies worldwide now using AI
                            </a>{" "}
                            in some part of their operations, according to
                            Hostinger, the web-hosting service. That is a{" "}
                            <b>55 per cent</b> increase over the previous year.
                        </Paragraph>
                        <OverlayImage
                            videoSrc="/images/s2/1.mp4"
                            decorative
                            desktop={{ top: "400px", left: "80%" }}
                            tablet={{ top: "400px", left: "80%" }}
                            mobile={{ top: "120%", left: "30%" }}
                        />
                    </HalfWidthLeftParagraph>
                    <FullWidthSVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 846 360"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                        mobileHeight="200px"
                    >
                        <path
                            d="M355.538 0.5H745.5C800.728 0.5 845.5 45.2715 845.5 100.5V171.011C845.5 226.24 800.728 271.011 745.5 271.011H0.5V359.5"
                            stroke="black"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </FullWidthSVGWrapper>
                    <BottomLeftCircle />
                </ContentWrapper>
                <LottieScrolljack
                    animations={{
                        mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP02.json",
                        tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP02.json",
                        desktop:
                            "/lottie/desktop/AXA_Scrolly_Desktop_DP02.json",
                    }}
                    backgroundColor="#B6C1D3"
                    loop={false}
                    initialFrame={0.1}
                />
                <ContentWrapper>
                    <HalfWidthLeftSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 521 339"
                            fill="none"
                            preserveAspectRatio="none"
                            height="400px"
                            mobileHeight="100px"
                            reverse
                        >
                            <path
                                d="M480.647 338L100.5 338C45.2716 338 0.500016 293.228 0.500021 238L0.500027 167.088C0.500032 111.86 45.2716 67.0882 100.5 67.0882L520.5 67.0882L520.5 2.07424e-05"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </SVGWrapper>
                    </HalfWidthLeftSVGContainer>
                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <TopLeftCircle />
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
                        <OverlayImage
                            videoSrc="/images/s2/2.mp4"
                            decorative
                            desktop={{ top: "190%", left: "50%" }}
                            tablet={{ top: "190%", left: "50%" }}
                            mobile={{ top: "110%", left: "52%" }}
                        />
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="300px"
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
                        <TopRightCircle />
                        <br />
                        <br />
                    </HalfWidthLeftParagraph>
                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1 121"
                        fill="none"
                        preserveAspectRatio="none"
                        mobileHeight="100px"
                    >
                        <path
                            d="M0 0L0 121"
                            stroke="black"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </SVGWrapper>
                    <LeftToBottomQuoteWrapper mobileHeight="600px">
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
                                        "The polycrisis adds uncertainty into
                                        the mix, and that is a challenge for
                                        insurance and reinsurance companies to
                                        deal with."
                                        <br />
                                        <br />
                                        "When it comes to risk, we've got data,
                                        we've got information and we've got
                                        answers. Uncertainty relates to
                                        perception, and we have to go even
                                        deeper to understand what's going on."
                                    </>
                                }
                                attribution="Scott Gunter, Chief Executive Officer, AXA XL"
                                variants={polycrisisItemVariants}
                            />
                        </QuoteContent>
                    </LeftToBottomQuoteWrapper>
                </ContentWrapper>
            </Container>
        </BackgroundContainer>
    );
}
