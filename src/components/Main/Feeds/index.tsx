'use client';
import React, { useEffect, useState } from 'react';
import styles from '../Main.module.scss';
import Profile from './Profile';
import Image from 'next/image';
import { SlLike } from 'react-icons/sl';
import { FaShare } from 'react-icons/fa';

const Feeds = () => {
  const [dataArray, setData] = useState([]);
  const [showLoader, setShowLoader] = useState(true);

  const getPost = async () => {
    try {
      const res = await fetch('/api/posts', { next: { revalidate: 0 } });
      setData(await res.json());
      setShowLoader(false);
    } catch (err) {
      console.log(err);
    }
  };

  getPost();

  const handleLikeActivity = async (id: any) => {
    try {
      const res = await fetch('/api/likes', {
        method: 'POST',
        body: JSON.stringify(id),
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      {showLoader ? (
        <div className={styles.loaderbg}>
          <div className="animate-spin"></div>
        </div>
      ) : (
        <div className={styles.feed}>
          <h1 className={styles.feedText}>Feeds</h1>
          <div className={styles.feedContent}>
            <div className={styles.postContainer}>
              {dataArray?.map((item: any, index: number) => (
                <div className={styles.post}>
                  <div className={styles.authInfo}>
                    <Image src={item?.user?.avatar} alt="Avatar"></Image>
                    <div className={styles.detailsContainer}>
                      <h1>{item?.user?.fullName}</h1>
                      <p>{item?.user?.followers | 0} Followers</p>
                    </div>
                  </div>

                  <p className={styles.text}>{item?.text} </p>

                  {item?.image.length > 0 && <Image src={item?.image[0]} alt="Image text" className={styles.postImage} width={400} height={400}></Image>}

                  <p className={styles.length}>{item?.image?.length - 1} Photos Left</p>

                  <div className={styles.actions}>
                    <button
                      onClick={() => {
                        handleLikeActivity(item._id);
                      }}
                    >
                      <SlLike />
                      {item?.likes}
                    </button>
                    <button>
                      <FaShare />
                      Share
                    </button>
                    <button>Save</button>
                  </div>
                </div>
              ))}
            </div>
            <Profile />
          </div>
        </div>
      )}
    </>
  );
};

export default Feeds;
