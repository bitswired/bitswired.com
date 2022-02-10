import React from 'react'
import { Box } from '@components/core'
import { NewsletterModalContext } from '../providers/NewsletterModalProvider'

interface NewsltetterSubscriptionModalOpenerProps {
  children: JSX.Element
}

export function NewsltetterSubscriptionModalOpener({
  children,
}: NewsltetterSubscriptionModalOpenerProps) {
  const { toggle } = React.useContext(NewsletterModalContext)
  return (
    <Box as="span" onClick={() => toggle()}>
      {children}
    </Box>
  )
}
