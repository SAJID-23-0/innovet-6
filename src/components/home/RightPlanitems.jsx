import { LuDollarSign } from "react-icons/lu";

const RightPlanitems = ({ title, src, price }) => {
  return (
    <div className="sm:w-[370px] h-[561px] bg-white text-[#141135] rounded-3xl hover:bg-[#6B62C5] hover:text-white">
      <div className="flex flex-col justify-center items-center">
        <h3 className="font-open font-bold text-3xl mt-14">{title}</h3>
        <img src={src} alt="rightplan emoji" className=" mt-6 mb-5" />
        <h3 className="flex mb-4">
          <LuDollarSign className="text-brand" />
          <span className="font-nunito font-extrabold text-5xl text-brand">
            {price}
          </span>
        </h3>
        {/* <p className="w-[199px] font-poppins font-medium  text-lg text-center leading-8">
          Responsive Design Dynamic Elements Service Pages Custom Design &
          Features
        </p> */}
        <p className="font-poppins font-medium mb-2 text-lg">
          Responsive Design
        </p>
        <p className="font-poppins font-medium mb-2 text-lg">
          Dynamic Elements
        </p>
        <p className="font-poppins font-medium mb-2 text-lg">Service Pages</p>
        <p className="font-poppins font-medium mb-14 text-lg">
          Custom Design & Features
        </p>
      </div>
    </div>
  );
};

export default RightPlanitems;
