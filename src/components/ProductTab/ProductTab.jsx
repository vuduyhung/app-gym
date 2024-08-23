import React, { useState } from "react";
import { ProductsData } from "../../mockData/data";
import { motion } from "framer-motion";

const ProductTab = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = ["All"].concat(ProductsData.map((product) => product.category));

  const filteredCards =
    activeTab === "All"
      ? ProductsData
      : ProductsData.filter((product) => product.category === activeTab);

  return (
    <div>
      <div className="container my-12 md:my-16">
        {/* Tab buttons section */}
        <div className="mb-4 flex justify-start space-x-4 p-6">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className={`cursor-pointer rounded px-4 py-2 ${
                activeTab === tab ? "primary-btn" : "bg-gray-100"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Tab cards section */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCards.map((product) => (
            <motion.div
              id={product.id}
              key={product.id}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex flex-col justify-between space-y-2 rounded border p-4 shadow-sm"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[240px] w-full object-cover"
                />
                <h2 className="mt-2 text-xl font-semibold">{product.title}</h2>
                <p className="mb-4 text-gray-500">{product.info}</p>
              </div>
              <div className="mt-auto flex items-center justify-between">
                <p className="text-gray-600">{product.price}</p>
                <button className="primary-btn">Add to Cart</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductTab;
