import '../styles/globals.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Layout from '../Components/Layout/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
