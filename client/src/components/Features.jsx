import React from "react";
import { motion } from "framer-motion";
import { StarIcon, ShieldCheckIcon, TruckIcon, HeartIcon } from "@heroicons/react/24/solid";

const features = [
  {
    icon: StarIcon,
    title: "Premium Quality",
    description: "Made with the finest ingredients sourced from trusted suppliers worldwide",
    color: "bg-blue"
  },
  {
    icon: ShieldCheckIcon,
    title: "100% Natural",
    description: "No artificial preservatives or additives - just pure, natural goodness",
    color: "bg-green2"
  },
  {
    icon: TruckIcon,
    title: "Fresh Delivery",
    description: "Cold chain delivery ensures your products arrive fresh and delicious",
    color: "bg-lime"
  },
  {
    icon: HeartIcon,
    title: "Made with Love",
    description: "Every product is crafted with passion and care for the perfect taste",
    color: "bg-green1"
  }
];

const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-blue mb-4 font-nunito">
            Why Choose Namaste Bharat?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering the highest quality dairy products with exceptional taste and nutrition
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-blue mb-4 text-center font-nunito">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 text-center leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
