import Banner from "../components/home/Banner";
import Blog from "../components/home/Blog";
import ChooseUs from "../components/home/ChooseUs";
import Gallary from "../components/home/Gallary";
import RightPlan from "../components/home/RightPlan";
import Testimonial from "../components/home/Testimonial";
import WeCreat from "../components/home/WeCreat";
import WhatWeDo from "../components/home/WhatWeDo";
const Home = () => {
  return (
    <>
      <Banner />
      <Gallary />
      <ChooseUs />
      <WhatWeDo />
      <WeCreat />
      <RightPlan />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;
