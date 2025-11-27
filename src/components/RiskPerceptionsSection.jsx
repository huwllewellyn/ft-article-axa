import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";
import SectionTitleGroup from "./shared/SectionTitleGroup";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #ed5027;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
    position: relative;
`;

const ContentWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
`;

const Description = styled(motion.p)`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 20px;
    letter-spacing: 0;

    &:last-child {
        margin-bottom: 0;
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

export default function RiskPerceptionsSection() {
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
                        chapter="Chapter three"
                        title="Risk perceptions around the world"
                    />

                    <Description variants={itemVariants}>
                        Adding to this matrix of complexity, perceived risks
                        vary between regions. Against a backdrop of significant
                        shifts in global prosperity over the past three decades
                        driven by the increasing wealth of China and other parts
                        of Asia, the majority of both{" "}
                        <b>experts (74 per cent)</b> and the{" "}
                        <b>general population (59 per cent)</b> believe that
                        their countries face “a deep and worrying social divide”
                        or that people have “fewer and fewer common values and
                        aspirations”.
                    </Description>

                    <ResponsiveLottieAnimation
                        animations={{
                            mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP05.json",
                            tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP05.json",
                            desktop:
                                "/lottie/desktop/AXA_Scrolly_Desktop_DP05.json",
                        }}
                        heights={{
                            mobile: "300px",
                            tablet: "400px",
                            desktop: "600px",
                        }}
                        backgroundColor="#ED5027"
                        loop={true}
                        autoplay={true}
                    />

                    <Description variants={itemVariants}>
                        Fuelling this perception of a deepening social division
                        are concerns about rising economic and social inequality
                        as well as political and ideological divisions. But
                        concerns about fragmentation vary widely by region:
                        these numbers are much higher among the general
                        population in Europe and the US (65 per cent and 66 per
                        cent, respectively) than in the Asia-Pacific region,
                        where only 37 per cent of people worry about a deep
                        social divide. 
                    </Description>

                    <Description variants={itemVariants}>
                        In addition, the report reveals that there is{" "}
                        <b>less overlap</b> than in previous years{" "}
                        <b>between experts and people</b>, with just six out of
                        the 10 top risks common to both experts and the general
                        population.
                    </Description>
                    <Description variants={itemVariants}>
                        This partly reflects the rise in other concerns among
                        the general population that have more of an immediate
                        impact on their daily lives. But it could also be a
                        function of the difficulty most people have in
                        perceiving risk associated with relatively slower-moving
                        phenomena, such as climate change and biodiversity loss.
                        <br />
                        <br />
                        Indeed, on environmental issues beyond climate change,
                        experts are more focused on{" "}
                        <b>
                            natural resources and biodiversity risks (6th)
                        </b>{" "}
                        and <b>energy risks (8th)</b> while the general
                        population is more concerned with <b>pollution (9th)</b>
                        . Yet in regions such as Central America and South
                        America, where biodiversity risks are more visible for
                        the wider population than for people in other regions,
                        the <b>public ranked biodiversity risks 4th</b> – in
                        line with the experts' ranking.
                    </Description>

                    <ResponsiveLottieAnimation
                        animations={{
                            mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP06.json",
                            tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP06.json",
                            desktop:
                                "/lottie/desktop/AXA_Scrolly_Desktop_DP06.json",
                        }}
                        heights={{
                            mobile: "300px",
                            tablet: "400px",
                            desktop: "600px",
                        }}
                        backgroundColor="#ED5027"
                        loop={true}
                        autoplay={true}
                    />
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
