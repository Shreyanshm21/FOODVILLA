import { Children, useState } from "react";
import { IMG_CDN_URL } from "./contents";
import { FaAngleDown ,FaAngleUp } from "react-icons/fa";
import IsVegNon from "./IsVegNon";

const Menu = ({ title, itemCards,index  , flag1 , flag2 }) => {
    const [flag, setFlag] = useState(false);
    const trying = () => {
        setFlag(!flag);
    };

    let content ;
    let text ;
    if(flag){
        content = <IsVegNon items={itemCards} key={index}  veg ={flag1} non ={flag2}  />

    }
    else{
        content = null;
    }

    return (
    <>
    
    <div className="subSections">
        <div className="flex justify-between p-4 items-center ">
            <h1 className="font-bold">{title}</h1>
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
