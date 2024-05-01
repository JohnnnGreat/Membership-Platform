"use client";
import React from "react";
import styles from "../../Main.module.scss";
import { feedDummyDataType } from "../feedsData";
import Image from "next/image";
import { Suspense } from "react";

const Post = (prop: any) => {
  const { dataArray } = prop;

  const handleLikeActivity = async (id: any) => {
    try {
      const res = await fetch("/api/likes", {
        method: "POST",
        body: JSON.stringify(id),
      });
      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.post}>
      <div className={styles.authInfo}>
        <Image src={dataArray?.user?.avatar} alt="Avatar"></Image>
        <div className={styles.detailsContainer}>
          <h1>{dataArray?.user?.fullName}</h1>
          <p>{dataArray?.user?.followers | 0} Followers</p>
        </div>
      </div>

      <p className={styles.text}>{dataArray?.text} </p>

      {dataArray?.image.length > 0 && (
        <Image
          src={dataArray?.image[0]}
          alt="Image text"
          className={styles.postImage}
          width={400}
          height={400}
        ></Image>
      )}

      <p className={styles.length}>
        {dataArray?.pictures?.length - 1} Photos Left
      </p>

      <div className={styles.actions}>
        <button
          onClick={() => {
            handleLikeActivity("hello");
          }}
        >
          Likes
          {/* {dataArray?.likes} */}
        </button>
        <button>Share</button>
        <button>Save</button>
      </div>
    </div>
  );
};

export default Post;
