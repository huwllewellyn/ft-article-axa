import styled from "styled-components";
import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import Quote from "./shared/Quote";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 80px 40px;
    background: #F0EEDF;
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

export default function CollaborativeApproachSection() {
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
                        chapter="Chapter five"
                        title="A collaborative approach"
                    />

                    <TextBlock variants={itemVariants}>
                        Insurers are also partnering with academia in their use
                        of AI and big data to better understand and respond to
                        other risks, such as climate change and the threats it
                        brings. Ralph of the Cambridge Centre for Risk Studies
                        says that collaboration between his centre and AXA XL
                        has produced a new understanding of the risks posed by
                        wildfires, for example.
                    </TextBlock>

                    <Quote
                        text="Thanks to collaborative research, we now have a greater understanding of how to build buildings more safely and where to locate them more safely. That learning is propagated, measured and shared by the insurance industry, and it's useful because it literally reduces risk."
                        attribution="Ralph, Cambridge Centre for Risk Studies"
                        variants={itemVariants}
                    />

                    <TextBlock variants={itemVariants}>
                        Sharing of data and insight through closer collaboration
                        with clients, argues AXA XL's Gunter, is helping
                        insurers to move from payer to partner, redefining
                        traditional relationships and allowing governments,
                        organisations and companies to assess this evolving
                        nexus of risk more accurately.
                    </TextBlock>

                    <Quote
                        text="It's about going beyond providing a safety net and giving clients the confidence and comfort they need to be able to invest in the next phase of their business growth."
                        attribution="Scott Gunter, Chief Executive Officer, AXA XL"
                        variants={itemVariants}
                    />
                </motion.div>
            </ContentWrapper>
        </Container>
    );
}
