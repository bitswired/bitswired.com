import Image from 'next/image'
import { AspectRatio, Box, Button, InternalLink } from '@components/core'
import { loader } from '@lib/next'
import { styled } from '@lib/stitches'

const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  gap: '$2',

  width: '100%',

  transition: 'box-shadow ease 0.5s, transform ease 0.2s',

  '&': {
    img: {
      transition: 'transform, filter ease 0.3s',
    },
  },

  '@media (hover: hover)': {
    '&:hover': {
      boxShadow: '$2xl',
      transform: 'translate(0, -10px)',
      img: {
        transform: 'scale(1.2)',
        filter: 'saturate(2.2)',
      },
    },
  },
})

const MetaContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',

  '& p': {
    margin: 0,
  },

  padding: '$4',
})

const Title = styled('p', {
  fontSize: '$4',
  fontWeight: '$bold',

  '@bp2': {
    fontSize: '$9',
  },
})

const MetaRow = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  fontSize: '$3',
})

const ImageContainer = styled(AspectRatio, {
  overflow: 'hidden',
})

interface BlogPostCardProps {
  postMeta: BlogPostMeta
}

export function BlogPostCard({ postMeta }: BlogPostCardProps) {
  return (
    <CardContainer>
      <ImageContainer ratio={16 / 9}>
        <InternalLink href={`/blog/${postMeta.slug}`} title={postMeta.title}>
          <Image
            loader={loader}
            src={postMeta.image}
            layout="fill"
            sizes="500px"
            quality={50}
            alt={postMeta.title}
            priority
          />
        </InternalLink>
      </ImageContainer>

      <MetaContainer>
        <Title>{postMeta.title}</Title>

        <MetaRow>
          <Box css={{ textTransform: 'uppercase', color: '$gray9' }}>
            {postMeta.category}
          </Box>
          <Box css={{ color: '$gray9' }}>{postMeta.readMinutes} min</Box>
          <InternalLink href={`/blog/${postMeta.slug}`} title={postMeta.title}>
            <Button variant="primary-link" size="sm">
              READ
            </Button>
          </InternalLink>
        </MetaRow>

        {postMeta.series && <Box>Series: {postMeta.series}</Box>}

        <Box as="p" css={{ color: '$text' }}>
          {postMeta.description}
        </Box>
      </MetaContainer>
    </CardContainer>
  )
}