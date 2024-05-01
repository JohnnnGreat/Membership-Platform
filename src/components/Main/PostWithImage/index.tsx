'use client';

import React, { useState } from 'react';
import styles from '../Main.module.scss';
import Image from 'next/image';
import { Suspense } from 'react';
import { SlLike } from 'react-icons/sl';
import { IoCloseSharp } from 'react-icons/io5';

const PostImage = (prop: any) => {
  const { authValues, closePost } = prop;
  console.log(authValues);
  const [imageUrl, setImageUrl] = useState('');
  const [textArea, setTextArea] = useState('');

  const handleFileInput = async (e: any) => {
    const file = e.target.files[0];
    const form = new FormData();

    form.set('file', file);
    const res = await fetch('/api/uploadimages', {
      method: 'POST',
      body: form,
    });

    const data = await res.json();
    const { url } = data;

    setImageUrl(url);
  };

  interface postType {
    imageUrl: string;
    textArea?: string;
  }
  const handleSubmitPost = async (payload: postType) => {
    const { textArea, imageUrl } = payload;
    try {
      if (imageUrl) {
        const res = await fetch(
          'api/posts',

          {
            method: 'POST',
            body: JSON.stringify({
              text: textArea,
              image: imageUrl,
              user: authValues.sub,
            }),
          }
        );
        console.log(await res.json());
      } else {
        const res = await fetch(
          'api/posts',

          {
            method: 'POST',
            body: JSON.stringify({
              text: textArea,
              user: authValues.sub,
            }),
          }
        );
        console.log(await res.json());
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextChange = (e: any) => {
    setTextArea(e.target.value);
  };
  return (
    <div className={styles.postContainerM}>
      <IoCloseSharp
        size={30}
        color="#ffff"
        onClick={() => {
          closePost(false);
        }}
      />
      <div className={styles.postContainerMain}>
        <div>
          <textarea className={styles.postArea} onChange={handleTextChange}></textarea>
          <div className={styles.postActions}>
            <Suspense fallback={'loading...'}>
              <form action="">
                <label htmlFor="addimages">Add Images</label>
                <input type="file" id="addimages" accept="image/*" onChange={handleFileInput}></input>
              </form>
            </Suspense>
          </div>
          {imageUrl && <Image width={100} height={100} src={imageUrl} alt="preview images" />}
        </div>

        <button
          className={styles.addPostBtn}
          onClick={() => {
            handleSubmitPost({ imageUrl, textArea });
            closePost(false);
          }}
        >
          Add Post
        </button>
      </div>
    </div>
  );
};

export default PostImage;
