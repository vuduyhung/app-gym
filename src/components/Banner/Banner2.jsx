import React from "react";
import { motion } from "framer-motion";
import { slideLeft } from "../../utils/animation";

const Banner2 = () => {
  return (
    <div className="container my-14">
      <div className="flex items-center justify-center bg-[#f9f9f9] py-14 md:py-24">
        {/* brand info */}
        <div className="flex flex-col justify-center space-y-8 text-center lg:px-44">
          <motion.h1
            variants={slideLeft(0.5)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="text-3xl font-bold uppercase lg:text-5xl"
          >
            Get 20% Discount On Your First Order, Are You Ready To Buy
          </motion.h1>
          <motion.p
            variants={slideLeft(0.7)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=""
          >
            We will make sure you get the right and the best quality products
            for your workout
          </motion.p>
          <motion.div
            variants={slideLeft(0.9)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className="flex justify-center gap-6"
          >
            <button className="primary-btn">Learn More</button>
            <button className="rounded-lg border-2 border-primary px-5 font-bold text-primary">
              Stay In Touch
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
