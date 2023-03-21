import story from "../assets/imgs/story.png";
const Story = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 lg:gap-14">
      <article className="">
        <div className="ta"></div>
        <h2 className="flex-1 capitalize text-lg font-bold">
          our story
          <br />
          who we are
        </h2>
        <p className="flex-1 text-sm text-gray-400 py-4 leading-7">
          Established in 1992, PT. Wahana Cipta operates as a General
          Contracting company with a footprint that we have planted throughout
          Indonesia. Initially, we focused on construction in the field of
          residential housing development in Jakarta. As the company grows, now
          we are present as a reliable...
        </p>
        <button className="text-white text-sm px-6 py-3 bg-cyan-800">
          See more
        </button>
      </article>
      <div className="hidden lg:inline">
        <img src={story} alt={""} />
      </div>
    </section>
  );
};

export default Story;
