import React from 'react'
import { Dialog, DialogContent, DialogTitle } from '@components/core'
import { styled } from '@lib/stitches'
import { NewsletterSubscriptionForm } from '..'
import { NewsletterModalContext } from '../providers/NewsletterModalProvider'

const ContentContainer = styled('div', {
  padding: '$4',
})

export function NewsletterSubscriptionModal() {
  const { isOpen, toggle } = React.useContext(NewsletterModalContext)

  return (
    <Dialog open={isOpen} modal={false}>
      {/* <DialogTrigger>Dialog trigger</DialogTrigger> */}
      <DialogContent onPointerDownOutside={() => toggle()}>
        <DialogTitle css={{ fontSize: '$12' }}>
          Subscribe To The Newsletter
        </DialogTitle>
        {/* <DialogDescription>Dialog Content</DialogDescription> */}
        <ContentContainer>
          <NewsletterSubscriptionForm />
        </ContentContainer>
      </DialogContent>
    </Dialog>
  )
}
