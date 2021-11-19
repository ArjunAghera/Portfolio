function AppDevProj({ id, name, description, image, link }) {
  // const PF = process.env.REACT_APP_PF;
  return (
    <div>
      <p className=" text-brandWhite-dark font-secondary text-xl md:text-2xl lg:text-3xl ml-4 sm:ml-8 md:ml-16 lg:ml-28 pt-16 pointer-events-none">
        {id}. {name}
      </p>
      <div className="grid  md:grid-flow-col mx-auto max-w-screen-xl pt-16">
        <img
          src={image}
          alt={name}
          className=" mx-auto h-56 md:h-72 lg:h-96 object-contain"
        />
        <p className=" mx-auto pt-4 md:pt-0 text-center w-5/6  md:w-full md:pl-20 text-lg md:text-xl lg:text-2xl font-thin md:text-left text-brandWhite-superDark pointer-events-none">
          {description} To check the functioning of this app{" "}
          <a
            href={link}
            className=" text-brandBlue-darkText hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            click here.
          </a>
        </p>
      </div>
    </div>
  );
}

export default AppDevProj;
