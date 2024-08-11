import { Link } from "react-router-dom";
import empty from "../assests/img/empty.png";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] sm:min-h-[50vh] my-12 md:p-10 h-auto md:mb-14">
      <img className="w-auto h-auto md:w-1/4 md:h-1/4" src={empty} alt="Empty Cart" />
      <Link
        className="bg-[#1b5b60] rounded-2xl text-lg font-semibold md:w-[15%] text-center text-white p-2 mt-4"
        to="/"
      >
        See All Restaurants
      </Link>
    </div>
  );
};

export default EmptyCart;
