import { FaChevronRight } from "react-icons/fa6";

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute top-1/2 right-0 z-10 w-16 h-16 text-white bg-[#6dbb6180] hover:bg-brand cursor-pointer rounded-full flex justify-center items-center text-2xl"
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
};

export default NextArrow;
