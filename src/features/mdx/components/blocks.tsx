import { styled } from '@lib/stitches'

export const ColoredBlock = styled('div', {
  padding: '0.5em',
  paddingLeft: '1em',
  my: '1em',

  variants: {
    variant: {
      info: {
        borderLeft: '0.5em solid $info',
        backgroundColor: '$infoBg',
      },
      warning: {
        borderLeft: '0.5em solid $warning',
        backgroundColor: '$warningBg',
      },
      error: {
        borderLeft: '0.5em solid $error',
        backgroundColor: '$errorBg',
      },
    },
  },
})

const SummaryBlockContainer = styled('div', {
  background: 'linear-gradient(to bottom, $primary1, white)',
  py: '0.5rem',
  px: '1.5rem',
  borderRadius: '$md',
  boxShadow: '$lg',
  my: '1rem',
})

const SummaryTitle = styled('p', {
  fontSize: '2.5rem !important',
  my: '0.5em !important',
})

interface SummaryBlockProps {
  children: JSX.Element
}

export function SummaryBlock({ children }: SummaryBlockProps) {
  return (
    <SummaryBlockContainer>
      <SummaryTitle>TLDR</SummaryTitle>
      {children}
    </SummaryBlockContainer>
  )
}
