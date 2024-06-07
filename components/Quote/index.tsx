import styles from './Quote.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCoffee } from '@fortawesome/free-solid-svg-icons';

interface Props {
  imgSrc: string;
}

const Quote: React.FC<Props> = ({ imgSrc }) => {
  return (
    <section
      className={`${styles.banner} padding-wrapper complete`}
      style={{ backgroundImage: `url(${imgSrc})`, height: '50vh' }}>
      <div className={styles.quoteContainer}>
        <div className={styles.quote}>
          "Our real business is not selling property, but helping our clients make the decision that best fits
          them."
        </div>
        <div className={styles.author}>~~ Prabhakar Singh</div>
      </div>
    </section>
  );
};

export default Quote;
