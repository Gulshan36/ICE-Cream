import React from "react";
import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Ice Creams", href: "/ice-creams" },
        { name: "Whip Toppings", href: "/whip-toppings" },
        { name: "Dairy Beverages", href: "/dairy-beverages" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Story", href: "/story" },
        { name: "Careers", href: "/careers" },
        { name: "Press", href: "/press" },
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Shipping Info", href: "/shipping" },
        { name: "Returns", href: "/returns" },
      ]
    }
  ];

  const socialLinks = [
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "YouTube", href: "#", icon: "📺" },
  ];

  return (
    <footer className="bg-gradient-to-br from-blue via-green1 to-green2 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-3 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img 
                src={logo} 
                alt="Namaste Bharat Logo" 
                className="h-12 drop-shadow-lg" 
              />
              <span className="text-3xl font-extrabold tracking-wide">Namaste Bharat</span>
            </motion.div>
            
            <motion.p
              className="text-white/80 mb-6 leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Crafting premium Indian dairy delights, ice creams, and traditional beverages with authentic flavors and the finest ingredients since 1985.
            </motion.p>

            {/* Contact info */}
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <MapPinIcon className="w-5 h-5 text-white/80" />
                <span className="text-white/80">123 Dairy Lane, Creamville, CV 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-white/80" />
                <span className="text-white/80">+1 (555) 123-CREAM</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-white/80" />
                <span className="text-white/80">hello@namastebharat.com</span>
              </div>
            </motion.div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * (index + 3) }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 font-nunito">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors duration-300 hover:underline"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <motion.div
          className="bg-white/10 rounded-2xl p-8 mb-12 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 font-nunito">Stay Sweet with Our Newsletter</h3>
            <p className="text-white/80 mb-6">Get the latest updates on new flavors, special offers, and sweet surprises!</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <motion.button
                className="px-8 py-3 bg-white text-blue font-bold rounded-full hover:bg-white/90 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-white/60 mb-4 md:mb-0">
            © {currentYear} Namaste Bharat. All rights reserved. Made with ❤️ for ice cream lovers.
          </p>
          
          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                title={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
