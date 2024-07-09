import React from "react";

export const Confirmed = () => {
  return (
    <div className="h-full w-full pt-36 relative flex items-center justify-center flex-col gap-5">
      {/* <div className="flex items-center justify-center rounded-full w-[100px] h-[100px] bg-ascentColor">
            <FaCheck className=" text-white h-10 w-10" />
          </div> */}
      <img src="./check.png" alt="checked out" />
      <h3 className="font-semibold text-primaryColor text-[30px]">
        Order Confirmed
      </h3>
      <p className="text-center text-sm text-[#4B4646]">
        Thank you for shopping with us. <br />
        Expect you order between 10th -12th Jul-2024
      </p>
      <button class="cursor-pointer bg-ascentColor text-primaryColor font-semibold  py-2 px-4 border border-ascentColor hover:border-transparent rounded text-sm mt-[4rem] ">
        Continue Shopping
      </button>
    </div>
  );
};
