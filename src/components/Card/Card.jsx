import { motion } from 'framer-motion';
import React from 'react';

const Card = ({ children, className = '' }) => (
  // <div className={`bg-white rounded-lg shadow-md ${className}`}>
  //   {children}
  // </div>
  <motion.div
    className={`bg-white rounded-lg shadow-md ${className}`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);

export default Card;
