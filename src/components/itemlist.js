import { IMG_CDN_URL } from "./contents";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { GrSquare } from "react-icons/gr";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { addItem ,removeItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  

  const plus = (item) => {
    dispatch(addItem(item));
  };

  const minus = (item) => {
    dispatch(removeItem(item))
  };

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Generates a number between 0 and 99
  };

  const data = () => {};

  const vegNon = (isVeg) => {
    return isVeg ? (
        <GrSquare className="text-green-500" />
    ) : (
        <FaRegSquareCaretUp className="text-red-500" />
    );
};


  const cartRestaurantId = useSelector((state) => state.cart.restaurantId);

  return (
    <>
      {/* <div className="flex flex-col item-list p-5 gap-4 " key={index} > */}

      {items.map((item, index) => (
        <div
          className="flex border-t-4 border-gray-200 p-4 h-[50%] w-[60%]   bg-gray-100 "
          key={index}
        >
          <div className="p-2 w-[70%] h-[15%]">
            {vegNon(item?.isVeg)}
            <h3
              className="font-bold flex items-center gap-1 text-base mt-1"
              id="name"
            >
              {item?.name}
            </h3>
            <h5 className="font-semibold text-sm">
              ₹ {item?.price / 100 ? item?.price / 100 : generateRandomNumber()}
            </h5>
            <p className="text-sm text-wrap mt-3 font-light w-full">
              ( {item?.description?.split('.')[0]}.)
            </p>
          </div>

          <div className="w-[40%] h-[15%] ml-14 rounded-lg border-black  flex flex-col
          align-middle justify-around">
            <img
              className="w- h- rounded-lg object-cover"
              key={item?.id}
              src={IMG_CDN_URL + item?.imageId}
            />
            

            <div className="w-[70%] h-9 translate-x-6 -translate-y-4 flex items-center rounded-lg border-2 border-slate-200 bg-white text-green-600 font-bold gap-2">
              <span className="flex items-center justify-center  py-1 px-2 w-1/3 rounded-lg hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer"
              onClick={() => minus(item)}>
                -
              </span>
              <span className="flex-grow text-center">{item.quantity}</span>
              <span className="flex items-center justify-center   py-1 px-2 w-1/3 rounded-lg hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer"
              onClick={()=>plus(item)}>
                +
              </span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ItemList;
