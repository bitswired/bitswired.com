import { styled } from '@lib/stitches'

export const Container = styled('div', {
  display: 'flex',

  variants: {
    gap: {
      sm: {
        gap: '$space$1',
      },
      md: {
        gap: '$space$3',
      },
      lg: {
        gap: '$space$5',
      },
    },
  },
})
