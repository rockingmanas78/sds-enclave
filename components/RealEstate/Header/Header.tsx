import styles from '../RealEstate.module.scss';

const Header = () => {
  return (
    <header className={styles.header} data-header="">
      <div className={styles.overlay} data-overlay="" />
      <div className={styles['header-top']}>
        <div className={styles.container}>
          <ul className={styles['header-top-list']}>
            <li>
              <a href="mailto:info@homeverse.com" className={styles['header-top-link']}>
                <span>info@homeverse.com</span>
              </a>
            </li>
            <li>
              <a href="#" className={styles['header-top-link']}>
                <address>15/A, Nest Tower, NYC</address>
              </a>
            </li>
          </ul>
          <div className={styles.wrapper}>
            <ul className={styles['header-top-social-list']}>
              <li>
                <a href="#" className={styles['header-top-social-link']}>
                  {/* <ion-icon name="logo-facebook" /> */}
                </a>
              </li>
              <li>
                <a href="#" className={styles['header-top-social-link']}>
                  {/* <ion-icon name="logo-twitter" /> */}
                </a>
              </li>
              <li>
                <a href="#" className={styles['header-top-social-link']}>
                  {/* <ion-icon name="logo-instagram" /> */}
                </a>
              </li>
              <li>
                <a href="#" className={styles['header-top-social-link']}>
                  {/* <ion-icon name="logo-pinterest" /> */}
                </a>
              </li>
            </ul>
            <button className={styles['header-top-btn']}>Add Listing</button>
          </div>
        </div>
      </div>
      <div className={styles['header-bottom']}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            <img src=".../../realestate/images/logo.png" alt="Homeverse logo" />
          </a>
          <nav className={styles.navbar} data-navbar="">
            <div className={styles['navbar-top']}>
              <a href="#" className={styles.logo}>
                <img src=".../../realestate/images/logo.png" alt="Homeverse logo" />
              </a>
              <button className={styles['nav-close-btn']} data-nav-close-btn="" aria-label="Close Menu">
                {/* <ion-icon name="close-outline" /> */}
              </button>
            </div>
            <div className={styles['navbar-bottom']}>
              <ul className={styles['navbar-list']}>
                <li>
                  <a href="#home" className={styles['navbar-link']} data-nav-link="">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className={styles['navbar-link']} data-nav-link="">
                    About
                  </a>
                </li>
                <li>
                  <a href="#service" className={styles['navbar-link']} data-nav-link="">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#property" className={styles['navbar-link']} data-nav-link="">
                    Property
                  </a>
                </li>
                <li>
                  <a href="#blog" className={styles['navbar-link']} data-nav-link="">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#cta" className={styles['navbar-link']} data-nav-link="">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className={styles['header-bottom-actions']}>
            <button className={styles['header-bottom-actions-btn']} aria-label="Search">
              {/* <ion-icon name="search-outline" /> */}
              <span>Search</span>
            </button>
            <button className={styles['header-bottom-actions-btn']} aria-label="Profile">
              {/* <ion-icon name="person-outline" /> */}
              <span>Profile</span>
            </button>
            <button className={styles['header-bottom-actions-btn']} aria-label="Cart">
              {/* <ion-icon name="cart-outline" /> */}
              <span>Cart</span>
            </button>
            <button
              className={styles['header-bottom-actions-btn']}
              data-nav-open-btn=""
              aria-label="Open Menu">
              {/* <ion-icon name="menu-outline" /> */}
              <span>Menu</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
