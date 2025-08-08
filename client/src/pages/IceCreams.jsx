import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon, ShoppingCartIcon, StarIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

const icecreams = [
  {
    id: 1,
    name: "Vanilla Dream",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop",
    desc: "Classic vanilla ice cream with a creamy texture and natural vanilla beans.",
    price: 4.99,
    rating: 4.8,
    reviews: 124,
    color: "bg-blue/80",
    ingredients: ["Fresh Cream", "Vanilla Beans", "Sugar", "Milk"],
    calories: 180
  },
  {
    id: 2,
    name: "Chocolate Bliss",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
    desc: "Rich chocolate ice cream for true chocolate lovers with cocoa chunks.",
    price: 5.49,
    rating: 4.9,
    reviews: 98,
    color: "bg-green1/80",
    ingredients: ["Cocoa", "Dark Chocolate", "Cream", "Sugar"],
    calories: 220
  },
  {
    id: 3,
    name: "Strawberry Swirl",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
    desc: "Sweet strawberry ice cream with real fruit pieces and strawberry swirls.",
    price: 5.99,
    rating: 4.7,
    reviews: 156,
    color: "bg-lime/80",
    ingredients: ["Fresh Strawberries", "Cream", "Sugar", "Natural Colors"],
    calories: 160
  },
  {
    id: 4,
    name: "Mint Chocolate Chip",
    img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=300&fit=crop",
    desc: "Refreshing mint ice cream with premium chocolate chips.",
    price: 5.79,
    rating: 4.6,
    reviews: 89,
    color: "bg-green2/80",
    ingredients: ["Fresh Mint", "Chocolate Chips", "Cream", "Sugar"],
    calories: 200
  },
  {
    id: 5,
    name: "Cookies & Cream",
    img: "https://images.unsplash.com/photo-1571506165871-ee72a35cbc8d?w=300&h=300&fit=crop",
    desc: "Creamy vanilla base loaded with chocolate cookie pieces.",
    price: 6.29,
    rating: 4.9,
    reviews: 203,
    color: "bg-blue/80",
    ingredients: ["Vanilla Base", "Chocolate Cookies", "Cream", "Sugar"],
    calories: 240
  },
  {
    id: 6,
    name: "Caramel Swirl",
    img: "https://images.unsplash.com/photo-1633933909979-cefecf3b39c0?w=300&h=300&fit=crop",
    desc: "Rich caramel ice cream with ribbons of golden caramel sauce.",
    price: 6.49,
    rating: 4.8,
    reviews: 112,
    color: "bg-lime/80",
    ingredients: ["Caramel", "Cream", "Sugar", "Vanilla Extract"],
    calories: 210
  }
];

const IceCreams = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedFilter, setSelectedFilter] = useState('all');
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

  const handleAddToCart = (icecream) => {
    addToCart(icecream);
  };

  const filters = [
    { id: 'all', name: 'All Flavors' },
    { id: 'classic', name: 'Classic' },
    { id: 'premium', name: 'Premium' },
    { id: 'seasonal', name: 'Seasonal' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue via-green1 to-lime pt-20">
      {/* Header Section */}
      <div className="relative py-20 px-4 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold font-nunito text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Premium Ice Creams
        </motion.h1>
        <motion.p
          className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Indulge in our handcrafted ice creams made with the finest ingredients and love
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedFilter === filter.id
                  ? 'bg-white text-blue shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Ice Creams Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {icecreams.map((ice, index) => (
            <motion.div
              key={ice.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={ice.img}
                  alt={ice.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(ice.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                >
                  {favorites.has(ice.id) ? (
                    <HeartSolidIcon className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIcon className="w-6 h-6 text-gray-600" />
                  )}
                </button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-green2 text-white px-3 py-1 rounded-full font-bold">
                  ${ice.price}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-blue font-nunito">{ice.name}</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{ice.rating}</span>
                    <span className="text-xs text-gray-500">({ice.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{ice.desc}</p>

                {/* Nutritional Info */}
                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <span>🔥 {ice.calories} cal</span>
                  <span>🥛 Natural</span>
                  <span>❄️ Fresh</span>
                </div>

                {/* Ingredients */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Ingredients:</h4>
                  <div className="flex flex-wrap gap-1">
                    {ice.ingredients.map((ingredient) => (
                      <span
                        key={ingredient}
                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleAddToCart(ice)}
                    className="flex-1 bg-gradient-to-r from-blue to-green1 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                  
                  <motion.button
                    className="px-4 py-3 border-2 border-blue text-blue rounded-xl hover:bg-blue hover:text-white transition-all duration-300"
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

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Create Your Own Mix!</h3>
            <p className="text-white/80 mb-6">
              Can't choose just one? Create a custom mix of your favorite flavors!
            </p>
            <motion.button
              className="bg-white text-blue px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Create Custom Mix
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default IceCreams;
