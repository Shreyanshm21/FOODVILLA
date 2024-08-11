import { restaurantList } from "./contents";
import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { RxCross2 } from "react-icons/rx";
import NotFound from "./NotFound";
import backgroundImage from "../assests/img/bgimage1.png"

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
    "Karnal",
    "Panipat",
    "Ludhiana",
    "Chandigar",
    "Surat",
    "Amritsar",
    "Ganganagar",
    "Agra"
  ]);
  const [location, setLocation] = useState(
    localStorage.getItem("location") || "Bengaluru"
  );

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
  }, [location]);

  async function getRestraunt() {
    // const {lat , lng} = locations[location];
    // console.log(location);
  

    const data = await getLatLong(location);
    // console.log(data?.features?.[0]?.geometry?.coordinates);
    const [lng, lat] = data?.features?.[0]?.geometry?.coordinates;
    // console.log(lat, lng);

    const restraunts = await fetchRestraunt(lat, lng);
    setAllRestaurants(restraunts);
    // setAllRestaurants(
    //   json?.data?.cards[1].card.card.gridElements?.infoWithStyle?.restaurants
    // );
    setFilteredRestaurants2(restraunts);
    // console.log(restraunts);
    // console.log( json?.data?.cards[1].card.card.gridElements?.infoWithStyle?.restaurants);
  }

  // OFFLINE FEATURE
  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>🔴 Offline , Please Check Your Internet Connection</h1>;
  }

  // Early Return - not render component
  if (!allRestaurants) return null;

  // if (filteredRestaurants?.length === 0)
  //     return <h1>No Restraunt Match Your filter!!</h1>;

  // console.log("render()");
  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="bg-gray-200  flex gap-4 p-4 items-center">
        <h2 className="font-semibold">Location </h2>
        <select
          className=" p-1 outline-none bg-transparent text-custom md:text-lg"
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
              // console.log(searchInput2)
              setFilteredRestaurants2(hello);
            }}
          />

          {searchInput2 ? (
            <button
              className="
              w-[10%] -translate-x-[5px] p-2
              md:p-2 md:w-[8.8%]   rounded-r-lg md:-translate-x-[6px] bg-black"
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

      <div className="restaurant-List flex flex-col flex-wrap    md:flex-wrap md:flex-row md:justify-evenly ">
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
