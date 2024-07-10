import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { TbCurrencyNaira } from "react-icons/tb";
import { Wrapper } from "./basics/Wrapper";
import { Link } from "react-router-dom";
import { removeFromCart } from "../Slices/CartSlice";

export const CartTable = ({ cart, dispatch }) => {
  return (
    <>
      <div className="flex justify-center">
        <Wrapper>
          <div className="flex flex-col w-full">
            <div className="overflow-x-auto">
              <div className=" min-w-full inline-block ">
                <div className="overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className=" py-3 text-start text-xs font-medium text-gray-500 uppercas  w-[50%]"
                        >
                          Added Items
                        </th>

                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase flex items-center gap-2 w-[15%]"
                        >
                          Price
                          <TbCurrencyNaira className="h-[14px] w-[17px]" />
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase  w-[15%]"
                        >
                          QTY
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase  w-[15%]"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    {cart.map((item) => (
                      <tbody key={item.id}>
                        <tr>
                          <td className=" py-4 whitespace-nowrap text-sm font-medium text-gray-800 w-[40%]">
                            <div className="flex gap-5 items-end">
                              <img
                                src={item.img}
                                className="w-[140px] h-[150px]"
                                alt="product"
                              />
                              <div className="grid gap-2">
                                <p className="max-w-[300px] text-wrap font-semibold text-[16px]">
                                  {item.title} <br /> {item.description} <br />{" "}
                                  {item.id}
                                </p>
                                <p className="text-[#7D7676] text-[12px]">
                                  #2138473669863
                                </p>
                              </div>
                            </div>
                            <div
                              className="flex gap-1 mt-2 items-center text-primaryColor cursor-pointer"
                              onClick={() => {
                                removeFromCart(item.id);
                                console.log(clicked);
                              }}
                            >
                              <RiDeleteBinLine /> Remove
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            3,500
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                            <div className="flex gap-2">
                              <p className="text-ascentColor font-semibold cursor-pointer">
                                -
                              </p>
                              <p>1</p>
                              <p className="text-ascentColor font-semibold  cursor-pointer">
                                +
                              </p>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <p className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent ">
                              3,500
                            </p>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
      <div className="flex justify-center">
        <Wrapper>
          <div className="bg-[#D9D9D9] w-full p-10 rounded-md">
            <div className="flex justify-between w-full">
              <div className="grid gap-2 items-center">
                <h1 className="text-primaryColor font-semibold">
                  {" "}
                  Choose Shipping Mode:
                </h1>
                <div className="grid items-center">
                  <div class="flex items-center">
                    <input
                      id="radio1"
                      type="radio"
                      name="default-radio"
                      class="hidden checked:bg-no-repeat checked:bg-center checked:border-ascentColor  checked:bg-ascentColor "
                    />
                    <label
                      for="radio1"
                      class="flex items-center cursor-pointer text-gray-600  text-sm font-normal"
                    >
                      <span class="border border-ascentColor  rounded-full mr-2 w-4 h-4 "></span>
                      Store Pickup
                      <span className="ml-3 font-semibold"> FREE</span>
                    </label>
                  </div>
                  <div class="flex items-center">
                    <input
                      id="radio2"
                      type="radio"
                      name="default-radio"
                      class="hidden checked:bg-no-repeat checked:bg-center checked:border-ascentColor checked:bg-ascentColor "
                      checked
                    />
                    <label
                      for="radio2"
                      class="flex items-center cursor-pointer text-gray-600 text-sm font-normal"
                    >
                      <span class="border border-ascentColor rounded-full mr-2 w-4 h-4 "></span>{" "}
                      Home Delivery (between 3-5days) <br /> 12 Alex Johnson
                      Close, Ilupeju, Lagos.
                      <span className="ml-3 font-semibold flex gap-1 items-center">
                        {" "}
                        <TbCurrencyNaira className="h-[14px] w-[17px]" />
                        1,500
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="h-full w-2 bg-red-200" />
              <div className="w-[30%] grid gap-5">
                <div className="flex items-center justify-between">
                  <p>Subtotal</p>
                  <span className="ml-3 font-semibold flex gap-1 items-center">
                    {" "}
                    <TbCurrencyNaira className="h-[14px] w-[17px]" />
                    1,500
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Shipping</p>
                  <span className="ml-3 font-semibold flex gap-1 items-center">
                    {" "}
                    <TbCurrencyNaira className="h-[14px] w-[17px]" />
                    1,500
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p>Total</p>
                  <span className="ml-3 font-semibold flex gap-1 items-center">
                    {" "}
                    <TbCurrencyNaira className="h-[14px] w-[17px]" />
                    1,500
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    to={"/confirmed"}
                    class="cursor-pointer bg-ascentColor text-primaryColor font-semibold  py-2 px-4 border border-ascentColor hover:border-transparent rounded text-sm"
                  >
                    Checkout
                  </Link>
                  <Link
                    to={"/"}
                    class="cursor-pointer bg-transparent text-primaryColor font-semibold  py-2 px-4 border border-ascentColor hover:border-transparent rounded text-sm"
                  >
                    Keep Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  );
};
