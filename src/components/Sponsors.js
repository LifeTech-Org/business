import Sponsor1 from "../assets/imgs/sponsor-1.png";
import Sponsor2 from "../assets/imgs/sponsor-2.png";

import Sponsor3 from "../assets/imgs/sponsor-3.png";
import Sponsor4 from "../assets/imgs/sponsor-4.png";
import Sponsor5 from "../assets/imgs/sponsor-5.png";

const Sponsors = () => {
  const sponsors = [
    { img: { src: Sponsor1, alt: "sponsor" } },
    { img: { src: Sponsor2, alt: "sponsor" } },
    { img: { src: Sponsor3, alt: "sponsor" } },
    { img: { src: Sponsor4, alt: "sponsor" } },
    { img: { src: Sponsor5, alt: "sponsor" } },
  ];
  return (
    <section>
      <ul className="grid grid-cols-3 gap-10">
        {sponsors.map(({ img: { src, alt } }, index) => (
          <li key={index} className="flex items-center justify-center">
            <img src={src} alt={alt} className="w-28 h-auto" />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sponsors;
