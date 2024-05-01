import Image from 'next/image';
import { getUsers } from '@/utils/action';
import MainSection from '@/components/Main';
import { auth } from '@/utils/auth';
import MainView from '@/components/Main/MainView';
import Header from '@/components/Top/Header.js';
import AddFriends from '@/components/Side/AddFriendsSection';
import Feeds from '@/components/Main/Feeds';
import AddNewBar from '@/components/Main/AddNewBar';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <MainView>
        <Header />
        <AddNewBar ses={session} />
        <Feeds />
      </MainView>
    </div>
  );
}
