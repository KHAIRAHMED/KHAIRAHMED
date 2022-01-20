import  React,{useContext} from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Footer from "./Components/Shared/Footer";
import "./App.css"
import Navbar from "./Components/Shared/Navbar";
import { ThemeContext } from "./Components/Shared/Context";
import Contact from "./Components/Contact/Contact";
import BlogsPage from "./Components/BlogsPage/BlogsPage";
import Project from "./Components/ProjectsPage/Project";
import AboutMe from "./Components/AboutMe/AboutMe";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  const theme =useContext(ThemeContext)
  const darkMode = theme.state.darkMode
  return (
    <div style={{backgroundColor : darkMode?"black":"gainsboro"}}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<BlogsPage />} />
        <Route path="projects" element={<Project />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="contact" element="" />
        <Route path='*' element={<NotFound />} />
      
      </Routes>
     <Contact />
      <Footer />
    </div>
  );
}

export default App;
