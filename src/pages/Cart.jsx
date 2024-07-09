import React from "react";
import { Wrapper } from "../component/basics/Wrapper";
import { CartTable } from "../component/CartTable";

export const Cart = () => {
  return (
    <>
      <div>
        {" "}
        <div className=" relative flex justify-center h-[8vh] ">
          <Wrapper className="gap-2 ">
            <h2 className="text-[40px] text-primaryColor">Cart</h2>
            <p className="h-[30px] w-[30px] border-[2px] rounded-full border-ascentColor flex items-center justify-center">
              0
            </p>
          </Wrapper>
        </div>
      </div>

      <CartTable />
    </>
  );
};
