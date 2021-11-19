import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Video from "../components/Video";
import axios from "../axios";
import Loading from "../components/Loading";

function VideoProjects() {
  const [project, setProject] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/vid");
      setProject(request.data);
      setLoading(false);
      return request;
    };
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className=" cursor-default bg-gradient-to-tr from-brandBlue-gradient to-brandBlack-default h-auto pb-16">
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
            Video Projects
          </h1>
          <div>
            {project.map((video, _i) => (
              <Video
                key={video._id}
                id={_i + 1}
                link={video.vidLink}
                name={video.vidName}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoProjects;
