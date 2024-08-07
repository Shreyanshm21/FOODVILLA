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
        <div className={`flex h-full overflow-auto  justify-center p-16 bg-gray-200 ${cartItems.length ===0 ? "hidden" :""}  `}>

            <div className="flex flex-col  place-items-center  w-[75%] p-2 align-middle ">
                <button className="bg-custom rounded-lg p-2 py-1 text-lg text-white font-semibold ml-96 relative right mb-4" onClick={() => clear()} > Clear Cart</button>
                {/* <h1 className="font-bold text-5xl p-4">Cart items - {totalQuantity} </h1> */}
                <ItemList className="bg-gray-100" items={cartItems}></ItemList>
            </div>

        {cartItems.length >0 ?<Bill/>: null}
        </div>

        {cartItems.length === 0 ? <EmptyCart/> : null}
        </>
    )
}

export default Cart;