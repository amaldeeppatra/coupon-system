import React from 'react';
import Card from '../Card/Card';
import CardHeader from '../Card/CardHeader';
import CardTitle from '../Card/CardTitle';
import CardContent from '../Card/CardContent';
import { motion } from 'framer-motion';

// const RecentUsage = ({ transactions }) => (
//   <Card>
//     <CardHeader>
//       <CardTitle>Recent Coupon Usage</CardTitle>
//     </CardHeader>
//     <CardContent>
//       <table className="w-full">
//         <thead>
//           <tr className="border-b">
//             <th className="text-left p-2">Date</th>
//             <th className="text-left p-2">Canteen</th>
//             <th className="text-right p-2">Amount</th>
//           </tr>
//         </thead>
//         <tbody>
//           {transactions.map((transaction, index) => (
//             <tr key={index} className="border-b">
//               <td className="p-2">{transaction.date}</td>
//               <td className="p-2">{transaction.canteen}</td>
//               <td className="text-right p-2">₹{transaction.amount}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </CardContent>
//   </Card>
// );


const RecentUsage = ({ transactions }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Coupon Usage</CardTitle>
      </CardHeader>
      <CardContent>
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left p-2">Date</th>
              <th className="text-left p-2">Canteen</th>
              <th className="text-right p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <motion.tr
                key={index}
                className="border-b"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <td className="p-2">{transaction.date}</td>
                <td className="p-2">{transaction.canteen}</td>
                <td className="text-right p-2">₹{transaction.amount}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
};

export default RecentUsage;
