import React from 'react';
import Slider from 'react-slick';
import Head from 'next/head';
import styles from './Banner.module.scss';

// import { handleMoveToId } from 'utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';
// import imgSrc from '../../public/landingpage/happy-ethnic-family.jpeg';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
// import banner1 from '../../public/landingpage/happy-ethnic-family.jpeg';
// import banner2 from '../../public/landingpage/carausel-2.jpg';
// import banner3 from '../../public/landingpage/carausel-3.jpg';

const SliderComponent: React.FC = () => {
  const customRenderArrowPrev = (onClickHandler: any, hasPrev: any, label: any) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          zIndex: '2',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          fontSize: '24px',
          color: '#fff',
        }}></button>
    );

  const customRenderArrowNext = (onClickHandler: any, hasNext: any, label: any) =>
    hasNext && (
      <button
        type="button"
        onClick={(e) => {
          onClickHandler();
          window.scrollTo({
            top: 400,
            behavior: 'smooth',
          });
        }}
        title={label}
        style={{
          position: 'absolute',
          bottom: '140px',
          left: '50%',
          zIndex: '2',
          transform: 'translateX(-50%)',
          cursor: 'pointer',
          fontSize: '24px',
          color: '#fff',
          border: 'none',
          backgroundColor: 'transparent',
        }}>
        ↓
      </button>
    );

  const message = 'Hello! I would like to know more about your services.';
  const phoneNumber = '+919334628676';

  const handleWhatsapp = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.location.href = url;
  };

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };
  return (
    <>
      <Head>
        <title>SDS Enclave - Luxury Apartments in Jamshedpur | Flats in Adityapur & Pardih</title>
        <meta
          name="description"
          content="Discover Premium living at SDS Enclave with luxury flats in Jamshedpur ,Adityapur, and Paridh ,Explore our modern apartments and state-of-the-art amenities "
        />
      </Head>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        stopOnHover={true}
        swipeable={false}
        showArrows={false}
        // thumbWidth={150}
        // useKeyboardArrows={true}

        // renderArrowPrev={customRenderArrowPrev}
        // renderArrowNext={customRenderArrowNext}
      >
        <div>
          <section
            className={`${styles.banner} padding-wrapper complete`}
            style={{ backgroundImage: `url('/landingpage/happy-ethnic-family.jpeg')` }}>
            <div className={styles['banner-content']}>
              <h1>Welcome to SDS Enclave - Your Dream Home Awaits</h1>
              <h2>Experience Elegance and Comfort</h2>
              <p className={`${styles.large} large`} style={{ lineHeight: '23px', marginTop: '5px' }}>
                Explore our premium apartments through a virtual tour. SDS Enclave offers luxurious and
                comfortable living spaces designed for your lifestyle.
              </p>
              <div className="elementor-widget-container">
                <ul className="widget-icon-list-items">
                  <li
                    className="widget-icon-list-item"
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="widget-icon">
                      <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
                    </span>
                    <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
                      Modern Apartment
                    </span>
                  </li>
                  <li
                    className="elementor-icon-list-item"
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="widget-icon">
                      <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
                    </span>
                    <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
                      Gated Community Having Maximum Amenities
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles['button-container']}>
                <button
                  className="ui-button-2 primary"
                  style={{ backgroundImage: `url('/btngrad/btngradient.png')` }}>
                  View Now
                </button>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section
            className={`${styles.banner} padding-wrapper complete`}
            style={{ backgroundImage: `url('/landingpage/carausel-4.jpg')` }}>
            <div className={styles['banner-content']}>
              <h1>Welcome to SDS Enclave - Your Dream Home Awaits</h1>
              <h2>Modern and Elegant Designs</h2>
              <p className={`${styles.large} large`} style={{ lineHeight: '23px', marginTop: '5px' }}>
                Our apartments feature state-of-the-art interiors, providing you with a blend of modernity and
                elegance.
              </p>
              <div className="elementor-widget-container">
                <ul className="widget-icon-list-items">
                  <li
                    className="widget-icon-list-item"
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="widget-icon">
                      <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
                    </span>
                    <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
                      Modern Apartment
                    </span>
                  </li>
                  <li
                    className="elementor-icon-list-item"
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="widget-icon">
                      <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
                    </span>
                    <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
                      Gated Community Having Maximum Amenities
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles['button-container']}>
                <button
                  className="ui-button-2 primary"
                  style={{ backgroundImage: `url('/btngrad/btngradient.png')` }}>
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </div>
        <div>
          <section
            className={`${styles.banner} padding-wrapper complete`}
            style={{ backgroundImage: `url('/landingpage/carausel-5.jpg')` }}>
            <div className={styles['banner-content']}>
              <h1>Welcome to SDS Enclave - Your Dream Home Awaits</h1>
              <h2>Tranquility and Peace</h2>
              <p className={`${styles.large} large`} style={{ lineHeight: '23px', marginTop: '5px' }}>
                Located in a peaceful environment, SDS Enclave offers serene surroundings that help you relax
                and unwind.
              </p>
              <div className="elementor-widget-container">
                <ul className="widget-icon-list-items">
                  <li
                    className="widget-icon-list-item"
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="widget-icon">
                      <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
                    </span>
                    <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
                      Modern Apartment
                    </span>
                  </li>
                  <li
                    className="elementor-icon-list-item"
                    style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <span className="widget-icon">
                      <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
                    </span>
                    <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
                      Gated Community Having Maximum Amenities
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles['button-container']}>
                <button
                  className="ui-button-2 primary"
                  style={{ backgroundImage: `url('/btngrad/btngradient.png')` }}>
                  Discover More
                </button>
              </div>
            </div>
          </section>
        </div>
      </Carousel>
      <div className={styles.callContainer} onClick={handleCall}>
        <PhoneInTalkIcon sx={{ fontSize: '40px', color: '#a70b01' }} />
        {/* <img src="https://image.similarpng.com/very-thumbnail/2021/01/Call-icon-on-transparent-background-PNG.png" /> */}
      </div>
      <div className={styles.whatsappContainer} onClick={handleWhatsapp}>
        {' '}
        <img src="/whatsapp2.gif" className={styles.whatsappImage} />
      </div>
    </>
    // <Carousel
    //   autoPlay
    //   infiniteLoop
    //   // showIndicators={false}
    //   showStatus={false}
    //   showThumbs={true}
    //   thumbWidth={150}
    //   // showArrows={false}
    //   useKeyboardArrows={true}
    //   verticalSwipe="standard">
    //   <div>
    //     <section
    //       className={`${styles.banner} padding-wrapper complete`}
    //       style={{ backgroundImage: `url('/landingpage/happy-ethnic-family.jpeg')` }}>
    //       <div className={styles['banner-content']}>
    //         <h1>Discover Luxury Living at SDS Enclave</h1>
    //         <h2>Experience Elegance and Comfort</h2>
    //         <p className={`${styles['large']} large`} style={{ lineHeight: '23px', marginTop: '5px' }}>
    //           Explore our premium apartments through a virtual tour. SDS Enclave offers luxurious and
    //           comfortable living spaces designed for your lifestyle.
    //         </p>
    //         <div className="elementor-widget-container">
    //           <ul className="widget-icon-list-items">
    //             <li
    //               className="widget-icon-list-item"
    //               style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    //               <span className="widget-icon">
    //                 <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //               </span>
    //               <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
    //                 Modern Apartment
    //               </span>
    //             </li>
    //             <li
    //               className="elementor-icon-list-item"
    //               style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    //               <span className="widget-icon">
    //                 <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //               </span>
    //               <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
    //                 Gated Community Having Maximum Amenities
    //               </span>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className={styles['button-container']}>
    //           <button
    //             className="ui-button-2 primary"
    //             style={{ backgroundImage: `url('/btngrad/btngradient.png')` }}>
    //             View Now
    //           </button>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    //   <div>
    //     <section
    //       className={`${styles.banner} padding-wrapper complete`}
    //       style={{ backgroundImage: `url('/landingpage/carausel-2.jpg')` }}>
    //       <div className={styles['banner-content']}>
    //         <h1>Beautiful Interiors Await You</h1>
    //         <h2>Modern and Elegant Designs</h2>
    //         <p className={`${styles['large']} large`} style={{ lineHeight: '23px', marginTop: '5px' }}>
    //           Our apartments feature state-of-the-art interiors, providing you with a blend of modernity and
    //           elegance.
    //         </p>
    //         <div className="elementor-widget-container">
    //           <ul className="widget-icon-list-items">
    //             <li
    //               className="widget-icon-list-item"
    //               style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    //               <span className="widget-icon">
    //                 <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //               </span>
    //               <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
    //                 Modern Apartment
    //               </span>
    //             </li>
    //             <li
    //               className="elementor-icon-list-item"
    //               style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    //               <span className="widget-icon">
    //                 <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //               </span>
    //               <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
    //                 Gated Community Having Maximum Amenities
    //               </span>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className={styles['button-container']}>
    //           <button
    //             className="ui-button-2 primary"
    //             style={{ backgroundImage: `url('/btngrad/btngradient.png')` }}>
    //             Learn More
    //           </button>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    //   <div>
    //     <section
    //       className={`${styles.banner} padding-wrapper complete`}
    //       style={{ backgroundImage: `url('/landingpage/carausel-3.jpg')` }}>
    //       <div className={styles['banner-content']}>
    //         <h1>Serene Surroundings</h1>
    //         <h2>Tranquility and Peace</h2>
    //         <p className={`${styles['large']} large`} style={{ lineHeight: '23px', marginTop: '5px' }}>
    //           Located in a peaceful environment, SDS Enclave offers serene surroundings that help you relax
    //           and unwind.
    //         </p>
    //         <div className="elementor-widget-container">
    //           <ul className="widget-icon-list-items">
    //             <li
    //               className="widget-icon-list-item"
    //               style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    //               <span className="widget-icon">
    //                 <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //               </span>
    //               <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
    //                 Modern Apartment
    //               </span>
    //             </li>
    //             <li
    //               className="elementor-icon-list-item"
    //               style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
    //               <span className="widget-icon">
    //                 <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //               </span>
    //               <span className="elementor-icon-list-text" style={{ paddingLeft: '10px' }}>
    //                 Gated Community Having Maximum Amenities
    //               </span>
    //             </li>
    //           </ul>
    //         </div>
    //         <div className={styles['button-container']}>
    //           <button
    //             className="ui-button-2 primary"
    //             style={{ backgroundImage: `url('/btngrad/btngradient.png')` }}>
    //             Discover More
    //           </button>
    //         </div>
    //       </div>
    //     </section>
    //   </div>
    // </Carousel>
  );
};

export default SliderComponent;
