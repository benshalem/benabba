"use client";

import Image from 'next/image';
import styles from './page.module.css';
import Accordion from './components/Accordion';
import Carousel from './components/Carousel';

export default function Page() {
  // --- Accordion Data ---
  const myAccordionData = [
    {
      id: 1,
      title: "Step 1: Introduction",
      content: (
        <div className="flex flex-col gap-2">
          <p>Welcome to the <strong>first step</strong> of the process.</p>
          <p>You can even add bullet points:</p>
          <ul className="list-disc ml-5 text-cyan-200">
            <li>Fully responsive</li>
            <li>Zero JavaScript required</li>
            <li>Customizable colors</li>
          </ul>
        </div>
      )
    },
    {
      id: 2,
      title: "Step 2: Important Links",
      content: (
        <p>
          Check out my <a href="https://github.com/your-profile" target="_blank" className="text-cyan-400 underline hover:text-cyan-300">GitHub profile</a> for more projects!
        </p>
      )
    },
    {
      id: 3,
      title: "Step 3: Configuration",
      content: (
        <p>Content for step three goes here. Just simple text works fine too!</p>
      )
    },
    {
      id: 4,
      title: "Step 4: Execution",
      content: (
        <p>Step four details. You can add images in here too if you want!</p>
      )
    },
    {
      id: 5,
      title: "Step 5: Completion",
      content: (
        <p>Final step content. 🚀</p>
      )
    }
  ];

  return (
    <main className="relative min-h-screen w-full bg-[url('/verde-terra-bg.png')] bg-cover bg-center bg-fixed">
      
      {/* LAYER 2: The subtle green tint */}
      <div className="absolute inset-0 bg-[#A8D5BA]/30 pointer-events-none"></div>

      {/* LAYER 3: YOUR CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 p-8 min-h-screen">
        
        {/* --- NEW HEADER SECTION --- */}
        <div className="flex flex-col items-center gap-2">
          
          {/* 1. Your Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 drop-shadow-lg">
            <Image
              src="/logo.png" 
              alt="Ben Shalem Logo"
              fill
              className="object-contain" 
              priority
            />
          </div>

          {/* 2. Your Titles */}
          <h1 className={styles.title}>Hello World</h1>
          <h1 className="text-4xl font-bold text-white drop-shadow-md">Ben Shalem</h1>

        </div>
        {/* --- END HEADER SECTION --- */}

        {/* YouTube Video */}
        <div className="w-full max-w-3xl">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-lg"
              src="https://www.youtube.com/embed/ogRMIxHsKAI"
              title="Ben Shalem Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        {/* Image Carousel */}
        <div className="w-full max-w-3xl">
          <Carousel />
        </div>

        {/* Accordion Section */}
        <div className="w-full max-w-3xl shadow-lg rounded-xl">
          <Accordion steps={myAccordionData} />
        </div>

      </div>
    </main>
  );
}