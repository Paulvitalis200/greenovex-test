import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowLeft, MapPin } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

const projects = [
  {
    id: 1,
    title: "10KVA Off-grid Solar System in Matuu",
    image: "/static/images/solar-roof.webp",
    image2: "/static/images/10kva.webp",
    location: "Matuu, Machakos County",
    description: "This project involved the installation of a 10KVA off-grid solar system.",
  },
  {
    id: 2,
    title: "2kW Off-Grid Solar System in Uganda",
    image: "/static/images/solar-battery.webp",
    image2: "/static/images/davis-solar.webp",
    location: "Uganda",
    description: "A 2kW off-grid solar system installed to provide sustainable energy.",
  },
  {
    id: 3,
    title: "Borehole Pump Maintenance, Kitui",
    image: "/static/images/borehole-install.webp",
    image2: "/static/images/borehole-install-2.webp",
    location: "Kitui",
    description: "Maintenance of a borehole pump to ensure continuous water supply."
  },
  {
    id: 4,
    title: "Borehole Solarization, Mandera",
    image: "/static/images/mandera.webp",
    location: "Mandera",
    description: "Borehole Solarization in Mandera.",
  }
];

const formatTitleForURL = (title: string): string => title.trim().toLowerCase().replace(/\s+/g, "-");

export default function RevampedProjectPage() {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  
  const project = projects.find(p => formatTitleForURL(p.title) === projectName);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (project) {
      document.title = `${project.title} | Greenovex`;
      const ctx = gsap.context(() => {
        gsap.from('.reveal-text', {
          y: 50,
          opacity: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.2
        });
        gsap.from('.reveal-image', {
          scale: 1.1,
          opacity: 0,
          duration: 1.5,
          ease: 'power2.out',
          delay: 0.4
        });
      }, heroRef);
      return () => ctx.revert();
    }
  }, [project]);

  if (!project) {
    return (
      <div className="min-h-screen bg-primary flex flex-col items-center justify-center text-background">
        <h2 className="text-4xl font-serif italic mb-4">Project not found</h2>
        <HashLink to="/#projects" className="btn-magnetic border border-steel/20 px-6 py-3 font-mono text-sm hover:bg-white/5 transition-colors inline-block text-center">
          Return to Hub
        </HashLink>
      </div>
    );
  }

  return (
    <main className="w-full min-h-screen bg-background text-steel selection:bg-accent selection:text-background pb-32">
      {/* Navigation Bar overlay */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 rounded-full px-6 py-3 flex items-center justify-between w-full max-w-7xl">
        <HashLink to="/#projects" className="btn-magnetic bg-background/80 backdrop-blur-xl border border-steel/10 px-5 py-2 flex items-center gap-2 text-sm font-semibold text-primary hover:bg-background transition-colors shadow-sm">
          <ArrowLeft size={16} /> Back to Hub
        </HashLink>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[70dvh] flex items-end pb-16 px-8 md:px-16 overflow-hidden">
        <div className="absolute inset-0 z-0 bg-primary">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-40 mix-blend-overlay reveal-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl">
          <div className="reveal-text flex items-center gap-2 text-accent font-mono text-sm uppercase tracking-widest mb-6">
            <MapPin size={16} /> {project.location}
          </div>
          <h1 className="reveal-text text-4xl md:text-6xl lg:text-7xl font-sans font-bold text-background leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Story Content */}
      <section className="px-8 md:px-16 mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-32">
            <h2 className="font-serif italic text-3xl md:text-4xl mb-8 text-primary">The Challenge & Implementation</h2>
            <p className="text-lg font-sans leading-relaxed text-steel/80">
              {project.description}
            </p>
          </div>
          
          <div className="flex flex-col gap-8">
            {project.image2 && (
              <div className="rounded-[2rem] overflow-hidden border border-steel/10 aspect-video md:aspect-[4/3] bg-steel/5 hover:border-accent/50 transition-colors duration-500">
                <img src={project.image2} alt="Implementation detail 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
            {(project as any).image3 && (
              <div className="rounded-[2rem] overflow-hidden border border-steel/10 aspect-video md:aspect-[4/3] bg-steel/5 hover:border-accent/50 transition-colors duration-500">
                <img src={(project as any).image3} alt="Implementation detail 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
            {!project.image2 && !(project as any).image3 && (
              <div className="rounded-[2rem] overflow-hidden border border-steel/10 aspect-video md:aspect-[4/3] bg-steel/5 hover:border-accent/50 transition-colors duration-500">
                <img src={project.image} alt="Implementation detail" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
