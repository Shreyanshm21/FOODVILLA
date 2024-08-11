import { useSelector } from "react-redux";
import store from "../utils/store";
import ItemList from "./itemlist";
import { selectTotalQuantity } from "../utils/cartSlice";
import Bill from "./Bill";
import EmptyCart from "./EmptyCart";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)
    const totalQuantity = useSelector(selectTotalQuantity);

    // const [flag , setFlag] = useState(false);
    const dispatch = useDispatch();
    const clear = () =>{
        dispatch(clearCart());
    }

    return (
        <>
        <div className={`flex flex-col   md:flex md:flex-row md:h-full md:overflow-auto  md:justify-center md:p-16 bg-gray- 200 ${cartItems.length ===0 ? "hidden" :""}  `}>

            <div className="   flex flex-col  place-items-center  md:w-[75%] p-2 align-middle ">

                <div className="border-2 p-2 mt-10  max-h-[300px] overflow-y-scroll md:w-[80%]  md:flex md:flex-col md:items-end   md:max-h-[400px]">

                <button className={` p-2 text-base font-medium
                bg-custom rounded-lg md:p-2 py-1 md:text-lg text-white md:font-semibold md:ml-96

                relative right mb-4 ${cartItems.length ===0 ? "hidden" :""}  `}
                onClick={() => clear()} > Clear Cart</button>
                    <ItemList className="bg-gray-100 " items={cartItems}></ItemList>
                </div>


            </div>
        
       

                {cartItems.length >0 ?<Bill/>: null}
            

        </div>

        {cartItems.length === 0 ? <EmptyCart/> : null}
        </>
    )
}

export default Cart;