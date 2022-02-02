import type { AppProps } from 'next/app'
import { MainLayout } from '@features/main-layout'
import { globalStyles } from '@lib/stitches'
//import 'styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
