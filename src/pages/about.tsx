import { Me, Newsletter, Bitswired } from '@features/about'
import { styled } from '@lib/stitches'
import { Container } from 'components/layout'

const Section = styled(Container, {
  width: '100%',
  flexDirection: 'column',
  margin: 'auto',

  p: '$space$5',

  h1: {
    fontFamily: '$sans',
    fontSize: '5rem',
  },

  fontFamily: '$sans',

  variants: {
    variant: {
      light: {
        backgroundColor: 'white',
        color: 'black',

        h1: {
          color: '$secondary1',
        },

        strong: {
          color: '$secondary1',
        },
      },
      dark: {
        backgroundColor: 'black',
        color: 'white',
        h1: {
          color: '$primary1',
        },
        strong: {
          color: '$primary1',
        },
      },
    },
  },
})

const Wrapper = styled('div', {
  margin: 'auto',
  maxWidth: '800px',
})

export default function AboutPage() {
  return (
    <>
      <Section className="section" variant="light">
        <Wrapper>
          <Newsletter />
        </Wrapper>
      </Section>

      <Section className="section" variant="dark">
        <Wrapper>
          <Bitswired />
        </Wrapper>
      </Section>

      <Section className="section" variant="light">
        <Wrapper>
          <Me />
        </Wrapper>
      </Section>
    </>
  )
}
