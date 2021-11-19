import { useState } from "react";

function Skill({ id, name, score, imageName }) {
  // const PF = process.env.REACT_APP_PF;
  const [inView, setInView] = useState(false);
  const view = () => {};
  return (
    <div className=" mx-auto bg-gradient-to-tr from-boxGray-light to-boxGray-dark p-5 items-center m-4 shadow-md rounded-3xl flex">
      <img src={imageName} alt="" className=" h-12 object-contain" />
      <div className=" w-28 h-3 ml-5 items-center mb-5 font-medium text-brandWhite-dark text-lg rounded-full">
        <h1>{name}</h1>
        {/* <div
          className=" bg-gradient-to-tr from-brandBlue-darkText to-brandBlue-default h-3 rounded-full transition-all"
          style={{
            width: `${score}%`,
          }}
        ></div> */}
      </div>
    </div>
  );
}

export default Skill;
