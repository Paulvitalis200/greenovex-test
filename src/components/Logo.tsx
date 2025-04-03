import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Logo = () => {
  const location = useLocation();
  const [showSmallLogo, setShowSmallLogo] = useState(false);

  useEffect(() => {
    const smallLogoPaths = [
      "/about",
      "/team",
      "/services",
      "/projects",
      "/contact",
    ];

    if (smallLogoPaths.includes(location.pathname)) {
      setShowSmallLogo(true);
    } else if (location.pathname === "/") {
      const handleScroll = () => {
        const heroSection = document.getElementById("hero");
        if (heroSection) {
          const heroBottom = heroSection.getBoundingClientRect().bottom;
          setShowSmallLogo(heroBottom <= 0);
        }
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Run once on mount

      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      setShowSmallLogo(false);
    }
  }, [location.pathname]);

  return (
    <>
      {showSmallLogo ? (
        // Small Logo
        <div className="flex flex-col align-bottom z-40">
          <h1 className="hidden md:flex font-raleway text-black text-left lg:text-center leading-[100%] tracking-0 text-[30px] lg:mt-1.5 font-extrabold">
            LOGO
          </h1>
        </div>
      ) : (
        // Hero (Big) Logo
        <div className="logo">
          {/* <h1 className="heading font-raleway text-white text-[40px] md:text-[50px] lg:text-[50px] font-extrabold leading-[100%] tracking-0 mb-6 md:mb-8">
            LOGO
          </h1> */}
          <img src="/static/images/greenovex-green.png" />
        </div>
      )}
    </>
  );
};

export default Logo;
