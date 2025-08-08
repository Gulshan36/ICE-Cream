import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const tiles = [
  {
    label: "Ice-Creams",
    color: "bg-gradient-to-br from-blue to-blue/80",
    link: "/ice-creams",
    icon: "🍦",
    description: "Premium ice creams in delicious flavors",
    count: "15+ Flavors"
  },
  {
    label: "Whip Toppings",
    color: "bg-gradient-to-br from-lime to-lime/80",
    link: "/whip-toppings",
    icon: "🍰",
    description: "Creamy toppings for perfect desserts",
    count: "8+ Varieties"
  },
  {
    label: "Dairy Beverages",
    color: "bg-gradient-to-br from-green2 to-green2/80",
    link: "/dairy-beverages",
    icon: "🥛",
    description: "Fresh beverages made with pure milk",
    count: "10+ Options"
  },
];

const NavigationTiles = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const tileVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300,
      },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue mb-4 font-nunito">
            Discover Our Products
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our wide range of premium dairy products, each crafted with care and attention to detail
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {tiles.map((tile, index) => (
            <motion.div
              key={tile.label}
              variants={tileVariants}
              className={`group relative overflow-hidden rounded-3xl shadow-xl cursor-pointer transition-all duration-500 ${tile.color}`}
              onClick={() => navigate(tile.link)}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50,
              }}
              whileTap={{ scale: 0.95 }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-10 right-10 w-32 h-32 border-4 border-white/30 rounded-full"></div>
                <div className="absolute bottom-10 left-10 w-20 h-20 border-4 border-white/20 rounded-full"></div>
              </div>

              <div className="relative p-8 h-80 flex flex-col items-center justify-center text-white">
                {/* Icon */}
                <motion.div
                  className="text-6xl mb-4 filter drop-shadow-lg"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {tile.icon}
                </motion.div>

                {/* Content */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-extrabold mb-2 font-nunito tracking-wide">
                    {tile.label}
                  </h3>
                  <p className="text-white/90 mb-2 leading-relaxed">
                    {tile.description}
                  </p>
                  <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">
                    <span className="text-sm font-semibold">{tile.count}</span>
                  </div>
                </div>

                {/* Explore Button */}
                <motion.div
                  className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="font-semibold">Explore</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/10 blur-xl"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">
            Can't decide? Try our popular combo packs!
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue to-green1 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Products
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default NavigationTiles;
