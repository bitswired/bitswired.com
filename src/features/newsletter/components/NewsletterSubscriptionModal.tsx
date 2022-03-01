import React from 'react'
import {
  Box,
  Dialog,
  DialogContent,
  Image,
  ExternalLink,
} from '@components/core'
import { styled } from '@lib/stitches'
import { NewsletterSubscriptionForm } from '..'
import { useNewsletterStore } from '../stores'

const ContentContainer = styled('div', {})

export function NewsletterSubscriptionModal() {
  const { isOpen, toggle } = useNewsletterStore()

  return (
    <Dialog open={isOpen} modal={false}>
      {/* <DialogTrigger>Dialog trigger</DialogTrigger> */}
      <DialogContent onPointerDownOutside={() => toggle()}>
        {/* <DialogTitle css={{ fontSize: '$7', '@bp2': { fontSize: '$12' } }}>
          Subscribe To The Newsletter
        </DialogTitle> */}
        {/* <DialogDescription>Dialog Content</DialogDescription> */}
        <ContentContainer>
          <Box
            css={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column-reverse',
              overflow: 'hidden',
              '@bp2': {
                flexDirection: 'row',
              },
            }}
          >
            <Box
              css={{
                display: 'flex',
                flexDirection: 'column',
                gap: '$4',
                padding: '$4',
                '@bp2': {
                  gap: '$8',
                  paddingLeft: '$8',
                  paddingTop: '$8',
                  maxWidth: '60%',
                },
              }}
            >
              <Box css={{ fontSize: '2rem', fontWeight: '$bold' }}>
                Subscribe To The Newsletter
              </Box>

              <Box css={{}}>
                Stay on top of Data, AI, Web Technologies and Blockchain.
                Subscribe and get curated, releveant content straight into your
                inbox.
              </Box>

              <Box
                css={{
                  padding: '$4',
                  '@bp2': {
                    padding: '0',
                  },
                }}
              >
                <NewsletterSubscriptionForm />
              </Box>

              <Box css={{ fontSize: '$2' }}>
                <ExternalLink href="/about#newsletter" title="newsletter">
                  More information
                </ExternalLink>
              </Box>
            </Box>

            <Box
              css={{
                position: 'relative',
                height: '150px',
                width: '100%',

                '@bp2': {
                  height: '400px',
                  width: '40%',
                },
              }}
            >
              <Image
                src="/general/newsletter.jpg"
                alt="newsletter"
                layout="fill"
                objectFit="cover"
              />
            </Box>
          </Box>
        </ContentContainer>
      </DialogContent>
    </Dialog>
  )
}
