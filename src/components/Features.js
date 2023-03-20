import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";

const Features = () => {
  const features = [
    {
      Icon: BusinessCenterOutlinedIcon,
      title: "experience",
      text: "Our experience of 25 years of building and making achievements in the world of development",
    },
    {
      Icon: LocalOfferOutlinedIcon,
      title: "competitive price",
      text: "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest",
    },
    {
      Icon: UpdateOutlinedIcon,
      title: "on time",
      text: "We prioritize the quality of our work and finish it on time",
    },
    {
      Icon: VerifiedUserOutlinedIcon,
      title: "best materials",
      text: "The material determines the building itself so we recommend that you use the best & quality materials in its class.",
    },
  ];
  return (
    <section className="flex flex-col">
      <article className="flex flex-col">
        <div className="ta"></div>
        <h3 className="flex-1 capitalize text-lg font-semibold">
          what makes us different
        </h3>
        <p className="flex-1 text-sm text-gray-400 py-4 leading-7">
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </article>
      <ul className="grid grid-cols-2 py-5 gap-8">
        {features.map((feature, index) => (
          <li className="flex-1">
            <Feature key={index} {...{ ...feature }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const Feature = ({ Icon, title, text }) => {
  return (
    <article className="flex flex-col">
      <div className="relative flex mb-12">
        <span className="h-7 w-7 bg-cyan-600 absolute rounded-full animate-ping inline-flex top-1.5 left-1.5"></span>
        <div className="h-10 w-10  bg-cyan-800 font-extrabold text-white rounded-full flex items-center justify-center absolute ">
          <Icon style={{ fontSize: "20px" }} />
        </div>
      </div>
      <h4 className="text-md font-semibold py-2 capitalize text-gray-900">
        {title}
      </h4>
      <p className="text-sm text-gray-500 leading-6">{text}</p>
    </article>
  );
};

export default Features;
