import React from "react";

const WecreateItems = ({ title, children, src, className }) => {
  return (
    <div className={className}>
      <div>
        <img src={src} alt="wecreate icon" />
      </div>
      <div>
        <h3 className="text-[#141135] font-open font-bold sm:text-3xl ">
          {title}
        </h3>
        <p className="text-[#726E9E] font-poppins font-normal text-lg mt-5 w-full sm:w-[343px]">
          {children}
        </p>
      </div>
    </div>
  );
};

export default WecreateItems;
