import { styled } from '@lib/stitches'
import { Pages } from './Pages'
import { Socials } from './Socials'
import { Wireup } from './Wireup'

const FooterContainer = styled('footer', {
  display: 'grid',
  gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
  justifyContent: 'center',
  //   justifyItems: 'start',
  //   alignContent: 'start',
  //   justifyContent: 'start',
  rowGap: '$10',

  padding: '$6',
  paddingTop: '3em',

  backgroundColor: 'black',
  width: '100%',

  boxSizing: 'border-box',

  fontSize: '1.7rem',

  '@bp3': {
    gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    padding: '$10',
    fontSize: '2.5rem',
  },
})

const Copyright = styled('p', {
  color: '#AAA',
  width: '100%',
  backgroundColor: 'black',
  margin: 0,
  textAlign: 'center',
  py: '2rem',
  fontSize: '$4',
})

export function Footer() {
  return (
    <>
      <FooterContainer>
        <Wireup />
        <Socials />
        <Pages />
      </FooterContainer>
      <Copyright as="p">
        Copyright © 2021 Bitswired. All Rights Reserved.
      </Copyright>
    </>
  )
}
