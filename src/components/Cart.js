import { useSelector } from "react-redux";
import store from "../utils/store";
import ItemList from "./itemlist";
import { selectTotalQuantity } from "../utils/cartSlice";
import Bill from "./Bill";

const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)
    const totalQuantity = useSelector(selectTotalQuantity);



    return (
        <>
        <div className="flex gap- justify-center p-16 bg-gray-200">

            <div className="flex flex-col  place-items-center  w-[75%] p-2 align-middle ">
                {/* <h1 className="font-bold text-5xl p-4">Cart items - {totalQuantity} </h1> */}
                <ItemList className="bg-gray-100" items={cartItems}></ItemList>
            </div>
        {cartItems.length >0 ?<Bill/>:null}
        </div>
        </>
    )
}

export default Cart;