import React from "react";
import WecreateItems from "./WecreateItems";

const WeCreat = () => {
  return (
    <section className=" py-24 relative">
      <div>
        <img
          src="wecreate vector.png"
          alt="wecreate vector"
          className="absolute right-0 bottom-0 -z-10"
        />
      </div>
      <div className="container">
        <h2 className="text-[#141135] font-open font-bold text-5xl text-center">
          We create real impact
        </h2>
        <p className="text-[#726E9E] font-poppins font-normal text-lg w-[579px] text-center m-auto mt-6 mb-[75px]">
          We design, build and support websites and apps for clients worldwide.
          Create beautiful, eye-catching on-page messages without the need for a
          developer.
        </p>
        <div className="flex gap-36">
          <div>
            <WecreateItems
              title="Competitive analysis"
              src="/wecreate icon 1.png"
              className="flex gap-8 mb-10"
            >
              With an all-new look and powerful features, Ekko is the best way
              to ensure success for your business.
            </WecreateItems>

            <WecreateItems
              title=" Strategy And research"
              src="/wecreate icon 2.png"
              className="flex gap-8"
            >
              Save money and start building your website using the best tools
              available on the market today.
            </WecreateItems>
          </div>
          <div className="relative">
            <img src="wecreate img.png" alt="wecreate img" />
            <img
              src="element.png"
              alt="element"
              className="absolute right-8 top-[120px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeCreat;
