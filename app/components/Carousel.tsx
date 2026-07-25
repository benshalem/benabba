"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Carousel() {
const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
    "/7.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Swipe / Drag State
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  // Auto-play effect
  useEffect(() => {
    if (isDragging) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, isDragging]);

  // --- Drag & Swipe Handlers ---
  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setTouchStartX(clientX);
    setTouchEndX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    setTouchEndX(clientX);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    if (touchStartX !== null && touchEndX !== null) {
      const distance = touchStartX - touchEndX;
      const minSwipeDistance = 50;

      if (distance > minSwipeDistance) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      } else if (distance < -minSwipeDistance) {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      }
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-2xl border border-white/30 shadow-lg group cursor-grab active:cursor-grabbing" 
      style={{ paddingBottom: '56.25%' }}
      onTouchStart={(e) => handleDragStart(e.targetTouches[0].clientX)}
      onTouchMove={(e) => handleDragMove(e.targetTouches[0].clientX)}
      onTouchEnd={handleDragEnd}
      onMouseDown={(e) => handleDragStart(e.clientX)}
      onMouseMove={(e) => handleDragMove(e.clientX)}
      onMouseUp={handleDragEnd}
      onMouseLeave={handleDragEnd}
    >
      <div 
        className={`absolute top-0 left-0 w-full h-full flex ${isDragging ? '' : 'transition-transform duration-700 ease-in-out'}`}
        style={{ 
          transform: `translateX(calc(-${currentIndex * 100}% - ${isDragging && touchStartX && touchEndX ? (touchStartX - touchEndX) : 0}px))` 
        }}
      >
        {images.map((src, index) => (
          <div key={index} className="relative min-w-full h-full flex-shrink-0">
            <Image
              src={src}
              alt={`Carousel slide ${index + 1}`}
              fill
              className="object-cover"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}