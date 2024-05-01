import Feeds from '@/components/Main/Feeds';
import MainView from '@/components/Main/MainView';
import AddFriends from '@/components/Side/AddFriendsSection';
import React from 'react';
import { auth } from '@/utils/auth';
import Header from '@/components/Top/Header.js';

const TextPage = async () => {
  const session = await auth();
  return (
    <div>
      <MainView>
        <Header />
        <AddFriends session={session} />
        <Feeds />
      </MainView>
    </div>
  );
};

export default TextPage;
