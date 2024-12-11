import React, { useState } from 'react';
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const GenerateCoupons = () => {
  const [couponType, setCouponType] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  // Coupon pricing structure
  const couponPrices = {
    'single-meal': 50,
    'daily-combo': 80,
    'weekly-plan': 300,
    'monthly-plan': 1000
  };

  // Handle coupon type selection
  const handleCouponTypeChange = (e) => {
    const value = e.target.value;
    setCouponType(value);
    setTotalPrice(couponPrices[value] * quantity);
  };

  // Handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    setQuantity(newQuantity);
    setTotalPrice(couponPrices[couponType] * newQuantity);
  };

  // Handle coupon generation
  const generateCoupons = () => {
    if (!couponType) {
      alert('Please select a coupon type');
      return;
    }
    // TODO: Implement actual coupon generation logic
    console.log('Generating coupons:', {
      type: couponType,
      quantity: quantity,
      totalPrice: totalPrice
    });
    // You would typically integrate a payment gateway here
  };

//   const navigate = useNavigate();
  const navigate = useNavigate();
  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-[#48aaad] text-white text-center py-4">
          <h2 className="text-2xl font-bold">Generate Canteen Coupons</h2>
        </div>
        {/* <div className='px-5 pt-3' onClick={goToDashboard}>
            <IoMdArrowRoundBack />
        </div> */}
        <div className="px-5 pt-3">
          <button onClick={goToDashboard} className="text-gray-600 hover:text-gray-800">
            <IoMdArrowRoundBack size={24} />
          </button>
        </div>
        <div className="px-6 py-2 space-y-4">
          {/* Coupon Type Selection */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="coupon-type">
              Coupon Type
            </label>
            <select
              id="coupon-type"
              value={couponType}
              onChange={handleCouponTypeChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Coupon Type</option>
              <option value="single-meal">Single Meal (₹50)</option>
              <option value="daily-combo">Daily Combo (₹80)</option>
              <option value="weekly-plan">Weekly Plan (₹300)</option>
              <option value="monthly-plan">Monthly Plan (₹1000)</option>
            </select>
          </div>

          {/* Quantity Input */}
          <div>
            <label className="block text-gray-700 font-bold mb-2" htmlFor="quantity">
              Quantity
            </label>
            <input 
              type="number" 
              id="quantity"
              min="1" 
              max="50" 
              value={quantity}
              onChange={handleQuantityChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price Summary */}
          <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Coupon Type:</span>
              <span className="font-semibold">
                {couponType ? 
                  couponType.replace('-', ' ').toUpperCase() : 
                  'Not Selected'
                }
              </span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Quantity:</span>
              <span className="font-semibold">{quantity}</span>
            </div>
            <div className="flex justify-between pt-2 border-t border-gray-200 font-bold text-lg">
              <span>Total Price:</span>
              <span>₹{totalPrice}</span>
            </div>
          </div>

          {/* Generate Button */}
          <button 
            onClick={generateCoupons} 
            disabled={!couponType}
            className="w-full bg-[#016064] text-white py-3 rounded-md hover:bg-[#4f97a3] 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                       disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors duration-300"
          >
            Generate Coupons
          </button>
        </div>
      </div>
    </div>
  );
}

export default GenerateCoupons