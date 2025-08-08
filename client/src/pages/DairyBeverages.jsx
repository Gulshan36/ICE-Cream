import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon, ShoppingCartIcon, StarIcon, FireIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

const beverages = [
  {
    id: 1,
    name: "Classic Milkshake",
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=300&h=300&fit=crop",
    desc: "Rich and creamy milkshake made with premium milk and vanilla.",
    price: 4.99,
    rating: 4.8,
    reviews: 156,
    color: "bg-blue/80",
    category: "Milkshakes",
    size: "16oz",
    calories: 280,
    temperature: "Cold"
  },
  {
    id: 2,
    name: "Mango Lassi",
    img: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=300&h=300&fit=crop",
    desc: "Traditional Indian drink with sweet mango and fresh yogurt.",
    price: 5.49,
    rating: 4.9,
    reviews: 203,
    color: "bg-lime/80",
    category: "Lassi",
    size: "12oz",
    calories: 220,
    temperature: "Cold"
  },
  {
    id: 3,
    name: "Cold Coffee",
    img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop",
    desc: "Refreshing cold coffee with a creamy finish and rich aroma.",
    price: 4.79,
    rating: 4.7,
    reviews: 134,
    color: "bg-green2/80",
    category: "Coffee",
    size: "16oz",
    calories: 180,
    temperature: "Cold"
  },
  {
    id: 4,
    name: "Chocolate Milkshake",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
    desc: "Decadent chocolate milkshake with real cocoa and whipped cream.",
    price: 5.99,
    rating: 4.9,
    reviews: 189,
    color: "bg-green1/80",
    category: "Milkshakes",
    size: "16oz",
    calories: 320,
    temperature: "Cold"
  },
  {
    id: 5,
    name: "Strawberry Smoothie",
    img: "https://images.unsplash.com/photo-1553909489-cd47e0ef937f?w=300&h=300&fit=crop",
    desc: "Fresh strawberry smoothie with yogurt and natural sweeteners.",
    price: 5.29,
    rating: 4.6,
    reviews: 98,
    color: "bg-lime/80",
    category: "Smoothies",
    size: "14oz",
    calories: 200,
    temperature: "Cold"
  },
  {
    id: 6,
    name: "Masala Chai Latte",
    img: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=300&h=300&fit=crop",
    desc: "Aromatic spiced tea latte with steamed milk and traditional spices.",
    price: 4.49,
    rating: 4.8,
    reviews: 167,
    color: "bg-green2/80",
    category: "Tea",
    size: "12oz",
    calories: 160,
    temperature: "Hot"
  },
  {
    id: 7,
    name: "Rose Lassi",
    img: "https://images.unsplash.com/photo-1587334274328-64186a80aeee?w=300&h=300&fit=crop",
    desc: "Delicate rose-flavored lassi with cardamom and pistachios.",
    price: 5.79,
    rating: 4.7,
    reviews: 89,
    color: "bg-blue/80",
    category: "Lassi",
    size: "12oz",
    calories: 240,
    temperature: "Cold"
  },
  {
    id: 8,
    name: "Cappuccino",
    img: "https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=300&fit=crop",
    desc: "Perfect balance of espresso, steamed milk, and foam.",
    price: 3.99,
    rating: 4.8,
    reviews: 245,
    color: "bg-green1/80",
    category: "Coffee",
    size: "8oz",
    calories: 120,
    temperature: "Hot"
  }
];

