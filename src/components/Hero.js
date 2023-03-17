import React from "react";
const Hero = () => {
  const nav = [{ href: "", text: "" }];
  const stats = [
    { count: "300", title: "happy client" },
    { count: "900", title: "amazing projects" },
    { count: "20", title: "award winning" },
  ];
  return (
    <section>
      <React.Fragment>
        <dl>
          <dt>general</dt>
          <dd>project</dd>
        </dl>
        <nav>
          <ul>
            {nav.map(({ href, text }, index) => (
              <li>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
      </React.Fragment>
      <article>
        <h2>we provide achitectural design and construction</h2>
        <p>
          ​More than 100 building and housing projects that we have built. The
          building owner chose us over other contractors in Jakarta, because our
          work is different
        </p>
        <button>discover more</button>
      </article>
      <div>
        <dl>
          {stats.map(({ count, title }, index) => (
            <React.Fragment>
              <dt>
                {count}
                <span>+</span>
              </dt>
              <dd>{title}</dd>
            </React.Fragment>
          ))}
        </dl>
        <article>
          <dl>
            <dt>general</dt>
            <dd></dd>
            <dt>
              <span>25</span>years
            </dt>
            <dd>operated</dd>
          </dl>
          <p>
            As a trusted general project that has been operating for 25 years,
            our commitment is always to prioritize our client satisfaction
          </p>
        </article>
      </div>
    </section>
  );
};

export default Hero;
