import { motion } from "framer-motion";
import LottieScrolljack from "./LottieScrolljack";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import {
    BackgroundContainer,
    Container,
    ContentWrapper,
    Paragraph,
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
    itemVariants,
} from "./shared/SectionLayout";
import OverlayImage from "./shared/OverlayImage";

export default function PreparingForComplexitySection({
    backgroundColor = "#d7d7d7",
}) {
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
                        chapter="Chapter four"
                        title="Preparing for complexity – rethinking resilience"
                    />

                    <HeaderAnimationWrapper
                        filename="AXA_HEAD_04_HALVED"
                        enableScrollSync={true}
                    />

                    <HalfWidthLeftSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 521 469"
                            fill="none"
                            preserveAspectRatio="none"
                            height="450px"
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
                        <AboveTopLeftCircle />
                        <Paragraph>
                            Against the polycrisis backdrop, bright spots are
                            emerging. One is that a large majority of
                            respondents – 86 per cent of experts and 84 per cent
                            of the public – agree that the risks that worry them
                            most could be at least partially avoided by{" "}
                            <b>strong preventive action</b>. Another is that 89
                            per cent of experts and 72 per cent of the general
                            population agree that insurers have an important
                            role in protecting against future risks. But how?
                        </Paragraph>
                        <OverlayImage
                            src="/images/s5/1.jpg"
                            decorative
                            desktop={{ top: "130%", left: "20%" }}
                            tablet={{ top: "130%", left: "20%" }}
                            mobile={{ top: "130%", left: "20%" }}
                        />
                    </HalfWidthLeftParagraph>
                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 839 499"
                        fill="none"
                        preserveAspectRatio="none"
                        height="400px"
                    >
                        <path
                            d="M528.13 0.5H738.5C793.728 0.5 838.5 45.2715 838.5 100.5V156.125C838.5 211.354 793.728 256.125 738.5 256.125H100.5C45.2715 256.125 0.5 300.897 0.5 356.125V398.5C0.5 453.728 45.2715 498.5 100.5 498.5H419.5"
                            stroke="black"
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                        />
                    </SVGWrapper>
                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <TopLeftCircle />
                        <Paragraph>
                            This year’s AXA Future Risks Report found that the
                            advent of AI is one of the biggest perceived risks
                            today. Yet Gunter argues that it cuts both ways.
                            “There’s an acceleration in the use of AI in the
                            cyber-threat world, but AI and big data is also a
                            powerful tool for helping us to manage clients’
                            risk,” he says.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s5/2.jpg"
                            decorative
                            desktop={{ top: "150%", left: "50%" }}
                            tablet={{ top: "150%", left: "50%" }}
                            mobile={{ top: "150%", left: "50%" }}
                        />
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
                        <Paragraph variants={itemVariants}>
                            Andrew Farr, AXA XL’s Global Chief Underwriting
                            Officer for Financial Lines, says that insurers are
                            integrating emerging technologies such as AI-driven
                            risk assessments, predictive analytics and
                            automation to stay a step ahead of evolving threats.
                            They are also designing insurance coverage to
                            industry-specific risks or to address other
                            fast-changing cyber risks.
                        </Paragraph>
                        <TopRightCircle />
                    </HalfWidthLeftParagraph>
                    <LeftToBottomQuoteWrapper height="600px">
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
                                text={`"We're working closely with cyber security firms and offering proactive risk management services to help clients strengthen their defences before an attack happens"`}
                                attribution="Andrew Farr, AXA XL's Global Chief Underwriting Officer"
                                variants={itemVariants}
                            />
                        </QuoteContent>
                    </LeftToBottomQuoteWrapper>
                    <HalfWidthRightParagraph>
                        <br />
                        <br />
                        <Paragraph variants={itemVariants}>
                            Insurers are also promoting cyber resilience through
                            consulting, employee training, and incident response
                            planning. “Fostering better industry-wide
                            information sharing and best practices will improve
                            our collective defences and make everyone more
                            resilient against cyber threats,” says Farr.
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
                        <BottomLeftCircle />
                    </HalfWidthRightSVGContainer>
                </ContentWrapper>
                <LottieScrolljack
                    animations={{
                        mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP07.json",
                        tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP07.json",
                        desktop:
                            "/lottie/desktop/AXA_Scrolly_Desktop_DP07.json",
                    }}
                    backgroundColor={backgroundColor}
                />
            </Container>
        </BackgroundContainer>
    );
}
