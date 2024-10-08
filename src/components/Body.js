import { restaurantList } from "./contents";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { RxCross2 } from "react-icons/rx";
import NotFound from "./NotFound";
import backgroundImage from "../assests/img/bgimage1.png"
import store from "../utils/store";
import { useDispatch } from "react-redux";
import { clearCart} from "../utils/cartSlice";
// API call
import { fetchRestraunt, getLatLong } from "./Api";

function filterData2(searchInput2, restaurants) {
  const filterData = restaurants.filter((restaurant) => {
    return restaurant?.info?.name

      .toLowerCase()

      .includes(searchInput2.toLowerCase());
  });

  const filterData2 = restaurants.filter((restaurant) => {
    return restaurant?.info?.cuisines.some((variable) =>
      variable.toLowerCase().includes(searchInput2.toLowerCase())
    );
  });

  // agr mai (filterData2 || filterData) karu aur 2 wala empty h tabh bhi woh 2 wala dega because array has some
  // truthy nature agr empty hoga tab  bhi true dega

  return filterData2.length == 0 ? filterData : filterData2;
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]); // keep copy of all restraunts
  const [filteredRestaurants2, setFilteredRestaurants2] = useState([]);
  const [searchInput2, setSearchInput2] = useState("");
  const [cityArray] = useState([
    "Jammu",
    "New-Delhi",
    "Bengaluru",
    "Mumbai",
    "Pune",
    "Kolkata",
    "Ahmedabad",
    "Patna",
    "Lucknow",
    "Ludhiana",
    "Chandigarh",
    "Surat",
    "Amritsar",
    "Agra",
    "Hyderabad",
    "Guwahati",
    "Dehradun"
  ]);
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Bengaluru"
  );
  const [prevlocation , setPrevlocation] = useState(location);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  // const locations = {
  //   Bengaluru: { lat: 12.9715987, lng: 77.5945627 },
  //   Ludhiana: { lat: 30.900965, lng: 75.8572758 },
  //   Jammu:{lat: 32.7266016 , lng: 74.8570259},
  //   Delhi : {lat:28.7040592 , lng: 77.10249019999999},
  // };

  // empty dependency array => once after render
  // dependency array [searchText] => once after intital render + everytime after render (my SearchText changes )

  useEffect(() => {
    // API CALL
    getRestraunt();
    // If location is changed the cart should be empty .
    if(location !== prevlocation){
        handleClearCart();
        setPrevlocation(location);
    }
  }, [location]);

  async function getRestraunt() {
    const data = await getLatLong(location);

    const [lng, lat] = data?.features?.[0]?.geometry?.coordinates;
    

    const restraunts = await fetchRestraunt(lat, lng);
    setAllRestaurants(restraunts);
    
    setFilteredRestaurants2(restraunts);

  }

  // OFFLINE FEATURE
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1 className="w-auto h-auto p-8" >🔴 Offline , Please Check Your Internet Connection</h1>;
  }

  // Early Return - not render component
  if (!allRestaurants) return null;

  
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-gray-200 gap-2 p-2 flex flex-row md:gap-4 md:p-4 items-center">
        <h2 className="font-medium md:font-semibold">Location </h2>
        <select
          className=" p-1 outline-none bg-transparent text-custom text-base md:text-lg"
          value={location}
          onChange={(e) => {
            //ChatGPT
            const selectedLocation = e.target.value;
            setLocation(selectedLocation);
            localStorage.setItem("location", selectedLocation);
          }}
        >

          {cityArray.sort().map((e,index)=>{
            return <option key={index} value={e}>{e}</option>
          })}
        </select>
      </div>
      <div
        className="flex justify-center w-auto items-center mt-0 mb-5 p-10 bg-auto bg-repeat bg-bottom "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          zIndex: "-1",
        }}
      >
        <h1 className="font-extrabold items-center  md:w-auto md:text-9xl shadow md:border-4 
         border-black text-[#21AF99] opacity-100  bg-gray-100 p-2 rounded-lg animate-.spin-slow 
         text-6xl border-2">
          FOODVILLA
        </h1>
      </div>

      <div className="search-container shadow-md p-5 bg-[#21AF99] md:my-5 flex items-center justify-center md:mt-0 ">
        <div className="flex items-center  md:w-[50%] w-[75%] ">
          <input
            type="text"
            className="placeholder: placeholder:text-slate-400 pl-2 md:pr-3 shadow-sm focus:outline-none p-2 md:w-full rounded-lg
            mobile w-full "
            placeholder="🔍 Search for restaurants and cuisines "
            value={searchInput2}
            onChange={(e) => {
              // e.target.value= whatever you write in the input
              setSearchInput2(e.target.value);
              const hello = filterData2(e.target.value, allRestaurants);
      
              setFilteredRestaurants2(hello);
            }}
          />

          {searchInput2 ? (
            <button
              className="
              w-[12%] -translate-x-[5px] p-2
              md:p-2 md:w-[8.8%]   rounded-r-lg md:-translate-x-[6px] bg-white"
              onClick={() => {
                setFilteredRestaurants2(allRestaurants);
                setSearchInput2("");
              }}
            >
              ❌
            </button>
          ) : null}
          
        </div>
      </div>

      <div className="restaurant-List flex justify-items-center align-middle flex-col flex-wrap w-1/2 px-[25%] py-4  md:p-2 md:w-auto     md:flex-wrap md:flex-row md:justify-evenly ">
        {filteredRestaurants2.length == 0 ? (
          <NotFound input={searchInput2} />
        ) : (
          filteredRestaurants2.map((restaurant) => {
            return (
              <Link
                to={"/restaurant/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestrauntCard {...restaurant.info} />
              </Link>
            );
          })
        )}
      </div>
    </>
  );
};

export default Body;
