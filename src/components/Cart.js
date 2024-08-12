import { useSelector, useDispatch } from "react-redux";
import ItemList from "./itemList";
import { selectTotalQuantity, clearCart } from "../utils/cartSlice";
import Bill from "./Bill";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalQuantity = useSelector(selectTotalQuantity);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="flex flex-col md:flex-row md:h-full md:overflow-auto md:justify-center md:p-16 bg-gray-200">
          <div className="flex flex-col items-center md:w-[75%] p-2 align-middle">
            <div className="border-2 p-2 mt-10 max-h-[300px] md:w-[80%] md:flex md:flex-col md:items-end md:max-h-[400px] overflow-y-scroll">
              <button
                className="p-2 text-base font-medium bg-custom rounded-lg md:py-1 md:text-lg text-white md:font-semibold mb-4"
                onClick={handleClearCart}
              >
                Clear Cart
              </button>
              <ItemList className="bg-gray-100" items={cartItems} />
            </div>
          </div>

          <Bill />
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
