import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #fde432;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

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

const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    margin: 80px 0;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 40px;
    }
`;

const StatItem = styled(motion.div)`
    text-align: center;
`;

const StatNumber = styled.p`
    font-family: "freight-big-pro", Georgia, serif;
    font-size: 72px;
    font-weight: 400;
    line-height: 1;
    color: #000000;
    margin: 0 0 20px 0;
    letter-spacing: 0;
`;

const StatLabel = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.3;
    color: #000000;
    margin: 0;
    letter-spacing: 0;
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

export default function NexusInActionSection() {
    return (
        <Container>
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

                    <TextBlock variants={itemVariants}>
                        The interconnectedness of risk is on full display when
                        it comes to climate change, and its effects on other
                        aspects of social, political and economic life.
                        <br />
                        <br />
                        For example, climate change is leading people to
                        question whether authorities can provide adequate
                        answers: according to this year's AXA Future Risks
                        Report, only 12 per cent of experts who chose climate
                        change among their top risks believe that authorities
                        are well prepared to handle it, down two percentage
                        points from last year. That is the lowest figure since
                        the question first appeared in the annual survey.
                    </TextBlock>

                    <ResponsiveLottieAnimation
                        animations={{
                            mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP03.json",
                            tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP03.json",
                            desktop:
                                "/lottie/desktop/AXA_Scrolly_Desktop_DP03.json",
                        }}
                        heights={{
                            mobile: "300px",
                            tablet: "400px",
                            desktop: "600px",
                        }}
                        backgroundColor="#FDE432"
                        loop={false}
                        autoplay={true}
                    />

                    <Quote
                        text={`"It’s striking how this interconnectedness amplifies the impact of each crisis, making the overall risk environment much more unpredictable and intense"`}
                        attribution="Libby Benet, Global Chief Underwriting Officer, AXA XL"
                        variants={itemVariants}
                    />

                    <TextBlock variants={itemVariants}>
                        “The report suggests that we're not just dealing with
                        isolated issues anymore. Instead, we're facing a web of
                        crises that feed into each other, which complicates how
                        we manage and respond to risks,” says Benet.
                    </TextBlock>

                    <TextBlock variants={itemVariants}>
                        Ben Cattaneo of The Decision-Making Studio points out
                        that an additional complexity of today’s risk
                        environment is its increasing asymmetry. “It means
                        little things can have a big impact, and that might be
                        cyber-related or a localised incident that affects a
                        global supply chain,” he says. “But it means that you no
                        longer just throw money at something to solve it.”
                    </TextBlock>
                </motion.div>
            </ContentWrapper>
            <ResponsiveLottieAnimation
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP04.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP04.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP04.json",
                }}
                heights={{
                    mobile: "300px",
                    tablet: "400px",
                    desktop: "600px",
                }}
                backgroundColor="#FDE432"
                loop={true}
                autoplay={true}
            />
        </Container>
    );
}
