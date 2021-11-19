import About from "../components/About";
import Contact from "../components/Contact";
import Experiences from "../components/Experiences";
import Landing from "../components/Landing";
import Projects from "../components/Projects";

function Home() {
  return (
    <div className=" cursor-default scrollbar-hide">
      <Landing />
      <About />
      <Projects />
      <Experiences />
      <Contact />
    </div>
  );
}

export default Home;
