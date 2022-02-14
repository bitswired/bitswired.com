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

export const SummaryBlock = styled('div', {
  backgroundColor: '$primary1',
})
