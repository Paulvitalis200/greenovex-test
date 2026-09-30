import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';

const archiveData = [
  { id: 1, type: 'Services', title: 'Solar Installation', meta: 'Commercial & Residential', img: '/static/images/solar-install.webp' },
  { id: 2, type: 'Projects', title: 'Mandera Solar Plant', meta: 'Utility Scale', img: '/static/images/mandera.webp' },
  { id: 3, type: 'Services', title: 'Borehole Drilling', meta: 'Water Access', img: '/static/images/borehole.webp' },
  { id: 4, type: 'Projects', title: '10kVA System', meta: 'Residential Backup', img: '/static/images/10kva.webp' },
  { id: 5, type: 'Services', title: 'Water Treatment', meta: 'Purification Systems', img: '/static/images/water-treatment.webp' },
];

const Archive: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredData = filter === 'All' ? archiveData : archiveData.filter(item => item.type === filter);

  useEffect(() => {
    if (gridRef.current) {
      gsap.fromTo(
        gridRef.current.children,
        { opacity: 0, scale: 0.95, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.4, stagger: 0.05, ease: 'power2.out', clearProps: 'all' }
      );
    }
  }, [filter]);

  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-32 bg-[#F4F4F4]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-sans font-bold text-[#1E2022] mb-12 uppercase tracking-tight">
          Our Services
        </h2>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {['All', 'Services', 'Projects'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-6 py-2 rounded-[2rem] font-sans font-semibold text-sm transition-all duration-300 ${
                filter === f 
                ? 'bg-[#C57A36] text-white shadow-md' 
                : 'bg-white text-[#393E46] hover:bg-[#1E2022] hover:text-white border border-[#1E2022]/10'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map(item => (
            <div 
              key={item.id} 
              className="group relative bg-white rounded-[2rem] h-80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-[#1E2022]/10 cursor-pointer"
            >
              <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E2022]/90 via-[#1E2022]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[#C57A36] font-mono text-xs mb-2 uppercase tracking-widest">{item.type}</span>
                <h3 className="text-[#F4F4F4] font-serif italic text-2xl mb-1">{item.title}</h3>
                <p className="text-[#F4F4F4]/70 font-sans text-sm">{item.meta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Archive;
