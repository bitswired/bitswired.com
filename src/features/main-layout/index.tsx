import { styled } from '@lib/stitches'
import { Header } from './features/header'

const Spacer = styled('div', {
  height: '90px',
})

interface MainLayoutProps {
  children: JSX.Element
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header />
      <Spacer />
      {children}
    </>
  )
}
