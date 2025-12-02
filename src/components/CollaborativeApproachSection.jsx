import { motion } from "framer-motion";
import SectionTitleGroup from "./shared/SectionTitleGroup";
import HeaderAnimationWrapper from "./HeaderAnimationWrapper";
import Quote from "./shared/Quote";
import {
    AboveTopLeftCircle,
    BackgroundContainer,
    Container,
    ContentWrapper,
    SVGWrapper,
    HalfWidthLeftSVGContainer,
    BottomCenterCircle,
    BottomLeftCircle,
    HalfWidthLeftParagraph,
    TopLeftCircle,
    Paragraph,
    FullWidthSVGWrapper,
    HalfWidthRightParagraph,
    HalfWidthRightSVGContainer,
    TopRightCircle,
    FinalQuoteSVGWrapper,
    FinalQuoteContent,
    FinalLeftToBottomQuoteWrapper,
} from "./shared/SectionLayout";

export default function CollaborativeApproachSection({
    backgroundColor = "#f0eedf",
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
                        chapter="Chapter five"
                        title="A collaborative approach"
                    />

                    <HeaderAnimationWrapper filename="AXA_HEAD_05_HALVED" enableScrollSync={true} />

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

                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <AboveTopLeftCircle />
                        <Paragraph>
                            Insurers are also partnering with <b>academia</b> in
                            their use of AI and big data to better understand
                            and respond to other risks, such as climate change
                            and the threats it brings. Ralph of the Cambridge
                            Centre for Risk Studies says that collaboration
                            between his centre and AXA XL has produced a new
                            understanding of the risks posed by wildfires, for
                            example.
                        </Paragraph>
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
                        <TopLeftCircle left="-20px" />
                        <Paragraph>
                            “Thanks to collaborative research, we now have a
                            greater understanding of how to build buildings more
                            safely and where to locate them more safely,” he
                            says. “That learning is propagated, measured and
                            shared by the insurance industry, and it’s useful
                            because it literally reduces risk.”
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
                    </HalfWidthRightSVGContainer>
                    <HalfWidthLeftParagraph backgroundColor={backgroundColor}>
                        <Paragraph>
                            Sharing of data and insight through closer
                            collaboration with clients, argues AXA XL’s Gunter,
                            is helping insurers to move from payer to partner,
                            redefining traditional relationships and allowing
                            governments, organisations and companies to assess
                            this evolving nexus of risk more accurately.
                        </Paragraph>
                    </HalfWidthLeftParagraph>
                    <FinalLeftToBottomQuoteWrapper>
                        <FinalQuoteSVGWrapper
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1038 558"
                            fill="none"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M1037.5 243.364V457C1037.5 512.228 992.729 557 937.5 557H15.4639M0.5 384.856L0.5 226.513C0.5 171.285 45.2715 126.513 100.5 126.513L521 126.945V0"
                                stroke="black"
                                strokeWidth="1"
                                vectorEffect="non-scaling-stroke"
                            />
                        </FinalQuoteSVGWrapper>
                        <FinalQuoteContent>
                            <Quote
                                text={`“It’s about going beyond providing a safety net and giving clients the confidence and comfort they need to be able to invest in the next phase of their business growth.”`}
                                attribution="Scott Gunter, Chief Executive Officer, AXA XL"
                            />
                        </FinalQuoteContent>
                    </FinalLeftToBottomQuoteWrapper>
                    <BottomLeftCircle />
                </ContentWrapper>
                <br />
                <br />
            </Container>
        </BackgroundContainer>
    );
}
