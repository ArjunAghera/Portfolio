import { useEffect, useState } from "react";
import axios from "../axios";
import { Link } from "react-router-dom";

function GraphicDesigns() {
  // const PF = process.env.REACT_APP_PF;
  const [project, setProject] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/gd");
      setProject(request.data);
      return request;
    };
    fetchData();
  }, []);
  return (
    <div className=" cursor-default bg-gradient-to-tr from-brandBlue-gradient to-brandBlack-default h-full pb-16">
      <div className=" w-20">
        <Link to="/">
          <img
            src="assets/backIcon.svg"
            alt=""
            className=" p-2 hidden object-contain md:inline"
          />
        </Link>
      </div>
      <h1 className="text-brandWhite-default text-2xl md:text-4xl lg:text-5xl text-center pt-16 pointer-events-none">
        Graphic Design
      </h1>
      <p className=" text-xl md:text-2xl lg:text-3xl font-light text-center text-brandWhite-dark pt-16 pb-10">
        Photo Manipulations
      </p>
      <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {project.map((gd) => (
          <img
            src={project.gdImg}
            alt=""
            className=" w-4/5 m-4 mx-auto object-contain rounded-lg shadow-xl "
          />
        ))}
      </div>
      {/* <p className=" text-xl md:text-2xl lg:text-3xl font-light text-center text-brandWhite-dark pt-16 pb-10">
        Event Posters
      </p>
      <div className=" grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {project.slice(4, project.length).map((gd) => (
          <img
            loading="lazy"
            src={project.gdImg}
            alt=""
            className=" w-4/5 m-4 mx-auto object-contain rounded-lg shadow-xl "
          />
        ))}
      </div> */}
    </div>
  );
}

export default GraphicDesigns;
