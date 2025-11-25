import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

const Container = styled.section`
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 60px 40px;
    background: #ffffff;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;
`;

const ContentWrapper = styled.div`
    max-width: 900px;
    margin: 0 auto;
`;

const Title = styled.h2`
    font-size: 32px;
    font-weight: 700;
    line-height: 1.3;
    color: #000000;
    margin-bottom: 40px;
    letter-spacing: 0;
    font-family: "adobe-caslon-pro", "EB Garamond", Georgia, serif;
`;

const VizContainer = styled(motion.div)`
    width: 100%;
    height: 600px;
    background: #ffffff;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;
    position: relative;
`;

const LottieWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .lottie-container {
        width: 100%;
        height: 100%;
        max-width: 800px;
    }
`;

const Description = styled.p`
    font-size: 19px;
    font-weight: 400;
    line-height: 1.2;
    color: #000000;
    margin-bottom: 20px;
    letter-spacing: 0;
    font-family: "dm-sans", "DM Sans", -apple-system, BlinkMacSystemFont,
        "Segoe UI", sans-serif;

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

export default function VizSection() {
    const containerRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Load the first lottie animation using lottie-web
        const loadAnimation = async () => {
            try {
                const response = await fetch(
                    "/lottie/AXA_Scrolly_Desktop_DP01.json"
                );
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Animation loaded successfully:", data);

                // Create Intersection Observer to trigger animation on view
                let animationLoaded = false;
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting && containerRef.current && !animationLoaded) {
                                console.log("Container is in view, loading animation");
                                animationLoaded = true;
                                lottie.loadAnimation({
                                    container: containerRef.current,
                                    renderer: "svg",
                                    loop: true,
                                    autoplay: true,
                                    animationData: data,
                                });
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.1 }
                );

                if (containerRef.current) {
                    observer.observe(containerRef.current);
                }

                setError(null);
                setLoading(false);

                return () => {
                    observer.disconnect();
                };
            } catch (err) {
                console.error("Failed to load lottie animation:", err);
                setError(err.message);
                setLoading(false);
            }
        };

        loadAnimation();
    }, []);

    return (
        <Container>
            <ContentWrapper>
                <Title>Converging Risks Landscape</Title>

                <VizContainer
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    ref={containerRef}
                >
                    {loading && (
                        <div style={{ color: "#666" }}>
                            Loading animation...
                        </div>
                    )}
                    {error && (
                        <div style={{ color: "#d32f2f" }}>
                            Error loading animation: {error}
                        </div>
                    )}
                </VizContainer>

                <Description variants={itemVariants}>
                    The complexity of modern risk management requires
                    understanding how different risks interconnect and influence
                    one another. Organizations must develop integrated
                    approaches to identify, assess, and mitigate these
                    converging threats.
                </Description>

                <Description variants={itemVariants}>
                    Insurance partners play a critical role in this landscape,
                    providing not just financial protection but also data-driven
                    insights and prevention services that help organizations
                    build resilience.
                </Description>
            </ContentWrapper>
        </Container>
    );
}
