import { Property } from '@stitches/react/types/css'
import Link from 'next/link'
import { styled } from '@lib/stitches'

const StyledLink = styled('a', {
  color: '$secondary1',

  '&:hover': {
    textDecoration: 'underline',
  },

  variants: {
    variant: {
      underlined: {
        textDecoration: 'underline',
      },
      raw: {
        textDecoration: 'none',
      },
    },
  },
  defaultVariants: {
    variant: 'underline',
  },
})

type LinkVariant = 'raw' | 'underlined'

interface LinkProps {
  href: string
  title: string
  children: string | JSX.Element
  variant?: LinkVariant
  color?: Property.Color
}

export function InternalLink({
  href,
  title,
  variant,
  color,
  children,
}: LinkProps) {
  return (
    <Link href={href} passHref>
      <StyledLink variant={variant} title={title} css={{ color }}>
        {children}
      </StyledLink>
    </Link>
  )
}

export function ExternalLink({
  href,
  title,
  variant,
  color,
  children,
}: LinkProps) {
  return (
    <StyledLink
      variant={variant}
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer noopener"
      css={{ color }}
    >
      {children}
    </StyledLink>
  )
}
