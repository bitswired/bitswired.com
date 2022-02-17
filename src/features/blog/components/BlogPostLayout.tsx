import React from 'react'
import { AspectRatio, Box, Image } from '@components/core'
import { styled } from '@lib/stitches'
import { MetaZone } from './MetaZone'
import { Navigation } from './Navigation'
import { Prose } from './Prose'
import { Toc } from './Toc'

const Title = styled('h1', {
  fontSize: '2rem',
  fontWeight: '$regular',
  fontFamily: '$serif',
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
    <Box
      css={{
        display: 'grid',
        justifyContent: 'center',
        margin: 'auto',
        px: '1rem',
        columnGap: '2rem',
        // gridTemplateColumns: '1fr 2fr',
        gridTemplateAreas: '"main" "meta" "toc" "prose" ',

        '@media (min-width: 1000px)': {
          gridTemplateAreas: '"toc main main meta" "toc prose prose meta"',
          justifyContent: 'start',
        },
      }}
    >
      <Box
        css={{
          gridArea: 'toc',
          maxWidth: '800px',
        }}
      >
        <Box css={{ position: 'sticky', top: '150px' }}>
          <Toc toc={toc} />
        </Box>
      </Box>

      <Box
        css={{
          gridArea: 'meta',
          maxWidth: '800px',
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
  )
}
