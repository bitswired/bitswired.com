import dynamic from 'next/dynamic'
import { keyframes, styled } from '@lib/stitches'

const NewsletterSubscriptionForm = dynamic(() =>
  import('@features/newsletter').then(
    (module: any) => module.NewsletterSubscriptionForm
  )
)

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
  fontWeight: '$extrabold',
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

const TitleContainer = styled('div', {
  paddingTop: '4rem',
})

const NewsletterContainer = styled('div', {
  paddingTop: '4rem',
  maxWidth: '800px',
  margin: 'auto',
  px: '$space$4',
})

export function Head() {
  return (
    <Land>
      <TitleContainer>
        <Title variant={1}>Data AI,</Title>
        <Title variant={2}>Block Chain,</Title>
        <Title variant={3}>Web</Title>
      </TitleContainer>
      <NewsletterContainer>
        <NewsletterSubscriptionForm />
      </NewsletterContainer>
    </Land>
  )
}
