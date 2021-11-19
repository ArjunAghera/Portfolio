import logo from "../assets/logo.png";
import Typical from "react-typical";
import { Link } from "react-scroll";

function Landing() {
  return (
    <div className=" bg-gradient-to-b from-brandBlue-gradient to-brandBlack-default h-screen">
      <img
        src={logo}
        alt=""
        className=" h-72 object-contain absolute -top-20"
      />
      <p className=" cursor-default text-brandWhite-default font-sans text-2xl md:text-4xl lg:text-6xl mx-10 pt-96">
        Hey! I am Arjun Aghera
      </p>
      <h3 className=" cursor-default text-brandWhite-dark font-secondary text-xl md:text-2xl lg:text-4xl mx-10 pt-4 md:pt-8">
        I am a{" "}
        <Typical
          steps={[
            " Web Developer!",
            1500,
            " App Developer!",
            1500,
            " UI/UX Designer!",
            1500,
            " Graphic Designer!",
            1500,
            " Photographer!",
            1500,
          ]}
          loop={Infinity}
          wrapper="b"
          className=" font-normal bg-gradient-to-br from-brandBlue-darkText to-brandBlue-defaultText bg-clip-text text-transparent"
        />
      </h3>
      <Link to="contact" spy={true} smooth={true}>
        <button className=" bg-gradient-to-tr from-brandBlue-default to-brandBlue-dark px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 font-normal rounded-2xl mx-10 text-lg md:text-xl lg:text-2xl text-brandWhite-default mt-6 md:mt-12 hover:scale-150">
          Get In Touch!
        </button>
      </Link>
    </div>
  );
}

export default Landing;
