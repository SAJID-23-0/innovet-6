import Counter from "./Counter";
import Gallaryitems from "./Gallaryitems";

const Gallary = () => {
  return (
    <section className="overflow-hidden relative">
      <div className="absolute top-0 right-0 -z-10">
        <img src="/gallary-element.png" alt="gallary-element" />
      </div>
      <div className="container">
        <div className="flex gap-7">
          <Gallaryitems className="-mt-28" src="/gallary-1.png" />
          <Gallaryitems className="mt-[-133px]" src="/gallary-2.png" />
          <Gallaryitems className="-mt-4" src="/gallary-3.png" />
          <Gallaryitems className="mt-[-100px]" src="/gallary-4.png" />
        </div>
        <div className="my-24 flex counteritems">
          <Counter
            countvalue="53"
            title="Happy Client"
            border="border-r-[#4f585f61] border-r-4  "
            countpost="k"
          />
          <Counter
            countvalue="10"
            title="Projects Done"
            border="border-r-[#4f585f61] border-r-4"
            countpost="k"
          />
          <Counter
            countvalue="120"
            title="Gets Award"
            border="border-r-[#4f585f61] border-r-4"
          />
          <Counter countvalue="16" title="operated yEARS" />
        </div>
      </div>
    </section>
  );
};

export default Gallary;
