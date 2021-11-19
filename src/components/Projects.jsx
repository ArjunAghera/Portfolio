import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Project from "./Project";
import axios from "../axios";
import Loading from "./Loading";
import ReactLoading from "react-loading";

function Projects() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/project");
      setProject(request.data);
      setLoading(false);
      return request;
    };
    fetchData();
  }, []);
  return (
    <div className=" bg-gradient-to-b from-brandBlue-gradient to-brandBlack-default h-auto">
      <h1
        data-aos="fade-up"
        className=" text-brandWhite-default text-2xl md:text-4xl lg:text-5xl text-center pt-28 pointer-events-none"
      >
        Projects
      </h1>
      {loading ? (
        <div className={` h-screen flex justify-center items-center `}>
          <ReactLoading
            type={"bars"}
            color={"#100f10"}
            height={80}
            width={100}
          />
        </div>
      ) : (
        <>
          <div className="grid grid-flow-row-dense sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-8">
            {project.map((project, _i) => (
              <Project
                key={_i}
                id={project._id}
                name={project.projectName}
                image={project.projectImg}
                link={project.projectLink}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Projects;
