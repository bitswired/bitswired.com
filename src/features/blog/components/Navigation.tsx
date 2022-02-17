import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Box, InternalLink, Icon } from '@components/core'

interface NavigationProps {
  postMeta: BlogPostMeta
}

export function Navigation({ postMeta }: NavigationProps) {
  return (
    <Box
      css={{
        display: 'flex',
        gap: '$2',
        alignItems: 'center',
        my: '2.5em',
      }}
    >
      <InternalLink variant="raw" href="/blog" title="Go back to blog">
        Blog
      </InternalLink>

      <Icon icon={<FaChevronRight />} css={{ marginBottom: '-8px' }} />

      <InternalLink
        variant="raw"
        href="/blog"
        title="Go back to blog categories"
      >
        {postMeta.category}
      </InternalLink>

      {postMeta.series && (
        <>
          <Icon icon={<FaChevronRight />} css={{ marginBottom: '-8px' }} />

          <InternalLink
            variant="raw"
            href="/blog"
            title="Go back to blog series"
          >
            {postMeta.series}
          </InternalLink>
        </>
      )}
    </Box>
  )
}
