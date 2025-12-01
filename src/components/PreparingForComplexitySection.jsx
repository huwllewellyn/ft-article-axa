import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LottieScrolljack from "./LottieScrolljack";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import { BackgroundContainer, Container } from "./shared/SectionLayout";

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

export default function PreparingForComplexitySection({ backgroundColor = "#d7d7d7" }) {
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
                            chapter="Chapter four"
                            title="Preparing for complexity – rethinking resilience"
                        />

                        <HeaderAnimationWrapper filename="AXA_HEAD_04_Optimised" />

                        <TextBlock variants={itemVariants}>
                            Against the polycrisis backdrop, bright spots are
                            emerging. One is that a large majority of
                            respondents – 86 per cent of experts and 84 per cent
                            of the public – agree that the risks that worry them
                            most could be at least partially avoided by{" "}
                            <b>strong preventive action</b>. Another is that 89
                            per cent of experts and 72 per cent of the general
                            population agree that insurers have an important
                            role in protecting against future risks. But how?
                        </TextBlock>

                        <TextBlock variants={itemVariants}>
                            This year’s AXA Future Risks Report found that the
                            advent of AI is one of the biggest perceived risks
                            today. Yet Gunter argues that it cuts both ways.
                            “There’s an acceleration in the use of AI in the
                            cyber-threat world, but AI and big data is also a
                            powerful tool for helping us to manage clients’
                            risk,” he says.
                        </TextBlock>

                        <TextBlock variants={itemVariants}>
                            Andrew Farr, AXA XL’s Global Chief Underwriting
                            Officer for Financial Lines, says that insurers are
                            integrating emerging technologies such as AI-driven
                            risk assessments, predictive analytics and
                            automation to stay a step ahead of evolving threats.
                            They are also designing insurance coverage to
                            industry-specific risks or to address other
                            fast-changing cyber risks.
                        </TextBlock>

                        <Quote
                            text={`"We're working closely with cyber security firms and offering proactive risk management services to help clients strengthen their defences before an attack happens"`}
                            attribution="Andrew Farr, AXA XL's Global Chief Underwriting Officer"
                            variants={itemVariants}
                        />

                        <TextBlock variants={itemVariants}>
                            Insurers are also promoting cyber resilience through
                            consulting, employee training, and incident response
                            planning. “Fostering better industry-wide
                            information sharing and best practices will improve
                            our collective defences and make everyone more
                            resilient against cyber threats,” says Farr.
                        </TextBlock>
                    </motion.div>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP07.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP07.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP07.json",
                }}
                backgroundColor={backgroundColor}
            />
        </BackgroundContainer>
    );
}
