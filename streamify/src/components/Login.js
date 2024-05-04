import React from "react";
import Header from "./Header";
import useLogin from "../hooks/useLogin";

const Login = () => {
  const {
    emailRef,
    nameRef,
    passwordRef,
    isSignIn,
    errorMessage,
    toggleSignInForm,
    handleAuthentication,
  } = useLogin();

  return (
    <div className="min-h-screen bg-cover bg-center bg-[url('/src/public/images/bg.jpg')] flex justify-center items-center">
      <Header />
      <div className="bg-black bg-opacity-80 rounded-lg p-3 md:p-8 w-9/12 md:w-3/12 flex flex-col text-white">
        <h1 className="font-bold text-[13px] md:text-3xl py-1 md:py-4 text-center">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={nameRef}
            className="p-1 md:p-4  my-2 md:m-4 bg-gray-700 rounded-lg"
            placeholder="Full Name"
            type="text"
          />
        )}
        <input
          ref={emailRef}
          className="p-1 md:p-4  my-2 md:m-4 bg-gray-700 rounded-lg"
          placeholder="Email Address"
          type="text"
        />
        <input
          ref={passwordRef}
          className="p-1 md:p-4  my-2 md:m-4 bg-gray-700 rounded-lg"
          placeholder="Password"
          type="password"
        />
        <p className="text-red-500 font-bold text-center">{errorMessage}</p>
        <button
          className="p-1 md:p-4 my-2 md:my-6 md:mx-4 bg-red-700 rounded-lg"
          onClick={handleAuthentication}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-center text-[9px] md:text-lg cursor-pointer"
          onClick={toggleSignInForm}
        >
          {isSignIn
            ? "New to Xtreamify? Sign Up Now"
            : "Already Registered? Sign In"}
        </p>
        <p className="text-[13px] md:text-xl text-red-600 font-bold">
          Disclaimer: Please use Airtel connection for proceeding forward or use
          VPN!!!
        </p>
      </div>
    </div>
  );
};

export default Login;
