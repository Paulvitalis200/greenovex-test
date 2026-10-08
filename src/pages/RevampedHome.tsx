import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Phone, Mail, MapPin, X, ChevronDown, Menu, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

gsap.registerPlugin(ScrollTrigger);

// --- Data ---
const SPECIALTIES = [
  { id: 's1', title: 'Solar Power', category: 'Solar', image: '/static/images/solar-power.webp', desc: 'The continent is blessed with abundant solar energy, which provides a great opportunity to provide sustainable power. Our solar lighting systems, solar street lighting, power backup systems, and solar water heating systems provide this solution for domestic, community, and industrial applications.' },
  { id: 's2', title: 'Water Pumping & Irrigation', category: 'Water', image: '/static/images/water-pumping.webp', desc: 'Africa’s major challenge that leads to low quality of life is water scarcity, especially in off-grid areas. Greenovex offers customized water pumping solutions for water supply, industrial applications, and advanced agricultural systems including drip irrigation. The pumps can be powered by solar, electricity, diesel, or manual systems.' },
  { id: 's3', title: 'Borehole Services', category: 'Borehole', image: '/static/images/borehole-services.webp', desc: 'To try to bridge the gaps that lead to water scarcity, Greenovex Solutions offers Geophysical and Hydro-geological surveys, Water well drilling, coring, and Geotechnical services (works, Consultation, project supervision, and contracting) that meet International Standards, using modern technology.' },
  { id: 's4', title: 'Water Treatment', category: 'Water', image: '/static/images/water-treatment.webp', desc: 'Water portability is among the causes of water scarcity in some parts of the world. Greenovex employs the leading technologies in water treatment and water purification to provide the highest possible water quality from your available sources. Our water treatment solutions are customized to your specific needs with processes such as Reverse Osmosis, water softening, disinfection, and filtration systems.' },
  { id: 's5', title: 'Wastewater Treatment', category: 'Wastewater', image: '/static/images/image1.webp', desc: 'Greenovex designs and installs robust wastewater treatment and recycling plants for commercial, municipal, and industrial setups. We ensure biological and chemical contaminants are properly neutralized, guaranteeing environmental compliance, safety, and sustainable water reuse.' },
  { id: 's6', title: 'Electrical Works & Supplies', category: 'Electrical', image: '/static/images/solar-install.webp', desc: 'We provide comprehensive electrical contracting, supplying top-tier electrical equipment and delivering expert installation for residential, commercial, and industrial projects. Our primary focus is on stringent safety measures, grid reliability, and adhering to modern electrical standards.' },
];

const SERVICES_HOW_WE_WORK = [
  {
    title: 'SUPPLY',
    headline: 'Quality equipment, sourced and delivered',
    covers: '',
    button: 'Request a supply quote'
  },
  {
    title: 'INSTALLATION',
    headline: 'Engineered and installed to standard',
    covers: 'Off-grid, hybrid and grid-tied solar; borehole solarization and pumping; water and wastewater plants; wiring and drip irrigation',
    button: 'Plan an installation'
  },
  {
    title: 'MAINTENANCE',
    headline: 'Keep every system at full output',
    covers: 'Servicing and panel cleaning; battery and inverter checks; pump repair and borehole rehab; annual maintenance contracts',
    button: 'Book a service visit'
  },
  {
    title: 'CONSULTANCY',
    headline: 'Plan right before you build',
    covers: 'Site surveys and energy audits; hydrogeological surveys and drilling supervision; design, sizing and BoQs; project management and tender documents',
    button: 'Talk to an engineer'
  }
];

const PROJECTS = [
  { id: 'p1', title: '10KVA Off-grid Solar System in Matuu', image: '/static/images/solar-roof.webp' },
  { id: 'p2', title: '2kW Off-Grid Solar System in Uganda', image: '/static/images/solar-battery.webp' },
  { id: 'p3', title: 'Borehole Pump Maintenance, Kitui', image: '/static/images/borehole-install.webp' },
  { id: 'p4', title: 'Borehole Solarization, Mandera', image: '/static/images/mandera.webp' },
];

