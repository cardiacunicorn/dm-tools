import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav></Nav>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
