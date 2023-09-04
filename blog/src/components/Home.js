import React, { useEffect, useState } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase";

const Home = () => {
  const [postList, setPostlist] = useState([]);
  useEffect(() => {
    const getposts = async () => {
      const data = await getDocs(collection(db, "posts"));
      //階層が深いが、...doc.data()にすることで、取り出せる
      // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setPostlist(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getposts();
  }, []);

  const deletepost = async (id) => {
    await deleteDoc(doc(db, "posts", id));
    window.location.href = "/";
  };

  return (
    <div className="home">
      {postList.map((post) => {
        return (
          <div className="homepost" key={post.id}>
            <p className="title">{post.title}</p>
            <p className="text">{post.postsText}</p>
            <p className="authorname">@{post.author.username}</p>
            {post.author.id === auth.currentUser?.uid && (
              <button className="deleatbtn" onClick={() => deletepost(post.id)}>
                削除
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Home;