const TEAM = [
  { name: 'Davis Usenge', role: 'Chief Executive Officer', image: '/static/images/davis.webp', aboutFullText: 'Davis Usenge holds a Bachelor’s Degree in Environmental and Biosystems Engineering from the University of Nairobi and MSc in Project Planning and Management from Kampala International University. With a strong background in biological wastewater treatment, electro-mechanical systems, and renewable energy, Davis has been instrumental in driving forward environmentally friendly technologies that create lasting impact.' },
  { name: 'Isaiah Ong’ong’a', role: 'Director of technical operations', image: '/static/images/Isaiah.webp', aboutFullText: 'Isaiah Ong’ong’a is a renewable energy expert, entrepreneur, and researcher with a strong passion for advancing solar energy adoption in Kenya and Africa at large. Holding a Master’s degree in Electrical Engineering from Nanjing University, he has extensive experience in solar PV systems and hybrid energy solutions.' },
  { name: 'George Odhiambo', role: 'Director of Projects', image: '/static/images/george.webp', aboutFullText: 'George Odhiambo is an experienced solar installer with over 20 years of expertise in the renewable energy sector. At Greenovex Solutions Limited, he plays a pivotal role in project management and implementation, ensuring seamless execution of solar installations from design to commissioning.' },
];

// --- Components ---

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navRef.current?.classList.add('bg-background/40', 'backdrop-blur-2xl', 'border', 'border-steel/10', 'text-primary', 'shadow-sm');
        navRef.current?.classList.remove('bg-transparent', 'text-background');
      } else {
        navRef.current?.classList.remove('bg-background/40', 'backdrop-blur-2xl', 'border', 'border-steel/10', 'text-primary', 'shadow-sm');
        navRef.current?.classList.add('bg-transparent', 'text-background');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-0 pointer-events-none">
        <nav ref={navRef} className="pointer-events-auto transition-all duration-300 w-full md:w-auto rounded-2xl md:rounded-full px-4 md:px-6 py-3 flex items-center justify-between md:justify-center gap-4 md:gap-8 bg-transparent text-background">
          <Link to="/" className="link-lift flex items-center justify-center p-1">
            <img src="/static/images/Greenovex-individual-green.svg" alt="Greenovex Logo" className="w-8 h-8" />
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#about" className="link-lift">About Us</a>
            <a href="#how-we-work" className="link-lift">Services</a>
            <a href="#specialties" className="link-lift">Areas of Specialty</a>
            <a href="#projects" className="link-lift">Projects</a>
            <a href="#team" className="link-lift">Team</a>
            <a href="#contact" className="link-lift">Contact</a>
          </div>
          <a href="#how-we-work" className="hidden md:inline-flex btn-magnetic bg-accent text-background px-5 py-2 text-sm font-semibold hover:bg-accent/90">
            Our Services
          </a>
          <button 
            className="md:hidden p-2 text-current" 
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </nav>
      </div>

      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-primary text-background flex flex-col p-6 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex justify-between items-center mb-16">
            <img src="/static/images/Greenovex-individual-green.svg" alt="Greenovex Logo" className="w-10 h-10" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-background/50 hover:text-accent transition-colors">
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col gap-8 text-3xl font-display font-medium px-4">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">About Us</a>
            <a href="#how-we-work" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Services</a>
            <a href="#specialties" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Areas of Specialty</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Projects</a>
            <a href="#team" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Team</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      )}
    </>
  );
};

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-brand', {
        scale: 0.85,
        y: 40,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.1
      });
      gsap.from('.hero-text', {
        y: 30,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: 'power3.out',
        delay: 0.5
      });
      gsap.fromTo('.scroll-indicator-container', 
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 1.5 }
      );
      gsap.to('.scroll-indicator', {
        y: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        duration: 1.5,
        delay: 1.5
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full h-[100dvh] flex items-center justify-center px-8 md:px-16 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-primary">
        <img 
          src="/static/images/solar.webp" 
          alt="Hero background" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent"></div>
      </div>
      
      <div className="relative z-10 w-full flex flex-col items-center text-center mt-12">
        <div className="hero-brand flex items-center justify-center mb-8 mt-12">
          <img src="/static/images/Greenovex-white.svg" alt="Greenovex Logo" className="h-12 md:h-20 lg:h-28 drop-shadow-lg" />
          <h1 className="sr-only">Greenovex</h1>
        </div>
        <div className="max-w-4xl flex flex-col items-center">
          <h2 className="hero-text text-2xl md:text-4xl lg:text-5xl font-serif italic text-accent mb-6 drop-shadow-sm">
            Forging the Infrastructure.
          </h2>
          <p className="hero-text text-base md:text-xl text-background/80 max-w-2xl font-mono leading-relaxed">
            Engineering the infrastructure of tomorrow. Sustainable energy and water solutions designed for absolute resilience.
          </p>
        </div>
      </div>

      <div className="scroll-indicator-container absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer group" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/50 group-hover:text-background transition-colors">Scroll</span>
        <div className="scroll-indicator text-accent group-hover:text-background transition-colors">
          <ChevronDown size={24} strokeWidth={1.5} />
        </div>
      </div>
    </section>
  );
};

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-reveal', {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out'
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-8 md:px-16 bg-background text-steel relative">
      <div className="max-w-7xl mx-auto">
        <h3 className="about-reveal font-mono uppercase tracking-widest text-accent text-sm mb-6">/ About Us</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="about-reveal font-serif italic text-4xl md:text-5xl mb-8 text-primary leading-tight">
              Spurring socio-economic transformation in Africa.
            </h2>
            <p className="about-reveal text-lg font-sans leading-relaxed mb-6 text-steel/80">
              Established in 2022, Greenovex Solutions is a Kenyan company that aims to spur socio-economic transformation in Africa through the development of community-based sustainable power and water solutions. We intend to help address the challenges of water scarcity, water quality, and inadequate power.
            </p>
            <p className="about-reveal text-lg font-sans leading-relaxed text-steel/80">
              With the increasing scarcity of water and inadequate supply of power, our team dedicates itself to providing reliable solutions in the most professional approach, to uplift our communities. We are proud of our achievements thus far and look to the future with enthusiasm, to grow with the needs of our customers, transform communities, and change lives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 about-reveal">
            <div className="bg-primary text-background p-8 rounded-[2rem] flex flex-col justify-between h-[250px] relative overflow-hidden group border border-steel/10">
              <p className="font-mono text-sm uppercase tracking-widest text-background/60">Completion Rate</p>
              <h3 className="text-6xl font-serif italic text-accent mt-4">99%</h3>
              <p className="font-sans font-medium mt-4">On-time project delivery</p>
            </div>
            
            <div className="bg-accent text-background p-8 rounded-[2rem] flex flex-col justify-between h-[250px] relative overflow-hidden group border border-steel/10">
              <p className="font-mono text-sm uppercase tracking-widest text-background/60">Client Satisfaction</p>
              <h3 className="text-6xl font-serif italic mt-4">95%</h3>
              <p className="font-sans font-medium mt-4">Committed to quality</p>
            </div>
            
            <div className="sm:col-span-2 h-[250px] rounded-[2rem] overflow-hidden relative">
               <img src="/static/images/image1.webp" alt="Greenovex at work" className="w-full h-full object-cover" />
               <div className="absolute inset-0 bg-primary/20 mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Philosophy = () => {
  const philRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.phil-text', {
        scrollTrigger: {
          trigger: philRef.current,
          start: 'top 60%',
        },
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });
    }, philRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={philRef} className="py-40 px-8 md:px-16 bg-primary text-background relative overflow-hidden">
       <div className="absolute inset-0 z-0">
          <img src="/static/images/10kva.webp" alt="Background" className="w-full h-full object-cover opacity-20 mix-blend-luminosity grayscale" />
          <div className="absolute inset-0 bg-primary/90"></div>
       </div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <p className="phil-text text-xl md:text-2xl font-mono text-background/60 mb-8">Most companies follow standards.</p>
        <h2 className="phil-text text-5xl md:text-7xl font-sans font-bold leading-tight">
          We engineer: <br/>
          <span className="font-serif italic text-accent text-6xl md:text-8xl">resilience</span>.
        </h2>
      </div>
    </section>
  );
};

