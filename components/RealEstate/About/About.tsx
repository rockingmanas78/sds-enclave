import styles from '../RealEstate.module.scss';

const About = () => {
  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <figure className={styles['about-banner']}>
          <img src=".../../realestate/images/about-banner-1.png" alt="House interior" />
          <img
            src=".../../realestate/images/about-banner-2.jpg"
            alt="House interior"
            className={styles['abs-img']}
          />
        </figure>
        <div className={styles['about-content']}>
          <p className={styles['section-subtitle']}>About Us</p>
          <h2 className={`${styles['h2']} ${styles['section-title']}`}>
            The Leading Real Estate Rental Marketplace.
          </h2>
          <p className={styles['about-text']}>
            Over 39,000 people work for us in more than 70 countries all over the This breadth of global
            coverage, combined with specialist services
          </p>
          <ul className={styles['about-list']}>
            <li className={styles['about-item']}>
              <div className={styles['about-item-icon']}>
                <ion-icon name="home-outline" />
              </div>
              <p className={styles['about-item-text']}>Smart Home Design</p>
            </li>
            <li className={styles['about-item']}>
              <div className={styles['about-item-icon']}>
                <ion-icon name="leaf-outline" />
              </div>
              <p className={styles['about-item-text']}>Beautiful Scene Around</p>
            </li>
            <li className={styles['about-item']}>
              <div className={styles['about-item-icon']}>
                <ion-icon name="wine-outline" />
              </div>
              <p className={styles['about-item-text']}>Exceptional Lifestyle</p>
            </li>
            <li className={styles['about-item']}>
              <div className={styles['about-item-icon']}>
                <ion-icon name="shield-checkmark-outline" />
              </div>
              <p className={styles['about-item-text']}>Complete 24/7 Security</p>
            </li>
          </ul>
          <p className={styles.callout}>
            "Enimad minim veniam quis nostrud exercitation llamco laboris. Lorem ipsum dolor sit amet"
          </p>
          <a href="#service" className={styles.btn}>
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
