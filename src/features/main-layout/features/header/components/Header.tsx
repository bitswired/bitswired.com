import { useToggle } from '@mantine/hooks'
import React from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Logo, Icon, Box } from '@components/core'
import { styled } from '@lib/stitches'
import { MobileNavigation } from './MobileNavigation'
import { Navigation } from './Navigation'

const BarWrap = styled('header', {
  position: 'fixed',
  top: 0,
  left: 0,
  height: '80px',

  width: '100%',

  backdropFilter: 'blur(15px)',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',

  zIndex: '$1',
  overflow: 'hidden',

  transition: 'height 0.4s ease-in-out',

  '&[data-mobile-menu=true]': {
    transition: 'height 0.4s ease-in-out',
    height: '100vh',
  },
})

const Bar = styled('div', {
  display: 'flex',
  backgroundColor: 'black',
  width: '100%',
  boxSizing: 'border-box',
  height: '80px',
  boxShadow: '$xl',
  justifyContent: 'space-between',
  alignItems: 'center',
  px: '$8',
})

interface HeaderMinProps {
  isMobileMenuToggled: boolean
  toggleMobileMenu: () => void
}

function HeaderMin({ isMobileMenuToggled, toggleMobileMenu }: HeaderMinProps) {
  return (
    <>
      <Bar
        css={{
          '@media (min-width: 1023px)': {
            display: 'none',
          },
        }}
      >
        <Logo height="40px" />
        <Icon
          icon={isMobileMenuToggled ? <FaTimes /> : <FaBars />}
          css={{
            color: 'white',
            fontSize: '28px',
            '&:hover': { cursor: 'pointer' },
          }}
          onClick={() => toggleMobileMenu()}
        />
        {/* <FaBars style={{ color: 'white', fontSize: '32px' }} /> */}
      </Bar>

      {isMobileMenuToggled && (
        <Box
          onClick={() => toggleMobileMenu()}
          css={{
            '@media (min-width: 1023px)': {
              display: 'none',
            },
            paddingTop: '$11',
          }}
        >
          <MobileNavigation />
        </Box>
      )}
    </>
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
      <Logo height="40px" />
      <Navigation />
      <div />
    </Bar>
  )
}

export function Header() {
  const [isMobileMenuToggled, toggle] = useToggle(false, [false, true])

  return (
    <BarWrap data-mobile-menu={isMobileMenuToggled}>
      <HeaderMin
        isMobileMenuToggled={isMobileMenuToggled}
        toggleMobileMenu={toggle}
      />
      <HeaderMax />
    </BarWrap>
  )
}
