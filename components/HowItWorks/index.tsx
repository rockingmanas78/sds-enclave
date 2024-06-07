import styles from './HowItWorks.module.scss';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

interface StepComponentProps {
  step: number;
  title: string;
  description: string;
}

const CommonHowitWork: React.FC<StepComponentProps> = ({ step, title, description }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        boxShadow: '2px 0px 4px 0px',
        padding: '16px',

        borderRadius: '12px',
      }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* <span>step</span> */}
        <div
          style={{
            height: '60px',
            width: '60px',
            borderRadius: '50%',
            backgroundColor: '#C00D01',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '16px',
            fontWeight: 'bold',
          }}>
          {step}
        </div>
      </div>
      <div style={{ marginLeft: '12px' }}>
        <span
          style={{
            fontSize: '16px',
            fontWeight: 500,
            marginBottom: '5px',
          }}>
          {title}
        </span>
        <span style={{ fontSize: '16px', fontWeight: 400 }}>{description}</span>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  return (
    <section className={styles['how-it-works']}>
      <h3>How it Works</h3>
      <h6>Our process for owners of institutional-quality assets</h6>
      <Grid container spacing={3} style={{ width: '80%', margin: '0px auto' }}>
        <Grid item xs={12} md={6}>
          <CommonHowitWork
            step={1}
            title="Submit Your Details"
            description="Fill in the form or call us for the details on project"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommonHowitWork
            step={2}
            title="Schedule Site Visit"
            description="Book Site visit and experience constriuction yourself"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommonHowitWork
            step={3}
            title="Book Your Property"
            description="Book Your desired property to a particular location"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CommonHowitWork
            step={4}
            title="Paper Work"
            description="After Payment Complete the paperwork for ownership"
          />
        </Grid>
      </Grid>
      {/* <p>
        Pillar underwrites the GP <span>to institutional standards</span>
      </p> */}

      {/* <div className={styles['how-it-works-cards']}>
        <div className={styles['how-it-works-cards-small']}>
          <WarningAmberOutlinedIcon htmlColor="#FFD130" />
          <h4>GP does not pass due diligence</h4>
          <p>
            <span>Pillar works with GP</span> to shore up shortfalls by introducing third-party service
            providers and/or instituting asset management oversight
          </p>
        </div>
        <div className={styles['how-it-works-cards-icon']}>
          <ArrowForwardIosIcon htmlColor="#00838F" />
        </div>
        <div className={styles['how-it-works-cards-large']}>
          <CheckCircleOutlineIcon htmlColor="#00838F" />
          <h4>GP passes due diligence</h4>
          <div className={styles['how-it-works-cards-large-row']}>
            <p>Sponsor and Asset are onboarded onto platform</p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>

            <p>
              Pillar may close the asset on balance sheet and syndicate the risk or offer for best efforts
              execution
            </p>

            <div className={styles['how-it-works-cards-large-row-icon']}>
              <ArrowForwardIosIcon />
            </div>
            <p>Post-close ongoing asset reporting via automated ingestion of financial data</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default HowItWorks;
