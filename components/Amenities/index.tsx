/**import { Grid } from '@mui/material';
import { useRouter } from 'next/router';
import AmenityCard from './components/AmenityCard';
import styles from './Amenity.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Lightbulb } from '@mui/icons-material';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

interface iAmenityCards {
  title: string;
  image: string;
  path?: string;
}

const amenityCardsContent: iAmenityCards[] = [
  {
    image: 'Lightbulb',
    title: 'Institutional Quality',
  },
  {
    image: 'faBuilding',
    title: 'Data-First',
  },
  {
    image: '/landingpage/network-driven.png',
    title: 'Network-Driven',
  },
  {
    image: '/landingpage/capital-structure.png',
    title: 'Capital Structure Solutions',
    path: '/sponsor',
  },
];

const Amenities = () => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push('/sponsor');
  };

  return (
    <section className={styles.pillars}>
      <h3>Our Pillars</h3>
      <div className={styles['pillars-content']}>
        <Grid container>
          {amenityCardsContent.map(({ title, image, path }, index) => {
            const isLast = index === amenityCardsContent.length - 1;
            return (
              <Grid item xs={12} sm={6} lg={3} key={index}>
                <div
                  onClick={isLast ? handleNavigate : undefined}
                  style={{ cursor: isLast ? 'pointer' : 'default', width: '100%' }}>
                  <AmenityCard title={title} imageSrc={image} styles={styles} />

                  <FontAwesomeIcon icon={faBuilding} />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </div>
    </section>
  );
};

export default Amenities;  */

/*************** */

import { Grid } from '@mui/material';
import { SolutionType } from '../../types/solution';
import styles from './Amenity.module.scss';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import CachedOutlinedIcon from '@mui/icons-material/CachedOutlined';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faBuildingColumns,
  faCamera,
  faClock,
  faCloudSunRain,
  faDumbbell,
  faFireExtinguisher,
  faLightbulb,
  faMoneyBill,
  faParking,
  faWalking,
} from '@fortawesome/free-solid-svg-icons';
import { FlashlightOnOutlined } from '@mui/icons-material';
const solutions: SolutionType[] = [
  {
    title: 'Power Back Up',
    icon: <FontAwesomeIcon icon={faLightbulb} color="#C00D01" fontSize={28} />,
    content:
      'Depth and breadth of capital pool allows for timely execution along risk profiles and across the capital stack.',
  },
  {
    title: 'Club House',
    icon: <FontAwesomeIcon icon={faBuilding} color="#C00D01" fontSize={28} />,
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'Jogging and Srolling Track',
    icon: <FontAwesomeIcon icon={faWalking} color="#C00D01" fontSize={28} />,
    content:
      'Solve your needs while managing fees. Relative to competitors, we’re up to 75% cheaper - we focus on providing innovative solutions to real problems,  without reinventing the wheel.',
  },
  {
    title: 'Lift',
    icon: <FontAwesomeIcon icon={faBuildingColumns} color="#C00D01" fontSize={28} />,
    content:
      'Depth and breadth of capital pool allows for timely execution along risk profiles and across the capital stack.',
  },
  {
    title: 'Security',
    icon: <FontAwesomeIcon icon={faClock} color="#C00D01" fontSize={28} />,
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'Park',
    icon: <FontAwesomeIcon icon={faLightbulb} color="#C00D01" fontSize={28} />,
    content:
      'Depth and breadth of capital pool allows for timely execution along risk profiles and across the capital stack.',
  },
  {
    title: 'Reserved Parking',
    icon: <FontAwesomeIcon icon={faParking} color="#C00D01" fontSize={28} />,
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'Gymnasium',
    icon: <FontAwesomeIcon icon={faDumbbell} color="#C00D01" fontSize={28} />,
    content:
      'Solve your needs while managing fees. Relative to competitors, we’re up to 75% cheaper - we focus on providing innovative solutions to real problems,  without reinventing the wheel.',
  },
  {
    title: 'Rain Water Harvesting',
    icon: <FontAwesomeIcon icon={faCloudSunRain} color="#C00D01" fontSize={28} />,
    content:
      'Depth and breadth of capital pool allows for timely execution along risk profiles and across the capital stack.',
  },
  {
    title: 'CCTV Camera',
    icon: <FontAwesomeIcon icon={faCamera} color="#C00D01" fontSize={28} />,
    content:
      'Including all major capital decisions. No forced sales, no meddling LPs. Investors benefit from streamlined reporting and analytical tools.',
  },
  {
    title: 'Nearby Bank & ATM',
    icon: <FontAwesomeIcon icon={faMoneyBill} color="#C00D01" fontSize={28} />,
    content:
      'Solve your needs while managing fees. Relative to competitors, we’re up to 75% cheaper - we focus on providing innovative solutions to real problems,  without reinventing the wheel.',
  },
  {
    title: 'Fire Fighting Equipment',
    icon: <FontAwesomeIcon icon={faFireExtinguisher} color="#C00D01" fontSize={28} />,
    content:
      'Solve your needs while managing fees. Relative to competitors, we’re up to 75% cheaper - we focus on providing innovative solutions to real problems,  without reinventing the wheel.',
  },
];

const Amenities = () => {
  return (
    <section id="solutions" className={styles['pillar-solution']}>
      <div className={styles['pillar-solution-header']}>
        <h3>Amenities of SDS Enclave</h3>
      </div>
      <div className={styles['pillar-solution-content']}>
        <Grid container rowSpacing={1} columnSpacing={1}>
          {solutions.map((solution, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <div className={styles['pillar-solution-content-item']}>
                {solution.icon}
                <h3 className={styles['pillar-solution-content-item']}>{solution.title}</h3>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </section>
  );
};

export default Amenities;
