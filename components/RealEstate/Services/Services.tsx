import styles from '../RealEstate.module.scss';

const Services = () => {
  return (
    <section className={styles.service} id="service">
      <div className={styles.container}>
        <p className={styles['section-subtitle']}>Our Services</p>
        <h2 className={`${styles.h2} ${styles['section-title']}`}>Our Main Focus</h2>
        <ul className={styles['service-list']}>
          <li>
            <div className={styles['service-card']}>
              <div className={styles['card-icon']}>
                <img
                  src="../../realestate/images/service-1.png"
                  alt="Service icon"
                  className={styles['card-icon-img']}
                />
              </div>
              <h3 className={`${styles.h3} ${styles['card-title']}`}>
                <a href="#">Buy a home</a>
              </h3>
              <p className={styles['card-text']}>
                Over 1 million+ homes for sale available on the website, we can match you with a house you
                will want to call home.
              </p>
              <a href="#" className={styles['card-link']}>
                <span>Find A Home</span>
                {/* <ion-icon name="arrow-forward-outline" /> */}
              </a>
            </div>
          </li>
          <li>
            <div className={styles['service-card']}>
              <div className={styles['card-icon']}>
                <img
                  src="../../realestate/images/service-2.png"
                  alt="Service icon"
                  className={styles['card-icon-img']}
                />
              </div>
              <h3 className={`${styles.h3} ${styles['card-title']}`}>
                <a href="#">Rent a home</a>
              </h3>
              <p className={styles['card-text']}>
                Over 1 million+ homes for sale available on the website, we can match you with a house you
                will want to call home.
              </p>
              <a href="#" className={styles['card-link']}>
                <span>Find A Home</span>
                {/* <ion-icon name="arrow-forward-outline" /> */}
              </a>
            </div>
          </li>
          <li>
            <div className={styles['service-card']}>
              <div className={styles['card-icon']}>
                <img
                  src="../../realestate/images/service-3.png"
                  alt="Service icon"
                  className={styles['card-icon-img']}
                />
              </div>
              <h3 className={`${styles.h3} ${styles['card-title']}`}>
                <a href="#">Sell a home</a>
              </h3>
              <p className={styles['card-text']}>
                Over 1 million+ homes for sale available on the website, we can match you with a house you
                will want to call home.
              </p>
              <a href="#" className={styles['card-link']}>
                <span>Find A Home</span>
                {/* <ion-icon name="arrow-forward-outline" /> */}
              </a>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Services;
