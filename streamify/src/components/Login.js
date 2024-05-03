import React, { useState, useRef } from "react";
import Header from "./Header";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile 
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import {useDispatch} from "react-redux"
import {addUser} from "../utils/userSlice"
import { checkValidData } from "../utils/validate";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef(null);
  const name = useRef(null);
  const password = useRef(null);
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          }).then(() => {
            const {uid,email,displayName} = auth;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName
            }))
            navigate("/browse");
          }).catch((error) => {
           setErrorMessage(message)
          });

        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const {uid,email,displayName} = auth;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName
            }))
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/src/public/images/bg.jpg')]">
      <Header />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="bg-black bg-opacity-80 rounded-lg my-36 mx-auto right-0 left-0 p-4 w-3/12 flex flex-col text-white "
      >
        <h1 className="font-bold mt-6 mx-4 text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            className="p-4 m-4 bg-gray-700 rounded-lg"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={email}
          className="p-4 m-4 bg-gray-700 rounded-lg"
          placeholder="Email Address"
          type="text"
        />
        <input
          ref={password}
          className="p-4 m-4 bg-gray-700 rounded-lg"
          placeholder="Password"
          type="password"
        />
        <p className="text-red-500 px-4 mx-4 font-bold">{errorMessage}</p>
        <button
          className="p-4 my-6 mx-4 bg-red-700 rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className=" mx-4 mb-4 cursor-pointer " onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Xtreamify? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;