const DairyBeverages = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTemp, setSelectedTemp] = useState('all');
  const { addToCart } = useCart();

  const toggleFavorite = (id) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleAddToCart = (beverage) => {
    addToCart(beverage);
  };

  const categories = [
    { id: 'all', name: 'All Drinks' },
    { id: 'Milkshakes', name: 'Milkshakes' },
    { id: 'Coffee', name: 'Coffee' },
    { id: 'Lassi', name: 'Lassi' },
    { id: 'Smoothies', name: 'Smoothies' },
    { id: 'Tea', name: 'Tea' }
  ];

  const temperatures = [
    { id: 'all', name: 'All Temps', icon: '🌡️' },
    { id: 'Cold', name: 'Cold', icon: '❄️' },
    { id: 'Hot', name: 'Hot', icon: '🔥' }
  ];

  const filteredBeverages = beverages.filter(beverage => {
    const categoryMatch = selectedCategory === 'all' || beverage.category === selectedCategory;
    const tempMatch = selectedTemp === 'all' || beverage.temperature === selectedTemp;
    return categoryMatch && tempMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green2 via-blue to-green1 pt-20">
      {/* Header Section */}
      <div className="relative py-20 px-4 text-center overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-6 h-6 border-2 border-white rounded-full"
              animate={{
                y: [0, -40, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold font-nunito text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dairy Beverages
        </motion.h1>
        <motion.p
          className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Quench your thirst with our refreshing dairy beverages - from creamy milkshakes to aromatic chai
        </motion.p>

        {/* Filter Buttons */}
        <div className="space-y-4">
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-white text-blue shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div
            className="flex justify-center gap-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {temperatures.map((temp) => (
              <button
                key={temp.id}
                onClick={() => setSelectedTemp(temp.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedTemp === temp.id
                    ? 'bg-white text-blue shadow-lg scale-105'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <span>{temp.icon}</span>
                {temp.name}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Beverages Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredBeverages.map((beverage, index) => (
            <motion.div
              key={beverage.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={beverage.img}
                  alt={beverage.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(beverage.id)}
                  className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                >
                  {favorites.has(beverage.id) ? (
                    <HeartSolidIcon className="w-5 h-5 text-red-500" />
                  ) : (
                    <HeartIcon className="w-5 h-5 text-gray-600" />
                  )}
                </button>

                {/* Price Badge */}
                <div className="absolute top-3 left-3 bg-green2 text-white px-2 py-1 rounded-full font-bold text-sm">
                  ${beverage.price}
                </div>

                {/* Temperature Badge */}
                <div className="absolute bottom-3 right-3 bg-white/90 text-blue px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  {beverage.temperature === 'Hot' ? '🔥' : '❄️'}
                  {beverage.temperature}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-blue font-nunito">{beverage.name}</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-xs font-semibold">{beverage.rating}</span>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-3 leading-relaxed">{beverage.desc}</p>

                {/* Product Info */}
                <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-500 uppercase tracking-wide">Size</div>
                    <div className="font-semibold text-blue">{beverage.size}</div>
                  </div>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-gray-500 uppercase tracking-wide">Calories</div>
                    <div className="font-semibold text-blue">{beverage.calories}</div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="mb-4">
                  <span className="inline-block bg-blue/10 text-blue px-2 py-1 rounded-full text-xs font-semibold">
                    {beverage.category}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <motion.button
                    onClick={() => handleAddToCart(beverage)}
                    className="flex-1 bg-gradient-to-r from-green2 to-blue text-white py-2 rounded-xl font-semibold text-sm flex items-center justify-center gap-1 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCartIcon className="w-4 h-4" />
                    Add
                  </motion.button>
                  
                  <motion.button
                    className="px-3 py-2 border-2 border-green2 text-green2 rounded-xl hover:bg-green2 hover:text-white transition-all duration-300 text-sm"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    👁️
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-5xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Perfect for Every Mood</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white/90">
              <div className="text-center">
                <div className="text-4xl mb-3">☀️</div>
                <h4 className="font-semibold mb-2">Morning Energy</h4>
                <p className="text-sm">Start your day with our energizing coffees and teas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🥤</div>
                <h4 className="font-semibold mb-2">Afternoon Refresh</h4>
                <p className="text-sm">Cool down with our refreshing smoothies and lassis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🍨</div>
                <h4 className="font-semibold mb-2">Sweet Treats</h4>
                <p className="text-sm">Indulge in our creamy milkshakes and dessert drinks</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🌙</div>
                <h4 className="font-semibold mb-2">Evening Comfort</h4>
                <p className="text-sm">Wind down with our soothing warm beverages</p>
              </div>
            </div>
            
            <motion.button
              className="mt-8 bg-white text-blue px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Custom Blend
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DairyBeverages;
