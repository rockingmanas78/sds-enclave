import Link from 'next/link';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../../public/sds_logo.png';
import styles from '../RealEstate/RealEstate.module.scss';
// import styles from './Footer.module.scss';
import Image from 'next/image';

import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
      <section className={styles.cta} style={{ marginTop: '50px' }}>
        <div className={styles.container}>
          <div className={styles['cta-card']} style={{ backgroundColor: '#A70B01' }}>
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
      <footer className={styles.footer} style={{ marginBottom: '-100px' }}>
        <div className={styles['footer-top']}>
          <div className={styles.container}>
            <div className={styles['footer-brand']}>
              <a href="#" className={styles.logo}>
                <Image src={logo.src} alt="sds enclave logo" height={100} width={100} />{' '}
              </a>
              <p className={styles['section-text']}>
                SD Singh is a construction company in Jamshedpur ,India that specializes in building commercil
                and resedential properties such as houses,malls ,offices and hight tech parks.
              </p>
              <ul className={styles['contact-list']}>
                <li>
                  <a href="#" className={styles['contact-link']}>
                    {/* <ion-icon name="location-outline" /> */}
                    <address style={{ lineHeight: '23px' }}>
                      SD SINGH CONSTRUCTION COMPANY PVT LTD <br />
                      CITY OFFICE : 203 GAJRAJ Mansion, 2nd FLoor ,Bistupur,Jamshedpur,East
                      Singhbhum,Jharkhand-831001
                    </address>
                  </a>
                </li>
                <li>
                  <a href="tel:+0123456789" className={styles['contact-link']}>
                    {/* <ion-icon name="call-outline" /> */}
                    <span>
                      9334628676 <br /> 8986760030
                    </span>
                  </a>
                </li>
                <li style={{ display: 'flex', gap: '10px' }}>
                  <a
                    href="https://www.facebook.com/share/rRtt7YpfbZLRLJE3/?mibextid=qi2Omg"
                    className={styles['contact-link']}>
                    {/* <ion-icon name="call-outline" /> */}
                    <span>
                      <FacebookIcon />
                    </span>
                  </a>
                  <a
                    href="https://www.instagram.com/sdsenclave?igsh=azZwbndic3Y1MXhw"
                    className={styles['contact-link']}>
                    {/* <ion-icon name="call-outline" /> */}
                    <span>
                      <InstagramIcon />
                    </span>
                  </a>
                  <a
                    href="https://x.com/SDSEnclave?t=_8G3cQBP1WsQ7euMWQqsog&s=09"
                    className={styles['contact-link']}>
                    {/* <ion-icon name="call-outline" /> */}
                    <span>
                      <XIcon />
                    </span>
                  </a>
                </li>
                {/* <li>
                  <a href="mailto:contact@homeverse.com" className={styles['contact-link']}>
                    <ion-icon name="mail-outline" />
                    <span>contact@homeverse.com</span>
                  </a>
                </li> */}
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
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* Blog
                     */}
                    Promoters & Directors
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* All Products */}
                    New & Article
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* Locations Map
                     */}
                    Legal Notices
                  </a>
                </li>
                {/* <li>
                  <a href="#" className={styles['footer-link']}>
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    Contact us
                  </a>
                </li> */}
              </ul>
              <ul className={styles['footer-list']}>
                <li>
                  <p className={styles['footer-list-title']}>Support</p>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* Order tracking */}
                    Project Enquiry
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* Wish List */}
                    Construction Update
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* Login */}
                    Home Loan
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* My account */}
                    Site Visit
                  </a>
                </li>
                <li>
                  <a href="#" className={styles['footer-link']}>
                    {/* Terms &amp; Conditions */}
                    Contact Us
                  </a>
                </li>
                {/* <li>
                  <a href="#" className={styles['footer-link']}>
                    Promotional Offers
                  </a>
                </li> */}
              </ul>
              {/* <ul className={styles['footer-list']}>
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
              </ul> */}
            </div>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <div className={styles.container}>
            <p className={styles.copyright}>
              © 2022 <a href="#">Techbridge Innovations</a>. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
    // <section className={styles['footer-section']}>
    //   <div className={styles['footer-section-content']}>
    //     <img src="/logo-white.png" alt="Pillar Markets Logo footer" width={120} height={60} />
    //     <p>Digital Infrastructure Powering Private Real Estate</p>
    //     <a href="mailto:info@pillarmarkets.com">info@pillarmarkets.com</a>
    //     <div className={styles['button-container']}>
    //       <a target="_blank" rel="noopener noreferrer" className={styles['icon']}>
    //         <LinkedInIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
    //       </a>
    //       <a target="_blank" className={styles['icon']} rel="noopener noreferrer">
    //         <TwitterIcon fontSize="large" sx={{ color: 'white', fontSize: 28 }} />
    //       </a>
    //     </div>
    //   </div>
    //   <div className={styles['footer-section-disclaimer']}>
    //     <p>
    //       Past performance in no guarantee of future results. Any historical returns, expected returns, or
    //       probability projections may not reflect actual future performance and are provided by the sponsor of
    //       the investment opportunity and subject to change. All securities involve risk and may result in
    //       partial or total loss. Neither Pillar Markets Inc. nor any of its affiliates provide tax advice and
    //       do represent in any manner that the outcomes described herein will result in any particular tax
    //       treatment. Securities are offered through{' '}
    //       <a href="https://www.finalis.com/" target="_blank" rel="noopener noreferrer">
    //         Finalis Securities LLC
    //       </a>{' '}
    //       Member{' '}
    //       <a href="https://www.finra.org/" target="_blank" rel="noopener noreferrer">
    //         FINRA
    //       </a>
    //       /
    //       <a href="https://www.sipc.org/" target="_blank" rel="noopener noreferrer">
    //         SIPC
    //       </a>
    //       . Pillar Markets Inc. and Finalis Securities LLC are separate, unaffiliated entities.
    //     </p>
    //   </div>
    //   <footer>
    //     <p>
    //       More Information call Us
    //       <br /> +91 9334628676
    //     </p>
    //     <button
    //       style={{
    //         backgroundColor: '#A70B01',
    //         color: '#fff',
    //         fontSize: '16px',
    //         fontWeight: 500,
    //         borderRadius: '4px',
    //         padding: '10px 20px',
    //         // margin: '10px 15px',
    //         marginLeft: '20px',
    //       }}>
    //       Book Now
    //     </button>
    //     <p>
    //       WWW.SDSENCLAVE.COM
    //       <br /> Visit Our Website
    //     </p>
    //     {/* <hr style={{ border: '2px solid grey', width: '100%' }} /> */}
    //   </footer>
    //   <footer>
    //     <p>Copyright &copy; {new Date().getFullYear()} Pillar Markets Inc.</p>
    //     <Link href="/sponsor">Sponsors</Link>
    //     <Link href="/career">Careers</Link>
    //     <Link href="/terms-of-service">Terms of Service</Link>
    //     <Link href="/privacy-and-cookies">Privacy and Cookies</Link>
    //     <Link href="/confidentiality-agreement">Confidentiality Agreement</Link>
    //   </footer>
    // </section>
  );
};

export default Footer;