const HowWeWorkSection = () => {
  return (
    <section id="how-we-work" className="py-32 px-8 md:px-16 bg-background text-primary">
       <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h3 className="font-mono uppercase tracking-widest text-accent text-sm mb-4">/ How We Work</h3>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight max-w-3xl">
              Comprehensive services for every specialty.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES_HOW_WE_WORK.map((svc, i) => (
              <div key={i} className="border border-steel/10 rounded-[2rem] p-10 flex flex-col justify-between hover:border-accent/50 transition-colors duration-300 group bg-background relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 text-steel/5 font-display font-black text-9xl select-none pointer-events-none group-hover:text-accent/5 transition-colors duration-500">
                  0{i+1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold font-sans mb-4">{svc.title}</h3>
                  <h4 className="text-xl font-serif italic text-steel mb-6 max-w-sm">{svc.headline}</h4>
                  {svc.covers && (
                    <p className="text-steel/80 font-sans text-base leading-relaxed mb-8 max-w-md">{svc.covers}</p>
                  )}
                </div>
                <button className="relative z-10 self-start text-accent font-sans font-bold text-sm tracking-widest uppercase flex items-center gap-2 group/btn hover:text-primary transition-colors mt-8">
                  {svc.button} <ArrowRight size={16} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

const SpecialtiesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>('.service-item');
      
      items.forEach((item) => {
        const image = item.querySelector('.service-parallax-image');
        
        // Parallax image effect
        gsap.fromTo(image, 
          { y: '-15%' }, 
          {
            y: '15%',
            ease: 'none',
            scrollTrigger: {
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true
            }
          }
        );

        // Reveal animation
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 75%',
          },
          y: 50,
          opacity: 0,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="specialties" ref={sectionRef} className="py-32 px-8 md:px-16 bg-primary text-background border-t border-background/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 text-center flex flex-col items-center">
          <h3 className="font-mono uppercase tracking-widest text-accent text-sm mb-4">/ Areas of Specialty</h3>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background leading-tight max-w-3xl">
            Engineered for absolute resilience.
          </h2>
        </div>

        <div className="space-y-32">
          {SPECIALTIES.map((service, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={service.id} className={`service-item flex flex-col gap-12 lg:gap-24 items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                
                {/* Image Block */}
                <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-square overflow-hidden rounded-[2rem] bg-background/5 relative group border border-background/10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="service-parallax-image absolute top-[-15%] left-0 w-full h-[130%] object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
                </div>

                {/* Text Block */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="text-accent font-mono text-sm tracking-widest mb-6">0{index + 1} // {service.category}</div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif text-background mb-8">{service.title}</h3>
                  <p className="text-background/70 text-lg lg:text-xl font-sans leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-8 md:px-16 bg-primary text-background border-t border-background/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h3 className="font-mono uppercase tracking-widest text-accent text-sm mb-4">/ Projects</h3>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-background max-w-2xl leading-tight">
            From Ideation to Implementation: Our Proven Track Record.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROJECTS.map(project => (
            <Link to={`/projects/${project.title.trim().toLowerCase().replace(/\s+/g, "-")}`} key={project.id} className="group relative bg-background/5 border border-background/10 rounded-[2rem] overflow-hidden hover:border-accent/50 transition-colors duration-500 block cursor-pointer">
              <div className="h-56 overflow-hidden relative">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 absolute bottom-0 left-0 right-0 flex items-center justify-between">
                <h3 className="text-lg font-semibold font-sans text-background leading-tight mr-4">{project.title}</h3>
                <div className="w-8 h-8 rounded-full bg-accent text-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0">
                  <ArrowRight size={16} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSelection, setCurrentSelection] = useState<typeof TEAM[0] | null>(null);

  const handleOpen = (member: typeof TEAM[0]) => {
    setCurrentSelection(member);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setCurrentSelection(null), 300);
  };

  return (
    <section id="team" className="py-32 px-8 md:px-16 bg-background">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-mono uppercase tracking-widest text-accent text-sm mb-4">/ The Team</h3>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-primary mb-16">The Minds Behind Greenovex.</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM.map(member => (
            <div key={member.name} className="group cursor-pointer" onClick={() => handleOpen(member)}>
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 bg-steel/5 relative">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0" />
                <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/100 rounded-[2rem] transition-colors duration-500 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end p-6">
                  <div className="bg-accent text-background px-5 py-2.5 rounded-full font-sans font-bold text-sm tracking-widest uppercase transition-all duration-500 translate-y-4 group-hover:translate-y-0 flex items-center gap-2 shadow-lg">
                    Read Bio <ArrowRight size={16} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl font-serif italic text-primary">{member.name}</h3>
              <p className="text-accent font-mono text-sm uppercase tracking-widest">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal 
        isOpen={isOpen}
        onRequestClose={handleClose}
        className="flex items-center justify-center min-h-screen p-4 outline-none font-sans"
        overlayClassName="fixed inset-0 z-[100] bg-primary/80 backdrop-blur-md flex items-center justify-center"
        ariaHideApp={false}
      >
        <div className="bg-background rounded-[2rem] p-8 max-w-3xl w-full relative border border-steel/10 shadow-2xl">
          <button 
            onClick={handleClose} 
            className="absolute top-6 right-6 text-steel/50 hover:text-primary transition-colors btn-magnetic p-2 bg-steel/5 rounded-full z-10"
          >
            <X size={20} />
          </button>
          
          {currentSelection && (
            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start mt-4">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-[2rem] overflow-hidden flex-shrink-0 bg-steel/5">
                <img
                  src={currentSelection.image}
                  alt={currentSelection.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center h-full">
                <h3 className="font-serif italic text-3xl md:text-4xl text-primary mb-2">{currentSelection.name}</h3>
                <p className="font-mono text-sm text-accent uppercase tracking-wider mb-6">{currentSelection.role}</p>
                <p className="text-steel/80 text-base leading-relaxed font-sans">
                  {currentSelection.aboutFullText}
                </p>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section id="contact" className="py-32 px-8 md:px-16 bg-primary text-background border-t border-background/5">
       <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center md:text-left">
            <h3 className="font-mono uppercase tracking-widest text-accent text-sm mb-4">/ Contact Us</h3>
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-background max-w-2xl leading-tight md:mx-0 mx-auto">
              Connect with us to explore how we can be of service to you.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-background/10 rounded-[2rem] p-8 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between min-h-[280px] h-full">
               <div>
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                   <Phone size={24} />
                 </div>
                 <h3 className="text-xl font-bold font-sans mb-2">Call Us</h3>
                 <p className="text-background/60 font-serif mb-4">Mon-Fri from 8 am - 6 pm EAT</p>
               </div>
               <div className="flex flex-col gap-2 font-mono text-sm">
                 <a href="tel:+254729750490" className="hover:text-accent transition-colors link-lift">+254 729 750 490</a>
                 <a href="tel:+254727568001" className="hover:text-accent transition-colors link-lift">+254 727 568 001 (WhatsApp)</a>
                 <a href="tel:+254720456056" className="hover:text-accent transition-colors link-lift">+254 720 456 056</a>
                 <a href="tel:+254712801820" className="hover:text-accent transition-colors link-lift">+254 712 801 820</a>
               </div>
            </div>

            <div className="border border-background/10 rounded-[2rem] p-8 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between min-h-[280px] h-full">
               <div>
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                   <Mail size={24} />
                 </div>
                 <h3 className="text-xl font-bold font-sans mb-2">Email Us</h3>
                 <p className="text-background/60 font-serif mb-4">Drop us an email</p>
               </div>
               <div className="flex flex-col gap-2 font-mono text-sm">
                 <a href="mailto:greenovexsolutions@gmail.com" className="hover:text-accent transition-colors link-lift text-wrap break-all">greenovexsolutions@gmail.com</a>
               </div>
            </div>

            <div className="border border-background/10 rounded-[2rem] p-8 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between min-h-[280px] h-full">
               <div>
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                   <MapPin size={24} />
                 </div>
                 <h3 className="text-xl font-bold font-sans mb-2">Visit Us</h3>
                 <p className="text-background/60 font-serif mb-4">Visit our office HQ</p>
               </div>
               <div className="flex flex-col gap-2 font-mono text-sm">
                 <span className="text-background/80">Oginga Odinga St, Kisumu - Kenya</span>
               </div>
            </div>

            <div className="border border-background/10 rounded-[2rem] p-8 hover:border-accent/50 transition-colors duration-300 flex flex-col justify-between min-h-[280px] h-full">
               <div>
                 <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                   <Globe size={24} />
                 </div>
                 <h3 className="text-xl font-bold font-sans mb-2">Socials</h3>
                 <p className="text-background/60 font-serif mb-4">Connect with us online</p>
               </div>
               <div className="flex flex-col gap-2 font-mono text-sm">
                 <a href="https://x.com/Greenovexs" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors link-lift">X (Twitter)</a>
                 <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors link-lift">Facebook</a>
                 <a href="https://www.tiktok.com/@greenovex.solutio?_r=1&_t=ZS-9ABnlfaG5PI" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors link-lift">TikTok</a>
               </div>
            </div>
          </div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-primary pb-8 px-8 md:px-16 text-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-background/10 text-sm font-mono gap-6">
          <p>© {new Date().getFullYear()} Greenovex Solutions. All rights reserved.</p>
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 rounded-full bg-accent animate-pulse"></div>
             <span className="text-background/60">System Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function RevampedHome() {
  return (
    <main className="w-full relative selection:bg-accent selection:text-background overflow-hidden">
      <Navbar />
      <Hero />
      <AboutUs />
      <Philosophy />
      <HowWeWorkSection />
      <SpecialtiesSection />
      <ProjectsSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
