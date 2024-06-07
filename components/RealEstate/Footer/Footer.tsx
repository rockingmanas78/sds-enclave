import styles from '../RealEstate.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-top']}>
        <div className={styles.container}>
          <div className={styles['footer-brand']}>
            <a href="#" className={styles.logo}>
              <img src="./assets/images/logo-light.png" alt="Homeverse logo" />
            </a>
            <p className={styles['section-text']}>
              Lorem Ipsum is simply dummy text of the and typesetting industry. Lorem Ipsum is dummy text of
              the printing.
            </p>
            <ul className={styles['contact-list']}>
              <li>
                <a href="#" className={styles['contact-link']}>
                  {/* <ion-icon name="location-outline" /> */}
                  <address>Brooklyn, New York, United States</address>
                </a>
              </li>
              <li>
                <a href="tel:+0123456789" className={styles['contact-link']}>
                  {/* <ion-icon name="call-outline" /> */}
                  <span>+0123-456789</span>
                </a>
              </li>
              <li>
                <a href="mailto:contact@homeverse.com" className={styles['contact-link']}>
                  {/* <ion-icon name="mail-outline" /> */}
                  <span>contact@homeverse.com</span>
                </a>
              </li>
            </ul>
            <ul className={styles['social-list']}>
              <li>
                <a href="#" className={styles['social-link']}>
                  {/* <ion-icon name="logo-facebook" /> */}
                </a>
              </li>
              <li>
                <a href="#" className={styles['social-link']}>
                  {/* <ion-icon name="logo-twitter" /> */}
                </a>
              </li>
              <li>
                <a href="#" className={styles['social-link']}>
                  {/* <ion-icon name="logo-linkedin" /> */}
                </a>
              </li>
              <li>
                <a href="#" className={styles['social-link']}>
                  {/* <ion-icon name="logo-youtube" /> */}
                </a>
              </li>
            </ul>
          </div>
          <div className={styles['footer-link-box']}>
            <ul className={styles['footer-list']}>
              <li>
                <p className={styles['footer-list-title']}>Company</p>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  About
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Locations Map
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Contact us
                </a>
              </li>
            </ul>
            <ul className={styles['footer-list']}>
              <li>
                <p className={styles['footer-list-title']}>Services</p>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Wish List
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  My account
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Promotional Offers
                </a>
              </li>
            </ul>
            <ul className={styles['footer-list']}>
              <li>
                <p className={styles['footer-list-title']}>Customer Care</p>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Login
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  My account
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Wish List
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Order tracking
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles['footer-link']}>
                  Contact us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <div className={styles.container}>
          <p className={styles.copyright}>
            © 2022 <a href="#">codewithsadee</a>. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
