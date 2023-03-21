import Dianne from "../assets/imgs/dianne.png";
const Team = () => {
  return (
    <section className="flex flex-col bg-gray-50 md:flex-row-reverse md:gap-4 lg:gap-14">
      <article className="my-3 md:flex-1">
        <div className="ta"></div>
        <h3 className="mt-1 capitalize text-lg font-semibold">
          meet and talk with
          <br />
          our best architecture
        </h3>
        <p className="text-sm text-gray-400 py-4 leading-7">
          All our teams are professional and competent in their fields and will
          help you realize your dream building with the excellent result.
        </p>
        <div>
          <button className="text-white text-sm px-6 py-3 bg-cyan-800">
            See all team
          </button>
          <button className="mx-8 text-sm text-black py-3 font-semibold">
            How it works
          </button>
        </div>
      </article>
      <div
        style={{
          backgroundImage: `url("../assets/imgs/achi.png")`,
        }}
        className="relative h-full w-full overflow-hidden p-7 md:flex-1"
      >
        {/* <img src={Archi} alt={"building"} className="w-full top-0 bottom-0" /> */}
        <article className="bg-black p-4">
          <img src={Dianne} alt={"dianne russell"} className="h-14 w-14" />
          <h4 className="text-sm font-semibold text-gray-200 capitalize py-2">
            dianne russell
          </h4>
          <p className="text-xs leading-6 text-gray-400">
            More than 20 years of experience in the field architecture and has
            worked on project up to 100+
          </p>
        </article>
      </div>
    </section>
  );
};

export default Team;
