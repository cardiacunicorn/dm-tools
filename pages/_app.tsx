import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
