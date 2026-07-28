'use client'; 

import { ReactNode, useState } from 'react';

// --- TYPES ---
export type AccordionStep = {
  id: number | string;
  title: string;
  content: ReactNode; 
};

interface AccordionProps {
  steps: AccordionStep[];
}

// --- DATA: Formatted text ---
export const accordionData: AccordionStep[] = [
  {
    id: 1,
    title: "Memory, Legacy, and Eternity",
    content: (
      <div className="flex flex-col gap-2">
        <strong className="text-cyan-400 text-sm font-bold tracking-wide">
          THE HUG FROZEN IN TIME, NOW BREATHING ON THE SCREEN.
        </strong>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          Generations that never met, walking together in the same video. A real time machine, right in the palm of your hand. The ultimate rescue of the moments time tried to erase.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Movement, Light, and Realism",
    content: (
      <div className="flex flex-col gap-2">
        <strong className="text-cyan-400 text-sm font-bold tracking-wide">
          THE DRESS DANCES, THE LIGHT SHIFTS, AND TRUE MAGIC HAPPENS.
        </strong>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          Stop scrolling the feed. Your photo just became a work of art with a breathtaking drone flight right inside your favorite picture. Feel the breeze, hear the ocean, and relive your scene all over again.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "Surprises, Tears, and Tributes",
    content: (
      <div className="flex flex-col gap-2">
        <strong className="text-cyan-400 text-sm font-bold tracking-wide">
          THE MOST EMOTIONAL GIFT ANYONE HAS EVER RECEIVED.
        </strong>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          The tears of joy that a static photo could never evoke. It is guaranteed to deeply move parents, grandparents, or loved ones the exact moment they hit play. Don't just remember the past. Relive it.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "Music, Voice, and Sensory Immersion",
    content: (
      <div className="flex flex-col gap-2">
        <strong className="text-cyan-400 text-sm font-bold tracking-wide">
          THE VOICE OF YOUR BEST MEMORY TELLING YOUR STORY.
        </strong>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          Where the silence of a photo turns into living poetry. We deliver your scene with emotional, licensed soundtracks and a professional studio voiceover that breathes soul into your moment. If you can imagine it, we can create it.
        </p>
      </div>
    ),
  },
  {
    id: 5,
    title: "Security, Rights, and Peace of Mind",
    content: (
      <div className="flex flex-col gap-2">
        <strong className="text-cyan-400 text-sm font-bold tracking-wide">
          LICENSING CERTIFICATE TO PUBLISH ANYWHERE.
        </strong>
        <p className="text-gray-200 text-sm md:text-base leading-relaxed">
          We deliver your video ready for social media (Instagram, TikTok, or Facebook), with absolutely no risk of audio copyright blocks. A custom format tailored exactly to your needs.
        </p>
      </div>
    ),
  },
];

// --- Custom Star Icon (based on image_7.png) ---
const StarBullet = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={`${className} text-amber-400`} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12,2 L13.5,8 L20,9.5 L13.5,11 L12,17 L10.5,11 L4,9.5 L10.5,8 Z" />
  </svg>
);

// --- YOUR COMPONENT ---
export function Accordion({ steps }: AccordionProps) {
  const [openId, setOpenId] = useState<number | string | null>(null);

  return (
    <div className="flex flex-col gap-3 w-full text-white">
      
      {steps.map((step) => {
        const isOpen = openId === step.id;

        return (
          <div 
            key={step.id} 
            className="group bg-gray-800 border border-gray-600 rounded-xl overflow-hidden transition-all shadow-lg"
          >
            <button 
              onClick={() => setOpenId(isOpen ? null : step.id)}
              className={`w-full text-left p-4 font-semibold cursor-pointer flex justify-between items-center transition-colors hover:bg-gray-700 ${isOpen ? 'text-cyan-300' : ''}`}
            >
              <div className="flex items-center gap-3">
                <StarBullet className="w-6 h-6 flex-shrink-0" />
                <span>{step.title}</span>
              </div>
              
              <span className={`text-xl font-light transition-transform duration-300 ${isOpen ? 'rotate-180 opacity-0 hidden' : 'opacity-100'}`}>+</span>
              <span className={`text-xl font-light transition-transform duration-300 ${isOpen ? 'opacity-100 block' : 'opacity-0 hidden'}`}>−</span>
            </button>
            
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-4 text-white/90 bg-gray-900 leading-relaxed border-t border-gray-600">
                  {step.content}
                </div>
              </div>
            </div>

          </div>
        );
      })}

    </div>
  );
}

// --- EXAMPLE USAGE COMPONENT ---
export default function FeaturesSection() {
  return (
    <section className="max-w-3xl mx-auto p-6 w-full">
      {/* Pass the data array into the component */}
      <Accordion steps={accordionData} />
    </section>
  );
}