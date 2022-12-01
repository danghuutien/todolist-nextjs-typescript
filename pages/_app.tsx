import '../styles/globals.css'
import '../styles/fontawesome-free-6.2.0-web/css/all.min.css'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}