import React from "react";
import Button from "./Button";
import WhatWeDoItems from "./WhatWeDoItems";

const WhatWeDo = () => {
  return (
    <section className=" py-24 bg-[#F6F5FF]">
      <div className="container">
        <div className="md:flex gap-8 justify-center">
          <div className="sm:w-[370px] h-[395px]">
            <h2 className="text-[#141135] font-open font-bold text-5xl">
              What We Do
            </h2>
            <p className=" text-lg font-open font-normal w-full sm:w-[345px] leading-8 mt-5 mb-14">
              We are now a team of strategists, engineers, designers, and
              marketers who both use and develop technology
            </p>
            <div className="flex justify-center md:justify-start">
              <Button title="Contact Us" color="text-[#141135]" />
            </div>
          </div>
          <WhatWeDoItems title="Web design & Dev" src="/whatwedo1.png">
            Social Media has changed the way we interact & do business while
            creating
          </WhatWeDoItems>

          <WhatWeDoItems title="Software Dev " src="/whatwedo2.png">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build
          </WhatWeDoItems>
        </div>
        <div className="md:flex gap-8 justify-center mt-8">
          <WhatWeDoItems title="Content Writing" src="/whatwedo3.png">
            Social Media has changed the way we interact & do business while
            creating a new avenue.
          </WhatWeDoItems>

          <WhatWeDoItems title="Digital Marketing" src="/whatwedo4.png">
            Social Media has changed the way we interact & do business while
            creating a new avenue.
          </WhatWeDoItems>

          <WhatWeDoItems title="Support & Training" src="/whatwedo5.png">
            Content Marketing is the other fold of online advertisement. If you
            are looking to build
          </WhatWeDoItems>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
