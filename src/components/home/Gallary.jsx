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
          <Gallaryitems className="md:-mt-28" src="/gallary-1.png" />
          <Gallaryitems className="md:mt-[-133px]" src="/gallary-2.png" />
          <Gallaryitems className="md:-mt-4" src="/gallary-3.png" />
          <Gallaryitems className="md:mt-[-100px]" src="/gallary-4.png" />
        </div>
        <div className="my-24 md:flex counteritems">
          <Counter
            countvalue="53"
            title="Happy Client"
            border="md:border-r-[#4f585f61] md:border-r-4  "
            countpost="k"
          />
          <Counter
            countvalue="10"
            title="Projects Done"
            border="md:border-r-[#4f585f61] md:border-r-4"
            countpost="k"
          />
          <Counter
            countvalue="120"
            title="Gets Award"
            border="md:border-r-[#4f585f61] md:border-r-4"
          />
          <Counter countvalue="16" title="operated yEARS" />
        </div>
      </div>
    </section>
  );
};

export default Gallary;
