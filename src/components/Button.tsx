import { styled } from '@lib/stitches'

export const Button = styled('button', {
  border: 'none',

  borderRadius: '10px',

  fontWeight: 'bold',

  '&:hover': {
    cursor: 'pointer',
  },

  boxShadow: '$xl',

  variants: {
    variant: {
      'primary-solid': {
        backgroundColor: '$primary1',
        color: 'white',
        '&:hover': {
          backgroundColor: '$primary3',
        },
      },

      'secondary-solid': {
        backgroundColor: '$secondary1',
        color: 'white',
        '&:hover': {
          backgroundColor: '$secondary3',
        },
      },

      'primary-outlined': {
        backgroundColor: 'inherit',
        border: '2px solid $primary1',
        color: '$primary1',
        '&:hover': {
          borderColor: '$primary3',
        },
      },

      'secondary-outlined': {
        backgroundColor: 'inherit',
        border: '2px solid $secondary1',
        color: '$secondary1',
        '&:hover': {
          borderColor: '$secondary3',
        },
      },
    },

    size: {
      sm: {
        fontSize: '$fontSizes$3',
        padding: '$space$2 $space$3',
      },
      md: {
        fontSize: '$fontSizes$6',
        padding: '$space$3 $space$5',
      },
      lg: {
        fontSize: '$fontSizes$9',
        padding: '$space$5 $space$7',
      },
    },
  },
})
