import { FaChevronRight } from 'react-icons/fa'
import {
  AspectRatio,
  Box,
  Avatar,
  Image,
  InternalLink,
  Icon,
} from '@components/core'
import { CONFIG } from '@config'
import { styled } from '@lib/stitches'
import { Prose } from './Prose'

interface NavigationProps {
  postMeta: BlogPostMeta
}

function Navigation({ postMeta }: NavigationProps) {
  return (
    <Box
      css={{
        display: 'flex',
        gap: '$2',
        alignItems: 'center',
        my: '2.5em',
      }}
    >
      <InternalLink href="/blog" title="Go back to blog">
        Blog
      </InternalLink>

      <Icon icon={<FaChevronRight />} css={{ marginBottom: '-8px' }} />

      <InternalLink href="/blog" title="Go back to blog categories">
        {postMeta.category}
      </InternalLink>

      {postMeta.series && (
        <>
          <Icon icon={<FaChevronRight />} css={{ marginBottom: '-8px' }} />

          <InternalLink href="/blog" title="Go back to blog series">
            {postMeta.series}
          </InternalLink>
        </>
      )}
    </Box>
  )
}

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
      <Navigation postMeta={postMeta} />

      <Title>{postMeta.title}</Title>
      {/* <Box css={{ width: 300 }}> */}
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

      <Avatar size="lg" src={CONFIG.images.me} alt="me" />
      <Avatar size="md" src={CONFIG.images.me} alt="me" />
      <Avatar size="sm" src={CONFIG.images.me} alt="me" />

      <Prose>{children}</Prose>
    </Box>
  )
}
