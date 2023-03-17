const Features = () => {
  const features = [
    {
      icon: "",
      title: "experience",
      text: "Our experience of 25 years of building and making achievements in the world of development",
    },
    {
      icon: "",
      title: "competitive price",
      text: "The prices we offer you are very competitive without reducing the quality of the company's work in the slightest",
    },
    {
      icon: "",
      title: "on time",
      text: "We prioritize the quality of our work and finish it on time",
    },
    {
      icon: "",
      title: "best materials",
      text: "The material determines the building itself so we recommend that you use the best & quality materials in its class.",
    },
  ];
  return (
    <section>
      <article>
        <h3>what makes us different</h3>
        <p>
          Check out our best service you can possibly orders in building your
          company and don't forget to ask via our email or our customer service
          if you are interested in using our services
        </p>
      </article>
      <ul>
        {features.map((feature, index) => (
          <li>
            <Feature key={index} {...{ ...feature }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

const Feature = ({ icon, title, text }) => {
  return (
    <article>
      {/* Icon goes here */}
      <h4>{title}</h4>
      <p>{text}</p>
    </article>
  );
};
