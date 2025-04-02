import React, { useCallback, useEffect, } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HiArrowLeftCircle, HiArrowRightCircle } from "react-icons/hi2";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import NavigationBar from "./NavigationBar";
import { Link } from "react-router-dom";


const projects = [
  {
    id: 1,
    title: "10KVA Off-grid Solar System in Matuu",
    image: "/src/assets/solar-roof.jpg",
  },
  {
    id: 2,
    title: "2kW Off-Grid Solar System in Uganda",
    image: "/src/assets/solar-battery.jpeg",
  },
  {
    id: 3,
    title: "Borehole Pump Maintenance, Kitui",
    image: "src/assets/borehole-install.png",
  },
  {
    id: 4,
    title: "Borehole Solarization, Mandera",
    image: "src/assets/mandera.png",
  },
  // {
  //   id: 5,
  //   title: "Wind & Solar Hybrid System, Eldoret",
  //   image: "src/assets/solar.webp",
  // },
];

const Projects: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 3000000, stopOnInteraction: false })]
  );

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {});
  }, [emblaApi]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section id="projects" className="min-h-[70vh] py-20 px-10 md:px-16 lg:px-24 font-raleway">
      <div className="absolute top-0 right-0 left-0 w-full z-50">
        <NavigationBar />
      </div>
      <p className="uppercase text-[16px] font-medium mb-4">/ PROJECTS</p>
      <div className="flex flex-row justify-between items-center md:mt-10">
        <h2 className="text-[18px] md:text-[40px] max-w-[633px] font-semibold font-raleway md:text-left mb-6 md:mb-12">
          From Ideation to Implementation: Our Proven track record
        </h2>
        <div className="hidden md:flex gap-2">
          <button onClick={scrollPrev}>
            <HiArrowLeftCircle className="text-[#30BD32] text-[57px]" />
          </button>
          <button onClick={scrollNext}>
            <HiArrowRightCircle className="text-[#30BD32] text-[57px]" />
          </button>
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden md:block" ref={emblaRef}>
          <div className="hidden md:flex">
            {projects.map((project) => (
              <div
                key={project.id}
                className="flex-none px-2 w-full sm:w-1/2 md:w-1/3"
              >
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <Link
                      to={`/projects/${project.title
                        .replace(/\s+/g, "-")
                        .toLowerCase()}`}
                    >
                      <button className="mt-3 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition cursor-pointer">
                        Read more
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Grid Layout for Mobile */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {projects.map((project) => (
            <div key={project.id} className="rounded-md overflow-hidden shadow-sm">
              <img
                src={project.image}
                alt={project.title}
                className="w-[160px] h-[107px] object-cover"
              />
              <div className="p-2 flex flex-row justify-between gap-2.5">
                <div className="">
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                </div>
                <Link
                  to={`/projects/${project.title
                    .replace(/\s+/g, "-")
                    .toLowerCase()}`}
                >
                  <button className="">
                    <BsArrowUpRightCircleFill className="text-[#30BD32] w-[24px] h-[24px]" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
