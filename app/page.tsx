"use client";

import Image from 'next/image';
import styles from './page.module.css';
import { Accordion, accordionData } from './components/Accordion'; // <-- Fixed named import
import Carousel from './components/Carousel';
import VideoPopup from './components/VideoPopup';
import Script from 'next/script';

export default function Page() {
  return (
    <main className="relative min-h-screen w-full bg-[url('/verde-terra-bg.png')] bg-cover bg-center bg-fixed">
      
      {/* LAYER 2: Green tint overlay */}
      <div className="absolute inset-0 bg-[#A8D5BA]/30 pointer-events-none"></div>

      {/* LAYER 3: CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-10 p-8 min-h-screen">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center gap-2">
          <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 drop-shadow-lg">
            <Image
              src="/logo.png" 
              alt="Ben Shalem Logo"
              fill
              className="object-contain" 
              priority
            />
          </div>

          <h1 className={styles.title}>Hello World</h1>
          <h1 className="text-4xl font-bold text-white drop-shadow-md">Ben Shalem</h1>
        </div>

        {/* --- VIDEO POPUP --- */}
        <div className="w-full max-w-3xl">
          <VideoPopup />
        </div>

        {/* AddToAny BEGIN */}
<div 
  className="a2a_kit a2a_kit_size_32 a2a_default_style"
  data-a2a-url="https://benabba.com/"
  data-a2a-title="Transform Your Photos into Unforgettable Cinematic Motion"
  data-a2a-media="https://www.youtube.com/watch?v=NftFCnkvNzs"
>
  <a className="a2a_dd" href="https://www.addtoany.com/share"></a>
  <a className="a2a_button_facebook"></a>
  <a className="a2a_button_email"></a>
  <a className="a2a_button_whatsapp"></a>
  <a className="a2a_button_copy_link"></a>
  <a className="a2a_button_twitter"></a>
  <a className="a2a_button_linkedin"></a>
  <a className="a2a_button_pinterest"></a>
  <a className="a2a_button_reddit"></a>
</div>
<Script src="https://static.addtoany.com/menu/page.js" strategy="lazyOnload" />
{/* AddToAny END */}

        {/* --- IMAGE CAROUSEL --- */}
        <div className="w-full max-w-3xl">
          <Carousel />
        </div>

        {/* --- ACCORDION SECTION --- */}
        <div className="w-full max-w-3xl shadow-lg rounded-xl">
          <Accordion steps={accordionData} />
        </div>

      </div>
    </main>
  );
}