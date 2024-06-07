import { handleMoveToId } from '../../utils';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';

import SliderComponent from './Slider';

interface Props {
  imgSrc: string;
}

const Banner: React.FC<Props> = ({ imgSrc }) => {
  return (
    <SliderComponent />
    // <section
    //   className={`${styles.banner} padding-wrapper complete`}
    //   style={{ backgroundImage: `url(${imgSrc})` }}>
    //   <div className={styles['banner-content']}>
    //     <h1>SDS Enclave</h1>
    //     <p className={`${styles['large']} large`}>
    //       SDS Enclave comprising with 2 BHK and 3 BHK premium residential flat Near Sudha Dairy, Adityapur,
    //       Jamshedpur with all modern amenities like club house, community hall, indoor game, gym, park and
    //       24X7 security provision etc.
    //     </p>
    //     <div className="elementor-widget-container">
    //       <ul className="widget-icon-list-items">
    //         <li className="widget-icon-list-item">
    //           <span className="widget-icon">
    //             <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //           </span>
    //           <span className="elementor-icon-list-text">Modern Apartment</span>
    //         </li>
    //         <li className="elementor-icon-list-item">
    //           <span className="widget-icon">
    //             <FontAwesomeIcon icon={faCheckCircle} color="#5d0600" />
    //           </span>
    //           <span className="elementor-icon-list-text">Gated Community Having Maximum Aminities</span>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className={styles['button-container']}>
    //       <button className="ui-button-2 primary" onClick={() => handleMoveToId()}>
    //         SEE PLAN & DEALS
    //       </button>
    //     </div>
    //   </div>
    //   <div
    //     style={{
    //       top: '90vh',
    //       zIndex: 1,
    //       position: 'fixed',
    //       width: '100%',
    //       left: '92%',
    //     }}>
    //     {' '}
    //     <img src="/whatsapp.png" className={styles.whatsappImage} />
    //   </div>
    // </section>
  );
};

export default Banner;
