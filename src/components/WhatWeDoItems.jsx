import Button from "./Button";

const WhatWeDoItems = ({ children, title, src }) => {
  return (
    <div className="w-[370px] h-[395px] bg-[#FFFFFF] rounded-3xl text-[#141135] hover:bg-[#6B62C5] hover:text-white">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img className=" mt-12 mb-8" src={src} alt="whatwedo" />
        </div>
        <h3 className=" font-open font-bold text-3xl ">{title}</h3>
        <p className="text-lg font-poppins font-normal w-64 text-center mt-4 mb-5">
          {children}
        </p>
        <Button title="Read more" />
      </div>
    </div>
  );
};

export default WhatWeDoItems;
