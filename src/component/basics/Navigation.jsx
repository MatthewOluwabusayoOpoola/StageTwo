import React from "react";
import { Wrapper } from "./Wrapper";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";

export const Navigation = () => {
  return (
    <div>
      {" "}
      <div className=" relative flex justify-center h-[8vh] ">
        <Wrapper className="justify-between ">
          <aside className="block ">
            <ul className="flex items-center justify-center gap-3 text-primaryColor text-[16px]">
              <p className="">Tech Accessories</p>
              <p className="">Outdoor Gear</p>
              <p className="">Athletic Apparel</p>
            </ul>
          </aside>
          <div className="flex items-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <img src={"./logo.png"} width={60} height={60} alt="plur logo" />
          </div>
          <aside className="flex gap-10 items-center text-primaryColor">
            {/* <p className="bg-primary  p-2 px-4 rounded-md hover:bg-primary/80">
      Login
    </p> */}
            <FaSearch className="w-4 h-4" />
            <IoPersonOutline className="w-4 h-4" />
            <GrCart className="w-4 h-4" />
          </aside>
        </Wrapper>
      </div>
      <div className="h-[1px] w-full bg-[#D9D9D9]" />
    </div>
  );
};
