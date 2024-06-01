import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function SampleNextArrow({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <FaChevronRight />
    </div>
  );
}

function SamplePrevArrow({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <FaChevronLeft />
    </div>
  );
}

const Testimonial = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <section className="py-24">
      <div className="container">
        <h2 className="text-[#141135] font-open font-bold text-5xl text-center">
          What The People Thinks About Us
        </h2>

        <Slider {...settings}>
          <div>
            <img src="/testimonial card.png" alt="" />
          </div>
          <div>
            <img src="/testimonial card.png" alt="" />
          </div>
          <div>
            <img src="/testimonial card.png" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
