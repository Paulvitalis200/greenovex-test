import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import NavigationBar from "./NavigationBar";
import Modal from "react-modal";


gsap.registerPlugin(ScrollTrigger);

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  about: string;
  aboutFullText?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Davis Usenge",
    role: "Chief Executive Officer",
    image: "src/assets/davis.jpg",
    about: "Davis Usenge holds a Bachelor’s Degree in Environmental and Biosystems Engineering...",
    aboutFullText: `Davis Usenge holds a Bachelor’s Degree in Environmental and Biosystems Engineering
from the University of Nairobi and MSc in Project Planning and Management from
Kampala International University. With a strong background in biological wastewater
treatment, electro-mechanical systems, and renewable energy, Davis has been
instrumental in driving forward environmentally friendly technologies that create
lasting impact.
Davis has also contributed to large-scale infrastructure projects, including his work on a
World Bank-funded initiative in Uganda, on improving access to renewable energy and
solar powered irrigation, where he gained valuable experience in implementing
sustainable engineering solutions at an international level. His leadership at Greenovex
Solutions is driven by a passion for innovation, efficiency, and environmental
conservation. Under his guidance, the company continues to develop cutting-edge
solutions that address pressing environmental and industrial challenges. Through
Greenovex, He is committed to fostering sustainable development, improving access to
clean water, and promoting green energy solutions that benefit communities and
industries alike. His vision is to position Greenovex as a leader in sustainable
engineering, driving positive change in Kenya, East Africa and beyond.`
  },
  {
    id: 2,
    name: "Isaiah Ong’ong’a",
    role: "Director of technical operations",
    image: "src/assets/isaiah.jpg",
    about: `Isaiah Ong’ong’a is a renewable energy expert, entrepreneur, and researcher with a strong...`,
    aboutFullText: `Isaiah Ong’ong’a is a renewable energy expert, entrepreneur, and researcher with a strong
    passion for advancing solar energy adoption in Kenya and Africa at large. Holding a Master’s
    degree in Electrical Engineering (Renewable Energy) from Nanjing University of Aeronautics
    and Astronautics, China, he has extensive experience in solar PV systems, hybrid energy
    solutions, and energy access strategies. As the Founder &amp; CEO of Greenovex Solutions Limited,
    Isaiah leads the company’s vision to provide cutting-edge solar solutions, including standalone,
    hybrid, and grid-tied systems, empowering businesses and households with clean, reliable, and
    cost-effective energy. With a background in academia, he is deeply committed to capacity
    building, technical innovation, and policy advocacy in the renewable energy sector.
`
  },
  {
    id: 3,
    name: "Clarie Atieno Odhiambo",
    role: "Director of Partnerships and collaborations",
    image: "src/assets/claire.jpeg",
    about: "Claire is an academic and researcher at ANIE- African Network for internationalization...",
    aboutFullText: "Claire is an academic and researcher at ANIE- African Network for internationalization of Higher education- Moi University. Empowering Youths  in the community  on green energy solar lighting in community  health facilities  and schools in Kisumu  and Siaya  County.Founder and CEO FEMSE CBO  on Malaria Eradication from Source"
  },
  {
    id: 4,
    name: "George Odhiambo",
    role: "Director of Projects",
    image: "src/assets/profile.webp",
    about: "George Odhiambo is an experienced solar installer with over 20 years of expertise in the...",
    aboutFullText: `George Odhiambo is an experienced solar installer with over 20 years of expertise in the renewable energy sector. At Greenovex Solutions Limited, he plays a pivotal role in project management and implementation, ensuring seamless execution of solar installations from design to commissioning. George has successfully overseen numerous projects, helping clients transition to reliable and sustainable power solutions. As a key figure in the company, George leads the Project Management division, ensuring that all solar installations are delivered on time, within budget, and according to industry best practices. His leadership, combined with his technical expertise, ensures that every project meets the highest standards of efficiency and reliability.`
  },
];

