import React from 'react';
import styles from '../Package.module.scss';

const CardMain = () => {
  return (
    <div className={styles.packageCard}>
      <div className={styles.packageCardHeader}>
        <h2>
          5000/ <span>Naira</span>
        </h2>
        <h1>Monthly Package</h1>
      </div>

      <div className={styles.packageDetails}>
        <ul>
          <li>Access to Only 3 Pictures</li>
          <li>Send Message Seasonlessly</li>
          <li>Access to subscribe to Email Address</li>
        </ul>
      </div>

      <button>Select Package</button>
    </div>
  );
};

export default CardMain;
