"use client";

import React, { useState, useEffect } from 'react';

interface RippleProps {
  active: boolean;
  onAnimationEnd: () => void;
}

const FormRipple: React.FC<RippleProps> = ({ active, onAnimationEnd }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (active) {
      setIsVisible(true);
    }
  }, [active]);

  const handleAnimationEnd = () => {
    setIsVisible(false);
    onAnimationEnd();
  };

  if (!isVisible) return null;

  return (
    <div 
      className="absolute inset-0 pointer-events-none"
      style={{ 
        zIndex: 20,
      }}
    >
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
      >
        <circle 
          cx="50" 
          cy="50" 
          r="0"
          fill="none" 
          stroke="#FFF04D" 
          strokeWidth="1"
          strokeOpacity="0.5"
          style={{
            transformOrigin: 'center',
            animation: 'ripple 1.5s ease-out forwards',
          }}
          onAnimationEnd={handleAnimationEnd}
        />
      </svg>

      <style jsx>{`
        @keyframes ripple {
          0% {
            r: 0;
            stroke-opacity: 0.5;
          }
          100% {
            r: 50;
            stroke-opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FormRipple;
