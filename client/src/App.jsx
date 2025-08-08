import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import HamburgerMenu from "./components/HamburgerMenu";
import HomeCanvas from "./components/HomeCanvas";
import NavigationTiles from "./components/NavigationTiles";
import ScrollLabel from "./components/ScrollLabel";
import IceCreams from "./pages/IceCreams";
import WhipToppings from "./pages/WhipToppings";
import DairyBeverages from "./pages/DairyBeverages";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import LoadingScreen from "./components/LoadingScreen";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

function App() {
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <CartProvider>
      <Router>
        <div className="relative">
          <Navbar onCartClick={() => setCartOpen(true)} />
          <HamburgerMenu />
          
          <AnimatePresence mode="wait">
            <Routes>
              <Route
                path="/"
                element={
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Hero />
                    <HomeCanvas />
                    <NavigationTiles />
                    <Features />
                    <Testimonials />
                    <ScrollLabel />
                    <Footer />
                  </motion.div>
                }
              />
              <Route path="/ice-creams" element={<IceCreams />} />
              <Route path="/whip-toppings" element={<WhipToppings />} />
              <Route path="/dairy-beverages" element={<DairyBeverages />} />
            </Routes>
          </AnimatePresence>

          <Cart isOpen={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
