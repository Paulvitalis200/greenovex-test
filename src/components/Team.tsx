import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Modal from "react-modal";

gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  aboutFullText: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Davis Usenge",
    role: "Chief Executive Officer",
    image: "/static/images/davis.webp",
    aboutFullText: `Davis Usenge holds a Bachelor’s Degree in Environmental and Biosystems Engineering from the University of Nairobi and MSc in Project Planning and Management from Kampala International University. With a strong background in biological wastewater treatment, electro-mechanical systems, and renewable energy, Davis has been instrumental in driving forward environmentally friendly technologies that create lasting impact.`
  },
  {
    id: 2,
    name: "Isaiah Ong’ong’a",
    role: "Director of technical operations",
    image: "/static/images/Isaiah.webp",
    aboutFullText: `Isaiah Ong’ong’a is a renewable energy expert, entrepreneur, and researcher with a strong passion for advancing solar energy adoption in Kenya and Africa at large. Holding a Master’s degree in Electrical Engineering from Nanjing University, he has extensive experience in solar PV systems and hybrid energy solutions.`
  },
  {
    id: 3,
    name: "Clarie Atieno Odhiambo",
    role: "Director of Partnerships",
    image: "/static/images/claire.webp",
    aboutFullText: "Claire is an academic and researcher at ANIE- African Network for internationalization of Higher education- Moi University. Empowering Youths in the community on green energy solar lighting in community health facilities and schools in Kisumu and Siaya County."
  },
  {
    id: 4,
    name: "George Odhiambo",
    role: "Director of Projects",
    image: "/static/images/george.webp",
    aboutFullText: `George Odhiambo is an experienced solar installer with over 20 years of expertise in the renewable energy sector. At Greenovex Solutions Limited, he plays a pivotal role in project management and implementation, ensuring seamless execution of solar installations from design to commissioning.`
  }
];

const Team: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState<TeamMember | undefined>(undefined);

  const handleOpen = (member?: TeamMember) => {
    setIsOpen(!!member);
    setCurrentSelection(member);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".team-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 75%",
          },
        }
      );
    }, teamRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section id="team" className="py-24 px-6 md:px-16 lg:px-32 bg-[#1E2022] text-[#F4F4F4]" ref={teamRef}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-sans font-bold uppercase tracking-tight text-[#C57A36]">
              Our Team
            </h2>
            <p className="mt-4 font-mono text-sm text-[#F4F4F4]/70 max-w-2xl">
              Meet the minds engineering a sustainable future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="team-card bg-[#393E46] rounded-[2rem] overflow-hidden border border-[#F4F4F4]/10 shadow-lg group flex flex-col h-full cursor-pointer hover:border-[#C57A36]/50 transition-colors duration-300"
                onClick={() => handleOpen(member)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#393E46] via-transparent to-transparent opacity-80"></div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="font-serif italic text-2xl text-[#F4F4F4] mb-1">{member.name}</h3>
                  <p className="font-mono text-xs text-[#C57A36] uppercase tracking-wider mb-4">{member.role}</p>
                  <button className="mt-auto self-start text-sm font-sans font-semibold border-b border-transparent group-hover:border-[#C57A36] text-[#F4F4F4]/70 group-hover:text-[#C57A36] transition-all">
                    Read Biography
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {isOpen && currentSelection && (
        <Modal 
          isOpen={isOpen}
          onRequestClose={() => handleOpen()}
          className="flex items-center justify-center min-h-screen p-4 outline-none font-sans"
          overlayClassName="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm"
          ariaHideApp={false}
        >
          <div className="bg-[#F4F4F4] rounded-[2rem] p-8 max-w-2xl w-full relative border border-[#1E2022]/10 shadow-2xl">
            <button 
              onClick={() => handleOpen()} 
              className="absolute top-6 right-6 text-[#1E2022]/50 hover:text-[#1E2022] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mt-4">
              <img
                src={currentSelection.image}
                alt={currentSelection.name}
                className="w-48 h-48 rounded-[1.5rem] object-cover shadow-md"
              />
              <div>
                <h3 className="font-serif italic text-3xl text-[#1E2022] mb-2">{currentSelection.name}</h3>
                <p className="font-mono text-sm text-[#C57A36] uppercase tracking-wider mb-6">{currentSelection.role}</p>
                <p className="text-[#393E46] text-sm leading-relaxed">
                  {currentSelection.aboutFullText}
                </p>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Team;
