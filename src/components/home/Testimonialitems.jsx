import { IoStarSharp } from "react-icons/io5";
const Testimonialitems = ({ src, title, name, children }) => {
  return (
    <div className="pt-28 pb-14 lg:w-[1000px] m-auto bg-white rounded-3xl relative mt-20 shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] mb-8">
      <div className=" absolute top-[-70px] left-1/2 -translate-x-1/2 ">
        <img src={src} alt="testimonial img" />
      </div>
      <div className="flex gap-2 justify-center ">
        <IoStarSharp className="text-[#FF7628]" />
        <IoStarSharp className="text-[#FF7628]" />
        <IoStarSharp className="text-[#FF7628]" />
        <IoStarSharp className="text-[#FF7628]" />
        <IoStarSharp className="text-[#FF7628]" />
      </div>
      <p className="text-[#726E9E] font-poppins font-medium text-2xl w-full md:w-[700px] text-center leading-10 m-auto mt-8 mb-12">
        {children}
      </p>
      <h3 className="text-[#221A2C] font-open font-bold text-2xl text-center">
        {name}
      </h3>
      <p className="text-[#726E9E] font-poppins font-medium text-base text-center">
        {title}
      </p>
    </div>
  );
};

export default Testimonialitems;
