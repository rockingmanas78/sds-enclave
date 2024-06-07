import Link from 'next/link';
import { useScrollTrigger } from '@mui/material';
import classNames from 'classnames';
import styles from './Navbar.module.scss';
// import { handleMoveToId } from 'utils';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import style from '../RealEstate/RealEstate.module.scss';

// Home  About Us // Gallery  // contact us
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import WhatsappImage from '../../public/whatsapp.png';

import Image from 'next/image';

type Menu = {
  text: string;
  onClick?: () => void;
  path: string;
};

export type NavbarProps = {
  dark?: boolean;
  setOpen?: () => void;
  logoColor?: string;
  home?: boolean;
};

export type LinkTag = {
  color: string;
};

const Navbar: React.FC<NavbarProps> = ({
  dark = false,
  logoColor = 'black',
  setOpen,
  home = false,
}: NavbarProps) => {
  const router = useRouter();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const menus: Menu[] = [
    {
      text: 'Home',
      onClick: () => router.push('/sponsor'),
      path: '/',
    },
    // {
    //   text: 'Real Estate',
    //   onClick: () => router.push('/real-estate'),
    //   path: '/real-estate',
    // },
    {
      text: 'About us',
      path: '#about',
    },
    {
      text: 'Gallery',
      path: '#gallery',
      // onClick: () => router.push('/career'),
      // path: '/pillar',
    },
    {
      text: 'News',
      path: '#blog',
      // onClick: () => router.push('/career'),
      // path: '/pillar',
    },
    {
      text: 'Contact Us',
      path: '#contactus',
      // onClick: () => router.push('/contact-us'),
      // path: '/contact-us',
    },
    // {
    //   text: 'Get Started',
    //   path: '/?cta=true',
    // },
  ];

  const [activeLogoColor, setActiveLogoColor] = useState('');

  if (!activeLogoColor) setActiveLogoColor(logoColor);

  useEffect(() => {
    setActiveLogoColor(trigger ? 'white' : logoColor);
  }, [trigger]);

  return (
    <nav
      style={{ color: '#000' }}
      className={classNames(`${styles.navbar} padding-wrapper`, {
        [styles.active]: trigger || dark,
      })}>
      <div className={styles['navbar-content']}>
        <div className={styles['navbar-content-box']}>
          <Link href="/">
            <a>
              <img src={`/sds_logo.png`} alt="Pillar Markets" width="auto" style={{ height: '60%' }} />
            </a>
          </Link>
        </div>
        <div className={styles['sidebar-desktop']}>
          {menus &&
            menus.map((menu, idx) => {
              const linkClass =
                idx !== menus.length - 1
                  ? trigger || dark
                    ? 'link-trigger'
                    : 'link'
                  : trigger || dark
                  ? 'button-trigger'
                  : 'button';
              const homeClass = home ? (trigger ? 'home-trigger' : 'home') : '';
              return (
                <div className={styles['navbar-content-box']} key={idx}>
                  <Link href={menu.path} passHref>
                    <a style={{ color: '#A70B01' }}>{menu.text}</a>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.hamburger} onClick={setOpen}>
        <MenuIcon style={{ fontSize: 30, color: '#A70B01' }} htmlColor={trigger ? 'white' : logoColor} />
      </div>
    </nav>
  );
};

export default Navbar;
