import Link from 'next/link'
import { styled } from '@lib/stitches'

const StyledLink = styled('a', {
  color: 'red',
})

interface LinkProps {
  href: string
  title: string
  children: string
}

export function InternalLink({ href, title, children }: LinkProps) {
  return (
    <Link href={href} passHref>
      <StyledLink title={title}>{children}</StyledLink>
    </Link>
  )
}

export function ExternalLink({ href, title, children }: LinkProps) {
  return (
    <StyledLink
      href={href}
      title={title}
      target="_blank"
      rel="noreferrer noopener"
    >
      {children}
    </StyledLink>
  )
}
