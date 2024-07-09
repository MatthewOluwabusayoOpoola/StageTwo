import React from "react";

export const FilterCard = () => {
  return (
    <div className="grid gap-1">
      <h3 className="text-[16px] text-primaryColor font-semibold">Brand</h3>
      <input
        type="search"
        class=" rounded w-[95px] h-[14px] border-[1px] border-ascentColor text-[10px] p-2"
        placeholder="search"
      />

      <div className="flex gap-3 items-center">
        <div className="border-[3px] w-[13px] h-[13px] border-ascentColor rounded" />
        <p className="text-[12px]">Apple</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="border-[3px] w-[13px] h-[13px] border-ascentColor rounded" />
        <p className="text-[12px]">Apple</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="border-[3px] w-[13px] h-[13px] border-ascentColor rounded" />
        <p className="text-[12px]">Apple</p>
      </div>
      <div className="flex gap-3 items-center">
        <div className="border-[3px] w-[13px] h-[13px] border-ascentColor rounded" />
        <p className="text-[12px]">Apple</p>
      </div>
    </div>
  );
};
