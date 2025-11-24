import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 40px;
  background: #ffffff;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
  color: #000000;
  margin-bottom: 40px;
  letter-spacing: 0;
  font-family: 'adobe-caslon-pro', 'EB Garamond', Georgia, serif;
`

const VizContainer = styled(motion.div)`
  width: 100%;
  height: 400px;
  background: linear-gradient(135deg, #f5f5f5 0%, #efefef 100%);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
`

const DataPoint = styled(motion.div)`
  position: absolute;
  width: 12px;
  height: 12px;
  background: #000000;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    width: 16px;
    height: 16px;
    margin-top: -2px;
    margin-left: -2px;
  }
`

const Description = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 20px;
  letter-spacing: 0;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  &:last-child {
    margin-bottom: 0;
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
}

const dataPointVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.3,
    transition: { duration: 0.2 },
  },
}

export default function VizSection() {
  const dataPoints = [
    { x: '20%', y: '30%' },
    { x: '35%', y: '60%' },
    { x: '50%', y: '40%' },
    { x: '70%', y: '50%' },
    { x: '85%', y: '25%' },
  ]

  return (
    <Container>
      <ContentWrapper>
        <Title>Converging Risks Landscape</Title>

        <VizContainer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          {dataPoints.map((point, index) => (
            <DataPoint
              key={index}
              style={{ left: point.x, top: point.y }}
              variants={dataPointVariants}
              whileHover="hover"
            />
          ))}
        </VizContainer>

        <Description>
          The complexity of modern risk management requires understanding how different risks interconnect and influence one another. Organizations must develop integrated approaches to identify, assess, and mitigate these converging threats.
        </Description>

        <Description>
          Insurance partners play a critical role in this landscape, providing not just financial protection but also data-driven insights and prevention services that help organizations build resilience.
        </Description>
      </ContentWrapper>
    </Container>
  )
}
