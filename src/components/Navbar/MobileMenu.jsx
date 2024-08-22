import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ openMenu }) => {
  return (
    <AnimatePresence mode="wait">
      {openMenu && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute left-0 top-20 z-20 h-screen w-full md:hidden"
        >
          <div className="m-6 rounded-3xl bg-primary py-10 text-xl font-semibold uppercase text-white">
            <ul className="flex flex-col items-center justify-center gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Trainer</a>
              </li>
              <li>
                <a href="#">Program</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
