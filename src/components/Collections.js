const Collections = () => {
  const collections = [{ src: "", alt: "", name: "", status: "" }];
  return (
    <section>
      <h3>our collection best project</h3>
      <ul>
        {collections.map(({ src, alt, name, status }) => (
          <div>
            <img src={src} alt={alt} />
            <div>
              <dl>
                <dt>{name}</dt>
                <dd>{status}</dd>
              </dl>
              <button>view</button>
            </div>
          </div>
        ))}
      </ul>
    </section>
  );
};

export default Collections;
