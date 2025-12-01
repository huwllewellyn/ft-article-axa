import styled from "styled-components";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import LottieScrolljack from "./LottieScrolljack";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import {
    AboveTopLeftCircle,
    BackgroundContainer,
    Container,
    SVGWrapper,
    HalfWidthLeftSVGContainer,
    BottomCenterCircle,
} from "./shared/SectionLayout";

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

export default function RiskPerceptionsSection({
    backgroundColor = "#ed5027",
}) {
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
                            chapter="Chapter three"
                            title="Risk perceptions around the world"
                        />

                        <HeaderAnimationWrapper filename="AXA_HEAD_03_Optimised" />

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

                        <Description variants={itemVariants}>
                            <AboveTopLeftCircle />
                            Adding to this matrix of complexity, perceived risks
                            vary between regions. Against a backdrop of
                            significant shifts in global prosperity over the
                            past three decades driven by the increasing wealth
                            of China and other parts of Asia, the majority of
                            both <b>experts (74 per cent)</b> and the{" "}
                            <b>general population (59 per cent)</b> believe that
                            their countries face “a deep and worrying social
                            divide” or that people have “fewer and fewer common
                            values and aspirations”.
                        </Description>
                    </motion.div>
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
                    <div style={{ width: "100%", position: "relative" }}>
                        <BottomCenterCircle />
                    </div>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP05.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP05.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP05.json",
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
                        <Description variants={itemVariants}>
                            Fuelling this perception of a deepening social
                            division are concerns about rising economic and
                            social inequality as well as political and
                            ideological divisions. But concerns about{" "}
                            <b>fragmentation</b> vary widely by region: these
                            numbers are much higher among the general population
                            in Europe and the US (65 per cent and 66 per cent,
                            respectively) than in the Asia-Pacific region, where
                            only 37 per cent of people worry about a deep social
                            divide.
                        </Description>

                        <Description variants={itemVariants}>
                            In addition, the report reveals that there is{" "}
                            <b>less overlap</b> with previous years{" "}
                            <b>between experts and general population</b>, with
                            just six out of the 10 top risks common to both.
                        </Description>
                        <Description variants={itemVariants}>
                            This partly reflects the rise in other concerns
                            among the general population that have more of an
                            immediate impact on their daily lives. But it could
                            also be a function of the difficulty most people
                            have in perceiving risk associated with relatively
                            slower-moving phenomena, such as climate change and
                            biodiversity loss.
                            <br />
                            <br />
                            Indeed, on environmental issues beyond climate
                            change, experts are more focused on{" "}
                            <b>
                                natural resources and biodiversity risks (6th)
                            </b>{" "}
                            and <b>energy risks (8th)</b> while the general
                            population is more concerned with{" "}
                            <b>pollution (9th)</b>. Yet in regions such as
                            Central America and South America, where
                            biodiversity risks are more visible for the wider
                            population than for people in other regions, the
                            public ranked biodiversity risks 4th – in line with
                            the experts' ranking.
                        </Description>
                    </motion.div>
                </ContentWrapper>
            </Container>
            <LottieScrolljack
                animations={{
                    mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP06.json",
                    tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP06.json",
                    desktop: "/lottie/desktop/AXA_Scrolly_Desktop_DP06.json",
                }}
                backgroundColor={backgroundColor}
                loop={true}
            />
        </BackgroundContainer>
    );
}
