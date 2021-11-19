import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AppDevProj from "../components/AppDevProj";
import axios from "../axios";
import ReactLoading from "react-loading";
import Loading from "../components/Loading";

function AppDev() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/adproject");
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
            App Development
          </h1>
          {project.map((app, _i) => (
            <AppDevProj
              key={app._id}
              id={_i + 1}
              name={app.adProjectName}
              description={app.adProjectDes}
              image={app.adProjectImg}
              link={app.adProjectLink}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default AppDev;
