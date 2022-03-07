import React from 'react'
import { AspectRatio, Box, Image } from '@components/core'
import { styled } from '@lib/stitches'
import { MetaZone } from './MetaZone'
import { Navigation } from './Navigation'
import { Prose } from './Prose'
import { Toc } from './Toc'

const Title = styled('h1', {
  fontSize: '2rem',
  fontWeight: '$bold',
  fontFamily: '$sans',
  color: '$text',

  '@bp2': {
    fontSize: '3rem',
  },
})

interface BlogPostLayoutProps {
  postMeta: BlogPostMeta
  children: JSX.Element
  toc: any
}

export function BlogPostLayout({
  postMeta,
  children,
  toc,
}: BlogPostLayoutProps) {
  return (
    <Box css={{ display: 'flex', justifyContent: 'center' }}>
      <Box
        as="article"
        css={{
          display: 'inline-grid',
          margin: 'auto',
          justifyContent: 'center',
          px: '1rem',
          columnGap: '4rem',
          gridTemplateAreas: '"main" "meta" "toc" "prose" ',

          '@media (min-width: 1000px)': {
            gridTemplateAreas: '"main aside" "prose aside"',
            justifyContent: 'start',
          },
        }}
      >
        <Box
          css={{
            gridArea: 'aside',
            '@media (max-width: 1000px)': {
              display: 'none',
            },
          }}
        >
          <Box
            as="div"
            css={{ position: 'sticky', top: '150px', width: 'max-content' }}
          >
            <Toc toc={toc} />
            <MetaZone postMeta={postMeta} />
          </Box>
        </Box>

        <Box
          css={{
            gridArea: 'toc',
            '@media (min-width: 1000px)': {
              display: 'none',
            },
          }}
        >
          <Box css={{ position: 'sticky', top: '150px' }}>
            <Toc toc={toc} />
          </Box>
        </Box>

        <Box
          css={{
            gridArea: 'meta',
            '@media (min-width: 1000px)': {
              display: 'none',
            },
          }}
        >
          <Box css={{ position: 'sticky', top: '150px' }}>
            <MetaZone postMeta={postMeta} />
          </Box>
        </Box>

        <Box
          css={{
            gridArea: 'main',
            maxWidth: '900px',
          }}
        >
          <Navigation postMeta={postMeta} />

          <Title>{postMeta.title}</Title>

          <AspectRatio ratio={16 / 9}>
            <Image
              src={postMeta.image}
              layout="fill"
              sizes="(max-width: 600px) 300px, 600px"
              quality={50}
              alt={postMeta.title}
              priority
            />
          </AspectRatio>
        </Box>

        <Box
          css={{
            gridArea: 'prose',
            maxWidth: '900px',
          }}
        >
          <Prose>{children}</Prose>
        </Box>
      </Box>
    </Box>
  )
}
