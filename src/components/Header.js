import { useState, useEffect } from "react";
import Logo from "../assests/img/FoodVilla-removebg-preview.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Image from "../assests/img/NewLogo.png";
import { useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";
import { selectTotalQuantity } from "../utils/cartSlice";

function loginButton(isLoggedIn, setIsLoggedIn) {
  return isLoggedIn ? (
    <button
      className="bg-[#0F9581] hover:bg-[#0D6F85] rounded-lg p-2"
      onClick={() => setIsLoggedIn(false)}
    >
      Logout
    </button>
  ) : (
    <button
      className="bg-[#0F9581] hover:bg-[#0D6F85] rounded-lg p-2"
      onClick={() => setIsLoggedIn(true)}
    >
      Login
    </button>
  );
}

const Title = () => (
  <a href="/">
    <img className="h-20 p-2" alt="logo" src={Image} />
  </a>
);

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = useSelector(selectTotalQuantity);
  console.log(cartItems);

  return (
    <>
      <div className="flex justify-between bg-[#21AF99] shadow-md items-center">
        <Title />

        <div className="nav-items flex mr-4 items-center text-white ">
          <ul className="flex p-4 m-5  ">
            <li className="p-1 px-2">Online Status: {isOnline ? "✅" : "🔴"}</li>

            <Link to="/">
              <li className=" px-2 hover:bg-[#1b5b60] hover:text-white rounded-md p-1 hover:scale-105">Home</li>
            </Link>

            
            <Link to="/about">
              <li className=" px-2 hover:bg-[#1b5b60] hover:text-white rounded-md p-1 hover:scale-105">About</li>
            </Link>

            <Link to="/contact">
              <li className=" px-2 hover:bg-[#1b5b60] hover:text-white rounded-md p-1 hover:scale-105">Contact</li>
            </Link>

            <Link to="/instamart">
              <li className=" px-2 hover:bg-[#1b5b60] hover:text-white rounded-md p-1 hover:scale-105 ">Instamart</li>
            </Link>

            <Link to="/cart">
              <li className="flex items-center p-1 hover:scale-105  ml-2 text-center text-white rounded-md px- ">
              <MdOutlineShoppingBag className="text-xl mt-[2px] hover:bg-[#1b5b60] hover:text-white rounded-md P-1 " />
                <span className={`inline-flex items-center justify-center -translate-y-1 w-4 h-4  
                text-xs font-semibold text-white  [#0F9581] 
                bg-[#1b5b60] rounded-full  relative bottom-2   
                ${totalQuantity > 0 ?'animate-bounce w-5 h-5' : ''
                }`}>
                  {totalQuantity}
                </span>
              </li>
            </Link>

          </ul>
          {loginButton(isLoggedIn, setIsLoggedIn)}
        </div>
      </div>
    </>
  );
};

export default Header;
