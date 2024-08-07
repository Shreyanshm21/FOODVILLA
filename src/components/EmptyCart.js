import { Link } from "react-router-dom";
// import emptyphoto from "../assests/img/NewLogo.png";
import empty from "../assests/img/empty.png";

const EmptyCart =() =>{


    return(
        <>
        <div className="flex flex-col items-center p-10 justify-center ">

            <img className="w-1/4 h-1/4" src={empty}  ></img>
            <Link className="bg-[#1b5b60] rounded-2xl text-lg font-semibold w-[15%] text-center text-white p-2" to="/">See All Restraunts </Link>

        </div>
        
        
        
        </>

    )
}

export default EmptyCart