"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function VideoPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 1. THE CLICKABLE PREVIEW IMAGE */}
      <div 
        className="relative w-full aspect-video cursor-pointer rounded-2xl overflow-hidden shadow-lg group"
        onClick={() => setIsOpen(true)}
      >
        <Image 
          src="/preview-video-home.png" /* Change .png to .jpg if your image is a JPEG */
          alt="Preview Video Home"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Play Button Overlay (Optional but great for user experience) */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all">
          <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center shadow-xl backdrop-blur-sm">
            <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. THE FULL-SCREEN MODAL (POPUP) */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm">
          
          {/* Elegant Red X Close Button */}
          <button 
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 bg-white/10 text-red-500 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-500/50 hover:bg-red-500 hover:text-white hover:scale-110 transition-all z-[110]"
            aria-label="Close video"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* YouTube Shorts Container 
              Fills the whole screen on mobile (w-full h-full).
              Stays constrained to a phone shape on desktop (md:max-w-[400px] md:h-[85vh]).
          */}
          <div className="relative w-full h-full md:max-w-[400px] md:h-[85vh] md:rounded-2xl overflow-hidden shadow-2xl bg-black">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              // Note: We changed /shorts/ to /embed/ and added ?autoplay=1
              src="https://www.youtube.com/embed/rrLcF5W1nXM?autoplay=1"
              title="YouTube Shorts Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
}