import { IMG_CDN_URL } from "./contents";

const RestrauntCard = ({
  name, cuisines, cloudinaryImageId, avgRating ,areaName }) => {
  const limitedCuisines = cuisines.slice(0,2);

  return (
    <div
    // className="card w-64 h-80 p-4 m-4  rounded-lg  hover:bg-gray-200 
    className="card w-64 h-[90%] p-4 m-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 
  
        hover:scale-95 transform origin-center transition duration-100 ease-out hover:ease-in"

      // style={{ backgroundColor: "#f0f0f0" }}
    >
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-3 text-lg">{name}</h2>
      <h4>{limitedCuisines.join(", ")}</h4>
      <h4 className="py-1 font-medium">{areaName}</h4>
      <h3><b>Rating :</b> {avgRating}⭐</h3>
    </div>
  );
};

export default RestrauntCard;
