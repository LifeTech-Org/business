import Industry from "../assets/imgs/industry.png";
import Commercial from "../assets/imgs/commercial.png";
import Residential from "../assets/imgs/residential.png";
import { useEffect, useState } from "react";
import { tns } from "tiny-slider";
import Navigate from "./Navigate";
const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const changeIndex = (e) => {
    console.log(e.index);
    setCurrentIndex(e.index);
  };
  useEffect(() => {
    const slider = tns({
      container: ".service-slider",
      items: 1,
      slideBy: 1,
      controls: false,
      nav: false,
      autoplayButtonOutput: false,
      autoplay: true,
      responsive: {
        640: {
          items: 2,
          gutter: 14,
        },
        1024: {
          items: 3,
          gutter: 14,
        },
      },
    });
    slider.events.on("indexChanged", changeIndex);

    return () => slider.events.off("indexChanged", changeIndex);
  }, []);
  const services = [
    {
      img: { src: Industry, alt: "industry" },
      title: "Industry",
      text: "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
    },
    {
      img: { src: Commercial, alt: "commercial" },
      title: "Commercial",
      text: "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
    },
    {
      img: { src: Residential, alt: "residential" },
      title: "Residential",
      text: "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments",
    },
  ];
  return (
    <section className="flex flex-col bg-gray-50">
      <article className="flex flex-col lg:flex-row">
        <div className="lg:flex-1">
          <div className="ta"></div>
          <h3 className="capitalize text-lg font-semibold">
            our excellent services
          </h3>
        </div>
        <p className="text-sm text-gray-400 py-4 leading-7   lg:flex-1">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </article>
      <ul className="service-slider ">
        {services.map((service, index) => (
          <li key={index} className="slider-item">
            <Service {...{ ...service }} />
          </li>
        ))}
      </ul>
      <Navigate items={services.length} current={currentIndex} />
    </section>
  );
};

const Service = ({ img: { src, alt }, title, text }) => {
  return (
    <article className="relative w-full py-4">
      <img src={src} alt={alt} className="w-full min-w-full h-auto" />
      <h4 className="text-md font-semibold pt-5 pb-2 capitalize text-gray-900">
        {title}
      </h4>
      <p className="text-sm text-gray-400 leading-7 ">{text}</p>
    </article>
  );
};

export default Services;
