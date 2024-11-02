import React from 'react';
import Card from '../Card/Card';
import CardContent from '../Card/CardContent';
import { motion } from 'framer-motion';

// const StatCard = ({ title, value, icon, color }) => (
//   <Card>
//     <CardContent className="flex items-center p-4">
//       <div className={`p-3 rounded-full mr-4 ${color} text-2xl`}>
//         {icon}
//       </div>
//       <div>
//         <h3 className="text-sm text-gray-600">{title}</h3>
//         <p className="text-2xl font-bold">{value}</p>
//       </div>
//     </CardContent>
//   </Card>
// );

const StatCard = ({ title, value, icon, color }) => (
  <Card>
    <CardContent className="flex items-center p-4">
      <motion.div
        className={`p-3 rounded-full mr-4 ${color} text-2xl`}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="text-sm text-gray-600">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </CardContent>
  </Card>
);

export default StatCard;