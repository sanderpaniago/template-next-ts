import  Head  from 'next/head'
import Layout from '../components/Layout'
import { ExemploProvider } from '../context/ExemploContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <ExemploProvider>
      <Head>
        <title>Exemplo</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ExemploProvider>
  ) 
}

export default MyApp
