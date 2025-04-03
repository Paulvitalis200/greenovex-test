import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import gsap from "gsap";
import NavigationBar from "../components/NavigationBar";


interface Project {
  id: number;
  title: string;
  image: string;
  image2?: string;
  location: string;
  image3?: string;
  description: string;
  classes?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "10KVA Off-grid Solar System in Matuu",
    image: "/static/images/solar-roof.webp",
    image2: "/static/images/10kva.webp",
    location: "Matuu, Machakos County",
    description:
      "This project involved the installation of a 10KVA off-grid solar system.",
    classes: ""
  },
  {
    id: 2,
    title: "2kW Off-Grid Solar System in Uganda",
    image: "/static/images/solar-battery.webp",
    image2: "/static/images/davis-solar.webp",
    location: "Uganda",
    description:
      "A 2kW off-grid solar system installed to provide sustainable energy.",
  },
  {
    id: 3,
    title: "Borehole Pump Maintenance, Kitui",
    image: "/static/images/borehole-install.webp",
    image2: "/static/images/borehole-install-2.webp",
    location: "Kitui",
    description:
      "Maintenance of a borehole pump to ensure continuous water supply."
  },
  {
    id: 4,
    title: "Borehole Solarization, Mandera",
    image: "/static/images/mandera.webp",
    location: "Mandera",
    description:
      "Borehole Solarization in Mandera.",
    classes: "lg:h-[500px]"
  },
];

const ProjectPage: React.FC = () => {
  const { projectName } = useParams();
  const navigate = useNavigate();
  const imageRef = useRef(null);
  const textRef = useRef(null);

  // Find the project based on the URL parameter

  const formatTitleForURL = (title: string): string =>
    title.trim().toLowerCase().replace(/\s+/g, "-");

  const project = projects.find(
    (p) => formatTitleForURL(p.title) === projectName
  );

  console.log("Searching for project:", projectName);
  console.log(
    "Formatted titles:",
    projects.map((p) => formatTitleForURL(p.title))
  );
  console.log("Found project:", project);

  // const project = projects.find(
  //   (p) => p.title.replace(/\s+/g, "-").toLowerCase() === projectName
  // );

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Our Projects`;
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.5 }
      );
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.5 }
      );
    } else {
      document.title = "Project Not Found | Our Projects";
    }
  }, [project]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h2 className="text-red-500 text-2xl font-semibold">
          Project not found
        </h2>
        <p className="text-gray-600 mt-2">
          The project you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate("/projects")}
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          Back to Projects
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-stretch justify-around flex-col bg-white h-screen py-20 md:px-8 xl:px-24 font-raleway">
      {/* Back Button */}
      <NavigationBar />
      <button
        onClick={() => navigate("/#projects")}
        className="flex absolute left-4.5 top-8 md:left-24 md:top-15 items-center my-6 py-8 hover:opacity-75 transition-opacity cursor-pointer rounded-2xl p-2"
      >
        <FiArrowLeft className="text-black text-xl" />
        <span className="text-black font-semibold ml-2">Back</span>
      </button>

      {/* Project Title & Location */}
      <div className="flex flex-col justify-between mt-8 gap-4">
        <h2
          ref={textRef}
          className="text-center text-[18px] md:text-[30px] leading-[100%] tracking-[0%] font-raleway font-semibold"
        >
          {project.title}
        </h2>
        <p className="text-center font-medium text-[14px] md:text-[20px] leading-[100%] tracking-[0%] font-raleway text-black">
          {project.location}
        </p>
      </div>

      {/* Project Image */}
      <div className="grid grid-cols-2 md:grid-cols-3 justify-center">
        <div className="flex justify-between my-6">
          <img
            ref={imageRef}
            src={project.image}
            alt={`Project: ${project.title}`}
            className={`rounded-lg object-cover ml-10 w-[80%] md:w-[60%] lg:w-[400px] lg:h-[300px] ${project.classes}`}
          />
        </div>
        {project.image2 && 
        <div className="flex justify-center my-6">
          <img
            ref={imageRef}
            src={project.image2}
            alt={`Project: ${project.title}`}
            className="rounded-lg object-cover object-center w-[80%] md:w-[60%] lg:w-[300px]"
          />
        </div>
        }
        {project?.image3 &&
        <div className="flex justify-center my-6 ml-6">
          <img
            ref={imageRef}
            src={project.image3}
            alt={`Project: ${project.title}`}
            className={`rounded-lg object-cover object-center w-[80%] md:w-[60%] lg:w-[400px] ${project.classes}`}
          />
        </div>
        }
      </div>

      {/* Project Description */}
      <p className="text-left ml-10 mr-8 font-raleway text-[16px] lg:text-[20px] lg:leading-[30px] font-medium  leading-[100%]">
        {project.description}
      </p>
    </div>
  );
};

export default ProjectPage;
