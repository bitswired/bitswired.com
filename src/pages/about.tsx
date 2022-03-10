import { Me, Newsletter, Bitswired } from '@features/about'
import { styled } from '@lib/stitches'

const Section = styled('section', {
  width: '100%',
  flexDirection: 'column',
  margin: 'auto',
  boxSizing: 'border-box',

  padding: '$7',

  h1: {
    fontFamily: '$sans',
    fontSize: '3rem',
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
  fontSize: '1.25rem',
})

export default function AboutPage() {
  return (
    <>
      <Section id="newsletter" className="section" variant="light">
        <Wrapper>
          <Newsletter />
        </Wrapper>
      </Section>

      <Section id="bitswired" className="section" variant="dark">
        <Wrapper>
          <Bitswired />
        </Wrapper>
      </Section>

      <Section id="me " className="section" variant="light">
        <Wrapper>
          <Me />
        </Wrapper>
      </Section>
    </>
  )
}
