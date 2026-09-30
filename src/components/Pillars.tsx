import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Pillars: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.pillar-card',
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          stagger: 0.15, 
          duration: 0.8, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 75%',
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="pillars" className="py-24 px-6 md:px-16 lg:px-32 bg-[#F4F4F4]" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#1E2022] mb-12 uppercase tracking-tight">
          Functional Artifacts
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Sustainable Engineering */}
          <div className="pillar-card bg-[#393E46] text-[#F4F4F4] rounded-[2rem] p-8 flex flex-col h-[400px] border border-[#1E2022]/10 shadow-lg relative overflow-hidden group">
            <h3 className="text-2xl font-serif italic mb-2 relative z-10">Sustainable Engineering</h3>
            <p className="text-sm font-sans text-[#F4F4F4]/80 mb-6 relative z-10">Building resilient infrastructure for tomorrow.</p>
            <div className="mt-auto bg-[#1E2022] p-4 rounded-xl font-mono text-xs text-[#C57A36] h-32 overflow-hidden relative z-10 flex items-center justify-center">
               <span className="typing-anim">Generating blueprint... [OK]</span>
            </div>
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-[#C57A36] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
            <div className="absolute inset-0 z-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
               <h3 className="text-2xl font-serif italic mb-2 text-[#1E2022]">Sustainable Engineering</h3>
               <p className="font-mono text-xs text-[#1E2022] font-bold">100% Efficiency Target Reached.</p>
            </div>
          </div>

          {/* Card 2 - Solar Power */}
          <div className="pillar-card bg-[#393E46] text-[#F4F4F4] rounded-[2rem] p-8 flex flex-col h-[400px] border border-[#1E2022]/10 shadow-lg relative overflow-hidden group">
            <h3 className="text-2xl font-serif italic mb-2 relative z-10">Solar Power</h3>
            <p className="text-sm font-sans text-[#F4F4F4]/80 mb-6 relative z-10">Harnessing the sun for infinite energy.</p>
            <div className="mt-auto bg-[#1E2022] p-4 rounded-xl font-mono text-xs text-[#4FACFE] h-32 overflow-hidden relative z-10 flex flex-col justify-center items-center">
              <div className="text-3xl font-bold font-sans">450<span className="text-sm"> MW</span></div>
              <div className="text-green-400 mt-2">↑ 12% output increase</div>
            </div>
             {/* Hover overlay */}
             <div className="absolute inset-0 bg-[#C57A36] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
             <div className="absolute inset-0 z-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
               <h3 className="text-2xl font-serif italic mb-2 text-[#1E2022]">Solar Power</h3>
               <p className="font-mono text-xs text-[#1E2022] font-bold">Grid capacity optimal.</p>
            </div>
          </div>

          {/* Card 3 - Expert Maintenance */}
          <div className="pillar-card bg-[#393E46] text-[#F4F4F4] rounded-[2rem] p-8 flex flex-col h-[400px] border border-[#1E2022]/10 shadow-lg relative overflow-hidden group">
            <h3 className="text-2xl font-serif italic mb-2 relative z-10">Expert Maintenance</h3>
            <p className="text-sm font-sans text-[#F4F4F4]/80 mb-6 relative z-10">Ensuring zero downtime across all sites.</p>
            <div className="mt-auto bg-[#1E2022] p-4 rounded-xl font-mono text-xs text-green-500 h-32 overflow-hidden relative z-10">
               <div className="text-[#F4F4F4]/50">root@greenovex:~# ./sys_check</div>
               <div className="mt-2 text-green-500">Checking inverters... [PASS]</div>
               <div className="mt-1 text-green-500">Checking panels... [PASS]</div>
               <div className="mt-1 font-bold text-white">System: 100% Operational</div>
            </div>
             {/* Hover overlay */}
             <div className="absolute inset-0 bg-[#C57A36] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>
             <div className="absolute inset-0 z-0 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
               <h3 className="text-2xl font-serif italic mb-2 text-[#1E2022]">Expert Maintenance</h3>
               <p className="font-mono text-xs text-[#1E2022] font-bold">All systems nominal.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Pillars;
