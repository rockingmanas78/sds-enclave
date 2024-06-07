'use client';
import { useState } from 'react';
import styles from '../RealEstate/RealEstate.module.scss';
import Head from 'next/head';

// interface AboutProps {
//   aboutUsContent: string;
// }

const About = () => {
  // const [count, setCount] = useState(1500);
  let aboutUsContent = ` 
    Welcome to SDS Enclave, your premier destination for luxury apartments and modern flats in Jamshedpur, Adityapur, and Pardih. As leading real estate developers, we pride ourselves on delivering exceptional living spaces that blend comfort, style, and affordability. Our projects are designed to meet the diverse needs of our clients, offering top-notch amenities and strategic locations. Discover the best in real estate with SDS Enclave, where your dream home becomes a reality.
  `;
  let aboutUs = `At SDS Enclave, we pride ourselves on offering a unique blend of luxury, comfort, and innovation
            in our residential projects. With years of experience in real estate, startups, and technology,
            our team is dedicated to creating living spaces that exceed expectations and set new standards in
            the industry. Our journey began with a vision to redefine urban living by integrating modern
            amenities and high-quality construction with thoughtful design and planning. Each apartment at SDS
            Enclave is meticulously crafted to provide an elegant and serene living experience. Our commitment
            to excellence is reflected in every detail, from the sophisticated interiors to the
            well-maintained common areas and state-of-the-art facilities. We believe that a home is more than
            just a place to live; it's a place where memories are made and lives are enriched. That's why we
            go the extra mile to ensure that our residents have everything they need to lead a comfortable and
            fulfilling life. Our amenities include a clubhouse, community hall, indoor games, a gym, a park,
            and 24/7 security, all designed to enhance your living experience and foster a sense of community.
            At SDS Enclave, we understand the importance of location and convenience. Situated in a prime
            area, our residential complex offers easy access to essential services, shopping centers,
            educational institutions, and recreational facilities. Whether you're a young professional, a
            growing family, or a retiree, SDS Enclave is the perfect place to call home. Our team is dedicated
            to providing exceptional customer service and ensuring a seamless experience from the moment you
            express interest in our apartments. We assist with every step of the process, from scheduling a
            visit to completing the necessary documentation and moving in. Our goal is to make your transition
            to your new home as smooth and enjoyable as possible. Discover the difference with SDS Enclave.
            Experience a lifestyle of luxury, comfort, and convenience, and join a community where your needs
            and aspirations are our top priority. Welcome to your new home`;

  return (
    <>
      {/* <Head>
        <title>About SDS Enclave - Leading Real Estate Developers in Jamshedpur</title>
        <meta
          name="description"
          content="Learn about SDS Enclave, a premier real estate developer offering luxurious and affordable flats in Jamshedpur, Adityapur, and Pardih."
        />
      </Head> */}
      <section className={styles.about} id="about">
        <div className={styles.container}>
          <figure className={styles['about-banner']}>
            <img src="/realestate/images/about-banner-1.png" alt="House interior" />
            <img
              src="/realestate/images/about-banner-2.jpg"
              alt="House interior"
              className={styles['abs-img']}
            />
          </figure>

          <div className={styles['about-content']}>
            <h1 className={`${styles['h1']} ${styles['section-title']}`}>
              Experience Excellence in Real Estate with SDS Enclave
            </h1>
            {/* <p className={styles['section-subtitle']}>About Us</p> */}
            <div style={{ height: '550px', overflowY: 'scroll' }}>
              <p className={styles['about-text']} style={{ textAlign: 'justify', paddingRight: '10px' }}>
                {aboutUsContent}
              </p>
              <p className={styles['about-text']} style={{ textAlign: 'justify', paddingRight: '10px' }}>
                {aboutUs}
              </p>
            </div>
          </div>
        </div>
      </section>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <a
          href="./brochure.pdf"
          download="brochure.pdf"
          style={{
            backgroundColor: '#A70B01',
            color: '#fff',
            fontSize: '22px',
            fontWeight: 500,
            borderRadius: '4px',
            padding: '12px 24px',
            marginBottom: '40px',
          }}>
          Download Brochure
        </a>
      </div>
    </>
  );
};

export default About;

// import React from 'react';
// import { Grid } from '@mui/material';
// import { PersonType } from 'types/person';
// import Person from './components/Person';
// import styles from './About.module.scss';

