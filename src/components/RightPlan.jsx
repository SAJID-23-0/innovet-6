import React from "react";
import RightPlanitems from "./RightPlanitems";

const RightPlan = () => {
  return (
    <section className="py-24 bg-[#F9F9FB]">
      <div className="container">
        <h2 className="text-[#141135] font-open font-bold text-5xl text-center mb-16">
          Choose The Right Plan
        </h2>
        <div className="flex justify-between">
          <RightPlanitems
            title="Basic"
            src="/rightplan emoji 1.png"
            price="160"
          />
          <RightPlanitems
            title="Professional"
            src="/rightplan emoji 2.png"
            price="240"
          />
          <RightPlanitems
            title="Exclusive"
            src="/rightplan emoji 3.png"
            price="325"
          />
        </div>
      </div>
    </section>
  );
};

export default RightPlan;
