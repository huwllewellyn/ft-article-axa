import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import LottieScrolljack from "./LottieScrolljack";
import {
    AboveTopLeftCircle,
    BackgroundContainer,
    Container,
    HalfWidthLeftSVGContainer,
    SVGWrapper,
} from "./shared/SectionLayout";

const ContentWrapper = styled.div`
    max-width: 900px;
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

export default function NexusInActionSection({ backgroundColor = "#fde432" }) {
    return (
        <BackgroundContainer backgroundColor={backgroundColor}>
            <Container maxWidth="1440px" padding="80px 40px">
                <ContentWrapper>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <SectionTitleGroup
                            chapter="Chapter two"
                            title="The nexus in action - how risks collide"
                        />

                        <HeaderAnimationWrapper filename="AXA_HEAD_02_Optimised" />

                        <HalfWidthLeftSVGContainer>
                            <SVGWrapper
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 521 469"
                                fill="none"
                                preserveAspectRatio="none"
                                height="400px"
                            >
                                <path
                                    d="M0.5 469L0.5 324.536L447.5 324.536C487.817 324.536 520.5 291.853 520.5 251.536L520.5 7.78766e-06"
                                    stroke="black"
                                    strokeWidth="1"
                                    vectorEffect="non-scaling-stroke"
                                />
                            </SVGWrapper>
                        </HalfWidthLeftSVGContainer>

                        <TextBlock variants={itemVariants}>
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
                        </TextBlock>
                    </motion.div>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP03.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP03.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP03.json",
                }}
                backgroundColor={backgroundColor}
                loop={false}
            />
            <Container maxWidth="1440px" padding="80px 40px">
                <ContentWrapper>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={containerVariants}
                    >
                        <Quote
                            text={`"It's striking how this interconnectedness amplifies the impact of each crisis, making the overall risk environment much more unpredictable and intense"`}
                            attribution="Libby Benet, Global Chief Underwriting Officer, AXA XL"
                            variants={itemVariants}
                        />

                        <TextBlock variants={itemVariants}>
                            "The report suggests that we're not just dealing
                            with isolated issues any more. Instead, we're facing
                            a web of crises that feed into each other, which
                            complicates how we manage and respond to risks,"
                            says Benet.
                        </TextBlock>

                        <TextBlock variants={itemVariants}>
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
                        </TextBlock>
                    </motion.div>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP04.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP04.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP04.json",
                }}
                backgroundColor={backgroundColor}
                loop={true}
            />
        </BackgroundContainer>
    );
}