// const people: PersonType[] = [
//   {
//     id: 1,
//     name: 'Anthony Dominguez',
//     avatar: '/people/1.png',
//     role: 'CHIEF EXECUTIVE OFFICER',
//     summary:
//       'Real estate fintech entrepreneur (LEX, Vistia), global macro investments (Pharo, Lehman Brothers), IU Kelley',
//     description: `Anthony Dominguez is an experienced fintech entrepreneur, most recently as the founding president of LEX Markets, the commercial real estate platform which executed the first-ever IPO of a single-asset commercial real estate security. Prior to that he founded a home financing fintech company, Vistia, which was acquired by a competitor in 2017. He previously worked in capital markets focused primarily on emerging markets investments in FX, rates, and credit (Pharo Management, Lehman Brothers). Steven is a graduate of Indiana University's Kelley School of Business and is a CFA charterholder.`,
//   },

//   {
//     id: 2,
//     name: 'Anthony Dominguez',
//     avatar: '/people/1.png',
//     role: 'CHIEF INVESTMENT OFFICER',
//     summary:
//       'Institutional allocator (Purdue University endowment, INPRS), real estate private equity (Strategic Capital, Lehman Brothers), IU Kelley ',

//     description: `Anthony Dominguez has 20+ years' experience in real estate, initially working in his family's hotels while in high school, then as an institutional real estate private equity investor (Lehman Brothers, Strategic Capital Partners), and for the last 10 years as an institutional allocator ($30bn INPRS, $4bn Purdue University endowment). Throughout his professional career, Sanjay has also managed his family's investments in farmland, hotels, and multifamily assets. Sanjay is a graduate of Indiana University's Kelley School of Business and is a CAIA charterholder.`,
//   },

//   {
//     id: 3,
//     name: 'Anthony Dominguez',
//     avatar: '/people/1.png',
//     role: 'CHIEF OPERATING OFFICER',
//     summary:
//       'Startup executive (Second Measure), Securities Division (Goldman Sachs), Stanford GSB & Cornell Dyson School of Business ',

//     description: `Anthony Dominguez has 17+ years of experience working with institutional investors and building businesses in both the financial services and technology start-up space. After 13 years at Goldman Sachs, Ed most recently was the Head of Sales and Customer Success at Second Measure, a data science technology company focused on providing analytics to institutional investors. Ed was  involved in managing sales/business development, product, and operations. His leadership helped scale Second Measure through growth to acquisition by Bloomberg LP in 2020. Ed holds degrees from the Stanford Graduate School of Business and Cornell University's Dyson School of Business.`,
//   },

//   {
//     id: 4,
//     name: 'Anthony Dominguez',
//     avatar: '/people/1.png',
//     role: 'CHIEF TECHNOLOGY OFFICER',
//     summary:
//       'Fintech CTO (Finitive), financial software engineering (Heidmar), Bangalore University (Engineering) ',
//     description: `Anthony Dominguez is a technology veteran bringing over 2 decades of experience in Engineering, Product, Analytics, Infrastructure and Cyber Security. Most recently, he built the technology powering Finitive, the institutional investment platform for private credit handling billions in transactions, and scaled their engineering organization in 4 different continents. Prior to that, Kiran spent over 15 years at a Morgan Stanley-backed global trading organization overseeing platforms and systems for freight trading, ERP, business intelligence, analytics, and risk management. Kiran holds an Engineering degree from Bangalore University.`,
//   },
// ];
// const About = () => {
//   const [show, setShow] = React.useState(false);

//   const toggleShow = () => {
//     setShow((value) => !value);
//   };
//   console.log(styles);

//   return (
//     <section id="about-us" className={styles.about}>
//       <div className={styles['about-header']}>
//         <h3>About Us</h3>
//         <p>A top-tier team deeply experienced in real estate, startups, and technology.</p>
//       </div>
//       <div className={styles['about-content']}>
//         <Grid container columnSpacing={2} rowSpacing={2}>
//           {people.map((person, index) => (
//             <Grid item xs={12} sm={12} md={6} lg={6} key={index}>
//               <Person person={person} styles={styles} show={show} toggleShow={toggleShow} />
//             </Grid>
//           ))}
//         </Grid>
//       </div>
//     </section>
//   );
// };

// export default About;
