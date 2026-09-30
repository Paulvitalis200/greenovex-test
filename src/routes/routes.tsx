import { createBrowserRouter } from "react-router-dom";
import RevampedHome from "../pages/RevampedHome";
import RevampedProjectPage from "../pages/RevampedProjectPage";
import AboutUs from "../components/AboutUs";
import TeamSection from "../components/Team";
import TeamMemberPage from "../components/TeamMemberPage";
import Services from "../components/Services";
import ContactUs from "../components/ContactUs";
import Projects from "../components/Projects";

const router = createBrowserRouter([
  { path: "/", element: <RevampedHome /> },
  { path: "/projects", element: <Projects /> },
  { path: "/about", element: <AboutUs /> },
  { path: "/team", element: <TeamSection /> },
  { path: "/team/:membername", element: <TeamMemberPage /> },
  { path: "/services", element: <Services /> },
  { path: "/contact", element: <ContactUs /> },
  {path: "/projects/:projectName", element: <RevampedProjectPage />},
]);

export default router;
