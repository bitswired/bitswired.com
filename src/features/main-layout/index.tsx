import dynamic from 'next/dynamic'
import { Box } from '@components/core'
import { Footer } from '@features/footer'
import { styled } from '@lib/stitches'
import { Header } from './features/header'
const NewsletterSubscriptionModal = dynamic(() =>
  import('@features/newsletter').then(
    (module: any) => module.NewsletterSubscriptionModal
  )
)

const Spacer = styled('div', {
  height: '80px',
})

interface MainLayoutProps {
  children: JSX.Element
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Spacer />
      <Box as="main">{children}</Box>
      <Footer />
      <NewsletterSubscriptionModal />
    </>
  )
}
