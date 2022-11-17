import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  const title = 'DM Tools'
  const description = 'A NextJS project by Alex Mills'

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title={title} description={description} />
      <Nav />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
