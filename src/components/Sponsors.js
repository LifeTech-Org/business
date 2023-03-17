const Sponsors = () => {
  const sponsors = [
    { img: { src: "", alt: "" } },
    { img: { src: "", alt: "" } },
    { img: { src: "", alt: "" } },
    { img: { src: "", alt: "" } },
    { img: { src: "", alt: "" } },
  ];
  return (
    <section>
      <ul>
        {sponsors.map((sponsor, index) => (
          <li>
            <img {...{ ...sponsor }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Sponsors;