const TeamSection: React.FC = () => {
  const teamRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate(); // Initialize useNavigate
  const [activeIndex, ] = useState<number | null>(null);

    const [isOpen, setIsOpen] = useState(false)
    const [currentSelection, setCurrentSelection] = useState<TeamMember | undefined>(undefined)

    const handleOpen = (id?: number) => {
      setIsOpen(!isOpen)
      if (id) {
        const selection = teamMembers.find(member => member.id === id)
        setCurrentSelection(selection)
      } else {
        setCurrentSelection(undefined)
      }
    }
    

    
  useEffect(() => {
    if (teamRef.current) {
      gsap.fromTo(
        teamRef.current.querySelectorAll(".team-card"),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    }
  }, []);

  return (
    <>
           {isOpen && 
    <Modal isOpen={isOpen}
        onRequestClose={() => handleOpen()}
         className="flex items-center justify-center flex-col font-raleway"
          overlayClassName="fixed inset-0 z-50 bg-[#00000033] bg-opacity-30"
        >
          
            <div className="flex flex-col bg-white h-[750px] md:min-h-[400px] md:w-[800px] rounded-sm items-center pt-5 pb-8 px-8  mt-6 ">
            <div className="flex justify-end w-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#D92D2D"
                className="size-8 cursor-pointer"
                onClick={() => handleOpen()}
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>  
            <img
              src={currentSelection?.image}
              alt={currentSelection?.name}
              className=" h-[200px] rounded-xs"
            />
                <p className="mt-4 mb-4 font-medium">{currentSelection?.name}</p>  
                <p className="mb-4 text-[#30BD32] font-medium">{currentSelection?.role}</p>  
                <p className="overflow-auto">{currentSelection?.aboutFullText}</p> 
            </div>  
           
        </Modal>}
    <section id="team" className="min-h-[70vh] p-10 py-20 md:p-16 lg:py-20 lg:px-24 gap-2 flex flex-col bg-[#30BD32]">
      <div className="absolute top-0 right-0 left-0 w-full z-50">
        <NavigationBar />
      </div>
      <h2 className="text-[14px] leading-[100%] tracking-[0%] font-medium font-raleway md:text-[16px] text-white">
        /TEAM
      </h2>
      <h3 className="hidden md:block text-[14px] mt-8 leading-[100%] tracking-[0%] font-semibold md:text-[40px] font-raleway text-white">
        Meet Our Team.
      </h3>
      <div
        ref={teamRef}
        className="grid grid-cols-2 gap-2.5 md:grid-cols-2 justify-between lg:grid-cols-4 md:mt-9"
      >
        {teamMembers.map((member, index) => (
          <div key={index} className="team-card mb-4 md:mb-0 md:px-4 md:py-4">
            <img
              src={member.image}
              alt={member.name}
              className="h-[206px] md:mt-4 w-full md:h-[400px] object-cover rounded-sm mb-4 md:mb-0"
            />
            <div className="mt-1 flex justify-between items-center">
              <div className="">
                <div className="flex flex-row">
                  <h3 className="font-semibold font-raleway md:mt-4 text-[16px] leading-[100%] tracking-[0%] text-white">
                    {member.name}
                  </h3>
                </div>

                <p className="text-white font-semibold md:mt-1 font-raleway text-[12px] md:text-[14px] leading-[100%] tracking-[0%] py-1.5">
                  {member.role}
                </p>
                {activeIndex === index && (
                  <p className="text-xs text-gray-600 mt-2">{member.about}</p>
                )}
                <p className="hidden md:block font-regular font-raleway md:mt-4  text-[16px] leading-[100%] tracking-[0%] text-white">
                  {member.about} 
                </p>
                <button className="bg-white text-[#30BD32] px-2 py-1 text-[14px] rounded-xs font-medium mt-2 cursor-pointer font-raleway px-3" onClick={() => handleOpen(member.id)}>Read More</button>
              </div>
              {/* <BsFillArrowUpRightCircleFill
                className="text-white bg-white rounded-full h-[24px] w-[24px] cursor-pointer transition-transform transform hover:scale-110 md:h-[40px] md:w-[40px] md:mr-8 mb-9 md:hidden"
                onClick={() =>
                  navigate(
                    `/team/${member.name.replace(/\s+/g, "").toLowerCase()}`
                  )
                }
              /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
      </>
  );
};

export default TeamSection;
