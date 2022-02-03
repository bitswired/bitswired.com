import { keyframes, styled } from '@lib/stitches'

const Land = styled('div', {
  width: '100vw',
  height: '100vh',
  backgroundColor: 'black',
})

const flow = keyframes({
  '0%': {
    backgroundPosition: '0',
  },
  '100%%': {
    backgroundPosition: '100%',
  },
})

const Title = styled('h1', {
  margin: 0,
  fontSize: '80px',
  color: 'transparent',
  backgroundClip: 'text',
  textAlign: 'center',
  fontWeight: '900',
  lineHeight: '1.2em',

  '@bp2': {
    fontSize: '128px',
  },

  variants: {
    variant: {
      1: {
        backgroundImage:
          'linear-gradient(to right, $primary1 0, $secondary1 50%, pink 100%)',
        animation: `${flow} 10s ease-in-out alternate infinite`,
        backgroundSize: '300%',
        backgroundPosition: '-300%',
      },
      2: {
        backgroundImage:
          'linear-gradient(to right, $primary1 0, $secondary1 50%, pink 100%)',
        animation: `${flow} 5s ease-in-out alternate infinite`,
        backgroundSize: '300%',
        backgroundPosition: '-300%',
      },
      3: {
        backgroundImage:
          'linear-gradient(to left, #EE00EE 0, $secondary1 50%, $primary1 100%)',
        animation: `${flow} 7s ease-in-out alternate infinite`,
        backgroundSize: '200%',
        backgroundPosition: '-300%',
      },
    },
  },
})

const TitleWrapper = styled('div', {
  paddingTop: '4rem',
})

export function Head() {
  return (
    <Land>
      <TitleWrapper>
        <Title variant={1}>Data AI,</Title>
        <Title variant={2}>Blockchain,</Title>
        <Title variant={3}>Web</Title>
      </TitleWrapper>
    </Land>
  )
}
