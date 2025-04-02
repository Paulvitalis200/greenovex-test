// import React, {useEffect, useRef} from "react";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";
import Hero from "../components/hero";
import ProjectsSection from "../components/Projects";
import Services from "../components/Services";
import TeamSection from "../components/Team";

const HomePage = () => {

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ProjectsSection />
      <TeamSection />
      
      <ContactUs />
      <Footer />
    </>
  );
};

export default HomePage;
