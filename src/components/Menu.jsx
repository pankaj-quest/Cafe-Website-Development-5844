import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Menu = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [activeCategory, setActiveCategory] = useState('Coffee');

  const categories = ['Coffee', 'Pastries', 'Sandwiches', 'Cold Drinks'];

  const menuItems = {
    Coffee: [
      { name: 'Espresso', price: '$3.50', description: 'Rich, bold shot of pure coffee perfection' },
      { name: 'Cappuccino', price: '$4.75', description: 'Espresso with steamed milk and foam art' },
      { name: 'Latte', price: '$5.25', description: 'Smooth espresso with steamed milk' },
      { name: 'Americano', price: '$4.00', description: 'Espresso with hot water for a clean taste' },
      { name: 'Mocha', price: '$5.75', description: 'Chocolate and espresso in perfect harmony' },
      { name: 'Flat White', price: '$5.00', description: 'Double shot with microfoam milk' }
    ],
    Pastries: [
      { name: 'Croissant', price: '$3.25', description: 'Buttery, flaky French pastry' },
      { name: 'Blueberry Muffin', price: '$3.75', description: 'Fresh blueberries in a tender muffin' },
      { name: 'Chocolate Chip Cookie', price: '$2.50', description: 'Warm, gooey chocolate chip goodness' },
      { name: 'Cinnamon Roll', price: '$4.25', description: 'Sweet spiral with cinnamon and glaze' },
      { name: 'Banana Bread', price: '$3.50', description: 'Moist, homemade with real bananas' },
      { name: 'Scone', price: '$3.00', description: 'Traditional British teatime treat' }
    ],
    Sandwiches: [
      { name: 'Turkey Club', price: '$8.95', description: 'Turkey, bacon, lettuce, tomato on sourdough' },
      { name: 'Caprese', price: '$7.75', description: 'Fresh mozzarella, tomato, basil, balsamic' },
      { name: 'Grilled Cheese', price: '$6.50', description: 'Classic comfort food with artisan bread' },
      { name: 'Veggie Wrap', price: '$7.25', description: 'Fresh vegetables in a spinach tortilla' },
      { name: 'BLT', price: '$7.95', description: 'Bacon, lettuce, tomato on toasted bread' },
      { name: 'Avocado Toast', price: '$8.25', description: 'Smashed avocado on multigrain bread' }
    ],
    'Cold Drinks': [
      { name: 'Iced Coffee', price: '$4.25', description: 'Chilled coffee over ice' },
      { name: 'Cold Brew', price: '$4.75', description: 'Smooth, less acidic cold extraction' },
      { name: 'Iced Latte', price: '$5.50', description: 'Espresso and cold milk over ice' },
      { name: 'Frappuccino', price: '$6.25', description: 'Blended coffee drink with whipped cream' },
      { name: 'Iced Tea', price: '$3.75', description: 'Refreshing black or green tea' },
      { name: 'Smoothie', price: '$6.50', description: 'Fresh fruit blended with yogurt' }
    ]
  };

  return (
    <section id="menu" className="py-20 bg-cream-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Our Menu
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto">
            Discover our carefully curated selection of premium coffee, fresh pastries, 
            and delicious meals made with the finest ingredients.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-coffee-600 text-white shadow-lg'
                  : 'bg-white text-coffee-700 hover:bg-coffee-100'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {menuItems[activeCategory].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-coffee-900">
                  {item.name}
                </h3>
                <span className="text-lg font-bold text-coffee-600">
                  {item.price}
                </span>
              </div>
              <p className="text-coffee-700">
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;