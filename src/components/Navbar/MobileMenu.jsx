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
          className="absolute left-0 top-20 z-20 h-screen w-full"
        >
          <div className="m-6 rounded-3xl bg-primary py-10 text-xl font-semibold uppercase text-white">
            <ul className="flex flex-col items-center justify-center gap-10">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
