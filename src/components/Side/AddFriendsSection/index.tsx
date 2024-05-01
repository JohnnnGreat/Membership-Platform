'use client';
import { useEffect, useState } from 'react';
import styles from '../Side.module.scss';
import Image from 'next/image';
import { IoIosPersonAdd } from 'react-icons/io';
import { useRouter } from 'next/navigation';

const AddFriends = (prop: any) => {
  const { auth } = prop;
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const res = await fetch('/api/users', {
        next: { revalidate: 10 },
        // cache: 'no-store',
      });

      setUsers(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  getUser();

  const router = useRouter();
  const addFriendsList = (value: { user: string }) => {
    router.push(`/package/${value?.user}`);
  };

  return (
    <div className={styles.add}>
      <h1 className={styles.addText}>Add A new Fried </h1>
      {users.map((item: any) => (
        <div className={styles.addCard}>
          <img src={item?.image} alt="Add Image" />
          <div className={styles.content}>
            <h1>{item?.fullName}</h1>
            <div>
              <p>{item?.followes} Followers</p>
              <IoIosPersonAdd
                size={20}
                color="#4b4bff"
                onClick={() => {
                  addFriendsList({ user: auth?.sub });
                }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddFriends;
