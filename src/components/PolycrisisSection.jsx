import styled from "styled-components";
// @eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";
import ResponsiveLottieAnimation from "./ResponsiveLottieAnimation";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #b6c1d3;
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

export default function PolycrisisSection() {
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
                        chapter="Chapter one"
                        title="The age of polycrisis"
                    />

                    <TextBlock variants={itemVariants}>
                        One dimension of this more complex threat landscape is
                        the emergence of new threats that were barely on the
                        horizon just a few years ago. GenAI has already had a
                        significant impact, with 78 per cent of companies
                        worldwide now using AI in some part of their operations,
                        according to{" "}
                        <a href="https://www.hostinger.com/in/tutorials/how-many-companies-use-ai">
                            Hostinger
                        </a>
                        , the web-hosting service. That is a 55 per cent
                        increase over the previous year.
                    </TextBlock>

                    <ResponsiveLottieAnimation
                        animations={{
                            mobile: "/lottie/mobile/AXA_Scrolly_Mobile_DP02.json",
                            tablet: "/lottie/tablet/AXA_Scrolly_Tablet_DP02.json",
                            desktop:
                                "/lottie/desktop/AXA_Scrolly_Desktop_DP02.json",
                        }}
                        heights={{
                            mobile: "300px",
                            tablet: "400px",
                            desktop: "600px",
                        }}
                        backgroundColor="#B6C1D3"
                        loop={true}
                        autoplay={true}
                    />

                    <TextBlock variants={itemVariants}>
                        Yet, as the recently released{" "}
                        <a href="https://axaxl.com/fast-fast-forward/articles/axa-future-risks-report-2025">
                            <strong>AXA Future Risks Report, 2025</strong>
                        </a>{" "}
                        highlights, AI and big data have now consolidated their
                        place in the top 10 risks perceived by both experts and
                        the general public. That is a stark contrast with just
                        five years ago, when neither experts nor the general
                        public ranked them among their top 10 risks.
                    </TextBlock>

                    <Quote
                        text={
                            "\"The polycrisis adds uncertainty to the mix, and that is a challenge for insurance and reinsurance companies to deal with. When it comes to risk, we've got data, we've got information and we've got answers. Uncertainty relates to perception, and we have to go even deeper to understand what's going on\""
                        }
                        attribution="Scott Gunter, Chief Executive Officer, AXA XL"
                        variants={itemVariants}
                    />
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
