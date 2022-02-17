import React from 'react'
import { Box, Avatar, Button } from '@components/core'
import { CONFIG } from '@config'
import { NewsltetterSubscriptionModalOpener } from '@features/newsletter'

interface MetaZoneProps {
  postMeta: BlogPostMeta
}

export function MetaZone({ postMeta }: MetaZoneProps) {
  return (
    <Box
      as="aside"
      css={{
        display: 'flex',
        flexDirection: 'column',
        gap: '$4',
        mt: '1rem',
        color: '$text',
        backgroundColor: '$gray5',
        padding: '1rem',
        borderRadius: '$md',
      }}
    >
      <Box
        css={{
          display: 'flex',
          gap: '$5',
          alignItems: 'center',
        }}
      >
        <Avatar size="md" src={CONFIG.images.me} alt="me" />
        <Box css={{}}>
          <Box as="div" css={{ fontWeight: '$bold' }}>
            Jimi Vaubien
          </Box>
          <Box as="div">Machine Learning Engineer</Box>
        </Box>
      </Box>
      <Box css={{ display: 'flex', alignItems: 'center', gap: '$4' }}>
        <Box as="div">{postMeta.readMinutes} min</Box>{' '}
        <Box as="div">{postMeta.datePublished}</Box>
        <NewsltetterSubscriptionModalOpener>
          <Button variant="secondary-link" size="sm">
            Subscribe
          </Button>
        </NewsltetterSubscriptionModalOpener>
      </Box>
    </Box>
  )
}
