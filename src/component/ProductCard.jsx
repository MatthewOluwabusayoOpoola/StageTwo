import React from "react";
import { TbCurrencyNaira } from "react-icons/tb";

export const ProductCard = () => {
  return (
    <div>
      <div class="my-8 rounded shadow-sm shadow-gray-200 dark:shadow-gray-900 bg-[#F2F2F2] ">
        <div>
          <img
            src="./products/product1.png"
            class=" h-[230px] w-full object-cover"
          />

          <div class="p-2 gap-3 grid items-center">
            <div>
              <p class=" mb-1 font-light text-gray-800 text-[14px]">
                Strong P9 Wireless Bluetooth Stereo OverEar Foldable Headset
              </p>

              <small class="leading-5 text-primaryColor text-[14px] font-semibold flex gap-1 items-center">
                <TbCurrencyNaira className="h-[14px] w-[17px]" />
                50,000
              </small>
            </div>
            <button class="cursor-pointer bg-transparent hover:bg-ascentColor text-primaryColor font-semibold  py-1 px-2 border border-ascentColor hover:border-transparent rounded">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
