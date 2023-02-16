import React from "react";
import Button from "./common/Button";
import testimonial from "../assets/images/testimonial-logo.png";
import stars from "../assets/images/stars.png";
import SimpleSlider from "./common/carousel/Carousel";

const Testimonial = () => {
  return (
    <section class="px-6 md:px-8 xl:px-16 py-12 lg:py-16 bg-lightest-white-bg text-light-black testimonialbg">
      <div className="flex flex-col items-center mb-12">
        <img src={testimonial} alt="trust-pilot" width="300px" height="auto" />
        <div className="flex flex-row flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-6">
          <img src={stars} alt="stars" width="150px" height="auto" />
          <p className="text-light-black uppercase tracking-wideer">
            5.0 <span className="px-2">/</span> 500 REVIEWS
          </p>
        </div>
      </div>
      <SimpleSlider />
      <div className="flex justify-center mt-12">
        <Button buttonText="Read More" goText="Read" />
      </div>
    </section>
  );
};

export default Testimonial;
