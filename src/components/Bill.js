import store from "../utils/store";
import { useSelector } from "react-redux";

//Icons
import { FaRegSquareCaretUp } from "react-icons/fa6";
import { GrSquare } from "react-icons/gr";
import FakePayment from "./Payment";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Bill = () => {
  const cartItems = useSelector((store) => store.cart.items);

  let value = 0;
  cartItems.forEach((item) => {
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
      <div className=" w-[96%] h-[40%] p-2 ml-2 my-10   bg-gray-100 md:w-1/4 md:h-[40%] overflow-auto md:p-6  border-2 border-gray-200 rounded-lg ">
        {cartItems.length !== 0 ? (
          <>
            <div className="max-h-[200px] md:max-h-[400px] overflow-y-scroll ">
              {cartItems.map((item, index) => (
                <div className="list-inside " key={item.id}>
                  <div className="p-1 flex flex-row justify-between flex-wrap md:p-2  items-end">
                    <h4 className="w-[70%] flex flex-row text-wrap md:w-[60%] overflow-auto items-start gap-1 md:gap-2">
                      <span className="mt-1">{vegNon(item?.isVeg)}</span>{" "}
                      {item.name}
                    </h4>
                    <p>
                      <span className="font-bold">₹ {item.price / 100}</span> x{" "}
                      <span>{item.quantity}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-1 m-1 border-y-2 border-y-gray-400 md:p-2 md:m-2 ">
              <h3 className="py-1 md:py-2 font-bold ">Bill Details</h3>

              <div className="flex flex-col justify-between">
                <h5 className="flex justify-between">
                  Item Total{" "}
                  <span className="font-bold">₹ {formattedValue}</span>{" "}
                </h5>
                <h5 className="flex justify-between">
                  Delivery Fee <span className="font-bold">₹ 11</span>{" "}
                </h5>
              </div>
            </div>

            <Link
              to="/payment"
              className="p-2 px-2 mt-2 text-base flex justify-between text-gray-50 bg-[#1b5b60] 
              md:p-2 md:px-4 font-bold rounded-md md:text-lg md:mt-4 cursor-pointer"
            >
              <h4>TO PAY</h4>
              <h4>{finalAmount}</h4>
            </Link>
          </>
        ) : null}
      </div>
    </>
  );
};

export default Bill;
