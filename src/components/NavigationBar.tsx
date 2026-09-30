import { IoMenu } from "react-icons/io5";
import { useState, useEffect, useRef, FC } from "react";
import { gsap } from "gsap";
import Menu from "./Menu";
import { HashLink } from 'react-router-hash-link';

const NavigationBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    if (isMenuOpen) document.body.classList.add("no-scroll");
    else document.body.classList.remove("no-scroll");
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // GSAP Animation for Navbar entrance
  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      );
    }
  }, []);

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 font-sans pointer-events-none">
      {/* Desktop Navbar */}
      <div 
        ref={navRef}
        className={`hidden lg:flex items-center justify-between px-8 py-3 rounded-[3rem] transition-all duration-500 pointer-events-auto shadow-sm ${
          isScrolled 
            ? "bg-[#F4F4F4]/80 backdrop-blur-xl text-[#393E46] border border-[#1E2022]/10 w-[80%]" 
            : "bg-transparent text-white border border-transparent w-[90%]"
        }`}
      >
        <HashLink smooth to="/#" className="link-lift flex items-center gap-2">
          <img 
            src={isScrolled ? "/static/images/Greenovex-individual-green.svg" : "/static/images/Greenovex-individual-white.svg"} 
            alt="Greenovex Logo" 
            className="h-8 w-auto" 
          />
          <span className="text-xl font-bold font-sans tracking-wide">Greenovex</span>
        </HashLink>

        <ul className="flex items-center gap-8 font-medium text-sm">
          <li><HashLink smooth to="/#about" className="link-lift hover:text-[#C57A36] transition-colors">About</HashLink></li>
          <li><HashLink smooth to="/#services" className="link-lift hover:text-[#C57A36] transition-colors">Services</HashLink></li>
          <li><HashLink smooth to="/#projects" className="link-lift hover:text-[#C57A36] transition-colors">Projects</HashLink></li>
          <li><HashLink smooth to="/#team" className="link-lift hover:text-[#C57A36] transition-colors">Team</HashLink></li>
        </ul>

        <HashLink smooth to="/#services" className={`btn-magnetic px-5 py-2 text-sm font-semibold transition-colors duration-300 ${isScrolled ? 'bg-[#1E2022] text-[#F4F4F4]' : 'bg-white text-[#1E2022]'}`}>
          <span className="relative z-10">Our services</span>
        </HashLink>
      </div>

      {/* Mobile Navbar */}
      <div className={`lg:hidden flex items-center justify-between w-full px-6 py-4 rounded-[2rem] pointer-events-auto transition-all duration-500 ${
        isScrolled ? "bg-[#F4F4F4]/90 backdrop-blur-xl text-[#393E46] border border-[#1E2022]/10 mx-2" : "bg-transparent text-white"
      }`}>
        <HashLink smooth to="/#" className="flex items-center gap-2">
          <img 
            src={isScrolled ? "/static/images/Greenovex-individual-green.svg" : "/static/images/Greenovex-individual-white.svg"} 
            alt="Greenovex Logo" 
            className="h-8 w-auto" 
          />
          <span className="text-xl font-bold font-sans">Greenovex</span>
        </HashLink>
        <IoMenu className="text-2xl cursor-pointer" onClick={handleMenuToggle} />
      </div>

      {isMenuOpen && <Menu onClose={handleMenuToggle} />}
    </div>
  );
};

export default NavigationBar;
