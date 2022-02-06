import * as AvatarPrimitive from '@radix-ui/react-avatar'
import { styled } from '@stitches/react'
import React from 'react'

const StyledAvatar = styled(AvatarPrimitive.Root, {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  verticalAlign: 'middle',
  overflow: 'hidden',
  userSelect: 'none',

  borderRadius: '100%',
  backgroundColor: 'balck',

  width: '$$size',
  height: '$$size',

  variants: {
    size: {
      sm: {
        $$size: '45px',
      },
      md: {
        $$size: '75px',
      },
      lg: {
        $$size: '100px',
      },
    },
  },
  defaultVariants: {
    size: 'md',
  },
})

const StyledImage = styled(AvatarPrimitive.Image, {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: 'inherit',
})

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  color: 'purple',
  fontSize: 15,
  lineHeight: 1,
  fontWeight: 500,
})

type SizeVariant = 'sm' | 'md' | 'lg'

interface AvatarProps {
  src: string
  alt: string
  size: SizeVariant
}

export function Avatar({ src, alt, size }: AvatarProps) {
  return (
    <StyledAvatar size={size}>
      <StyledImage src={src} alt={alt} />
      <StyledFallback delayMs={600}>CT</StyledFallback>
    </StyledAvatar>
  )
}
