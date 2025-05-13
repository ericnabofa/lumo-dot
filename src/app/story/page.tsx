"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import WaitlistModal from '@/components/WaitlistModal';
import { useState } from 'react';
import './story.css';

// Dynamically import the WaitlistButton to ensure client-side only
const WaitlistButton = dynamic(() => import('@/components/WaitlistButton'), {
  ssr: false
});

const StoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <WaitlistModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      {/* Story background music */}
      <audio src="/story-song.mp3" autoPlay loop style={{ display: 'none' }} />
      <div 
        className={`story-container transition-all duration-300 ${isModalOpen ? 'pointer-events-none select-none' : ''}`}
        style={{
          filter: isModalOpen ? 'blur(4px)' : 'none',
          WebkitFilter: isModalOpen ? 'blur(4px)' : 'none',
          transition: 'filter 0.3s ease, -webkit-filter 0.3s ease'
        }}
      >
      {/* Back Arrow */}
      <Link href="/" className="back-arrow">
        <Image 
          src="/backarrow.svg" 
          alt="Back to Home" 
          width={48} 
          height={46}
          priority
          className="hover:scale-105 transition-transform"
        />
      </Link>

      {/* Story Title */}
      <h1 className="story-title">story</h1>

      {/* Read Time */}
      <div className="read-time">read time: 2 mins</div>

      {/* Story Content */}
      <div className="story-content">
        <p>when i was a child, i watched Toy Story and imagined my toys coming to life. i'd ask, "what if we could talk?" and "what if we could play together?" in 2022, i started tinkering with ai and that imagination came rushing back what if toys weren't lifeless anymore? could ai bring them to life? that idea became 1 of 100's over the next 3 years, but it never left now i'm finally building what i once dreamed of</p>
        <p>today, children are growing up on screens. the magic of childhood — curiosity, creativity, courage — is fading away. too many kids are watching other people live, rather than living themselves</p>
        <p>no one should look back at their youth and only remember a screen</p>
        <p>they should remember the indescribable magic of being lost in their own world: whispers under a blanket. giggling from silly games. made up stories</p>
        <p>when i was young, i wanted to be an astronaut and eventually a computer scientist, whatever that meant at the time</p>
        <p>today, one in three children want to be a youtuber</p>
        <p>i'm not saying that's bad. but it points to something deeper. children are consuming more than they're creating. and that's a problem. because, play isn't just fun. it's how kids develop the skills they'll need for life</p>
        <p>that's why we're building the world's most magical toys. toys that inspire storytelling, imagination, communication, and emotional growth</p>
        <p>with our toys, children can talk to them and truly play together. this play is open-ended so the child decides what to do, say, or pretend. children invent their own stories and rules</p>
        <p>as a child, i used to imagine a lot. some days i was in a race car, playing multiple characters in my head — one was driving, one was screaming, and another was shouting, "go faster! take a left!" i'd even add some drama in there: "the bad guys are coming, activate invisible mode!"</p>
        <p>that kind of imagination was inspired by great books and movies</p>
        <p>just as Elon Musk, Walt Disney, Steve Jobs, and Christopher Nolan were inspired by stories, what if we gave the next generation a way to create and live out their own?</p>
        <p>we're pouring everything we have into this; our hearts, time and savings. and we're super pumped that we get to work on this</p>
        <p>thank you reading. if our mission resonates, consider joining our wait list</p>
      </div>

      {/* Signature and Author Info */}
      <div className="signature">
        <Image 
          src="/signature.svg" 
          alt="Signature" 
          width={190} 
          height={86}
          priority
        />
      </div>
      <div className="author">saaim khan</div>
      <a href="mailto:saaim@lumo.so" className="author-email">saaim@lumo.so</a>

      {/* Arrow */}
      <div className="story-arrow">
        <Image 
          src="/arrow.svg" 
          alt="Arrow" 
          width={138} 
          height={420}
          priority
        />
      </div>

      {/* Waitlist Section */}
      <div className="waitlist-heading">
        help us bring <span className="text-[#FEE440]">lumo</span> to life. join our wait list!
      </div>
      <div className="waitlist-input-container">
        <WaitlistButton onOpen={() => setIsModalOpen(true)} />
      </div>

      {/* Line */}
      <div className="story-line">
        <Image 
          src="/line.svg" 
          alt="Line" 
          width={359} 
          height={252}
          priority
        />
      </div>
    </div>
    </>
  );
};


export default StoryPage;
