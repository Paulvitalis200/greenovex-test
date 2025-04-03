import React, { useState } from "react";
import { FaTools, FaSolarPanel } from "react-icons/fa";
import { PiEngineFill } from "react-icons/pi";
import { GiWaterRecycling } from "react-icons/gi";
import NavigationBar from "./NavigationBar";

const services = [
  {
    name: "Water Treatment",
    icon: <GiWaterRecycling />,
    description:
        `Water portability is among the causes of water scarcity in some parts of the world.
        Greenovex employs the leading technologies in water treatment and water purification to
        provide the highest possible water quality from your available sources. Our water treatment
        solutions are customized to your specific needs with processes such as
        Reverse Osmosis, water softening, disinfection, and filtration systems.`,
    image: "/static/images/borehole-2.webp",
  },
  {
    name: "Water Pumping",
    icon: <PiEngineFill />,
    description:
      `Africa’s major challenge that leads to low quality of life is water scarcity, especially in off-grid
      areas. Greenovex offers a wide range of customized water pumping solutions for water supply,
      irrigation, industrial applications, and domestic and municipal supply. The pumps can be
      powered by different sources of power depending on availability and cost-effectiveness, i.e.,
      solar, electricity, diesel, and even hand.`,
    image: "/static/images/borehole.webp",
  },
  {
    name: "Borehole Services",
    icon: <FaTools />,
    description:
      `To try to bridge the gaps that lead to water scarcity, Greenovex Solutions offers Geophysical
      and Hydro-geological surveys, Water well drilling, coring, and Geotechnical services (works,
      Consultation, project supervision, and contracting) that meet International Standards, using
      modern technology.`,
    image: "/static/images/borehole-install.webp",
  },
  {
    name: "Solar Power",
    icon: <FaSolarPanel />,
    description:
      `The continent is blessed with abundant solar energy, which provides a great opportunity to
      provide sustainable power. Our solar lighting systems, solar street lighting, power backup
      systems, and solar water heating systems provide this solution for domestic, community, and
      industrial applications.`,
    image: "/static/images/solar-service.webp",
    classes: ""
  },
];

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <section
      id="services"
      className="min-h-screen flex flex-col bg-[#16A718] text-white py-25 px-10 md:px-20 lg:px-27 md:py-22 font-raleway"
    >
      <div className="absolute top-0 right-0 left-0 w-full z-50">
        <NavigationBar />
      </div>
      <p className="uppercase text-sm md:text-[16px] font-medium font-raleway leading-[100%]">
        / SERVICES
      </p>
      <h2 className="text-lg md:text-[40px] font-semibold mt-8 mb-4 md:mt-14 md:mb-14 w-auto md:w-full tracking-0 leading-[100%]">
        We provide a broad range of Engineering services that ensure the success
        of your projects.
      </h2>

      {/* Services Tabs */}
      <div className="flex flex-row flex-nowrap items-center justify-between border border-white rounded-full p-1 mt-6 md:mt-3 w-auto md:w-auto">
        {services.map((service) => (
          <button
            key={service.name}
            className={`flex items-center justify-evenly gap-4 px-4 py-2 rounded-full transition-all text-[14px]  md:text-[20px] font-medium ${
              activeService.name === service.name
                ? "bg-white text-[#173C26]"
                : "text-white hover:bg-transparent"
            }`}
            onClick={() => setActiveService(service)}
          >
            {service.icon}{" "}
            <span
              className={`${
                activeService.name === service.name ? "inline" : "hidden"
              } md:inline`}
            >
              {service.name}
            </span>
          </button>
        ))}
      </div>

      {/* Service Details */}
      <div className="mt-8 md:flex md:items-center md:justify-between">
        {/* Service Images desktop */}
        <div className="hidden md:w-2/2 lg:w-1/2 md:grid grid-cols-2 gap-2 ">
          <img
            src={activeService.image}
            alt={activeService.name}
            className={`rounded-lg w-full ${activeService.classes}`}
          />
          <img
            src={activeService.image}
            alt={activeService.name}
            className="rounded-lg w-full md:hidden"
          />
        </div>

        {/* Service Text */}
        <div className="mt-5 md:mt-12 w-full md:w-1/2">
          <h3 className="text-[23px] md:text-[40px] mb-6 font-semibold leading-[100%] tracking-[0%]">
            {activeService.name}
          </h3>
          <p className="mt-2 text-md md:text-[20px] font-light break-words">
            {activeService.description}
          </p>
        </div>

        <div className="md:hidden md:w-1/2 grid md:grid-cols-2 gap-2 mt-8">
          <img
            src={activeService.image}
            alt={activeService.name}
            className={`rounded-lg w-full`}
          />
          {/* <img
            src={activeService.image}
            alt={activeService.name}
            className="rounded-lg w-full md:hidden"
          /> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
