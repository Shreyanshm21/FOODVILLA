import { IMG_CDN_URL } from "./contents";
import { MdStars } from "react-icons/md";
const RestrauntCard = ({
  name, cuisines, cloudinaryImageId, avgRating ,areaName }) => {
  const limitedCuisines = cuisines.slice(0,2);

  return (
    <div
  className="card md:w-64 md:h-[90%] md:p-4 md:m-4 shadow-lg rounded-lg bg-gray-100 hover:bg-gray-200 
  hover:scale-95 transform origin-center transition duration-100 ease-out hover:ease-in
  w-52 h-[90%] border-2 border-gray-200 p-2 m-2
  "
>
  <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
  <h2 className="font-bold py-2 text-lg">{name}</h2>
  <h3 className="flex items-center gap-1">
    <span className="text-custom font-semibold">{avgRating}</span><MdStars className="text-green-600" />
  </h3>
  <h4>{limitedCuisines.join(", ")}</h4>
  <h4 className="py-1 font-medium">{areaName}</h4>
</div>

  );
};

export default RestrauntCard;
