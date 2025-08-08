import React from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue via-green1 to-lime flex items-center justify-center z-50">
      <div className="text-center">
        <motion.div
          className="relative mb-8"
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <div className="w-32 h-32 border-8 border-white/30 border-t-white rounded-full"></div>
        </motion.div>
        
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img 
            src={logo} 
            alt="Namaste Bharat Logo" 
            className="h-16 drop-shadow-lg" 
          />
          <span className="text-4xl font-extrabold tracking-wide text-white">Namaste Bharat</span>
        </motion.div>
        
        <motion.p
          className="text-white/80 text-xl font-nunito"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Preparing something delicious...
        </motion.p>
        
        {/* Animated ice cream scoops */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-white rounded-full"
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
