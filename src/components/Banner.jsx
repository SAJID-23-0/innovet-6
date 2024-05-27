import Button from "./Button";

const Banner = () => {
  return (
    <section className=" bg-[url(/banner.png)] pt-64 pb-60 relative z-10 after:absolute after:-z-10 after:top-0 after:left-0 after:h-full after:w-full after:bg-[rgba(107,98,197,0.8)]">
      <div className="container">
        <h1 className=" font-open font-bold text-[84px] text-white text-center capitalize ">
          yOU’RE UNIQUE.YOUR WEBSITE SHOULD BE TOO
        </h1>
        <p className=" leading-10 font-poppins font-normal text-center text-2xl text-white w-[675px] m-auto pt-5 pb-4">
          A beautiful website passionately crafted for your small business. Our
          Digital Agency development has changed the way brands and businesses
          use technology for growing business.
        </p>
        <div className="flex gap-7 justify-center">
          <Button title="Get Free Quoto" color="text-white" />
          <Button title="Learn More" color="text-white" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
