import styles from '../RealEstate.module.scss';

const CTA = () => {
  return (
    <section className={styles.cta} id="cta">
      <div className={styles.container}>
        <div className={styles['cta-card']}>
          <div className={styles['card-content']}>
            <h2 className={`${styles.h2} ${styles['card-title']}`}>Looking for a dream home?</h2>
            <p className={styles['card-text']}>We can help you realize your dream of a new home</p>
          </div>
          <button className={`${styles.btn} ${styles['cta-btn']}`}>
            <span>Explore Properties</span>
            {/* <ion-icon name="arrow-forward-outline" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
