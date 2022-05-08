import '../styles/globals.css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Authprovider from '../components/Context/Authprovider';
import Head from 'next/head';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" crossOrigin="anonymous" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Mochiy+Pop+P+One&display=swap" rel="stylesheet" />

      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous" />

      <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

      <Script
        src="https://www.paypal.com/sdk/js?client-id=ARocv6bA5oiRz7EjDQJjnjehb_9MsfZCBptYj3GOhdGPyqmvGGTnIeki9R_O8tEdMf2Ih-EZKPU0bii1&currency=USD"></Script>
    </Head>
    <Authprovider>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </Authprovider>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
      crossOrigin="anonymous"></Script>
  </>
}

export default MyApp
