import { useState, useEffect } from "react";
import Logo from "../assests/img/FoodVilla-removebg-preview.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import Image from "../assests/img/NewLogo.png";
import { useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";
import { selectTotalQuantity } from "../utils/cartSlice";
import { FcIdea } from "react-icons/fc";
import { FcNoIdea } from "react-icons/fc";

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

import { useState } from "react";
import { MdOutlineShoppingBag, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isOnline = useOnline();
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <>
      <div className="flex justify-between items-center bg-[#21AF99] shadow-md p-4">
        
        {/* Logo / Title */}
        <Title />

<div className="flex flex-row items-center align-middle justify-center">
        {/* Hamburger Menu for Small Screens */}
            <p className="p-1 px-2 text-white md:flex md:flex-row md:items-center gap-1">
              <span className="hidden md:inline item-center " >Online Status:</span> {isOnline ? <FcIdea className="" /> : <FcNoIdea className="text-xl" /> }
            </p>


        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? (
              <MdClose className="text-3xl" />
            ) : (
              <MdMenu className="text-3xl" />
            )}
          </button>
        </div>

        {/* Navigation Items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute z-10 top-[113px] right-0 bg-[#21AF99] 
          w-full md:static md:w-auto md:flex md:items-center md:space-x-6 md:m-4 md:p-0`}
        >
          <div className="flex flex-row items-end">
          <ul className="text-white flex-col inline-flex md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">

            <Link to="/">
              <li className="px-3 py-1 transition-all duration-300 hover:bg-[#1b5b60] hover:text-white rounded-md hover:scale-110">
                Home
              </li>
            </Link>

            <Link to="/about">
              <li className="px-3 py-1 transition-all duration-300 hover:bg-[#1b5b60] hover:text-white rounded-md hover:scale-110">
                About
              </li>
            </Link>

            <Link to="/contact">
              <li className="px-3 py-1 transition-all duration-300 hover:bg-[#1b5b60] hover:text-white rounded-md hover:scale-110">
                Contact
              </li>
            </Link>
          </ul>
          </div>
        </div>


        {/* Cart Icon */}
        <div className="text-white relative flex items-center ml-2 p-2">
          <Link to="/cart">
            <MdOutlineShoppingBag className="text-2xl transition-all duration-300 hover:scale-110 hover:bg-custom" />
            <span
              className={`inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-[#1b5b60] rounded-full absolute -top-1 -right-2 ${
                totalQuantity > 0 ? "animate-bounce" : ""
              }`}
            >
              {totalQuantity}
            </span>
          </Link>
        </div>


</div>        
      </div>
    </>
  );
};




export default Header;
