import React from "react";
import { FaPlay } from "react-icons/fa";
import HeroImg from "../../assets/dumbell.png";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../../utils/animation";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container relative grid min-h-[650px] grid-cols-1 md:grid-cols-2">
          {/* Brand info */}
          <div className="flex flex-col justify-center py-14 font-playfair md:py-0">
            <div className="space-y-6 text-center md:text-left">
              <motion.h1
                variants={slideRight(0.6)}
                initial="hidden"
                animate="visible"
                className="text-5xl font-bold leading-relaxed lg:text-6xl xl:leading-normal"
              >
                Gym give you the pefectt{" "}
                <span className="text-primary">Health</span>
              </motion.h1>
              <motion.p
                variants={slideRight(1.2)}
                initial="hidden"
                animate="visible"
                className="text-gray-600 xl:max-w-[500px]"
              >
                It is a long established fact that a reader will be by readable
                contet of a page when are the best product.
              </motion.p>
              <motion.div
                variants={slideRight(1.5)}
                initial="hidden"
                animate="visible"
                className="!mt-4 flex justify-center gap-8 md:justify-start"
              >
                <button className="primary-btn flex items-center gap-2">
                  Order Now
                </button>
                <button className="flex items-center justify-center gap-2">
                  <FaPlay />
                  Watch Now
                </button>
              </motion.div>
            </div>
          </div>
          {/* Hero image */}
          <div className="flex items-center justify-center">
            <motion.img
              variants={slideRight(1.5)}
              initial={{ x: "100%", rotate: 90 }}
              animate={{ x: 0, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
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
