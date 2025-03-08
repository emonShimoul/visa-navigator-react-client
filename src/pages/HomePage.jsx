import React from "react";
import Banner from "../components/Banner";
import LatestVisas from "../components/LatestVisas";
import WhyChoose from "../components/WhyChoose";
import Testimonial from "../components/Testimonial";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <LatestVisas></LatestVisas>
      <WhyChoose></WhyChoose>
      <Testimonial></Testimonial>
    </div>
  );
};

export default HomePage;
