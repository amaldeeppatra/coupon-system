// import React from 'react';

// const Button = ({ children, variant = 'default', className = '', onClick }) => {
//   const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
//   const variants = {
//     default: 'bg-blue-500 text-white hover:bg-blue-600',
//     outline: 'border-2 border-gray-300 hover:bg-gray-50',
//     secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
//   };

//   return (
//     <button 
//       className={`${baseStyles} ${variants[variant]} ${className}`}
//       onClick={onClick}
//     >
//       {children}
//     </button>
//   );
// };

// export default Button;



import { motion } from 'framer-motion';
import React from 'react';

const Button = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick 
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variants = {
    default: 'bg-blue-500 text-white hover:bg-blue-600',
    outline: 'border-2 border-gray-300 hover:bg-gray-50',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200'
  };

  return (
    <motion.button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
};

export default Button;