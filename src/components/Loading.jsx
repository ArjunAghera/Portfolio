import ReactLoading from "react-loading";

function Loading({ skillLoader }) {
  return (
    <div
      className={` h-screen bg-gradient-to-tr from-brandBlue-gradient to-brandBlack-default flex justify-center items-center `}
    >
      <ReactLoading type={"bars"} color={"#100f10"} height={80} width={100} />
    </div>
  );
}

export default Loading;
