import { AspectRatio, InternalLink, Image, Box } from '@components/core'
import { styled } from '@lib/stitches'

const HEIGHT = '15vh'

const CardContainer = styled('article', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'start',
  borderRadius: '$md',
  backgroundColor: 'white',
  overflow: 'hidden',
  height: HEIGHT,

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
  gap: '$2',
  width: `calc(100% - ${HEIGHT})`,
  // width: '100px',
})

const ImageContainer = styled('div', {
  width: HEIGHT,
  overflow: 'hidden',
  borderRadius: '$sm',
})

const ImageRatio = styled(AspectRatio, {})

const Title = styled('div', {
  fontSize: '1em',
  fontWeight: '$medium',
  fontFamily: '$serif',
  lineHeight: '1.5em',
  textTransform: 'capitalize',
  maxHeight: '3em',
  overflow: 'hidden',

  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
})

// const Description = styled('div', {
//   fontSize: '0.8em',
// })

const MetaRow = styled('div', {
  display: 'flex',
  gap: '$4',
  alignItems: 'center',
  fontSize: '0.8em',
})

interface BlogPostCardMobileProps {
  postMeta: BlogPostMeta
}

export function BlogPostCardMobile({ postMeta }: BlogPostCardMobileProps) {
  return (
    <CardContainer>
      <MetaContainer>
        <Title>{postMeta.title}</Title>

        {/* <Description>{y}</Description> */}

        <MetaRow>
          <Box css={{ color: '$gray9', fontFamily: '$serif' }}>
            {postMeta.dateModified}
          </Box>
          <Box css={{ color: '$gray9', fontFamily: '$serif' }}>
            {postMeta.readMinutes} min read
          </Box>
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
