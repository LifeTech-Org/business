import { useEffect, useState } from "react";
import Project1 from "../assets/imgs/project-1.png";
import Project2 from "../assets/imgs/project-2.png";
import Project3 from "../assets/imgs/project-3.png";
import Project4 from "../assets/imgs/project-4.png";
import { tns } from "tiny-slider";
import { ArrowRight } from "@mui/icons-material";
import Navigate from "./Navigate";
const Collections = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeIndex = (e) => {
    // setCurrentIndex(e.index);
    // console.log(e.index);
  };
  useEffect(() => {
    const slider = tns({
      container: ".collection-slider",
      items: 1,
      slideBy: 1,
      controls: false,
      nav: false,
      autoplayButtonOutput: false,
      autoplay: false,
    });
    slider.events.on("indexChanged", changeIndex);

    return () => slider.events.off("indexChanged", changeIndex);
  }, []);
  const collections = [
    {
      img: { src: Project1, alt: "project" },
      name: "telecom holding",
      status: "completed",
    },
    {
      img: { src: Project2, alt: "project" },
      name: "treasury tower",
      status: "ongoing",
    },
    {
      img: { src: Project3, alt: "project" },
      name: "city of fame",
      status: "completed",
    },
    {
      img: { src: Project4, alt: "project" },
      name: "hall of justice",
      status: "pending",
    },
  ];
  return (
    <section className=" ">
      <div className="ta"></div>
      <h3 className="capitalize text-lg font-semibold pt-1 pb-2">
        our collection
        <br />
        best project
      </h3>
      <ul className="my-5 collection-slider">
        {collections.map(({ img: { src, alt }, name, status }) => (
          <li className="">
            <div className="w-full relative">
              <img src={src} alt={alt} className="w-full h-auto max-h-64" />
              <div className="flex items-center absolute bottom-3 left-3 px-3 right-3 h-16 bg-white">
                <dl className="flex-1 h-10 flex flex-col justify-between">
                  <dt className="capitalize text-sm text-black font-semibold">
                    {name}
                  </dt>
                  <dd className="text-xs font-semibold capitalize text-gray-400">
                    {status}
                  </dd>
                </dl>
                <button className="h-10 w-10 text-white bg-cyan-700">
                  <ArrowRight />
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Navigate />
    </section>
  );
};

export default Collections;
