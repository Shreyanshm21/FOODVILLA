import store from "../utils/store"
import { useSelector } from "react-redux"

//Icons
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { GrSquare } from "react-icons/gr";

const Bill =() =>{
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    
    let value = 0;
    cartItems.forEach(item => {
        value += (item.price / 100) * item.quantity;
        
    });
    const formattedValue = value.toFixed(2);
    const finalAmount = (value + 11).toFixed(2);

    const vegNon = (isVeg) => {
    return isVeg === 1 ? (
        <GrSquare className="text-green-500" />
    ) : (
        <FaRegSquareCaretUp className="text-red-500" />
    );
};


    

    return (
        <>
        <div className="bg-gray-100 w-1/4 h-[40%] overflow-auto p-6 ">

        {cartItems.length !== 0 ? 
        (
            <>
            {cartItems.map((item , index) => (
                
            
            
            <div className="list-inside" key={item.id}>
                <div className="flex justify-between flex-wrap p-2 items-start">
                    <h4 className="flex  text-wrap w-[70%] items-start gap-2" ><span className="mt-1"> {vegNon(item?.isVeg)} </span> {item.name}  </h4>
                    <p ><span className="font-bold">₹ {item.price/100}</span> x <span>{item.quantity}</span></p>
                    
                </div>
            
            </div>
            ))}

            <div className="border-y-2 border-y-gray-400 p-2 m-2 ">

                <h3 className="py-2 font-bold ">Bill Details</h3>

                <div className="flex flex-col justify-between">
                    <h5 className="flex justify-between">Item Total  <span className="font-bold">₹ {formattedValue}</span>   </h5>
                    <h5 className="flex justify-between">Delivery Feel  <span className="font-bold">₹ 11</span>   </h5>
                </div>
            </div>
                
            


                <div className="flex justify-between text-gray-50 bg-[#1b5b60] p-2 px-4 font-bold rounded-md text-lg mt-4">
                    <h4>TO PAY</h4>
                    <h4 >{finalAmount}</h4>
                </div>


        
            </>
        ): null}

        </div>
        
        
        
        
        </>
    )
}

export default Bill;