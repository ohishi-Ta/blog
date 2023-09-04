import React from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    //ログアウトする
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
    <div className="loginbox">
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウトする</button>
    </div>
  );
};

export default Logout;
