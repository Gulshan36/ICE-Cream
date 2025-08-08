import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const HamburgerMenu = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const menuItems = [
    { name: "Home", path: "/", icon: "🏠" },
    { name: "Ice-Creams", path: "/ice-creams", icon: "🍦" },
    { name: "Whip Toppings", path: "/whip-toppings", icon: "🍰" },
    { name: "Dairy Beverages", path: "/dairy-beverages", icon: "🥛" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "YouTube", href: "#", icon: "📺" },
  ];

  const handleNavigation = (path) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Menu Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 h-screen w-80 bg-white/95 backdrop-blur-xl rounded-l-3xl text-blue z-50 shadow-2xl border-l border-blue/20"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-blue/10">
              <div className="flex items-center gap-3">
                <img 
                  src={logo} 
                  alt="Namaste Bharat Logo" 
                  className="h-10 drop-shadow-lg" 
                />
                <span className="text-xl font-bold">Namaste Bharat</span>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-blue/10 rounded-full transition-colors"
              >
                <XMarkIcon className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Menu */}
            <nav className="p-6">
              <ul className="space-y-4">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="w-full flex items-center gap-4 p-4 text-blue hover:bg-gradient-to-r hover:from-blue hover:to-green1 hover:text-white transition-all duration-300 rounded-xl font-nunito font-bold text-lg group"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      {item.name}
                    </button>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Additional Features */}
            <div className="px-6 py-4 border-t border-blue/10">
              <h3 className="text-sm font-semibold text-blue/70 mb-3 uppercase tracking-wide">
                Quick Actions
              </h3>
              <div className="space-y-2">
                <button className="w-full flex items-center gap-3 p-3 text-blue hover:bg-blue/10 rounded-lg transition-colors text-sm">
                  <span>🔍</span> Search Products
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-blue hover:bg-blue/10 rounded-lg transition-colors text-sm">
                  <span>❤️</span> Favorites
                </button>
                <button className="w-full flex items-center gap-3 p-3 text-blue hover:bg-blue/10 rounded-lg transition-colors text-sm">
                  <span>📞</span> Contact Us
                </button>
              </div>
            </div>

            {/* Social Links */}
            <div className="px-6 py-4 border-t border-blue/10 mt-auto">
              <h3 className="text-sm font-semibold text-blue/70 mb-4 uppercase tracking-wide">
                Follow Us
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    className="w-12 h-12 bg-gradient-to-r from-blue to-green1 text-white rounded-xl flex items-center justify-center text-lg hover:shadow-lg transition-all"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    title={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="p-6 bg-gradient-to-r from-blue/10 to-green1/10 rounded-t-2xl">
              <h3 className="text-sm font-semibold text-blue mb-2">Stay Updated</h3>
              <p className="text-xs text-blue/70 mb-3">Get sweet deals & new flavors!</p>
              <motion.button
                className="w-full bg-gradient-to-r from-blue to-green1 text-white py-2 rounded-lg text-sm font-semibold"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe Newsletter
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;
