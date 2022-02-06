import Image from 'next/image'
import { AspectRatio, Box, Avatar } from '@components/core'
import { CONFIG } from '@config'
import { styled } from '@lib/stitches'
import { Prose } from './Prose'

const Title = styled('h1', {
  fontSize: '2.5rem',
  fontWeight: '$regular',

  '@bp2': {
    fontSize: '3.5rem',
  },
})

interface BlogPostLayoutProps {
  postMeta: BlogPostMeta
  children: JSX.Element
}

export function BlogPostLayout({ postMeta, children }: BlogPostLayoutProps) {
  console.log(postMeta)
  return (
    <Box css={{ maxWidth: '800px', margin: 'auto', px: '1rem' }}>
      <Title>{postMeta.title}</Title>
      {/* <Box css={{ width: 300 }}> */}
      <AspectRatio.Root ratio={16 / 9}>
        <Image
          src={postMeta.image}
          layout="fill"
          alt={postMeta.title}
          priority
        />
      </AspectRatio.Root>

      <Avatar size="lg" src={CONFIG.images.me} alt="me" />
      <Avatar size="md" src={CONFIG.images.me} alt="me" />
      <Avatar size="sm" src={CONFIG.images.me} alt="me" />

      <Prose>{children}</Prose>
    </Box>
  )
}
