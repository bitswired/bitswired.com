import { Property } from '@stitches/react/types/css'
import { styled } from '@lib/stitches'

const StyledLogo = styled('img', {
  height: '50px',
})

interface LogoProps {
  width?: Property.Width
  height?: Property.Height
}

export function Logo({ width, height }: LogoProps) {
  return (
    <StyledLogo
      src="/logo/bitswired-logo.svg"
      alt="logo"
      css={{
        width: width,
        height: height,
      }}
    />
  )
}
