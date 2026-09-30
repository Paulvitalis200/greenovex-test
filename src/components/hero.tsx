import React, { useRef, useEffect } from "react";
import background from "../assets/hero.webp";
import NavigationBar from "../components/NavigationBar";
import gsap from "gsap";

const Hero: React.FC = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementsRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.08,
          ease: "power3.out",
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-[100dvh] flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-16 lg:px-32 bg-[#1E2022] bg-center bg-cover overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Heavy primary-to-black gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1E2022] via-[#1E2022]/80 to-transparent z-0"></div>
      
      {/* Navigation */}
      <NavigationBar />

      {/* Hero Content pushed to bottom-left third */}
      <div className="relative z-10 flex flex-col items-start text-[#F4F4F4] max-w-4xl">
        <h1 
          ref={(el) => { if (el) elementsRef.current[0] = el; }}
          className="text-2xl md:text-3xl font-sans font-bold tracking-wide uppercase text-[#C57A36] mb-2"
        >
          Greenovex
        </h1>
        
        <div className="flex flex-col mb-6">
          <span 
            ref={(el) => { if (el) elementsRef.current[1] = el; }}
            className="text-[40px] md:text-[80px] leading-none font-sans font-extrabold tracking-tight"
          >
            Forging the
          </span>
          <span 
            ref={(el) => { if (el) elementsRef.current[2] = el; }}
            className="text-[56px] md:text-[100px] leading-[0.9] font-serif italic text-white pr-4"
          >
            Future.
          </span>
        </div>
        
        <p 
          ref={(el) => { if (el) elementsRef.current[3] = el; }}
          className="text-lg md:text-xl font-mono text-[#F4F4F4]/80 max-w-lg mb-8 leading-relaxed"
        >
          Precision engineering and sustainable infrastructure for a resilient tomorrow.
        </p>

        <div ref={(el) => { if (el) elementsRef.current[4] = el; }}>
          <a href="#services" className="btn-magnetic bg-[#C57A36] text-[#F4F4F4] px-8 py-4 font-sans font-bold text-lg hover:bg-[#a66226] transition-colors">
            Our services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
