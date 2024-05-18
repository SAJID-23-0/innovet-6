import React from "react";

const Button = ({ title }) => {
  return (
    <button className=" py-3 px-7 font-open text-lg font-bold capitalize text-white border-2 border-brand rounded-full hover:bg-brand transition-all ">
      {title}
    </button>
  );
};

export default Button;
