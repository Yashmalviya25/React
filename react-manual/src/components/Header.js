import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginbutton, setLoginButton] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div>
        <img className="w-[100px]" src={require("/public/images/logo.jpg")} />
      </div>
      <div className="flex item-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-bold text-xl"><Link to="/cart" >Cart  - ({cartItems.length} items)</Link></li>
          <li className="px-4">
              {loggedInUser}
            </li>
          <li className="px-4 cursor-pointer"
            onClick={() => {
              loginbutton === "Login"
                ? setLoginButton("Logout")
                : setLoginButton("Login");
            }}
          >
            {loginbutton}
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
