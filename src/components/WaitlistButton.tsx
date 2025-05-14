'use client';

import React from 'react';

interface WaitlistButtonProps {
  onOpen: () => void;
}

const WaitlistButton: React.FC<WaitlistButtonProps> = ({ onOpen }) => {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="w-full max-w-[90%] sm:max-w-[598px] h-[71px] sm:h-[71px] bg-[rgba(255,251,235,0.5)] border border-[#FEE440] rounded-full cursor-pointer hover:bg-[rgba(255,251,235,0.6)] transition-all font-manrope text-[20px] sm:text-[24px] md:text-[28px] leading-[38px] text-[#FFFBEB] opacity-70"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      <span className="text-[16px] sm:text-[20px] md:text-[24px]">
        me@lumo.com
      </span>
    </button>
  );
};

export default WaitlistButton;
