import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 200,
      delay: 80,
    });
  }, []);
  return (
    <div id="contact" className=" bg-brandBlack-default h-full pb-10">
      <h1 className="text-brandWhite-default text-2xl md:text-4xl lg:text-5xl text-center pt-20">
        Contact
      </h1>
      <div className=" grid grid-flow-col">
        <div className=" w-2/4 mx-auto mt-28 hidden lg:inline relative">
          <a
            href="https://www.instagram.com/arjunagheraphotography/"
            target="_blank"
            rel="noreferrer"
            className=" z-50"
          >
            <img
              data-aos="fade-right"
              src="assets/phone.svg"
              alt=""
              className=" ml-10 h-2/3 object-contain z-50"
            />
          </a>
          <img
            src="assets/arrow.svg"
            alt=""
            className=" absolute right-8 -mt-3 z-0 h-1/6 object-contain "
          />
          <img
            src="assets/Tap here to visit.svg"
            alt=""
            className=" absolute right-8 mt-24 z-0 "
          />
        </div>
        <div className=" hidden lg:inline mx-auto w-0.5 h-3/4 text-brandWhite-dark mt-20 bg-barGray-veryLight"></div>
        <div>
          <form
            data-aos="fade-left"
            action=""
            className=" px-10 sm:px-20 md:px-40 lg:px-40 flex flex-col mx-auto"
          >
            <label
              htmlFor="name"
              className=" text-brandWhite-dark text-xl pt-20 pb-4  mt-4 align-text-bottom"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className=" bg-transparent text-brandWhite-dark outline-none border-b-2 border-brandWhite-superDark focus:border-brandBlue-darkText"
            />
            <label
              htmlFor="email"
              className=" text-brandWhite-dark text-xl pt-20 pb-4  mt-4 align-text-bottom"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className=" bg-transparent text-brandWhite-dark outline-none border-b-2 border-brandWhite-superDark focus:border-brandBlue-darkText"
            />
            <label
              htmlFor="message"
              className=" text-brandWhite-dark text-xl pt-20 pb-4  mt-4 align-text-bottom"
            >
              Message
            </label>
            <textarea
              type="text"
              id="message"
              className=" bg-transparent text-brandWhite-dark outline-none border-b-2 border-brandWhite-superDark focus:border-brandBlue-darkText"
            />
            <button
              type="submit"
              className="bg-gradient-to-tr from-brandBlue-default to-brandBlue-dark px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 font-normal rounded-2xl text-md md:text-lg lg:text-xl w-full text-brandWhite-default mt-6 md:mt-12 hover:scale-150"
            >
              Send Message!
            </button>
          </form>
        </div>
      </div>
      <div className=" pt-8 max-w-screen-md mx-auto flex justify-around">
        <a
          href="https://github.com/ArjunAghera"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="assets/github.png"
            alt=""
            className=" h-8 lg:h-10 object-contain"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/arjun-aghera-585525190/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="assets/linkedin.png"
            alt=""
            className=" h-8 lg:h-10 object-contain"
          />
        </a>
        <a href=" mailto: agheraarjun23@gmail.com">
          <img
            src="assets/email.png"
            alt=""
            className=" h-8 lg:h-10 object-contain"
          />
        </a>
      </div>
    </div>
  );
}

export default Contact;
