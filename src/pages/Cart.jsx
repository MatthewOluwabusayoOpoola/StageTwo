import React from "react";
import { Wrapper } from "../component/basics/Wrapper";
import { CartTable } from "../component/CartTable";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../Slices/CartSlice";

export const Cart = () => {
  const { cart, total, totalItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <>
      <div>
        {" "}
        <div className=" relative flex justify-center h-[8vh] ">
          <Wrapper className="gap-2 ">
            <h2 className="text-[40px] text-primaryColor">Cart</h2>
            <p className="h-[30px] w-[30px] border-[2px] rounded-full border-ascentColor flex items-center justify-center">
              {totalItems}
            </p>
          </Wrapper>
        </div>
      </div>

      <CartTable cart={cart} dispatch={dispatch} />
    </>
  );
};
