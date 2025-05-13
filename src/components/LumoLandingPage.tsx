"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import WaitlistModal from './WaitlistModal';
import { useState } from 'react';

const WaitlistButton = dynamic(() => import('@/components/WaitlistButton'), {
  ssr: false
});
import useRippleEffect from '../hooks/useRippleEffect';

const LumoLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  useRippleEffect('.logo-container', 'hover', 5000);
  useRippleEffect('.waitlist-section', 'hover', 4000);
  useRippleEffect('.footer-link', 'hover', 3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      const canvas = document.querySelector('canvas');
      if (canvas) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const clickEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: centerX,
          clientY: centerY
        });
        canvas.dispatchEvent(clickEvent);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <div
        className={`main-container flex flex-col items-center justify-center text-white overflow-hidden px-4 py-5 space-y-8 transition-all duration-300 ${isModalOpen ? 'pointer-events-none select-none' : ''
          }`}
        style={{
          backgroundColor: 'transparent', // ✱ Let the canvas show through
          filter: isModalOpen ? 'blur(4px)' : 'none',
          WebkitFilter: isModalOpen ? 'blur(4px)' : 'none',
          transition: 'filter 0.3s ease, -webkit-filter 0.3s ease'
        }}
      >

        {/* Logo */}
        <div className="logo-position exclude-dots">
          <Image
            src="/logo.svg"
            alt="Lumo Logo"
            width={93}
            height={39}
            priority
            className="hover:scale-105 transition-transform"
          />
        </div>

        {/* Main heading */}
        <div className="heading-position headline text-[100px] whitespace-nowrap exclude-dots">
          bringing the toy to <span className="text-[#FFF04D]">life</span>
        </div>

        {/* Subheading */}
        <div className="subheading-position subheadline text-[49px] text-center exclude-dots">
          help us bring <span className="text-[#FFF04D]">lumo</span> to life. join our wait list!
        </div>

        {/* Arrow */}
        <div className="arrow-position exclude-dots">
          <Image
            src="/arrow.svg"
            alt="Down Arrow"
            width={120}
            height={420}
            priority
          />
        </div>

        <div className="waitlist-position exclude-dots">
          <WaitlistButton onOpen={() => setIsModalOpen(true)} />
        </div>

        {/* Line */}
        <div className="line-position exclude-dots">
          <Image
            src="/line.svg"
            alt="Vertical Line"
            width={360}
            height={1260}
            priority
          />
        </div>

        {/* Footer text */}
        <div className="footer-position exclude-dots">
          we're building the toy we wish we had as a child
          <br />
          for more info read our <Link href="/story" className="text-[#FFF04D] hover:underline">story</Link>
        </div>
      </div>
    </>
  );
};

export default LumoLandingPage;