import { Children, useState } from "react";
import { IMG_CDN_URL } from "./contents";
import { FaAngleDown ,FaAngleUp } from "react-icons/fa";
import IsVegNon from "./IsVegNon";

const Menu = ({ title, itemCards,index  , flag1 , flag2 }) => {
    const [flag, setFlag] = useState(false);
    const trying = () => {
        setFlag(!flag);
    };

    /*************************FILTERING DATA ON BASIS OF VEG AND NON VEG ************************************************/
    let data;
    if (flag1 === flag2) {
        data = itemCards;
    } else if (flag1) {
        data = itemCards.filter((item) => item?.card?.info?.isVeg);
    } else if (flag2) {
        data = itemCards.filter((item) => !item?.card?.info?.isVeg);
    }



    let content ;
    let text ;
    if(flag){
        content = <IsVegNon items={data} key={index}   />

    }
    else{
        content = null;
    }

    return (
    <>
    
    <div className={`subSections ${data.length ===0 ? 'hidden' : ""} `}>
        <div className="flex justify-between p-4 items-center cursor-pointer " onClick={trying}>
            <h1 className="font-bold text-gray-950">{title} <span>({data.length})</span> </h1>
            <button className="items-center" onClick={trying}>{flag ? <FaAngleUp /> : <FaAngleDown />}</button>
        </div>
        
        <div className=" flex flex-col  ">
            {content}
        </div>
        
        <div className="h-2 w-[100%] bg-gray-50 block mt-2"></div>
        
        
    </div>
    </>
);
};

export default Menu;
