import { Link } from "react-router-dom";

function UIUXDesigns() {
  return (
    <div className=" bg-gradient-to-tr from-brandBlue-gradient to-brandBlack-default h-screen pb-16">
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
        UI/UX Designs
      </h1>
      <p className="text-brandWhite-default font-thin text-lg md:text-xl lg:text-2xl text-center pt-16">
        Currently working on a UI/UX Design project.
      </p>
    </div>
  );
}

export default UIUXDesigns;
