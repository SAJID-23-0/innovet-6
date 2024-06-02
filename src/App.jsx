import Banner from "./components/Banner";
import Blog from "./components/Blog";
import ChooseUs from "./components/ChooseUs";
import Gallary from "./components/Gallary";
import Navbar from "./components/Navbar";
import RightPlan from "./components/RightPlan";
import Testimonial from "./components/Testimonial";
import WeCreat from "./components/WeCreat";
import WhatWeDo from "./components/WhatWeDo";

function App() {
  return (
    <>
      <Navbar />
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
}

export default App;
