import React from 'react'
import { Box } from '@components/core'
import { styled } from '@lib/stitches'

const TocEntry = styled('a', {
  display: 'block',
  color: '$text',
  textDecoration: 'none',
  '&:hover': {
    color: '$secondary1',
    textDecoration: 'underline',
    cursor: 'pointer',
  },

  variants: {
    variant: {
      depth1: {
        paddingLeft: 0,
        fontSize: '1.2rem',
        marginBottom: '0.5rem',
      },
      depth2: {
        paddingLeft: '1rem',
        fontSize: '1rem',
        marginBottom: '0.2rem',
      },
      depth3: {
        paddingLeft: '1.5rem',
        fontSize: '0.8rem',
        marginBottom: '0.1rem',
      },
    },
  },
})

interface TocProps {
  toc: TocEntry[]
}

export function Toc({ toc }: TocProps) {
  if (typeof window === 'undefined') return null

  const getHref = (value: string) => {
    const id = value.toLowerCase().replace(/\s+/g, '-')
    return `${window.location.href.split('#')[0]}#${id}`
  }

  const move = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    value: string
  ) => {
    e.preventDefault()
    const id = value.toLowerCase().replace(/\s+/g, '-')
    const element = document.getElementById(id)
    if (!element) {
      return
    }
    const y = element.getBoundingClientRect().top + window.pageYOffset - 100
    window.scrollTo({ top: y, behavior: 'smooth' })
    history.replaceState({}, '', getHref(value))
  }

  return (
    <Box
      css={{
        backgroundColor: '$gray5',
        padding: '1rem',
        borderRadius: '$md',
        my: '1rem',
      }}
    >
      <Box
        css={{
          fontSize: '1.5rem',
          marginBottom: '1rem',
          fontWeight: 'bold',
        }}
      >
        Table of Content
      </Box>

      {toc.map((x) => (
        <TocEntry
          variant={`depth${x.depth}` as any}
          href={getHref(x.value)}
          key={x.value}
          onClick={(e) => move(e, x.value)}
        >
          {x.value}
        </TocEntry>
      ))}
    </Box>
  )
}
