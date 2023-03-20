import React from "react";
import hero from "../assets/imgs/hero.png";
const Hero = () => {
  const nav = [
    { text: "home", href: "" },
    { text: "services", href: "" },
    { text: "find a team", href: "" },
    { text: "about us", href: "" },
    { text: "articles", href: "" },
    { text: "portfolio", href: "" },
    { text: "contact us", href: "" },
  ];
  const stats = [
    { count: "300", title: "happy client" },
    { count: "900", title: "amazing projects" },
    { count: "20", title: "award winning" },
  ];
  return (
    <section className="text-white px-6 sm:px-8 md:px-12 lg:px-16 xl:px-28 py-5 md:py-10 bg-black relative">
      <div className="flex h-16 items-center">
        <dl className="flex-1 text-sm font-bold capitalize text-gray-300">
          <dt>general</dt>
          <dd className="text-cyan-500">project</dd>
        </dl>
        <nav className="hidden">
          <ul className="flex">
            {nav.map(({ href, text }, index) => (
              <li>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <article className="flex flex-col">
        <h2 className="text-gray-100 text-4xl font-semibold py-6">
          We Provide Achitectural design and Construction
        </h2>
        <p className="text-gray-400 text-sm py-3 mr-12">
          ​More than 100 building and housing projects that we have built. The
          building owner chose us over other contractors in Jakarta, because our
          work is different
        </p>
        <button className="text-gray-100 text-sm px-6 py-3 w-fit bg-slate-800 my-4 font-semibold">
          Discover more
        </button>
      </article>
      <dl className="flex mt-4 mb-28">
        {stats.map(({ count, title }, index) => (
          <div key={index} className="flex-col flex-1">
            <dt className="text-3xl font-bold">
              <span className=" text-gray-200">{count}</span>
              <span className="text-cyan-400 ml-1">+</span>
            </dt>
            <dd className="capitalize text-xs text-gray-400 font-semibold w-14 ">
              {title}
            </dd>
          </div>
        ))}
      </dl>
      <article className="flex absolute left-0 right-0 bottom-0 bg-cyan-900 mt-4 py-4 px-5">
        <dl className="text-gray-200  font-semibold mr-4 flex flex-col justify-center">
          <dt className="text-xs">General</dt>
          <dd className="text-sm">Projects</dd>
        </dl>
        <dl className="text-gray-200  font-semibold mr-4 flex flex-col justify-center">
          <dt className="">
            <span className="text-2xl">25</span>
            <span className="text-xs ml-1">years</span>
          </dt>
          <dd className="text-sm">Operated</dd>
        </dl>
        <p className="flex-1 text-xs text-gray-200 font-semibold pl-2">
          As a trusted general project that has been operating for 25 years, our
          commitment is always to prioritize our client satisfaction
        </p>
      </article>
    </section>
  );
};

export default Hero;
