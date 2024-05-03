import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { useDispatch } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
const Body = () => {
  const dispath = useDispatch();
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispath(addUser({ uid: uid, email: email, displayName: displayName }));
      } else {
        dispath(removeUser());

      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
