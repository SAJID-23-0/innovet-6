import Counter from "./Counter";

const Gallary = () => {
  return (
    <section className=" bg[#F9F9FB] pb-24">
      <div className="container">
        <div className="flex justify-between  overflow-hidden">
          <div className=" relative top-[-123px]">
            <img src="/gallary-1.png" alt="gallary-1" />
          </div>
          <div className=" relative top-[-151px] ">
            <img src="/gallary-2.png" alt="gallary-2" />
          </div>
          <div className=" relative  top-[-35px] ">
            <img src="/gallary-3.png" alt="gallary-3" />
          </div>
          <div className=" relative top-[-117px] ">
            <img src="/gallary-4.png" alt="gallary-4" />
          </div>
        </div>
        <div className="">
          <Counter />
        </div>
      </div>
    </section>
  );
};

export default Gallary;
