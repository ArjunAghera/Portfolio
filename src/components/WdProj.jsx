function WdProj({ id, webLink, gHubLink, name }) {
  return (
    <div>
      <p className=" text-brandWhite-dark font-secondary text-xl md:text-2xl lg:text-3xl ml-4 sm:ml-8 md:ml-16 lg:ml-28 pt-16">
        {/* {id}.*/} {name}
      </p>
      <embed src={webLink} className=" h-xl w-4/5 mx-auto mt-10" />
      <div className=" text-center w-full flex justify-around">
        <a
          href={webLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" border-2 border-brandBlue-defaultText hoverBtnAnim px-8 py-2 md:px-12 md:py-2 lg:px-16 lg:py-3 font-normal rounded-2xl text-md md:text-lg lg:text-xl text-brandWhite-default mt-4 md:mt-8 hover:scale-150"
        >
          Visit site
        </a>
        <a
          href={gHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className=" border-2 border-brandBlue-defaultText hoverBtnAnim px-4 py-2 md:px-6 md:py-2 lg:px-8 lg:py-3 font-normal rounded-2xl text-md md:text-lg lg:text-xl text-brandWhite-default mt-4 md:mt-8 hover:scale-150"
        >
          Visit GitHub repo
        </a>
      </div>
    </div>
  );
}

export default WdProj;
