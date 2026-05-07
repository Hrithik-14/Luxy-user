'use client';

import React, { useEffect, useState } from 'react';
import { Tag, Truck, Percent } from 'lucide-react';

const coupons = [
  {
    id: 1,
    icon: <Percent size={18} />,
    text: "Melt free shipping across kerala",
  },
  {
    id: 2,
    icon: <Truck size={18} />,
    text: "New arrival every month",
  },
  {
    id: 3,
    icon: <Tag size={18} />,
    text: "No minimum order value",
  },
];

const CouponBar = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Clone first item
  const extendedCoupons = [...coupons, coupons[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
      setIsTransitioning(true);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Reset instantly when reaching clone
  useEffect(() => {
    if (index === coupons.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 700); // match transition duration
    }
  }, [index]);

  return (
    <div className="w-full bg-[#f1e4d3] text-[#5a4336] border-b border-[#e2d3c2] overflow-hidden">
      
      <div className="max-w-frame mx-auto py-3 px-4 overflow-hidden">
        
        <div
          className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {extendedCoupons.map((coupon, i) => (
            <div
              key={i}
              className="min-w-full flex items-center justify-center gap-2"
            >
              {coupon.icon}
              <span className="font-medium">{coupon.text}</span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default CouponBar;   