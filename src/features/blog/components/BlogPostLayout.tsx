import Image from 'next/image'
import { AspectRatio, Box, Avatar } from '@components/core'
import { CONFIG } from '@config'
import { loader } from '@lib/next'
import { styled } from '@lib/stitches'
import { Prose } from './Prose'

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
}

export function BlogPostLayout({ postMeta, children }: BlogPostLayoutProps) {
  return (
    <Box css={{ maxWidth: '800px', margin: 'auto', px: '1rem' }}>
      <Title>{postMeta.title}</Title>
      {/* <Box css={{ width: 300 }}> */}
      <AspectRatio ratio={16 / 9}>
        <Image
          loader={loader}
          src={postMeta.image}
          layout="fill"
          sizes="(max-width: 600px) 300px, 600px"
          quality={50}
          alt={postMeta.title}
          priority
        />
      </AspectRatio>

      <Avatar size="lg" src={CONFIG.images.me} alt="me" />
      <Avatar size="md" src={CONFIG.images.me} alt="me" />
      <Avatar size="sm" src={CONFIG.images.me} alt="me" />

      <Prose>{children}</Prose>
    </Box>
  )
}
