import React from 'react';

interface Props {
  imageSrc: string;
  title: string;
  styles: any;
}

const AmenityCard: React.FC<Props> = ({ imageSrc, title, styles }) => {
  return (
    <div className={styles['pillar-card']}>
      <div className={styles['pillar-card-content']}>
        <img className={styles['pillar-card-image']} src={imageSrc} alt={title} />
        <div className={styles['pillar-card-text']}>
          <h4>{title}</h4>
        </div>
      </div>
    </div>
  );
};

export default AmenityCard;
