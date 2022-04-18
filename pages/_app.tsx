import { useState } from 'react'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    }
  }))

  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps}/>
    </QueryClientProvider>
  )
}

export default MyApp
