import React, { useState } from "react";
import { motion } from "framer-motion";
import { HeartIcon, ShoppingCartIcon, StarIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/24/solid";
import { useCart } from "../context/CartContext";

const toppings = [
  {
    id: 1,
    name: "Classic Whip",
    img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=300&h=300&fit=crop",
    desc: "Smooth, creamy, and perfect for any dessert with vanilla essence.",
    price: 3.99,
    rating: 4.7,
    reviews: 89,
    color: "bg-blue/80",
    type: "Classic",
    volume: "250ml",
    shelfLife: "7 days"
  },
  {
    id: 2,
    name: "Chocolate Whip",
    img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=300&h=300&fit=crop",
    desc: "Rich chocolate flavor for decadent treats and desserts.",
    price: 4.49,
    rating: 4.8,
    reviews: 124,
    color: "bg-green1/80",
    type: "Chocolate",
    volume: "250ml",
    shelfLife: "7 days"
  },
  {
    id: 3,
    name: "Strawberry Whip",
    img: "https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?w=300&h=300&fit=crop",
    desc: "Sweet strawberry goodness in every bite with real fruit extracts.",
    price: 4.29,
    rating: 4.6,
    reviews: 67,
    color: "bg-lime/80",
    type: "Fruit",
    volume: "250ml",
    shelfLife: "5 days"
  },
  {
    id: 4,
    name: "Caramel Swirl Whip",
    img: "https://images.unsplash.com/photo-1633933909979-cefecf3b39c0?w=300&h=300&fit=crop",
    desc: "Luxurious caramel whip with golden swirls of sweetness.",
    price: 5.99,
    rating: 4.9,
    reviews: 156,
    color: "bg-green2/80",
    type: "Premium",
    volume: "300ml",
    shelfLife: "7 days"
  },
  {
    id: 5,
    name: "Vanilla Bean Whip",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=300&fit=crop",
    desc: "Premium vanilla whip with real vanilla bean specks.",
    price: 5.49,
    rating: 4.8,
    reviews: 93,
    color: "bg-blue/80",
    type: "Premium",
    volume: "300ml",
    shelfLife: "7 days"
  },
  {
    id: 6,
    name: "Mint Chocolate Whip",
    img: "https://images.unsplash.com/photo-1567206563064-6f60f40a2b57?w=300&h=300&fit=crop",
    desc: "Refreshing mint with chocolate chips in creamy whip form.",
    price: 4.79,
    rating: 4.7,
    reviews: 78,
    color: "bg-lime/80",
    type: "Specialty",
    volume: "250ml",
    shelfLife: "6 days"
  }
];

const WhipToppings = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [selectedType, setSelectedType] = useState('all');
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

  const handleAddToCart = (topping) => {
    addToCart(topping);
  };

  const types = [
    { id: 'all', name: 'All Types' },
    { id: 'Classic', name: 'Classic' },
    { id: 'Premium', name: 'Premium' },
    { id: 'Specialty', name: 'Specialty' }
  ];

  const filteredToppings = selectedType === 'all' 
    ? toppings 
    : toppings.filter(topping => topping.type === selectedType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime via-green1 to-blue pt-20">
      {/* Header Section */}
      <div className="relative py-20 px-4 text-center">
        <motion.div
          className="absolute inset-0 opacity-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 1 }}
        >
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-white rounded-full"
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </motion.div>

        <motion.h1
          className="text-5xl md:text-6xl font-bold font-nunito text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Whip Toppings
        </motion.h1>
        <motion.p
          className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Transform your desserts with our premium whip toppings - creamy, delicious, and irresistible
        </motion.p>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {types.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedType === type.id
                  ? 'bg-white text-blue shadow-lg'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {type.name}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Whip Toppings Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredToppings.map((topping, index) => (
            <motion.div
              key={topping.id}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 group"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                <img
                  src={topping.img}
                  alt={topping.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(topping.id)}
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow-lg hover:scale-110 transition-all duration-300"
                >
                  {favorites.has(topping.id) ? (
                    <HeartSolidIcon className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIcon className="w-6 h-6 text-gray-600" />
                  )}
                </button>

                {/* Price Badge */}
                <div className="absolute top-4 left-4 bg-green2 text-white px-3 py-1 rounded-full font-bold">
                  ${topping.price}
                </div>

                {/* Type Badge */}
                <div className="absolute bottom-4 left-4 bg-white/90 text-blue px-3 py-1 rounded-full text-sm font-semibold">
                  {topping.type}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-2xl font-bold text-blue font-nunito">{topping.name}</h3>
                  <div className="flex items-center gap-1">
                    <StarIcon className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold">{topping.rating}</span>
                    <span className="text-xs text-gray-500">({topping.reviews})</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{topping.desc}</p>

                {/* Product Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-500 text-xs uppercase tracking-wide">Volume</div>
                    <div className="font-semibold text-blue">{topping.volume}</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-gray-500 text-xs uppercase tracking-wide">Shelf Life</div>
                    <div className="font-semibold text-blue">{topping.shelfLife}</div>
                  </div>
                </div>

                {/* Features */}
                <div className="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <SparklesIcon className="w-4 h-4 text-green2" />
                    <span>Fresh</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>❄️</span>
                    <span>Chilled</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span>🥛</span>
                    <span>Natural</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleAddToCart(topping)}
                    className="flex-1 bg-gradient-to-r from-lime to-green1 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <ShoppingCartIcon className="w-5 h-5" />
                    Add to Cart
                  </motion.button>
                  
                  <motion.button
                    className="px-4 py-3 border-2 border-lime text-lime rounded-xl hover:bg-lime hover:text-white transition-all duration-300"
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

        {/* Usage Tips Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">Perfect Pairings</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/90">
              <div className="text-center">
                <div className="text-4xl mb-3">🍰</div>
                <h4 className="font-semibold mb-2">Cakes & Cupcakes</h4>
                <p className="text-sm">Perfect for decorating and adding extra sweetness</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🍦</div>
                <h4 className="font-semibold mb-2">Ice Cream</h4>
                <p className="text-sm">The ultimate topping for your favorite flavors</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">☕</div>
                <h4 className="font-semibold mb-2">Hot Beverages</h4>
                <p className="text-sm">Transform your coffee, hot chocolate, and more</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhipToppings;
