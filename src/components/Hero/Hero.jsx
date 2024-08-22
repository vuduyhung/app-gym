import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container relative grid min-h-[650px] grid-cols-1 md:grid-cols-2">
          {/* Brand info */}
          <div className="font-playfair flex flex-col justify-center py-14 md:py-0">
            <div className="space-y-6 text-center md:text-left">
              <h1 className="text-5xl font-bold leading-relaxed lg:text-6xl xl:leading-normal">
                Gym give you the pefectt{" "}
                <span className="text-primary">Health</span>
              </h1>
              <p className="text-gray-600 xl:max-w-[500px]">
                It is a long established fact that a reader will be by readable
                contet of a page when are the best product.
              </p>
              <div className="!mt-4 flex justify-center gap-8 md:justify-start">
                <button className="primary-btn flex items-center gap-2">
                  Order Now
                </button>
                <button className="flex items-center justify-center gap-2">
                  <FaPlay />
                  Watch Now
                </button>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex items-center justify-center">
            <img
              src={HeroImg}
              alt=""
              className="w-[350px] drop-shadow md:w-[550px] xl:w-[700px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
