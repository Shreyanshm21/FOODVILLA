import { Children, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "./Menu";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "./contents";
// Icons :-
import { FaMapMarkerAlt, FcHighPriority } from "react-icons/fa";
import { FcOk } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { MdStars } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import VegButton from "./VegButton";
import {NonVeg} from "./VegButton";
import { useSelector } from "react-redux";
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

import { selectTotalQuantity } from "../utils/cartSlice";
import { getRestrauntInfoAPI } from "./Api";


const RestaurantMenu = () => {
  const { id } = useParams();
  const params = useParams();
  const [info, setinfo] = useState(null);

  const [restaurant, setRestaurant] = useState(null);
  const [isVeg, setIsVeg] = useState(false);
  const [isNonVeg, setIsNonVeg] = useState(false);
  
  const cartItems = useSelector(store => store.cart.items)
  const totalQuantity = useSelector(selectTotalQuantity);
  
  
  useEffect(() => {
    getRestrauntInfo();
  }, []);


  async function getRestrauntInfo() {
    const json = await getRestrauntInfoAPI(id);
    
    
    // const json = await data.json();
    setinfo(json?.data?.cards[2]?.card?.card?.info);
    
    
    setRestaurant(
      json.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (e) =>
          e.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    );
  }
  const openClose = () => {
    return info.isOpen ? (
      <>
        Opened <FcOk className="ml-1" />
      </>
    ) : (
      <>
        Closed <FcHighPriority className="ml-1" />
      </>
    );
  };
  
  const handleToggle = () => {
    setIsVeg(!isVeg);
  };
  const handleToggleNon = () => {
    setIsNonVeg(!isNonVeg);
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <>
      <div className="mainbox flex flex-col items-center mb-10  bg-gray-100  ">

          <div className="md:w-1/2 w-[75%] flex flex-row items-start mt-20 p-4 pl-2">
          <h1 className="text-2xl p-2 pl-0 font-bold  ">{info.name}</h1>
          </div>


          <div className="Box1 bg-gray-200 p-4 pt-0 pt- w-[75%] md:w-1/2 rounded-b-2xl border-2 border-gray-100">

          <div className="bg-gray-100 border-2 border-gray-300 text-black mt-2 p-6 rounded-3xl
          flex flex-col gap-y-1 align-middle">
            <h2 className="flex justify-between  ">
              <span className="flex items-center font-medium ">
                <FaMapMarkerAlt className="mr-1 text-red-600" />
                <span className="font-extrabold">{info.areaName}</span>
              </span>
              <span className="flex items-center font-medium">
                {openClose()}
              </span>
            </h2>

            <h3 className="font-medium flex gap-1 ">
              <span className="flex items-center gap-1 ">
                <MdStars className="text-green-600" /> {info.avgRating}{" "}
              </span>
              <span className="">({info.totalRatingsString})</span>
            </h3>

            <h3 className="text-orange-500 underline text-sm font-semibold ml-4">
              {info.cuisines?.join(" , ")}
            </h3>
            <h3 className=" inline-flex items-center font-medium rounded-lg  h-8 mt-2 border-2 -gray-200 p-4 ">
              {!info?.aggregatedDiscountInfo?.header
                ? "No Offers"
                : info?.aggregatedDiscountInfo?.header}
              <span className="text-green-500 text-2xl ml-1">
                <BiSolidOffer />{" "}
              </span>
            </h3>

            </div>
          {/* </div> */}
        </div>

        <span className="w-[75%] md:w-1/2 rounded-md p-2 text-center bg-gray-200 mt-28 mb-10 text-slate-800 font-normal">
          MENU
        </span>
            
        
        <div className={`${cartItems.length > 0 ? 'bg-[#1b5b60] w-full rounded-t-lg md:w-1/2 text-white fixed px-4 bottom-0 h-14 z-10 flex justify-between' : 'hidden'}`}>
        <h1 className="p-2 flex items-center" >{totalQuantity} Item Added </h1>
        <Link to="/cart" className="flex items-center gap-2 p-2" > View Cart<MdOutlineShoppingBag/> </Link>
        </div>

                    {/* Trying Non veg part  -- -- - - - -- -- - - - - - - - - */}

        <div className=" w-[75%] md:w-1/2 inline-flex justify-start  gap-2 mb-4">
          <div className=" rounded-xl p-    ">
            <VegButton 
            isChecked={isVeg} 
            onChange={handleToggle}
          />
          </div>
          <div className="rounded-xl">
            <NonVeg 
            isCheckeds={isNonVeg} 
            onChanges={handleToggleNon}
          /> 
          </div>


          
                   
        </div>

        {/* -- - - - -- - - -- - - - - -- - --- - -- - - -  - - -- - - -  -- - */}
        <div className="Box2 md:w-1/2 w-[75%] bg-gray-200">
          {restaurant.map((items, index) => {
            return (
              <Menu
                {...items.card.card}
                key={index}
                flag1={isVeg}
                flag2={isNonVeg}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
