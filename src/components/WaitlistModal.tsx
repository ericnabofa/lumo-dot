'use client';

import React, { useState } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal: React.FC<WaitlistModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      setName('');
      setEmail('');
      setIsSubmitting(false);
      setIsSuccess(false);
      setShowThankYou(false);
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSubmitting || isSuccess || !name.trim() || !email.trim()) return;

    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));

      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setName('');
        setEmail('');
        setShowThankYou(true);
      }, 2000);
    } catch (error) {
      console.error('Submission error:', error);
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-[2px]"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onClose();
          }
        }}
        style={{
          WebkitBackdropFilter: 'blur(4px)',
          backdropFilter: 'blur(4px)'
        }}
      ></div>

      <div 
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[rgba(255,251,235,0.9)] border border-[#FEE440] rounded-[70.0039px] w-[90%] sm:w-[598px] max-w-[598px]"
        style={{
          height: 'auto',
          filter: 'drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25))',
          boxSizing: 'border-box'
        }}
      >
        <button
          className="absolute top-6 right-6 w-10 h-10 rounded-full bg-[#FF6B6B] border-2 border-[#FF6B6B] flex items-center justify-center transition hover:scale-105 hover:opacity-90 focus:outline-none z-10"
          onClick={onClose}
          aria-label="Close waitlist modal"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </button>

        {showThankYou ? (
          <div className="flex flex-col items-center justify-center w-full h-full">
            <img src="/thankyou.svg" alt="Thank you" className="mx-auto" style={{ maxWidth: '80%', height: 'auto' }} />
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="relative h-full p-4">
            <div className="font-gaegu text-[25px] leading-[40px] text-[#FF6B6B] mb-2">name</div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="toy maker"
              className="w-full h-[46px] bg-[#FEE440] border border-[#FF6B6B] rounded-[10px] px-4 font-manrope text-[20px] leading-[27px] text-[rgba(255,107,107,0.5)] placeholder-[rgba(255,107,107,0.5)] text-center focus:outline-none mb-4"
            />
            
            <div className="font-gaegu text-[25px] leading-[40px] text-[#FF6B6B] mb-2">email</div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="toymaker@gmail.com"
              className="w-full h-[46px] bg-[#FEE440] border border-[#FF6B6B] rounded-[10px] px-4 font-manrope text-[20px] leading-[27px] text-[rgba(255,107,107,0.5)] placeholder-[rgba(255,107,107,0.5)] text-center focus:outline-none mb-4"
            />

            <div className="w-full flex justify-center">
              {isSubmitting || isSuccess ? (
                <div className="w-full flex items-center justify-center">
                  {isSubmitting ? (
                    <div 
                      className="animate-spin rounded-full"
                      style={{
                        width: '34px',
                        height: '33px',
                        border: '6.7px solid #FF6B6B',
                        borderTopColor: 'transparent'
                      }}
                    />
                  ) : (
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="#FF6B6B" 
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{
                        width: '34px',
                        height: '33px'
                      }}
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  )}
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-[220px] sm:w-[240px] h-[46px] bg-[#FF6B6B] rounded-[10px] font-manrope text-[20px] leading-[27px] text-white cursor-pointer transition-all hover:opacity-90"
                >
                  Join the waitlist
                </button>
              )}
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
