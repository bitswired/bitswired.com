import { styled } from '@lib/stitches'

export const Prose = styled('article', {
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
    px: '0.2em',
    borderRadius: '3px',
    backgroundColor: '#DDD',
    fontFamily: '$mono',
    //color: props.theme.colors.secondary
    color: '$primary3',
  },

  figcaption: {
    fontSize: '1em',
    textAlign: 'center',
    fontFamily: '$serif',
  },

  table: {
    margin: 'auto',
    my: '2rem',
  },

  td: {
    border: '1px solid #ddd',
    padding: '8px',
  },

  th: {
    border: '1px solid #ddd',
    padding: '8px',

    py: '12px',
    textAlign: 'left',
    backgroundColor: '$primary1',
    color: 'white',
  },

  'tr:nth-child(even)': {
    backgroundColor: '#f2f2f2',
  },

  'tr:hover': {
    backgroundColor: '#ddd',
  },
})
