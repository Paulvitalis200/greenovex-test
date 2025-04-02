import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProjectPage from "../pages/ProjectPage";
import AboutUs from "../components/AboutUs";
import TeamSection from "../components/Team";
import TeamMemberPage from "../components/TeamMemberPage";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Projects from "../components/Projects";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Projects /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/team", element: <TeamSection /> },
  { path: "/team/:membername", element: <TeamMemberPage /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <ContactUs /> },
  { path: "/", element: <ProjectPage /> },
  {path: "/projects/:projectName", element: <ProjectPage />},
]);

export default router;
