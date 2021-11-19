import WdProj from "../components/WdProj";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "../components/Loading";

function WebDev() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/wdproject");
      setProject(request.data);
      setLoading(false);
      return request;
    };
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
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
            Web Development Projects
          </h1>
          {project
            .slice(0)
            .reverse()
            .map((proj, _i) => (
              <WdProj
                key={proj._i}
                id={proj._id}
                webLink={proj.projectLink}
                gHubLink={proj.projectGHLink}
                name={proj.projectName}
              />
            ))}
        </div>
      )}
    </>
  );
}

export default WebDev;
