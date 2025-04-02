import { useParams, useNavigate } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const teamMembers = [
  {
    name: "Davis Usenge",
    role: "Co-Founder, Engineer",
    image: "../src/assets/profile.webp",
    about:
      "David Usenge is a seasoned engineer with years of experience helping new team members and all.",
  },
  {
    name: "Jane Doe",
    role: "Designer",
    image: "src/assets/profile.webp",
    about:
      "Jane Doe is a creative designer with a passion for modern aesthetics.",
  },
];

const TeamMemberPage: React.FC = () => {
  const { membername } = useParams(); // Get the name from the URL
  const navigate = useNavigate();

  // Find the team member based on the URL
  const member = teamMembers.find(
    (m) => m.name.replace(/\s+/g, "").toLowerCase() === membername
  );

  if (!member) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h2 className="text-xl font-semibold">Team Member Not Found</h2>
        <button
          onClick={() => navigate("/team")}
          className="mt-4 px-4 py-2 text-white bg-[#30BD32] rounded-md hover:bg-[#28a428] transition"
        >
          Back to Team
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center">
      <BsArrowLeft
        className="absolute top-6 left-6 text-2xl cursor-pointer text-[#30BD32] hover:text-[#28a428] transition"
        onClick={() => navigate("/team")}
      />
      <img
        src={member.image}
        alt={member.name}
        className="w-48 h-48 rounded-lg object-cover shadow-lg"
      />
      <h1 className="mt-4 text-3xl font-bold">{member.name}</h1>
      <h2 className="text-lg text-[#30BD32] font-semibold">{member.role}</h2>
      <p className="mt-4 max-w-lg text-gray-600">{member.about}</p>
    </div>
  );
};

export default TeamMemberPage;
