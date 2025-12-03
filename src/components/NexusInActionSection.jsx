import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import LottieScrolljack from "./LottieScrolljack";
import OverlayImage from "./shared/OverlayImage";
import {
    AboveTopLeftCircle,
    BackgroundContainer,
    Container,
    HalfWidthLeftSVGContainer,
    SVGWrapper,
    Paragraph,
    HalfWidthLeftParagraph,
    FullWidthSVGWrapper,
    BottomLeftCircle,
    ContentWrapper,
    LeftToBottomQuoteWrapper,
    QuoteSVGWrapper,
    QuoteContent,
    BottomCenterCircle,
    HalfWidthRightSVGContainer,
    HalfWidthRightParagraph,
    TopLeftCircle,
    TopRightCircle,
} from "./shared/SectionLayout";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

export default function NexusInActionSection({ backgroundColor = "#fde432" }) {
    return (
        <BackgroundContainer backgroundColor={backgroundColor}>
            <Container>
                <ContentWrapper>
                    <SectionTitleGroup
                        chapter="Chapter two"
                        title="The nexus in action - how risks collide"
                    />

                    <HeaderAnimationWrapper
                        filename="AXA_HEAD_02_HALVED"
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
                        <Paragraph>
                            <AboveTopLeftCircle />
                            The interconnectedness of risk is on full display
                            when it comes to climate change, and its effects on
                            other aspects of social, political and economic
                            life.
                            <br />
                            <br />
                            For example, climate change is leading people to
                            question whether authorities can provide adequate
                            answers: according to this year’s AXA Future Risks
                            Report, only 12 per cent of experts who chose
                            climate change among their top risks believe that
                            authorities are well prepared to handle it, down two
                            percentage points from last year. That is the lowest
                            figure since the question first appeared in the
                            annual survey.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s3/1.jpg"
                            decorative
                            desktop={{ top: "60%", left: "120%" }}
                            tablet={{ top: "60%", left: "120%" }}
                            mobile={{ display: "none" }}
                        />
                        <OverlayImage
                            src="/images/s3/2.jpg"
                            decorative
                            desktop={{ top: "150%", left: "20%" }}
                            tablet={{ top: "150%", left: "20%" }}
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
                        mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP03.json",
                        tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP03.json",
                        desktop:
                            "/lottie/desktop/AXA_Scrolly_Desktop_DP03.json",
                    }}
                    backgroundColor={backgroundColor}
                    loop={false}
                    initialFrame={0.2}
                />
                <ContentWrapper>
                    <SVGWrapper
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 388"
                        fill="none"
                        preserveAspectRatio="none"
                        mobileHeight="100px"
                    >
                        <path
                            d="M0 0 L0 388"
                            stroke="black"
                            strokeWidth="2"
                            vectorEffect="non-scaling-stroke"
                        />
                    </SVGWrapper>
                    <LeftToBottomQuoteWrapper
                        height="500px"
                        mobileHeight="450px"
                    >
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
                                text={`"It's striking how this interconnectedness amplifies the impact of each crisis, making the overall risk environment much more unpredictable and intense"`}
                                attribution="Libby Benet, Global Chief Underwriting Officer, AXA XL"
                                variants={itemVariants}
                            />
                        </QuoteContent>
                        <BottomCenterCircle left="calc(50% - 10px)" />
                    </LeftToBottomQuoteWrapper>
                    <br />
                    <br />

                    <HalfWidthRightParagraph backgroundColor={backgroundColor}>
                        <Paragraph variants={itemVariants}>
                            "The report suggests that we're not just dealing
                            with isolated issues any more. Instead, we're facing
                            a web of crises that feed into each other, which
                            complicates how we manage and respond to risks,"
                            says Benet.
                        </Paragraph>
                        <OverlayImage
                            src="/images/s3/3.jpg"
                            decorative
                            desktop={{ top: "165%", left: "50%" }}
                            tablet={{ top: "165%", left: "50%" }}
                            mobile={{ display: "none" }}
                        />
                    </HalfWidthRightParagraph>
                    <HalfWidthRightSVGContainer>
                        <SVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 484 181"
                            fill="none"
                            preserveAspectRatio="none"
                            height="200px"
                            mobileHeight="100px"
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
                            Ben Cattaneo of The Decision-Making Studio points
                            out that an additional complexity of today's risk
                            environment is its increasing asymmetry.
                            <br />
                            <br />
                            "It means little things can have a big impact, and
                            that might be cyber-related or a localised incident
                            that affects a global supply chain," he says. "But
                            it means that you no longer just throw money at
                            something to solve it."
                        </Paragraph>
                        <TopRightCircle />
                    </HalfWidthLeftParagraph>
                </ContentWrapper>
                <LottieScrolljack
                    animations={{
                        mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP04.json",
                        tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP04.json",
                        desktop:
                            "/lottie/desktop/AXA_Scrolly_Desktop_DP04.json",
                    }}
                    trackHeight="3500px"
                    backgroundColor={backgroundColor}
                    loop={true}
                />
            </Container>
        </BackgroundContainer>
    );
}
