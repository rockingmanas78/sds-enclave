import useMediaQuery from '@mui/material/useMediaQuery';

import type { NextPage } from 'next';
import Head from 'next/head';

import Header from 'components/RealEstate/Header/Header';
import Hero from 'components/RealEstate/Hero/Hero';
import About from 'components/RealEstate/About/About';
import Services from 'components/RealEstate/Services/Services';
import Property from 'components/RealEstate/Property/Property';
import Features from 'components/RealEstate/Features/Features';
import Blog from 'components/RealEstate/Blog/Blog';
import CTA from 'components/RealEstate/CTA/CallToAction';
import Footer from 'components/RealEstate/Footer/Footer';

const Sponsor: NextPage = () => {
  const matches = useMediaQuery('(max-width:912px)');

  return (
    // <MainLayout>
    // <Head>
    //   <title>This is Real Estate</title>
    //   <meta
    //     name="description"
    //     content="Learn about recapitalization and other capital solutions serving the liquidity needs of real estate sponsors and their investors."
    //   />
    // </Head>
    <>
      <Head>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        {/* <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
      </Head>
      <Header />
      <Hero />
      <About />
      <Services />
      <Property />
      <Features />
      <Blog />
      <CTA />
      <Footer />
    </>

    // </MainLayout>
  );
};

export default Sponsor;
