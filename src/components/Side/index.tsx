import React from 'react';
import Logo from '../Top/Logo';
import styles from './Side.module.scss';
import AddFriends from './AddFriendsSection';
import { auth } from '@/utils/auth';
const SideNav = async () => {
  const session = await auth();

  return (
    <div className={styles.sideBar}>
      <Logo />
      <AddFriends auth={session} />
    </div>
  );
};

export default SideNav;
