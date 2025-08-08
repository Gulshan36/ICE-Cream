import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShoppingCartIcon, BellIcon } from "@heroicons/react/24/outline";
import { useCart } from "../context/CartContext";
import logo from "../assets/logo.png";

const Navbar = ({ onCartClick }) => {
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 py-4 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-blue/10' 
          : 'bg-white/30 backdrop-blur-md border-b border-blue/20'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div 
        className="flex items-center gap-3"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img 
          src={logo} 
          alt="Namaste Bharat Logo" 
          className="h-12 drop-shadow-lg" 
        />
        <span className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-blue to-green2 bg-clip-text text-transparent">
          Namaste Bharat
        </span>
      </motion.div>
      
      <div className="flex items-center gap-4">
        <motion.button
          className="relative p-2 text-blue hover:text-green2 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <BellIcon className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
            3
          </span>
        </motion.button>
        
        <motion.button
          onClick={onCartClick}
          className="relative p-2 text-blue hover:text-green2 transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ShoppingCartIcon className="w-6 h-6" />
          {totalItems > 0 && (
            <motion.span
              className="absolute -top-1 -right-1 w-5 h-5 bg-green2 text-white text-xs rounded-full flex items-center justify-center font-bold"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {totalItems}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
