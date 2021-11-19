import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Project({ id, name, image, link }) {
  // const PF = process.env.REACT_APP_PF;
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 30,
      delay: 80,
      disable: "mobile",
    });
  }, []);
  return (
    <div className=" m-4 mx-auto h-40 w-60 md:h-50 md:w-72 lg:h-60 lg:w-80">
      <Link to={link}>
        <div
          data-aos="fade-up"
          className=" relative mx-auto bg-gradient-to-br from-boxGray-light to-boxGray-dark items-center m-4 shadow-md rounded-2xl h-40 w-60 md:h-50 md:w-72 lg:h-60 lg:w-80 cursor-pointer hover-anim"
        >
          <img
            src={image}
            alt={name}
            className=" absolute top-6 left-14 sm:top-6 sm:left-16 md:top-6 md:left-20 lg:top-2 lg:left-12 h-2/3 lg:mt-10 object-contain"
          />
          <p className=" absolute bottom-0 text-brandWhite-dark text-center py-1 items-center mt-2 w-full bg-gradient-to-tr from-brandBlue-darkText to-brandBlue-defaultText rounded-2xl md:text-lg lg:text-xl">
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default Project;
