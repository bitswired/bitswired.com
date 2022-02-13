import React from 'react'
import { Box } from '@components/core'
import { useNewsletterStore } from '../stores'

interface NewsltetterSubscriptionModalOpenerProps {
  children: JSX.Element
}

export function NewsltetterSubscriptionModalOpener({
  children,
}: NewsltetterSubscriptionModalOpenerProps) {
  const toggle = useNewsletterStore((state) => state.toggle)

  return (
    <Box as="span" onClick={() => toggle()}>
      {children}
    </Box>
  )
}
