import { useSelector } from "react-redux";
import store from "../utils/store";
import ItemList from "./itemlist";
import { selectTotalQuantity } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector(store => store.cart.items)
    const totalQuantity = useSelector(selectTotalQuantity);
    return (
        <>
        <div className="flex flex-col items-center ">
            <h1 className="font-bold text-5xl">Cart items - {totalQuantity} </h1>
            <ItemList items={cartItems}></ItemList>
        </div>
        
        </>
    )
}

export default Cart;