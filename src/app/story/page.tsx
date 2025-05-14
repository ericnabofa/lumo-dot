'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import WaitlistModal from '@/components/WaitlistModal';

const WaitlistButton = dynamic(() => import('@/components/WaitlistButton'), {
  ssr: false,
});

const StoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <audio src="/story-song.mp3" autoPlay loop className="hidden" />

      <div
        className={`relative w-full max-w-[1440px] mx-auto bg-lumo-blue px-6 md:px-16 py-10 transition-all duration-300 ${isModalOpen ? 'pointer-events-none select-none blur-sm' : ''
          }`}
      >
        {/* Back Arrow */}
        <Link href="/" className="fixed left-6 md:left-16 top-10 z-50 animate-float-wiggle">
          <Image
            src="/backarrow.svg"
            alt="Back to Home"
            width={48}
            height={46}
            priority
            className="transition-transform hover:scale-110"
          />
        </Link>

        {/* Title */}
        <h1 className="text-center text-[#FEE440] text-[60px] md:text-[100px] font-gaegu leading-[1.2] mt-24">
          story
        </h1>

        {/* Read time */}
        <div className="text-center text-[#FFFBEB] text-base md:text-lg mt-4">
          read time: 2 mins
        </div>

        {/* Story content */}
        <div className="text-[#FFFBEB] text-lg md:text-2xl leading-[1.7] max-w-3xl mx-auto mt-12 space-y-6 font-manrope">
          <p>when i was a child, i watched Toy Story and imagined my toys coming to life...</p>
          <p>today, children are growing up on screens...</p>
          <p>no one should look back at their youth and only remember a screen...</p>
          <p>they should remember the indescribable magic of being lost in their own world...</p>
          <p>when i was young, i wanted to be an astronaut...</p>
          <p>today, one in three children want to be a youtuber...</p>
          <p>i'm not saying that's bad. but it points to something deeper...</p>
          <p>that's why we're building the world's most magical toys...</p>
          <p>with our toys, children can talk to them and truly play together...</p>
          <p>as a child, i used to imagine a lot...</p>
          <p>that kind of imagination was inspired by great books and movies...</p>
          <p>just as Elon Musk, Walt Disney, Steve Jobs, and Christopher Nolan were inspired by stories...</p>
          <p>we're pouring everything we have into this; our hearts, time and savings...</p>
          <p>thank you for reading. if our mission resonates, consider joining our wait list</p>
        </div>

        {/* Signature */}
        <div className="mt-16 flex justify-start animate-signature-float">
          <Image src="/signature.svg" alt="Signature" width={190} height={86} priority />
        </div>

        {/* Author Info */}
        <div className="mt-4 text-[#FEE440] text-3xl md:text-4xl font-gaegu font-bold">
          saaim khan
        </div>
        <a
          href="mailto:saaim@lumo.so"
          className="block underline text-[#FEE440] text-2xl md:text-3xl font-gaegu font-bold mt-1"
        >
          saaim@lumo.so
        </a>

        {/* Arrow + Button + Zigzag Line */}
        <div className="flex flex-col items-center space-y-16 mt-20">
          {/* Arrow */}
          <div className="animate-jiggle-bounce">
            <Image src="/arrow.svg" alt="Arrow" width={138} height={420} priority />
          </div>

          {/* Waitlist Section */}
          <div className="text-center text-[#FFFBEB] text-2xl md:text-[49px] font-semibold mt-20 mb-8">
            help us bring <span className="text-[#FEE440]">lumo</span> to life. join our wait list!
          </div>

          <div className="flex justify-center w-full">
            <div className="w-full md:w-[400px] lg:w-[500px] px-4">
              <WaitlistButton onOpen={() => setIsModalOpen(true)} />
            </div>
          </div>


          {/* Zigzag Line Section */}
          <div className="mt-12 md:mt-16 lg:mt-24 text-center">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-10 animate-line-wiggle">
              <Image
                src="/line.svg"
                alt="Zigzag Line"
                width={359}
                height={252}
                className="w-[240px] md:w-[300px] lg:w-[359px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryPage;
