'use client';
import React, { useState } from 'react';
import styles from '../Main.module.scss';
// import { handleTemSubmitPost } from "@/utils/posts";
import { Suspense } from 'react';
import PostImage from '../PostWithImage';
import { IoIosAddCircle } from 'react-icons/io';
import { MdOutlinePostAdd } from 'react-icons/md';

const AddNewBar = (prop: any) => {
  const { session } = prop;
  const [postText, setPostText] = useState('');
  const [openPostContainer, setOpenPostContainer] = useState(false);

  const handleTemSubmitPost = async (text: string) => {
    try {
      const res = await fetch(
        'http://localhost:3000/api/posts',

        {
          method: 'POST',
          next: { revalidate: 1000 },
          body: JSON.stringify({ text: postText }),
        }
      );

      console.log(await res.json());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {openPostContainer && <PostImage authValues={session} closePost={setOpenPostContainer} />}
      <div className={styles.addPost}>
        <input
          type="text"
          placeholder="Make a Text Post"
          onChange={(e) => {
            setPostText(e.target.value);
          }}
        />
        <div>
          <Suspense fallback={'loading'}>
            <button
              onClick={() => {
                handleTemSubmitPost(postText);
              }}
            >
              Add Post
              <IoIosAddCircle />
            </button>
          </Suspense>

          <button
            onClick={() => {
              setOpenPostContainer(true);
            }}
          >
            <MdOutlinePostAdd />
            Post with Image
          </button>
        </div>
      </div>
    </>
  );
};

export default AddNewBar;
