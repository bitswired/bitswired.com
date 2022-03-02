import { AspectRatio, InternalLink, Image, Box, Button } from '@components/core'
import { styled } from '@lib/stitches'

const CardContainer = styled('article', {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center',
  borderRadius: '$md',
  backgroundColor: 'white',

  gap: '$2',

  fontSize: '1rem',

  '@media (min-width: 570px)': {
    fontSize: '1.25rem',
  },

  padding: '$4',

  color: '$text',

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
  width: '70%',
  gap: '$2',
})

const ImageContainer = styled('div', {
  width: '30%',
  maxWidth: '150px',
  overflow: 'hidden',
  borderRadius: '$sm',
})

const ImageRatio = styled(AspectRatio, {})

const Title = styled('div', {
  fontSize: '1.1em',
  fontWeight: '$bold',
})

const Description = styled('div', {
  fontSize: '0.8em',
})

const MetaRow = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  fontSize: '0.6em',
})

interface BlogPostCardMobileProps {
  postMeta: BlogPostMeta
}

export function BlogPostCardMobile({ postMeta }: BlogPostCardMobileProps) {
  let x = postMeta.title.substring(0, 57)
  if (x.length < postMeta.title.length) x += '...'

  let y = postMeta.description.substring(0, 77)
  if (y.length < postMeta.description.length) y += '...'

  return (
    <CardContainer>
      <MetaContainer>
        <Title>{x}</Title>

        <Description>{y}</Description>

        <MetaRow>
          <Box
            css={{
              textTransform: 'uppercase',
              color: '$secondary1',
              fontWeight: '$bold',
            }}
          >
            {postMeta.category}
          </Box>
          <Box css={{ color: '$gray9' }}>{postMeta.readMinutes} min</Box>
          <InternalLink href={`/blog/${postMeta.slug}`} title={postMeta.title}>
            <Button variant="primary-link" size="sm">
              READ
            </Button>
          </InternalLink>
        </MetaRow>
      </MetaContainer>

      <ImageContainer>
        <ImageRatio ratio={1}>
          <InternalLink href={`/blog/${postMeta.slug}`} title={postMeta.title}>
            <Image
              src={postMeta.image}
              layout="fill"
              objectFit="cover"
              sizes="200px"
              quality={50}
              alt={postMeta.title}
              priority
            />
          </InternalLink>
        </ImageRatio>
      </ImageContainer>
    </CardContainer>
  )
}
