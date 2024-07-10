import React from "react";
import { Wrapper } from "./Wrapper";
import { FaSearch } from "react-icons/fa";
import { IoPersonOutline } from "react-icons/io5";
import { GrCart } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="hidden relative md:flex justify-center h-[8vh] ">
        <Wrapper className="justify-between ">
          <aside className="block ">
            <ul className="flex font-semibold items-center justify-center gap-3 text-primaryColor text-[16px]">
              <Link to={"#"} className="">
                Tech Accessories
              </Link>
              <Link to={"#"} className="">
                Outdoor Gear
              </Link>
              <Link to={"#"} className="">
                Athletic Apparel
              </Link>
            </ul>
          </aside>
          <div className="flex items-center absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%]">
            <img src={"./logo.png"} width={60} height={60} alt="plur logo" />
          </div>
          <aside className="flex gap-10 items-center text-primaryColor">
            {/* <p className="bg-primary  p-2 px-4 rounded-md hover:bg-primary/80">
      Login
    </p> */}
            <FaSearch className="w-4 h-4 cursor-pointer" />
            <IoPersonOutline className="w-4 h-4 cursor-pointer" />
            <GrCart
              className="w-4 h-4 cursor-pointer"
              onClick={() => {
                navigate("/cart");
              }}
            />
          </aside>
        </Wrapper>
      </div>
      <div className="h-[1px] w-full bg-[#D9D9D9]" />
      {/* Mobile */}
      <div className="md:hidden relative flex justify-center items-center h-fit w-screen py-4">
        <Wrapper className="grid  gap-5 ">
          <div className="flex justify-between">
            <div className="flex items-center">
              <img src={"./logo.png"} width={60} height={60} alt="plur logo" />
            </div>
            <div className="flex gap-10 items-center text-primaryColor bg-ascentColor p-1 rounded-md h-fit w-fit cursor-pointer">
              <FaSearch className=" cursor-pointer h-[22px] w-[22px]" />
            </div>
          </div>
          <div className="block ">
            <ul className="flex font-semibold items-center justify-between gap-3 text-primaryColor text-[14px] w-full">
              <Link to={"#"} className="">
                Tech Accessories
              </Link>
              <Link to={"#"} className="">
                Outdoor Gear
              </Link>
              <Link to={"#"} className="">
                Athletic Apparel
              </Link>
            </ul>
          </div>
        </Wrapper>
      </div>
      <div className="h-[4px] w-full bg-[#D9D9D9]" />
    </div>
  );
};
