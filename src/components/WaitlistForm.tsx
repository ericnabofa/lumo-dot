'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FormRipple from './FormRipple';

interface WaitlistFormProps {
  initialEmail?: string;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ initialEmail = '' }) => {
  const [email, setEmail] = useState(initialEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRipple, setShowRipple] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
    setShowRipple(true);

    // Simulate API call to submit email
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset submission state after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[90%] sm:max-w-md relative">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="me@lumo.com"
            className={`w-full py-4 px-6 rounded-full bg-sky-200/30 backdrop-blur-[2px] 
                      placeholder-white/70 outline-none border-2 transition-all
                      ${isSubmitted ? 'border-green-400' : 'border-transparent focus:border-yellow-300/50'}`}
            disabled={isSubmitting}
            required
          />

          {showRipple && (
            <FormRipple 
              active={showRipple} 
              onAnimationEnd={() => setShowRipple(false)} 
            />
          )}

          {isSubmitting && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-6 h-6 border-2 border-yellow-300 border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {isSubmitted && (
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-green-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          )}
        </div>

        <div className="flex justify-center mt-4">
          <Image 
            src="/line.svg" 
            alt="Decorative Line" 
            width={180} 
            height={20} 
            className="animate-pulse"
          />
        </div>
      </form>
    </div>
  );
};

export default WaitlistForm;
