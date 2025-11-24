import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 80px 40px;
  background: #ffffff;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  margin: 0 auto;
`

const Title = styled(motion.h2)`
  font-size: 19px;
  font-weight: 400;
  line-height: 1;
  color: #000000;
  margin: 0 0 60px 0;
  letter-spacing: 0;
  text-align: center;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const Paragraph = styled(motion.p)`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
  margin: 0 0 32px 0;
  letter-spacing: 0;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  text-align: left;

  &:last-child {
    margin-bottom: 0;
  }

  a {
    color: #000000;
    text-decoration: underline;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function RisksSection() {
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
          Risk is all around us.
        </Title>

        <Paragraph variants={itemVariants}>
          From climate change and geopolitical risk to cyber threat and the rise of artificial intelligence, the 21st century has brought to light new themes and threats that diverse stakeholders have to understand and plan for.
        </Paragraph>

        <Paragraph variants={itemVariants}>
          But what about the interplay between these new risks, how do they relate to and influence one another, and what is the appropriate response in terms of mitigating for today's risk landscape while building long-term resilience?
        </Paragraph>

        <Paragraph variants={itemVariants}>
          All of that has profound implications for the role insurance plays in today's rapidly changing world. From helping organisations to transfer risk off their balance sheets to providing prevention services and sharing data-driven insight into anticipating and mitigating risk, insurers can move from payer to partner as they support clients along a more challenging journey.
        </Paragraph>

        <Paragraph variants={itemVariants}>
          Ben Cattaneo, founder of The Decision-Making Studio, a consultancy that helps organisations make choices in an increasingly uncertain world, argues that while the number of risks and their intensity have grown in recent years, organisations are struggling with their converging nature. "We've entered an era of overlapping risks in which lots of things are interconnected, and what's challenging is that they're hard to isolate," he says.
        </Paragraph>
      </ContentWrapper>
    </Container>
  )
}
