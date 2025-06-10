import React from 'react';
import { motion } from 'framer-motion';
import { FiCoffee, FiFacebook, FiInstagram, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const socialLinks = [
    { icon: FiFacebook, href: '#', label: 'Facebook' },
    { icon: FiInstagram, href: '#', label: 'Instagram' },
    { icon: FiTwitter, href: '#', label: 'Twitter' }
  ];

  const footerLinks = {
    'Quick Links': ['Menu', 'About Us', 'Location', 'Contact'],
    'Services': ['Dine In', 'Takeaway', 'Delivery', 'Catering'],
    'Info': ['Hours', 'Parking', 'WiFi', 'Events']
  };

  return (
    <footer className="bg-coffee-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <FiCoffee className="h-8 w-8 text-cream-200" />
              <span className="text-2xl font-bold">Brew Haven</span>
            </div>
            <p className="text-cream-100 mb-6 leading-relaxed">
              Creating perfect moments, one cup at a time. Join our community of coffee lovers 
              and discover the difference that passion makes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  className="text-cream-200 hover:text-white transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-6 text-cream-200">{title}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5 }}
                      className="text-cream-100 hover:text-white transition-all duration-200"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-coffee-700 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-cream-100 mb-4 md:mb-0">
              © 2024 Brew Haven. All rights reserved.
            </p>
            <p className="text-cream-100 flex items-center">
              Made with <FiHeart className="h-4 w-4 mx-2 text-red-400" /> for coffee lovers
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;