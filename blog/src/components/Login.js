import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const loginInWithGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      //ローカルストレージに保存
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      //ログイン後ホームにリダイレクト
      navigate("/");
    });
  };

  return (
    <div className="loginbox">
      <p>ログインする</p>
      <button onClick={loginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
