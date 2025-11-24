import styled from 'styled-components'

const Container = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 60px 40px;
  background: #ffffff;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`

const ContentWrapper = styled.div`
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`

const Divider = styled.div`
  width: 1px;
  height: 388px;
  background: #000000;
  margin-bottom: 40px;
`

const Paragraph = styled.p`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 32px;
  letter-spacing: 0;
  font-family: 'dm-sans', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  &:last-child {
    margin-bottom: 0;
  }

  strong {
    font-weight: 700;
  }
`

const Quote = styled.div`
  font-size: 19px;
  font-weight: 400;
  line-height: 1.2;
  color: #000000;
  margin-bottom: 32px;
  padding-left: 0;
  border-left: none;
  font-family: 'eb-garamond', 'EB Garamond', Georgia, serif;

  p {
    margin: 0 0 16px 0;
    font-style: italic;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default function IntroSection() {
  return (
    <Container>
      <ContentWrapper>
        <Divider />

        <Paragraph>
          From climate change and geopolitical instability to cyber threat and the rise of artificial intelligence, the 21st century has brought new themes and threats that diverse stakeholders need to understand and plan for.
        </Paragraph>

        <Paragraph>
          But what about the interplay between these new risks, how do they relate to and influence one another, and what is the appropriate response in terms of mitigating for today's risk landscape while building long-term resilience?
        </Paragraph>

        <Paragraph>
          All of that has profound implications for the role of insurance in today's rapidly changing world. From helping organisations to transfer risk off their balance sheets to providing prevention services and sharing data-driven insights into anticipating and mitigating risk, <strong>insurers can move from payer to partner as they support clients along a more challenging journey.</strong>
        </Paragraph>

        <Quote>
          <p>
            Ben Cattaneo, founder of The Decision-Making Studio, a consultancy that helps organisations make choices in an increasingly uncertain world, argues that while the number of risks and their intensity have grown in recent years, organisations are struggling with their converging nature.
          </p>
          <p>
            "We've entered an era of overlapping risks in which lots of things are interconnected, and what's challenging is that they're hard to isolate," he says.
          </p>
        </Quote>
      </ContentWrapper>
    </Container>
  )
}
