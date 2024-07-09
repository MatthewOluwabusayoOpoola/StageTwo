import React from "react";

export const Wrapper = ({ children, className = "" }) => {
  return (
    <div
      className={
        `w-[90%] md:w-[85%] max-w-[1180px] flex items-center ` + className
      }
    >
      {children}
    </div>
  );
};
