import { useState } from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import Client1 from "../assets/imgs/client-1.png";
const Testimonies = () => {
  const [index, setIndex] = useState(0);
  const testimonies = [
    {
      author: { img: { src: Client1, alt: "client" }, name: "jacob molen" },
      content:
        "We like the final result this project, in extraordinary and also provides the best service to the client",
    },
  ];
  const {
    author: {
      img: { src, alt },
      name,
    },
    content,
  } = { ...testimonies[index] };
  return (
    <section className="flex flex-col bg-black">
      <div className="relative flex justify-center">
        <img src={src} alt={alt} className="w-full h-auto max-h-72 " />
        <article className="bg-white bottom-0 h-auto w-48 p-5 absolute">
          <div className="absolute -top-7 right-0 left-0 flex justify-center">
            <div className="h-12 w-12 rounded-full text-cyan-700 bg-white shadow-md flex items-center justify-center">
              <FormatQuoteIcon />
            </div>
          </div>
          <h4 className="capitalize text-sm font-semibold text-center mt-2">
            {name}
          </h4>
          <p className="text-xs text-gray-400 pt-1 leading-5">{content}</p>
        </article>
      </div>
      <article className="py-8">
        <h3 className="capitalize text-gray-100 text-lg font-semibold">
          What we have done <br /> what our Customers say
        </h3>
        <p className="text-sm text-gray-200 py-4 leading-7">
          We are to help you build a excellent build, with us nothing is
          impossible. See what we have done and what they have to say about our
          work perform.
        </p>
        <div className="flex justify-end">
          <button className="text-white">
            <NavigateBeforeIcon />
          </button>
          <button className="text-white h-10 w-10 bg-cyan-700 ml-6">
            <NavigateNextIcon />
          </button>
        </div>
      </article>
    </section>
  );
};

export default Testimonies;
