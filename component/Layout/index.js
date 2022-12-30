

import Head from "next/head"
import Header from "../Header"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link href="https://getbootstrap.com/docs/5.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossOrigin="anonymous" />
                {/* Google Font Link */}
                <link href="https://fonts.googleapis.com/css?family=Playfair&#43;Display:700,900&amp;display=swap" rel="stylesheet" />
            </Head>
            <Header />
            {children}
            </>
    )
}
export default Layout