import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Experience({ id, company, title, period, description }) {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 200,
      delay: 80,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="  grid grid-flow-col">
      <div className=" mx-auto">
        <div className="mx-auto w-4 h-4 rounded-full bg-brandWhite-dark"></div>
        <div className="mx-auto h-52 w-0.5 bg-brandWhite-dark"></div>
      </div>
      <div data-aos="fade-left" className=" mt-2 mx-auto ml-8">
        <p className=" text-xl md:text-2xl lg:text-3xl font-light text-brandWhite-dark">
          {company}
        </p>
        <p className=" text-lg md:text-xl lg:text-2xl font-light text-brandWhite-dark">
          {title}
        </p>
        <p className=" text-md md:text-lg lg:text-xl italic font-light text-brandWhite-dark">
          {period}
        </p>
        <div className=" text-lg font-light text-brandWhite-superDark">
          {description.map((des, _i) => (
            <p key={_i}>{des}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
