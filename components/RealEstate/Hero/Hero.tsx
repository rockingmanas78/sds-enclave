import Image from 'next/image';
// import Header from './components/Header';
import styles from '../RealEstate.module.scss';
// import '../../styles/globals.scss';

// public\realestate\images\about-banner-1.png
const Hero = () => {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.container}>
        <div className={styles['hero-content']}>
          <p className={styles['hero-subtitle']}>
            <ion-icon name="home" />
            <span>Real Estate Agency</span>
          </p>
          <h2 className={`${styles['h1']} ${styles['hero-title']}`}>Find Your Dream House By Us</h2>
          <p className={styles['hero-text']}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
            labore.
          </p>
          <button className={styles.btn}>Make An Enquiry</button>
        </div>
        <figure className={styles['hero-banner']}>
          <img
            src=".../../realestate/images/hero-banner.png"
            alt="Modern house model"
            className={styles['w-100']}
          />
        </figure>
      </div>
    </section>
  );
};
export default Hero;
