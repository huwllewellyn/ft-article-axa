import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 40px;
  background: #ffffff;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const ContentWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 40px;
  letter-spacing: 0;
`

const Paragraph = styled(motion.p)`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 32px;
  letter-spacing: 0;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 700;
  }
`

const CTA = styled(motion.button)`
  display: inline-block;
  padding: 16px 32px;
  margin-top: 24px;
  background: #000000;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  border: none;
  border-radius: 0;
  cursor: pointer;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #333333;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function ConclusionSection() {
  return (
    <Container
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <ContentWrapper>
        <Title variants={itemVariants}>
          Moving from Payer to Partner
        </Title>

        <Paragraph variants={itemVariants}>
          The future of insurance lies in understanding and managing converging risks. Organizations that work with insurers as true partners—leveraging their expertise in risk assessment, prevention, and mitigation—will be better positioned to navigate an increasingly complex risk landscape.
        </Paragraph>

        <Paragraph variants={itemVariants}>
          This partnership approach goes beyond traditional insurance coverage. It encompasses <strong>data-driven insights, prevention services, and integrated risk management strategies</strong> that help organizations anticipate threats before they materialize and build long-term resilience.
        </Paragraph>

        <Paragraph variants={itemVariants}>
          In a world of interconnected risks where organizations are struggling to isolate individual threats, having a partner who understands the complexity and can provide comprehensive solutions is not just valuable—it's essential.
        </Paragraph>

        <CTA variants={itemVariants}>
          Learn More
        </CTA>
      </ContentWrapper>
    </Container>
  )
}
