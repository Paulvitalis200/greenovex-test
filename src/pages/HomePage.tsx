
import Hero from "../components/hero";
import Pillars from "../components/Pillars";
import Philosophy from "../components/Philosophy";
import Archive from "../components/Archive";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <Hero />
      <Pillars />
      <Philosophy />
      <Archive />
      <Footer />
    </div>
  );
};

export default HomePage;
