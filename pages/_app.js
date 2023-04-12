import '../styles/globals.css'
import Layout from '../Component/Layout'
import DataContextProvider from '../stores/DataContext'

function MyApp({ Component, pageProps }) {

  return (
    <DataContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataContextProvider>
  )
}

export default MyApp
