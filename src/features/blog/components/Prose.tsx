import { styled } from '@lib/stitches'

export const Prose = styled('article', {
  maxWidth: '800px',
  margin: 'auto',
  fontFamily: '$sans',

  color: '#1A202C',

  h1: {
    fontFamily: '$sans',
    fontSize: ['2.8em', '3.2rem'],
    my: '1em',
    fontWeight: 'normal',
    lineHeight: 1.1,
  },
  h2: {
    fontFamily: '$sans',
    fontSize: '2.4rem',
    my: '1em',
    fontWeight: 'normal',
    lineHeight: 1.1,
  },
  h3: {
    fontFamily: '$sans',
    fontSize: '1.8rem',
    my: '0.7em',
    fontWeight: 'normal',
    lineHeight: 1.1,
  },
  h4: {
    fontFamily: '$sans',
    fontSize: '1.4rem',
    my: '0.5m',
    fontWeight: 'bold',
    lineHeight: 1.1,
  },

  '& p': {
    lineHeight: '1.7',
    my: '1em',
    color: '#272727',
    fontSize: '1em',
  },

  ul: {
    paddingInlineStart: 0,
    listStylePosition: 'inside',
    ml: '1em',
  },
  ol: {
    paddingInlineStart: 0,
    listStylePosition: 'inside',
    ml: '1em',
  },
  li: {
    my: '0.5em',
  },
  blockquote: {
    fontFamily: '$serif',
    px: '$2',
    py: '$4',
    textAlign: 'center',
    fontSize: '2em',
    fontWeight: '$light',
    p: {
      margin: '0 !important',
      color: '#888 !important',
    },
  },
  code: {
    p: '0.1em',
    borderRadius: '3px',
    backgroundColor: '#DDD',
    fontFamily: '$mono',
    //color: props.theme.colors.secondary
    color: '$primary3',
  },
})
