const Services = () => {
  const services = [
    {
      img: { src: "", alt: "" },
      title: "",
      text: "Industrial development is our main line of business. We do Factory Construction, Warehouse and others",
    },
    {
      img: { src: "", alt: "" },
      title: "",
      text: "Our experience building in the Commercial field includes Showrooms, Supermalls and Office Buildings",
    },
    {
      img: { src: "", alt: "" },
      title: "",
      text: "Residential development is the beginning that has shaped us to this day. Our development includes Houses & Apartments",
    },
  ];
  return (
    <section>
      <article>
        <h3>our excellent services</h3>
        <p>
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </article>
      <ul>
        {services.map((service, index) => (
          <li>
            <Service {...{ ...service }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const Service = ({ img: { src, alt }, title, text }) => {
  return (
    <article>
      <img src={src} alt={alt} />
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};

export default Services;
