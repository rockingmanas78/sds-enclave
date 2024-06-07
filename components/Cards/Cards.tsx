import React from 'react';
import styles from './Cards.module.scss';
import ApartmentIcon from '@mui/icons-material/Apartment';
import Grid from '@mui/material/Grid';

const Cards = () => {
  const phoneNumber = '+919334628676';
  const cardData = [
    {
      type: '2 BHK',
      size: '845 SQ-FT FLAT',
      price: '27.04 Lac*',
      features: ['Power Back Up', 'Lift', 'Rain Water Harvesting', 'Club House', 'Gymnasium', 'Park'],
    },
    {
      type: '3 BHK',
      size: '1063 SQ-FT FLAT',
      price: '34.01 Lac*',
      features: ['Power Back Up', 'Lift', 'Rain Water Harvesting', 'Club House', 'Gymnasium', 'Park'],
    },
    {
      type: '3 BHK',
      size: '1303 SQ-FT FLAT',
      price: '41.70 Lac*',
      features: ['Power Back Up', 'Lift', 'Rain Water Harvesting', 'Club House', 'Gymnasium', 'Park'],
    },
  ];

  const SecondCardsData = [
    {
      type: '3 BHK',
      size: '1370 SQ-FT FLAT',
      price: '43.84 Lac*',
      features: ['Power Back Up', 'Lift', 'Rain Water Harvesting', 'Club House', 'Gymnasium', 'Park'],
    },
    {
      type: '3 BHK',
      size: '1411 SQ-FT FLAT',
      price: '45.15 Lac*',
      features: ['Power Back Up', 'Lift', 'Rain Water Harvesting', 'Club House', 'Gymnasium', 'Park'],
    },
  ];

  const handleDial = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Grid container spacing={2}>
          {cardData.map((card, index) => (
            <Grid item xs={12} md={4}>
              <div className={styles.card} key={index}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      marginBottom: '10px',
                      borderRadius: '50%',

                      border: '4px solid green',

                      height: '70px',
                      width: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ApartmentIcon style={{ color: '#A70B01' }} />
                  </div>
                </div>
                <p style={{ margin: '0px', fontSize: '16px' }}>{card.size}</p>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>{card.type}</h2>
                <ul>
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.price}>₹ {card.price}</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button onClick={handleDial} className={styles.enquireBtn}>
                    ENQUIRE NOW!
                  </button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={styles.cards}>
        <Grid container spacing={2}>
          {SecondCardsData.map((card, index) => (
            <Grid item xs={12} md={6}>
              <div className={styles.card} key={index}>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <div
                    style={{
                      marginBottom: '10px',
                      borderRadius: '50%',

                      border: '4px solid green',

                      height: '70px',
                      width: '70px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ApartmentIcon style={{ color: '#A70B01' }} />
                  </div>
                </div>
                <p style={{ margin: '0px', fontSize: '16px' }}>{card.size}</p>
                <h2 style={{ fontSize: '28px', fontWeight: 'bold' }}>{card.type}</h2>
                <ul>
                  {card.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className={styles.price}>₹ {card.price}</div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <button className={styles.enquireBtn}>ENQUIRE NOW!</button>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Cards;
