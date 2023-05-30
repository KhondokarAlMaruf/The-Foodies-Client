import React from "react";
import banner from "../Images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="hero  rounded-lg mt-4">
        <div className="hero-content flex-col lg:flex-row-reverse gap-8 md:gap-14 justify-between items-center">
          <div>
            <img
              src={banner}
              className="w-full rounded-lg shadow-2xl"
              alt="fiveM Heist Cover"
            />
          </div>
          <div className="w-full lg:w-full">
            <h1 className="text-4xl md:text-6xl font-semibold font-teko text-pink-300 leading-relaxed">
              Welcome to <br /> World of <br />{" "}
              <span className="text-fuchsia-900">Thai Foods</span>
            </h1>
            <p className="font-barlow my-4 md:my-8 w-11/12 text-xl leading-loose">
              Thai food is a harmonious combination of tastes and medicinal
              qualities, as the ingredients are mainly vegetables and herbs,
              such as lemon grass, galangal, capsicum, basil, and garlic, which
              not only give out enticing aromas, but also increase the health
              benefits.”
            </p>
            <div className="mt-8 font-barlow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
