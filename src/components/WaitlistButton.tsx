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
      className="w-[598px] h-[71px] bg-[rgba(255,251,235,0.5)] border border-[#FEE440] rounded-[70.0039px] cursor-pointer hover:bg-[rgba(255,251,235,0.6)] transition-all font-manrope text-[28.0015px] leading-[38px] text-[#FFFBEB] opacity-70"
      style={{ WebkitTapHighlightColor: 'transparent' }}
    >
      me@lumo.com
    </button>
  );
};

export default WaitlistButton;
