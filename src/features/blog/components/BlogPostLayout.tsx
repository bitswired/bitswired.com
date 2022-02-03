import Image from 'next/image'
import { AspectRatio } from '@components/core'
import { styled } from '@lib/stitches'

const Prose = styled('article', {
  color: 'red',
  maxWidth: '800px',
  margin: 'auto',
})

const Title = styled('h1', {
  fontSize: '5rem',
  fontWeight: '$light',
})

interface BlogPostLayoutProps {
  postMeta: BlogPostMeta
  children: JSX.Element
}

export function BlogPostLayout({ postMeta, children }: BlogPostLayoutProps) {
  console.log(postMeta)
  return (
    <>
      <Title>{postMeta.title}</Title>
      {/* <Box css={{ width: 300 }}> */}
      <AspectRatio.Root ratio={16 / 9}>
        <Image src={postMeta.image} layout="fill" />
      </AspectRatio.Root>
      {/* </Box> */}

      <Prose>{children}</Prose>
    </>
  )
}
