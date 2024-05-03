import React, { useState } from "react";
import logo from "../public/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { SiGravatar } from "react-icons/si";
import { FaUserAstronaut } from "react-icons/fa";
import { signOut } from "firebase/auth";
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        setLogin(true);
        setUserName(displayName);
        navigate("/browse");
      } else {
        dispatch(removeUser());
        setLogin(false);
        setUserName("");
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        setUserName("");
        setLogin(false);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleGptSearch =() =>{
    dispatch(toggleGptSearchView());
  }

  return (
    <div className="w-full bg-gradient-to-r from-cyan-50 to-blue-500 flex justify-between items-center p-4 absolute  top-0 z-10">
      <img className="w-20" alt="main-logo" src={logo} />
      <div className="flex">
      {login && (
          <div className="flex items-center mr-2">
            <button className="w-36 font-bold  text-xl px-2 rounded-lg bg-black text-blue-400 h-9" onClick={handleGptSearch}>{showGptSearch?"HOME":"GPT SEARCH"}</button>
          </div>
        )}
        {login && (
          <div className="flex items-center mr-4">
            <FaUserAstronaut className="w-24 rounded-lg h-9" />
            <span className="w-24 font-bold text-2xl h-9">{userName.toUpperCase()}</span>
          </div>
        )}
        {login && (
          <SiGravatar
            className="cursor-pointer w-24 rounded-lg h-9"
            onClick={handleSignOut}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
