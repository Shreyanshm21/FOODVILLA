import { IMG_CDN_URL } from "./contents";
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { GrSquare } from "react-icons/gr";
import { useDispatch } from "react-redux";
import { addItem ,removeItem } from "../utils/cartSlice";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { useState } from "react";
import { numberofitems } from "../utils/cartSlice";
import { useSelector } from "react-redux";

const IsVegNon = ({ items, veg, non }) => {
  const cart = useSelector((store) => store.cart.items);
//   const [addedInCart, setAddCart] = useState(false);

let data;
if (veg === non) {
    data = items;
  } else if (veg) {
    data = items.filter((item) => {
      return item?.card?.info?.isVeg ? item?.card : null;
    });
  } else if (non) {
    data = items.filter((item, value) => {
      return !item?.card?.info?.isVeg ? item?.card : null;
    });
  }

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * (500 - 100 + 1)) + 100; // Generates a number between 0 and 99
  };
  const vegNon = (isVeg) => {
    return isVeg ? (
      <GrSquare className="text-green-500" />
    ) : (
      <FaRegSquareCaretUp className="text-red-500" />
    );
  };

  const dispatch = useDispatch();

//   const addFoodItem = (item) => {
//     console.log(item);
//     dispatch(addItem(item));
//     // setAddCart(!addedInCart);
//   };

  const plus = (item) => {
    dispatch(addItem(item));
  };

  const minus = (item) => {
    dispatch(removeItem(item))
  };


  return (
    <>
      {data.map((item, index) => (
        <div
          className="flex border-t-4 border-slate-100 p-4 h-[98%] bg-white items-center"
          key={index}
        >
          <div className="p-2 w-[65%] h-[25%]">
            {vegNon(item?.card?.info?.isVeg)}
            <h3
              className="font-bold flex items-center gap-1 text-base mt-1"
              id="name"
            >
              {item?.card?.info?.name}
            </h3>
            <h5 className="font-semibold text-sm">
              ₹{" "}
              {item?.card?.info?.price / 100
                ? item?.card?.info?.price / 100
                : generateRandomNumber()}
            </h5>
            <p className="text-sm text-wrap mt-3 font-light w-[80%]">
              ({item?.card?.info?.description})
            </p>
          </div>

          <div className="w-40 h-40 ml-14 rounded-lg border-black">
            <img
              className="w-40 h-36 rounded-lg object-cover"
              key={item?.card?.info?.id}
              src={IMG_CDN_URL + item?.card?.info?.imageId}
            />

            {cart.find((e)=>e.id === item?.card?.info?.id) &&
            <div className="w-[70%] h-9 translate-x-6 -translate-y-4 flex items-center rounded-lg border-2 justify-between border-slate-200 bg-white text-green-600 font-bold gap-2">
            <span
              className="flex items-center justify-center w-1/3 rounded-lg h-full hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer"
              onClick={() => minus(item?.card?.info)}>
              -
            </span>
            <span className="text-center">{cart.find((e)=>e.id === item?.card?.info?.id).quantity}</span>
            <span
              className="flex items-center justify-center bg w-1/3  h-full rounded-lg hover:text-white hover:bg-green-600 hover:border-green-600 cursor-pointer"
              onClick={()=>plus(item?.card?.info)}>
              +
            </span>
          </div>
            }   
            {!cart.find((e)=>e.id === item?.card?.info?.id) && (
              <button
                className="w-[70%] h-9 translate-x-6 -translate-y-4 items-center 
            rounded-lg border-2 border-slate-200 bg-white text-green-600 font-bold
            hover:text-white hover:bg-green-600 hover:border-green-600 "
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
