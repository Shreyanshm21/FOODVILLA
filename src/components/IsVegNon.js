import { IMG_CDN_URL } from "./contents";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { GrSquare } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import store from "../utils/store";
import { useState } from "react";
import { numberofitems } from "../utils/cartSlice";

const IsVegNon = ({ items }) => {
  const cart = useSelector((store) => store.cart.items);

  let data = items;
  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Generates a number between 100 and 500
  };

  // Function to get or set the price
  const getPrice = (item) => {
    if (!item?.card?.info?.price) {
      item.card.info.price = generateRandomNumber() * 100; // Setting the price in cents
    }
    return item.card.info.price / 100;
  };

  const vegNon = (isVeg) => {
    return isVeg === 1 ? (
        <GrSquare className="text-green-500" />
    ) : (
        <FaRegSquareCaretUp className="text-red-500" />
    );
};


  const dispatch = useDispatch();

  const plus = (item) => {
    dispatch(addItem(item));
  };

  const minus = (item) => {
    dispatch(removeItem(item));
  };



  return (
    <>
      {data.map((item, index) => (
        <div
          className="flex border-t-4 border-gray-200 p-4 md:h-[98%] bg-gray-50 items-center"
          key={index}
        >
          <div className="p-2 w-[60%] md:w-[65%] md:h-[25%]">
            {vegNon(item?.card?.info?.isVeg)}
            <h3
              className="font-bold flex items-center gap-1 text-base mt-1"
              id="name"
            >
              {item?.card?.info?.name}
            </h3>
            <h5 className="font-semibold text-sm">
              ₹ {getPrice(item)}
            </h5>
            <p className="text-xs  text-wrap mt-3 font-light w-[80%]">
              ({item?.card?.info?.description})
            </p>
          </div>

          <div className="w-[40%]  md:w-40 md:h-40 md:ml-14 rounded-lg border-black">
            {<img
              className="md:w-40 md:h-36 rounded-lg object-cover"
              key={item?.card?.info?.id}
              src={IMG_CDN_URL + item?.card?.info?.imageId}
            /> }

            {cart.find((e) => e.id === item?.card?.info?.id) && (
              <div className="w-[65%] h-8 md:w-[70%] md:h-9 -translate-y-3 translate-x-5
               md:translate-x-6 md:-translate-y-4 flex items-center rounded-lg border-2 justify-between border-slate-200 bg-white text-green-600 font-bold gap-2">
                <span
                  className="flex items-center justify-center w-1/3 rounded-lg h-full hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer"
                  onClick={() => minus(item?.card?.info)}
                >
                  -
                </span>
                <span className="text-center">{cart.find((e) => e.id === item?.card?.info?.id).quantity}</span>
                <span
                  className="flex items-center justify-center bg w-1/3 h-full rounded-lg hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer"
                  onClick={() => plus(item?.card?.info)}
                >
                  +
                </span>
              </div>
            )}
            {!cart.find((e) => e.id === item?.card?.info?.id) && (
              <button
                className="
                w-[60%] h-8   -translate-y-3 translate-x-5
                md:w-[70%] md:h-9 md:translate-x-6 md:-translate-y-4 items-center 
                rounded-lg border-2 border-slate-200 bg-white text-green-600 font-bold
                hover:text-white hover:bg-green-600 hover:border-green-600"
                onClick={() => {
                  plus(item?.card?.info);
                }}
              >
                ADD
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default IsVegNon;
