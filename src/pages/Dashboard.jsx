import React, { useState } from 'react';
import UserProfile from '../components/UserProfile/UserProfile';
import StatCard from '../components/StatCard/StatCard';
import CouponActions from '../components/CouponActions/CouponActions';
import RecentUsage from '../components/RecentUsage/RecentUsage';

const Dashboard = () => {
  const [userData] = useState({
    name: "John Doe",
    department: "Computer Science",
    totalCoupons: 25,
    availableCoupons: 15,
    usedCoupons: 10
  });

  const transactions = [
    { date: '2024-03-15', canteen: 'Main Cafeteria', amount: 120 },
    { date: '2024-03-10', canteen: 'Engineering Block Canteen', amount: 85 },
    { date: '2024-03-05', canteen: 'Library Café', amount: 65 }
  ];

  const handleRefreshCoupons = () => {
    console.log("Refreshing coupons...");
  };

  const handleShowQr = () => {
    console.log("Showing QR code...");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* User Profile Section */}
          <div className="md:col-span-1">
            <UserProfile 
              name={userData.name}
              department={userData.department}
            />
          </div>

          {/* Coupon Statistics Section */}
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <StatCard 
              icon="📚"
              title="Total Coupons"
              value={userData.totalCoupons}
              color="bg-blue-100"
            />
            <StatCard 
              icon="💳"
              title="Available Coupons"
              value={userData.availableCoupons}
              color="bg-green-100"
            />
            <StatCard 
              icon="✔️"
              title="Used Coupons"
              value={userData.usedCoupons}
              color="bg-red-100"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Coupon Actions */}
          <CouponActions 
            onRefresh={handleRefreshCoupons}
            onShowQr={handleShowQr}
          />

          {/* Recent Coupon Usage */}
          <RecentUsage transactions={transactions} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
