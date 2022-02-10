import { mauve } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'
import { Property } from '@stitches/react/types/css'

const primaryScale = {
  primary1: '#1DDD78',
  primary2: '#00B150',
  primary3: '#00862A',
  primary4: '#005C00',
  primary5: '#003600',
}

const secondaryScale = {
  secondary1: '#0B88EE',
  secondary2: '#006CCE',
  secondary3: '#0052AF',
  secondary4: '#003990',
  secondary5: '#002373',
}

const grayScale = {
  gray1: mauve.mauve1,
  gray2: mauve.mauve2,
  gray3: mauve.mauve3,
  gray4: mauve.mauve4,
  gray5: mauve.mauve5,
  gray6: mauve.mauve6,
  gray7: mauve.mauve7,
  gray8: mauve.mauve8,
  gray9: mauve.mauve9,
  gray10: mauve.mauve10,
}

export const { styled, theme, getCssText, globalCss, reset, keyframes } =
  createStitches({
    theme: {
      fonts: {
        serif: 'Crimson Pro, serif',
        sans: 'Open Sans, sans-serif',
        mono: 'JetBrains Mono, monospace',
      },
      colors: {
        ...primaryScale,
        ...secondaryScale,
        ...grayScale,
        text: '#292929',
        error: 'red',
      },
      fontSizes: {
        body: '1rem',
        0: '0.625rem', // 10px
        1: '0.75rem', // 12px
        2: '0.875rem', // 14px
        3: '1rem', // 16px - body, h5, h4
        4: '1.125rem', // 18px
        5: '1.25rem', // 20px
        6: '1.375rem', // 22px
        7: '1.5625rem', // 25px - h3
        8: '1.75rem', // 28px
        9: '2rem', // 32px - h2
        10: '2.25rem', // 36px
        11: '2.625rem', // 42px - h1
        12: '2.875rem', // 46px
        13: '3.1875rem', // 51px
      },
      fontWeights: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      letterSpacings: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      lineHeights: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
        body: '1.625',
        heading: 1.15,
      },
      borderWidths: {},
      borderStyles: {},
      shadows: {
        sm: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
      },
      transitions: {},
      space: {
        0: '0rem', // 0px
        1: '0.25rem', // 4px
        2: '0.5rem', // 8px
        3: '0.75rem', // 12px
        4: '1rem', // 16px
        5: '1.5rem', // 24px
        6: '2rem', // 32px
        7: '2.5rem', // 40px
        8: '3rem', // 48px
        9: '3.5rem', // 56px
        10: '4rem', // 64px
        11: '8rem', // 128px
        12: '16rem', // 256px
        13: '32rem', // 512px
      },
      sizes: {
        1: '5px',
        2: '10px',
        3: '15px',
        4: '20px',
        5: '25px',
        6: '35px',
        7: '45px',
        8: '65px',
        9: '80px',
        container: '1200px',
      },
      radii: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.4rem',
        lg: '0.625rem',
        xl: '1rem',
        full: '9999px',
        round: '50%',
        pill: '9999px',
      },
      zIndices: {
        1: '100',
        2: '200',
        3: '300',
        4: '400',
        max: '999',
      },
    },
    media: {
      bp1: '(min-width: 480px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1280px)',
    },

    utils: {
      // Abbreviated margin properties
      m: (value: Property.Margin) => ({
        margin: value,
      }),
      mt: (value: Property.Margin) => ({
        marginTop: value,
      }),
      mr: (value: Property.Margin) => ({
        marginRight: value,
      }),
      mb: (value: Property.Margin) => ({
        marginBottom: value,
      }),
      ml: (value: Property.Margin) => ({
        marginLeft: value,
      }),
      mx: (value: Property.Margin) => ({
        marginLeft: value,
        marginRight: value,
      }),
      my: (value: Property.Margin) => ({
        marginTop: value,
        marginBottom: value,
      }),

      // Abbreviated padding properties
      p: (value: Property.Padding) => ({
        padding: value,
      }),
      pt: (value: Property.Padding) => ({
        paddingTop: value,
      }),
      pr: (value: Property.Padding) => ({
        paddingRight: value,
      }),
      pb: (value: Property.Padding) => ({
        paddingBottom: value,
      }),
      pl: (value: Property.Padding) => ({
        paddingLeft: value,
      }),
      px: (value: Property.Padding) => ({
        paddingLeft: value,
        paddingRight: value,
      }),
      py: (value: Property.Padding) => ({
        paddingTop: value,
        paddingBottom: value,
      }),

      // A property for applying width/height together
      // size: (value: Property.Width) => ({
      //   width: value,
      //   height: value,
      // }),

      // A property to apply linear gradient
      linearGradient: (value: string) => ({
        backgroundImage: `linear-gradient(${value})`,
      }),

      // An abbreviated property for border-radius
      br: (value: Property.BorderRadius) => ({
        borderRadius: value,
      }),
    },
  })

export const globalStyles = globalCss({
  'html,body': {
    width: '100%',
    overflowX: 'hidden',
  },

  body: {
    fontFamily: '$sans',

    margin: 0,

    overflowX: 'hidden',

    '@bp1': {
      fontSize: '16px',
    },
    '@bp2': {
      fontSize: '18px',
    },
    '@bp4': {
      fontSize: '20px',
    },
  },
})
