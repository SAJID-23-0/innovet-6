const Chooseitems = ({ children }) => {
  return (
    <div className="py-11 pl-7 rounded-xl flex gap-9 items-start transition-all hover:shadow-lg">
      <span className="w-6 h-6 rounded-full bg-brand  relative after:left-1/2 mt-2 after:top-0 after:absolute after:w-6 after:h-6 after:rounded-full after:bg-[#CBC8F0]"></span>
      <p className="text-lg font-normal text-[#726E9E] w-[366px]">{children}</p>
    </div>
  );
};

export default Chooseitems;
