import { styled } from '@lib/stitches'

export const Button = styled('button', {
  border: 'none',

  borderRadius: '10px',

  padding: '0.5em 0.7em',

  '&:hover': {
    cursor: 'pointer',
  },

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
        fontSize: '1rem',
      },
      md: {
        fontSize: '1.2rem',
      },
      lg: {
        fontSize: '1.5rem',
      },
    },
  },
})
