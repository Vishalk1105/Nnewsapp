import '../styles/globals.css'
import Layout from '../component/Layout/index'
function MyApp({ Component, pageProps }) {
  return (
   <Layout>
    <Component {...pageProps} />
   </Layout>
      
   
   
      
    
  )
}

export default MyApp
