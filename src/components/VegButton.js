import React, { useState } from 'react';
import { GrSquare } from "react-icons/gr";
import { FaRegSquareCaretUp } from "react-icons/fa6";
const VegButton = ({ onChange, isChecked }) =>{

  return (
    <div className="p-2">
        <label className="relative flex bg-white p-2 justify-between items-center text-lg mr-2  rounded-md">
        <input 
          type="checkbox" 
          checked={isChecked} 
          onChange={onChange} 
          className="absolute left-1/2 -translate-x-1/2 
              w-full peer appearance-none rounded-md h bg-white " 
        />
        <span className="w-9 h-2 flex 
          items-center flex-shrink-0 ml- p- bg-gray-300 
          rounded-full ease-in-out peer-checked:bg-green-400">
        <span 
        className={`w-4 h-4 bg-white flex items-center
            justify-center rounded-full shadow-md duration-100 
            transform ${isChecked ? 'translate-x-5' : ''}`}>
            <GrSquare className="text-green-600 h-8" />
      </span>
    </span>
  </label>
  </div>
    
  );
}


export const NonVeg =({onChanges ,isCheckeds}) =>{

  return (
    <div className="p-2">
        <label className="relative flex bg-white p-2 justify-between items-center text-lg mr-2  rounded-md ">
    <input 
      type="checkbox" 
      checked={isCheckeds} 
      onChange={onChanges} 
      className="absolute left-1/2 -translate-x-1/2 
      w-full peer appearance-none rounded-md bg-white " 
    />
    <span className="w-9 h-2 flex 
    items-center flex-shrink-0 ml- p- bg-gray-300 
    rounded-full ease-in-out peer-checked:bg-red-400">
      <span 
        className={`w-4 h-4 bg-white flex items-center
        justify-center rounded-full shadow-md duration-100 
        transform ${isCheckeds ? 'translate-x-5' : ''}`}>
        <FaRegSquareCaretUp className="text-red-600 h-8" />
      </span>
    </span>
  </label>
  </div>
    
  );

}


export default VegButton;
