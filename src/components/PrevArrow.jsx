import { FaChevronLeft } from "react-icons/fa6";

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 left-0 z-10 w-16 h-16 text-white bg-[#6dbb6180] hover:bg-brand cursor-pointer rounded-full flex justify-center items-center text-2xl  "
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
};

export default PrevArrow;
