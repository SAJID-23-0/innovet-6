import Chooseitems from "./Chooseitems";
import Button from "./Button";

const ChooseUs = () => {
  return (
    <section className="py-24 relative ">
      <div className="absolute left-0 top-0 -z-10">
        <img src="/choose-element.png" alt="choose-element" />
      </div>
      <div className="container">
        <div className=" md:flex justify-between">
          <div className="md:w-1/2">
            <Chooseitems>
              We solve real-world problems through people and the web.
            </Chooseitems>
            <Chooseitems>
              We make processes and technology work efficiently together.
            </Chooseitems>
            <Chooseitems>
              We advance improve existing technology through research and
              development.
            </Chooseitems>
            <Chooseitems>
              We develop long-lasting and scalable solutions, relationships
              partnerships.
            </Chooseitems>
          </div>
          <div className="w-fit">
            <h2 className="text-[#141135] font-open text-center font-bold md:text-5xl">
              Why Choose Us
            </h2>
            <p className=" text-lg font-normal font-poppins text-[#726E9E] w-full md:w-[393px] mt-6 mb-14">
              We are now a team of strategists, engineers, designers, and
              marketers who both use and develop technology for a variety of
              client needs.
            </p>
            <div className="m-auto w-fit md:m-0">
              <Button title="Contact Us" color="text-[#141135]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
