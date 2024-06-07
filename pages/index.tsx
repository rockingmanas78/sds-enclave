import type { NextPage } from 'next';
import MainLayout from 'components/Layouts/MainLayout';
import Banner from 'components/Banner';
import Pillars from 'components/Pillars';
import { useEffect } from 'react';
// import CTA from 'components/CTA';
import { useRouter } from 'next/router';
import { handleMoveToId } from 'utils';
import About from 'components/About';
import Financial from 'components/Sponsor/Financial';
import PillarSolution from 'components/Sponsor/PillarSolution';
import HowItWorks from 'components/HowItWorks';
import Amenities from 'components/Amenities';
import Blog from 'components/Blog/Blog';
import Cards from 'components/Cards/Cards';
import Head from 'next/head';
import ContactUs from 'components/ContactUs';
import Quote from 'components/Quote';
import Gallery from 'components/Gallery/Gallery';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (router.query.cta) {
        handleMoveToId('cta');
      } else if (router.query['about-us']) {
        handleMoveToId('about-us');
      }
    }, 200);

    return () => {
      clearTimeout(timeout);
    };
  }, [router.query]);

  return (
    <>
      <Head>
        <title>SDS ENCLAVE</title>
        <meta
          name="description"
          content="SD Singh is a construction company in Jamshedpur ,India that specializes in building commercil and resedential properties such as houses,malls ,offices and hight tech parks."
        />

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        {/* <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> */}
      </Head>

      <MainLayout
        navbarProps={{
          logoColor: 'white',
          home: true,
        }}>
        <Banner imgSrc="/landingpage/happy-ethnic-family.jpeg" />

        {/* <Pillars /> */}

        <Cards />

        <Quote imgSrc="/quote/quote-banner.jpg" />
        <Gallery />
        {/* <Financial /> */}
        <About />
        {/* <PillarSolution /> */}
        <Amenities />
        <HowItWorks />
        <ContactUs />
        <Blog />
      </MainLayout>
    </>
  );
};

export default Home;
