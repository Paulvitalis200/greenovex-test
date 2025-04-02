import { IoMenu } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import Menu from "./Menu";
import { FC } from "react";
import { HashLink } from 'react-router-hash-link';

const NavigationBar: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const location = useLocation();
  const leftNavRef = useRef<HTMLUListElement>(null);
  const rightNavRef = useRef<HTMLUListElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        setIsHeroVisible(rect.bottom > 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsHeroVisible(false);
    }
  }, [location.pathname]);

  // GSAP Animation for Navbar Links
  useEffect(() => {
    if (leftNavRef.current && rightNavRef.current) {
      gsap.fromTo(
        leftNavRef.current.children,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
      );
      gsap.fromTo(
        rightNavRef.current.children,
        { x: 50, opacity: 0 },
        { x: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div
      className={`navbar fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-raleway ${
        isHeroVisible
          ? "bg-transparent text-white"
          : "bg-white text-black "
      }`}
    >
      <div className="hidden w-full py-4 px-6 lg:px-24 lg:flex justify-between items-center">
        {/* Left Navigation */}
        <ul ref={leftNavRef} className="flex gap-12 items-center">
          <li>
            {/* <a href="#hero" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}> */}
            <HashLink smooth to="/#" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}>
              Home
            </HashLink>
            {/* </a> */}
          </li>
          <li>
          <HashLink smooth to="/#about" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}>
          About us
          </HashLink>
          </li>
          <li>
          <HashLink smooth to="/#projects" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}>
          Projects
          </HashLink>
          </li>
        </ul>

        {/* Logo (Hidden on Hero Section in Desktop View) */}
        {!isHeroVisible && (
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-[30px] font-extrabold font-raleway leading-[100%] tracking-0">
              LOGO
            </h1>
          </div>
        )}

        {/* Right Navigation */}
        <ul ref={rightNavRef} className="flex gap-12 items-center">
          <li>
          <HashLink smooth to="/#team" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}>
          Team
          </HashLink>
          </li>
          <li>
          <HashLink smooth to="/#services" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}>
          Services
          </HashLink>
          </li>
          <li>
          <HashLink smooth to="/#contact" className={`${isHeroVisible ? "hover:border-b-4 hover:border-green-600" : "hover:text-green-600"}`}>
          Contact us
          </HashLink>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`flex fixed right-0 left-0 top-0 p-6 lg:hidden flex-row justify-between items-center ${
          isHeroVisible
            ? "bg-transparent text-white"
            : "bg-white text-black shadow-xs"
        }`}
      >
        {/* Logo (Always Visible on Mobile) */}
        <div>
          <h1 className={`text-[17px] font-extrabold font-raleway`}>LOGO</h1>
        </div>
        <div>
          <IoMenu className="w-[24px] h-[26px]" onClick={handleMenuToggle} />
        </div>

        {isMenuOpen && <Menu onClose={handleMenuToggle} />}
      </div>
    </div>
  );
};

export default NavigationBar;
