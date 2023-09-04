import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../firebase";
import { useNavigate } from "react-router-dom";

const CreatePost = ({ isAuth }) => {
  const [title, setTitle] = useState();
  const [postText, setPostText] = useState();

  const navigate = useNavigate();

  const createPost = async () => {
    await addDoc(collection(db, "posts"), {
      title: title,
      postsText: postText,
      author: {
        username: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, []);

  return (
    <div className="createpost">
      <div className="createpostinner">
        <p className="title">記事を投稿する</p>
        <div className="post">
          <p>タイトル</p>
          <input
            type="text"
            placeholder="タイトルを入力"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="post">
          <p>投稿</p>
          <textarea
            placeholder="投稿内容を入力"
            onChange={(e) => setPostText(e.target.value)}
          />
        </div>
        <div className="post">
          <button className="postbtn" onClick={createPost}>
            投稿
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
