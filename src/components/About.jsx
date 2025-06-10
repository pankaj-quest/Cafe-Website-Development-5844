import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiHeart, FiUsers, FiAward } from 'react-icons/fi';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const features = [
    {
      icon: FiHeart,
      title: 'Passion for Coffee',
      description: 'We source the finest beans from sustainable farms worldwide'
    },
    {
      icon: FiUsers,
      title: 'Community Hub',
      description: 'A warm space where friends gather and connections are made'
    },
    {
      icon: FiAward,
      title: 'Quality Crafted',
      description: 'Every cup is carefully crafted by our skilled baristas'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Our Story
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto">
            Founded in 2018, Brew Haven began as a dream to create more than just a coffee shop. 
            We envisioned a place where the aroma of freshly roasted beans mingles with laughter, 
            conversations, and the warmth of community.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1559496417-e7f25cb247cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80"
              alt="Coffee shop interior"
              className="rounded-lg shadow-xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-coffee-900">
              More Than Just Coffee
            </h3>
            <p className="text-coffee-700 text-lg">
              At Brew Haven, we believe that great coffee is about more than just the perfect roast. 
              It's about creating moments of connection, fostering creativity, and building a community 
              where everyone feels welcome.
            </p>
            <p className="text-coffee-700 text-lg">
              Our commitment to sustainability means we work directly with coffee farmers, 
              ensuring fair trade practices and supporting environmentally friendly growing methods.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="text-center p-6 bg-cream-50 rounded-lg"
            >
              <feature.icon className="h-12 w-12 text-coffee-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-coffee-900 mb-3">
                {feature.title}
              </h4>
              <p className="text-coffee-700">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;