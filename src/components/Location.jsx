import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiMapPin, FiClock, FiPhone, FiMail } from 'react-icons/fi';

const Location = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: FiMapPin,
      title: 'Address',
      info: '123 Coffee Street, Downtown District, City 12345'
    },
    {
      icon: FiPhone,
      title: 'Phone',
      info: '(555) 123-4567'
    },
    {
      icon: FiMail,
      title: 'Email',
      info: 'hello@brewhaven.com'
    }
  ];

  const hours = [
    { day: 'Monday - Friday', time: '6:00 AM - 9:00 PM' },
    { day: 'Saturday', time: '7:00 AM - 10:00 PM' },
    { day: 'Sunday', time: '7:00 AM - 8:00 PM' }
  ];

  return (
    <section id="location" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-coffee-900 mb-6">
            Visit Us
          </h2>
          <p className="text-xl text-coffee-700 max-w-3xl mx-auto">
            Come and experience the warmth of our coffee shop. We're located in the heart of downtown, 
            ready to serve you the perfect cup every day.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-6 flex items-center">
                <FiClock className="mr-3" />
                Opening Hours
              </h3>
              <div className="space-y-3">
                {hours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-cream-50 rounded-lg">
                    <span className="font-semibold text-coffee-800">{schedule.day}</span>
                    <span className="text-coffee-600">{schedule.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-coffee-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="flex items-start space-x-4 p-4 bg-cream-50 rounded-lg"
                  >
                    <contact.icon className="h-6 w-6 text-coffee-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-coffee-900">{contact.title}</h4>
                      <p className="text-coffee-700">{contact.info}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-cream-100 rounded-lg p-8 h-full flex items-center justify-center">
              <div className="text-center">
                <FiMapPin className="h-16 w-16 text-coffee-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-coffee-900 mb-2">Find Us Here</h3>
                <p className="text-coffee-700 mb-6">
                  We're located in the vibrant downtown district, surrounded by local shops and businesses.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-coffee-600 text-white rounded-full font-semibold hover:bg-coffee-700 transition-colors duration-200"
                >
                  Get Directions
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="bg-coffee-900 text-white p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Can't Make It In?</h3>
            <p className="text-lg mb-6">
              We offer delivery through all major food delivery platforms. 
              Enjoy our premium coffee from the comfort of your home or office.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-white text-coffee-900 rounded-full font-semibold hover:bg-cream-100 transition-colors duration-200"
              >
                Order for Delivery
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-coffee-900 transition-all duration-200"
              >
                Order for Pickup
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;