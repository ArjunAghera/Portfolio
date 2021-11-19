function Video({ id, link, name }) {
  console.log(name);
  return (
    <div>
      <p className=" text-brandWhite-dark font-secondary text-xl md:text-2xl lg:text-3xl ml-4 sm:ml-8 md:ml-16 lg:ml-28 pt-16">
        {id}. {name}
      </p>
      <iframe
        loading="lazy"
        title={name}
        src={link}
        className=" sm:h-56 md:h-72 lg:h-96 sm:w-3/4 md:w-2/3 lg:w-2/4 mx-auto mt-10"
      ></iframe>
    </div>
  );
}

export default Video;
