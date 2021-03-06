import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css';
import '../../styles/index.css'
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>   
  )   
}

export default MyApp
