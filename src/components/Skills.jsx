import Skill from "./Skill";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "../axios";
import Loading from "./Loading";
import ReactLoading from "react-loading";

function Skills() {
  const [skill, setSkill] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/skills");
      console.log(request);
      setSkill(request.data);
      setLoading(false);
      return request;
    };
    fetchData();
  }, []);
  return (
    <>
      <div data-aos="fade-up">
        <h1 className=" cursor-default text-brandWhite-default text-2xl md:text-4xl lg:text-5xl text-center pt-20 pointer-events-none">
          Skills
        </h1>
        {loading ? (
          <div className={` h-screen flex justify-center items-center `}>
            <p className=" text-center text-brandWhite-default font-bold text-lg md:text-xl lg:text-2xl">
              Fetching skills from API
            </p>
          </div>
        ) : (
          <div className="grid grid-flow-row-dense grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-8">
            {skill.map((skill, _i) => (
              <Skill
                key={_i}
                id={skill._id}
                name={skill.skillName}
                score={skill.skillPercent}
                imageName={skill.skillImg}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Skills;
