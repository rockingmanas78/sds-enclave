import { Virtual, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Styles from './Gallery.module.scss';
const Gallery = () => {
  const GalleryList = [
    '/swiperImages/aer.jpg',
    '/swiperImages/aer-ngt.jpg',
    '/swiperImages/basement-parking.jpg',
    '/swiperImages/block.jpg',
    '/swiperImages/gym.jpg',
    '/swiperImages/indoor-game.jpg',
    '/swiperImages/jogging-track.jpg',
    '/swiperImages/kids-play.jpg',
    '/swiperImages/marriage.jpg',
    '/swiperImages/ngt-fnt.jpg',
    '/swiperImages/night-rd.jpg',
    '/swiperImages/ren1.jpg',
    '/swiperImages/ren2.jpg',
    '/swiperImages/temple.jpg',
    '/swiperImages/temple2.jpg',
    '/swiperImages/terrace.jpg',
    '/swiperImages/terrace-garden.jpg',
    '/swiperImages/terrace-garden-ngt.jpg',
  ];

  const slides = GalleryList?.map((el, index) => {
    // console.log("🚀 ~ slides ~ el:", el);
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={`${el}`}
          // className=
          // width={350}
          // height={200}
          // style={{ width: '352px', height: '300px' }}
          className={Styles.sliderImage}
          alt={`Image ${index}`}
        />
      </div>
    );
  });
  return (
    <section id="gallery">
      <h1
        style={{
          fontSize: '30px',
          textAlign: 'center',
          fontWeight: 600,
          paddingTop: '170px',
        }}>
        Our Gallery
      </h1>
      <div style={{ backgroundColor: '#4b1e1e', height: '400px' }}>
        <div
          style={{
            width: '80%',
            margin: '0px auto',
            display: 'flex',
            height: '400px',
            alignItems: 'center',
          }}>
          <Swiper
            modules={[Virtual, Autoplay]}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 40,
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
            }}
            virtual
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}>
            {slides?.map((slideContent, index) => (
              <SwiperSlide key={index} virtualIndex={index} className="w-fit">
                {slideContent}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
