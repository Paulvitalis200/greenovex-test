import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Philosophy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simulating SplitText for the dramatic effect
      gsap.fromTo(
        '.reveal-text',
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 60%',
          }
        }
      );
      
      // Background parallax effect
      gsap.to('.bg-parallax', {
        y: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section 
      className="relative py-32 px-6 md:px-16 lg:px-32 bg-[#1E2022] overflow-hidden flex items-center justify-center min-h-[60vh]"
      ref={containerRef}
    >
      {/* Background with texture */}
      <div 
        className="bg-parallax absolute inset-0 bg-cover bg-center opacity-20 scale-110" 
        style={{ backgroundImage: 'url(/static/images/solar-battery.webp)' }} // copper coils / industrial texture
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl">
        <p className="reveal-text text-xl md:text-2xl font-sans text-[#F4F4F4]/70 mb-4 tracking-wide">
          Most companies build for today.
        </p>
        <h2 className="text-4xl md:text-7xl font-sans font-extrabold text-[#F4F4F4] leading-tight">
          <span className="reveal-text block">We engineer for the</span>
          <span className="reveal-text block font-serif italic text-[#C57A36]">future.</span>
        </h2>
      </div>
    </section>
  );
};

export default Philosophy;
