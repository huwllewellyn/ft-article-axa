import styled from 'styled-components'
import { motion } from 'framer-motion'

const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 60px 40px;
  background: #ffffff;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ContentWrapper = styled(motion.div)`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`

const Subtitle = styled(motion.p)`
  font-size: 19px;
  font-weight: 500;
  line-height: 1.2;
  color: #0f0707;
  margin: 0 0 60px 0;
  max-width: 430px;
  letter-spacing: 0;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const TitleContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0;
  align-items: flex-start;
  margin-bottom: 0;
  position: relative;
  z-index: 2;
`

const TitleWord = styled(motion.h1)`
  font-family: 'FreightBig Pro', Georgia, serif;
  color: #0f0707;
  margin: 0;
  letter-spacing: -1.54px;
  line-height: 0.9;
  font-size: clamp(60px, 15vw, 154px);
  text-align: left;
  white-space: nowrap;

  &.light {
    font-weight: 300;
    font-style: italic;
  }

  &.light-normal {
    font-weight: 300;
    font-style: normal;
  }

  &.semibold {
    font-weight: 600;
    font-style: normal;
  }

  @media (max-width: 1024px) {
    font-size: clamp(40px, 12vw, 100px);
    letter-spacing: -1px;
  }

  @media (max-width: 768px) {
    font-size: clamp(32px, 10vw, 60px);
    letter-spacing: -0.6px;
  }
`

const DecorativeVector = styled(motion.svg)`
  position: absolute;
  z-index: 1;
  pointer-events: none;
  overflow: visible;

  &.vector-1 {
    top: -100px;
    right: 0;
    width: 400px;
    height: 300px;
  }

  &.vector-2 {
    bottom: -50px;
    left: -80px;
    width: 500px;
    height: 400px;
  }
`

const ImageWrapper = styled(motion.div)`
  position: absolute;
  width: 260px;
  height: 330px;
  border-radius: 0;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  z-index: 3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &.image-1 {
    top: 40px;
    right: 100px;
  }

  &.image-2 {
    bottom: 80px;
    right: 20px;
  }

  @media (max-width: 1024px) {
    width: 200px;
    height: 260px;

    &.image-1 {
      right: 60px;
    }

    &.image-2 {
      right: 0;
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function IntroSection() {
  return (
    <Container
      as={motion.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Decorative vector elements - positioned absolutely */}
      <DecorativeVector
        className="vector-1"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <path
          d="M 400 0 Q 300 50, 200 150 T 0 300"
          stroke="#000000"
          strokeWidth="1"
          fill="none"
        />
      </DecorativeVector>

      <DecorativeVector
        className="vector-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <path
          d="M 0 0 Q 100 100, 200 150 T 400 300"
          stroke="#000000"
          strokeWidth="1"
          fill="none"
        />
      </DecorativeVector>

      <ContentWrapper>
        <Subtitle variants={itemVariants}>
          The biggest threats to global stability are no longer emerging, they're converging – here's what the future risk landscape reveals
        </Subtitle>

        <TitleContainer
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3,
              },
            },
          }}
        >
          <TitleWord className="light" variants={itemVariants}>
            The
          </TitleWord>
          <TitleWord className="light" variants={itemVariants} style={{ marginLeft: '0.1em' }}>
            New
          </TitleWord>

          <TitleWord className="light" variants={itemVariants} style={{ marginLeft: '0.1em' }}>
            Nexus
          </TitleWord>

          <TitleWord className="light-normal" variants={itemVariants} style={{ marginLeft: '0.1em' }}>
            Of
          </TitleWord>

          <TitleWord className="light-normal" variants={itemVariants} style={{ marginLeft: '0.1em' }}>
            Global
          </TitleWord>

          <TitleWord className="semibold" variants={itemVariants} style={{ marginLeft: '0.1em' }}>
            Risk
          </TitleWord>
        </TitleContainer>
      </ContentWrapper>

      {/* Images - positioned absolutely over content */}
      <ImageWrapper
        className="image-1"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <img
          src="/intro/33826e4e78dae38a1d28a7819c4065f5bb46fb42.jpg"
          alt="Climate activism"
        />
      </ImageWrapper>

      <ImageWrapper
        className="image-2"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <img
          src="/intro/e59b14d8dde0f0f5dd99111d4463af7435d86470.jpg"
          alt="Infrastructure landscape"
        />
      </ImageWrapper>
    </Container>
  )
}
