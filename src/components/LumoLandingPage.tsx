"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import WaitlistModal from "./WaitlistModal";
import useRippleEffect from "../hooks/useRippleEffect";

const WaitlistButton = dynamic(() => import("@/components/WaitlistButton"), { ssr: false });

const LumoLandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useRippleEffect('.logo-container', 'hover', 5000);
  useRippleEffect('.waitlist-section', 'hover', 4000);
  useRippleEffect('.footer-link', 'hover', 3000);

  useEffect(() => {
    const timer = setTimeout(() => {
      const canvas = document.querySelector("canvas");
      if (canvas) {
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const clickEvent = new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
          view: window,
          clientX: centerX,
          clientY: centerY,
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
        className={`main-container flex flex-col items-center justify-start text-white px-4 py-8 min-h-screen overflow-y-auto transition-all duration-300 ${
          isModalOpen ? "pointer-events-none select-none blur-sm" : ""
        }`}
        style={{
          backgroundColor: "transparent",
          transition: "filter 0.3s ease",
        }}
      >
        {/* Logo */}
        <div className="logo-container mt-4">
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
        <h1 className="headline text-center text-[9vw] sm:text-[64px] md:text-[80px] leading-tight mt-6">
          bringing the toy to <span className="text-[#FFF04D]">life</span>
        </h1>

        {/* Subheading */}
        <p className="subheadline text-center text-[4.5vw] sm:text-[28px] max-w-3xl px-4 mt-4">
          help us bring <span className="text-[#FFF04D]">lumo</span> to life. join our wait list!
        </p>

        {/* Arrow */}
        <div className="arrow-container animate-bounce mt-8">
          <Image src="/arrow.svg" alt="Down Arrow" width={60} height={200} priority />
        </div>

        {/* Waitlist Button */}
        <div className="waitlist-section w-full max-w-md px-4 mt-6">
          <WaitlistButton onOpen={() => setIsModalOpen(true)} />
        </div>

        {/* Decorative Line */}
        <div className="line-container animate-jiggle-bounce mt-10">
          <Image src="/line.svg" alt="Vertical Line" width={200} height={600} priority />
        </div>

        {/* Footer Text */}
        <footer className="footer-position text-center text-[16px] sm:text-[20px] px-4 max-w-3xl text-[#FFFBEB] leading-relaxed mt-8 mb-12">
          we're building the toy we wish we had as a child
          <br />
          for more info read our{" "}
          <Link href="/story" className="text-[#FFF04D] hover:underline">
            story
          </Link>
        </footer>
      </div>
    </>
  );
};

export default LumoLandingPage;
