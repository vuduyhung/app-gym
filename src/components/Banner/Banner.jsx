import React from "react";
import { motion } from "framer-motion";
import { slideUp } from "../../utils/animation";

const Banner = ({ image, title, subtitle, link }) => {
  return (
    <div className="container">
      <div className="grid grid-cols-1 space-y-6 bg-[#f9f9f9] py-14 md:grid-cols-2 md:space-y-0">
        {/* Banner image section */}
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
            }}
            src={image}
            alt=""
            className="h-full w-[300px] object-cover md:max-w-[400px] xl:min-w-[600px]"
          />
        </div>
        {/* Banner text section */}
        <div className="flex flex-col justify-center space-y-4 text-center md:text-left lg:max-w-[500px]">
          <motion.p
            variants={slideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-playfair text-2xl font-bold capitalize lg:text-4xl"
          >
            {title}
          </motion.p>
          <motion.p
            variants={slideUp(0.7)}
            initial="hidden"
            whileInView="visible"
          >
            {subtitle}
          </motion.p>
          <motion.div
            variants={slideUp(0.9)}
            initial="hidden"
            whileInView="visible"
            className="flex justify-center md:justify-start"
          >
            <button className="primary-btn">Exlorer more</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
