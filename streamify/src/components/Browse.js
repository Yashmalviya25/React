import Header from "./Header";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Browse = () => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="relative h-screen">
      <Header />
      <div className="absolute top-0 right-0 mt-4 m-inherit mr-4">
        <button
          className="absolute w-24 rounded-lg h-9 top-0 right-0 bg-black text-white mt-4 m-inherit mr-4"
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
