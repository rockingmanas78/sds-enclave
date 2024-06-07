import styles from '../RealEstate.module.scss';

const Features = () => {
  const amentiesArray = [
    {
      icon: 'car-sport-outline',
      heading: 'Parking Space',
    },
    {
      icon: 'water-outline',
      heading: 'Swimming Pool',
    },
    {
      icon: 'shield-checkmark-outline',
      heading: 'Private Security',
    },
    {
      icon: 'fitness-outline',
      heading: 'Medical Center',
    },
    {
      icon: 'library-outline',
      heading: 'Library Area',
    },

    {
      icon: 'bed-outline',
      heading: 'King Size Beds',
    },

    {
      icon: 'home-outline',
      heading: 'Smart Homes',
    },
    {
      icon: 'football-outline',
      heading: 'Kid’s Playland',
    },
  ];

  return (
    <section className={styles.features}>
      <div className={styles.container}>
        <p className={styles['section-subtitle']}>Our Aminities</p>
        <h2 className={`${styles.h2} ${styles['section-title']}`}>Building Aminities</h2>
        <ul className={styles['features-list']}>
          {amentiesArray?.map((each, index) => {
            return (
              <li key={index}>
                <a href="#" className={styles['features-card']}>
                  <div className={styles['card-icon']}>
                    <ion-icon name={each?.icon} />
                  </div>
                  <h3 className={styles['card-title']}>{each?.heading}</h3>
                  <div className={styles['card-btn']}>
                    <ion-icon name="arrow-forward-outline" />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Features;
