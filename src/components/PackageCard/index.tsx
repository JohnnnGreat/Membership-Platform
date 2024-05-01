import React from 'react';
import styles from './Package.module.scss';
import CardMain from './PackageCardMain';
import { auth } from '@/utils/auth';

const PackageCard = async () => {
  const session: any = await auth();
  const { email } = session;

  console.log(email);
  return (
    <div className={styles.package}>
      <div className={styles.packageWrapper}>
        <h1 className={styles.notifier}>
          You are logged in as <span>{email} </span>
        </h1>
        <h1 className={styles.selectP}>Select a Package</h1>
        <div className={styles.packageCardMainContainer}>
          <CardMain />
          <CardMain />
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
