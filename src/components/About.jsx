import Skills from "./Skills";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    Aos.init({
      duration: 600,
      offset: 40,
      delay: 80,
    });
  }, []);
  return (
    <div className=" bg-gradient-to-b from-brandBlack-default to-brandBlue-gradient h-full">
      <div data-aos="fade-up">
        <h1 className=" cursor-default text-brandWhite-default text-2xl md:text-4xl lg:text-5xl text-center pt-40">
          About me
        </h1>
        <p className=" text-brandWhite-superDark text-xs md:text-sm lg:text-base max-w-screen-sm pt-8 text-center mx-auto">
          Hi! I am an undergraduate student from Manipal University Jaipur. I
          love making Web-apps, Mobile-apps, Static websites, Designing UI/UX
          for the website or mobile app. In my free time, I do Photography and
          design some posters, and manipulate some photos in Photoshop.
          <br />
          <br />
          Currently, I am looking for a summer internship for two to three
          months so that I have prior knowledge and experience of the
          professional field I will be working in after my studies.
        </p>
      </div>
      <Skills />
    </div>
  );
}

export default About;
