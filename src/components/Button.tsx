import { styled } from '@lib/stitches'

export const Button = styled('button', {
  border: 'none',

  borderRadius: '$md',

  fontWeight: 'bold',

  transition: 'all 0.4s ease',
  backgroundPosition: 'center',

  '&:hover': {
    cursor: 'pointer',
  },

  '@media (hover: hover)': {
    '&:hover': {
      filter: 'brightness(120%)',
    },
  },

  variants: {
    variant: {
      'primary-solid': {
        $$color: '$colors$primary1',

        backgroundColor: '$primary1',
        color: 'white',
        // '&:hover': {
        //   backgroundColor: '$primary3',
        // },
      },

      'secondary-solid': {
        $$color: '$colors$secondary1',
        // $$color: 'red',

        backgroundColor: '$secondary1',
        color: 'white',
        // '&:hover': {
        //   backgroundColor: '$secondary3',
        // },
      },

      'primary-outlined': {
        $$color: '$colors$primary1',
        backgroundColor: 'inherit',
        border: '2px solid $primary1',
        color: '$primary1',
        // '&:hover': {
        //   borderColor: '$primary3',
        // },
      },

      'secondary-outlined': {
        $$color: 'black',
        backgroundColor: 'inherit',
        border: '2px solid $secondary1',
        color: '$secondary1',
        // '&:hover': {
        //   borderColor: '$secondary3',
        // },
      },
    },

    size: {
      sm: {
        fontSize: '$fontSizes$2',
        padding: '$space$2 $space$3',
      },
      md: {
        fontSize: '$fontSizes$4',
        padding: '$space$3 $space$4',
      },
      lg: {
        fontSize: '$fontSizes$6',
        padding: '$space$4 $space$5',
      },
    },
  },
  defaultVariants: {
    variant: 'primary-solid',
    size: 'md',
  },
})
