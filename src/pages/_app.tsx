import type { AppProps } from 'next/app'
// FIXME: use radix toast when available
import { Toaster } from 'react-hot-toast'
import { QueryClientProvider, QueryClient } from 'react-query'
import { MainLayout } from '@features/main-layout'
import { globalStyles } from '@lib/stitches'

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles()
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </QueryClientProvider>
  )
}

export default MyApp
