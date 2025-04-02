import React, { useRef, useEffect } from "react";
import background from "../assets/hero.webp";
import { FaArrowRightLong } from "react-icons/fa6";
import NavigationBar from "../components/NavigationBar";
import Logo from "../components/Logo";
import CheckCircle from "../components/CheckCircle";
import gsap from "gsap";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementsRef.current,
        {
          opacity: 0,
          y: 50,
          ease: "power4.out",
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
          stagger: 0.3,
          delay: 0.5,
        }
      );
    }, elementsRef);

    return () => ctx.revert();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen flex items-center justify-center bg-gray-100 py-20 bg-center md:bg-cover md:bg-top z-10"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
      {/* Navigation Bar */}
      <div className="absolute top-0 right-0 left-0 w-full z-50">
        <NavigationBar />
      </div>
      {/* Hero Content */}
      <div
        id="hero"
        className="relative flex flex-col items-center text-center text-white z-10"
      >
        <div
          ref={(el) => {
            if (el) elementsRef.current[0] = el;
          }}
        >
          <Logo />
        </div>
        <h1
          ref={(el) => {
            if (el) elementsRef.current[1] = el;
          }}
          className="text-[30px] md:text-[50px] leading-tight tracking-wide font-raleway font-bold px-4 py-2 md:px-0 md:py-0 lg:leading-[80px] md:max-w-3xl mb-8 md:mb-1"
        >
          Engineering a Sustainable Future
        </h1>
        <p
          ref={(el) => {
            if (el) elementsRef.current[2] = el;
          }}
          className="text-[16px] md:text-2xl font-raleway font-medium mt-4 mb-[20px] lg:text-[20px] lg:leading-6 max-w-[317px] md:min-w-[661px]"
        >
          Discover how our innovative solutions are transforming industries and
          creating a more sustainable world.
        </p>

        {/* Call to Action */}
        <div
          ref={(el) => {
            if (el) elementsRef.current[3] = el;
          }}
        >
    
            <button className="bg-[#30BD32] hover:bg-green-600 text-white font-medium rounded-md px-6 py-2 mt-8 md:mt-4 flex items-center gap-2" onClick={scrollToAbout}>
              <span className="text-lg font-raleway">Get Started</span>
              <FaArrowRightLong className="text-white text-xl" />
            </button>
          
        </div>

        {/* Features List */}
        {/* <div
          ref={(el) => {
            if (el) elementsRef.current[4] = el;
          }}
          className="flex flex-col lg:flex-row flex-wrap justify-center gap-6 mt-14"
        >
          {["Engineering", "Solar Power", "Maintenance"].map((item, index) => (
            <div
              key={item}
              ref={(el) => {
                if (el) elementsRef.current[5 + index] = el;
              }}
              className="flex items-center gap-2"
            >
              <CheckCircle />
              <span className="text-lg font-raleway font-medium">{item}</span>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
