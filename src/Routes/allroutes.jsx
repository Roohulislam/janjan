import AboutUs from "../components/AboutUs";
import Careers from "../components/Careers";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import QHSE from "../components/QHSE";
import Resources from "../components/Resources";
import ServicesDescrip from "../components/ServicesDescrip";
import Home from "../pages/Home";

export const allroutes = [
  { path: '/', element: <Home/> }, 
  { path: '/aboutus', element: <AboutUs/> }, 
  { path: '/servicesdescrip', element: <ServicesDescrip/> }, 
  { path: '/resources', element: <Resources/> }, 
  { path: '/project', element: <Projects/> }, 
  { path: '/qhse', element: <QHSE/> }, 
  { path: '/careers', element: <Careers/> }, 
  { path: '/contact', element: <Contact/> } 
];