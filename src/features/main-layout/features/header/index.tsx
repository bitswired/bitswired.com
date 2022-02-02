import { FaBars } from 'react-icons/fa'
import { Logo, Container } from '@components/core'
import { styled } from '@lib/stitches'
import { Navigation } from './components/Navigation'

const Bar = styled(Container, {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  boxSizing: 'border-box',
  backgroundColor: 'black',
  height: '75px',
  boxShadow: '$xl',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: '$4',
})

function HeaderMin() {
  return (
    <Bar
      css={{
        '@media (min-width: 1024px)': {
          display: 'none',
        },
      }}
    >
      <Logo height="30px" />
      <Navigation />
      <FaBars style={{ color: 'white' }} />
    </Bar>
  )
}

function HeaderMax() {
  return (
    <Bar
      css={{
        '@media (max-width: 1024px)': {
          display: 'none',
        },
      }}
    >
      <Logo height="30px" />
      <Navigation />
      <div />
    </Bar>
  )
}

export function Header() {
  return (
    <>
      <HeaderMin />
      <HeaderMax />
    </>
  )
}
