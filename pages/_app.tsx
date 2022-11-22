import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Header from '../components/Header'

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
