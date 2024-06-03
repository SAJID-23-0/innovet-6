import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

import Testimonialitems from "./Testimonialitems";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <section className="py-24 bg-[#F8F8FF]">
      <div className="container">
        <h2 className="text-[#141135] font-open font-bold sm:text-5xl text-center  mb-20">
          What The People Thinks About Us
        </h2>

        <Slider {...settings}>
          <Testimonialitems
            src="/testimonial img.png"
            title="Ceo And Head Of Idea"
            name="Lukan Depina"
          >
            Lesser Replenish bearing they’re him cattle kind dominion. You which
            fill place. Land she’d subdue divided gathering blessed seasons it.
            Without, wherein days.
          </Testimonialitems>
          <Testimonialitems
            src="/testimonial img.png"
            title="Ceo And Head Of Idea"
            name="Lukan Depina"
          >
            Lesser Replenish bearing they’re him cattle kind dominion. You which
            fill place. Land she’d subdue divided gathering blessed seasons it.
            Without, wherein days.
          </Testimonialitems>
          <Testimonialitems
            src="/testimonial img.png"
            title="Ceo And Head Of Idea"
            name="Lukan Depina"
          >
            Lesser Replenish bearing they’re him cattle kind dominion. You which
            fill place. Land she’d subdue divided gathering blessed seasons it.
            Without, wherein days.
          </Testimonialitems>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
