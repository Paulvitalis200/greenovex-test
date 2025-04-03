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
          <img src="/static/images/Greenovex-white.svg" className="w-50 md:w-90"/>
        </div>
      ) : (
        // Hero (Big) Logo
        <div className="logo">
          <img src="/static/images/Greenovex-white.svg" className="w-50 md:w-90"/>
        </div>
      )}
    </>
  );
};

export default Logo;
