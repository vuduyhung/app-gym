import React from "react";
import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa";
import { GiGymBag } from "react-icons/gi";
import { motion } from "framer-motion";
import { slideUp } from "../../utils/animation";

const EquipmentData = [
  {
    id: 1,
    title: "Yoga Equipments",
    desc: "It is a long established fact that a reader readable.",
    icon: <GrYoga />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Muscles Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <FaDumbbell />,
    delay: 0.6,
  },
  {
    id: 3,
    title: "Fitness Equipments",
    desc: "It is a long established fact that a reader readable.",
    link: "/",
    icon: <GiGymBag />,
    delay: 0.9,
  },
];

const Equipments = () => {
  return (
    <div>
      <div className="container py-2">
        <div className="grid grid-cols-1 gap-6 font-playfair sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4 p-6">
            <h1 className="text-3xl font-bold md:text-4xl">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>
          {EquipmentData.map((item) => (
            <motion.div
              variants={slideUp(item.delay)}
              initial="hidden"
              whileInView="visible"
              key={item.id}
              className="space-y-4 rounded-xl bg-[#fbfbfb] bg-gray-100 p-6 hover:bg-white hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]"
            >
              <div className="text-4xl">{item.icon}</div>
              <div className="text-2xl font-semibold">
                <h1 className="">{item.title}</h1>
                <p className="text-gray-500">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipments;
