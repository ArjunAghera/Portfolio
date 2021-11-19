import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import axios from "../axios";

const { default: Experience } = require("./Experience");

function Experiences() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get("/experiecne");
      setExperience(request.data);
      return request;
    };
    fetchData();
  }, []);
  return (
    <div className=" bg-brandBlack-default h-auto pb-20">
      <h1
        data-aos="fade-up"
        className=" cursor-default text-brandWhite-default text-2xl md:text-4xl lg:text-5xl text-center pt-20 pointer-events-none"
      >
        Experience
      </h1>
      <div className=" mt-28 w-10/12 md:w-2/5 mx-auto">
        {experience.map((exp, _i) => (
          <Experience
            key={_i}
            id={exp._id}
            company={exp.experienceName}
            title={exp.expericenceRole}
            period={exp.experiencePeriod}
            description={exp.experienceDes}
          />
        ))}
      </div>
    </div>
  );
}

export default Experiences;
