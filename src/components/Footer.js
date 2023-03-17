const Footer = () => {
  return (
    <footer>
      <article>
        <h3>general project</h3>
        <p>
          is a general contractor company based in Jakarta. More than 25 years
          of experience in building and carving out Indonesia's development.
        </p>
        <ContactsAvatars contacts={[{}]} />
      </article>
      <FooterLinks
        title={"company"}
        links={[
          { text: "about", href: "" },
          { text: "how it works", href: "" },
          { text: "term", href: "" },
          { text: "privacy policy", href: "" },
        ]}
      />
      <FooterLinks
        title={"more"}
        links={[
          { text: "documentation", href: "" },
          { text: "license", href: "" },
        ]}
      />
    </footer>
  );
};

export default Footer;

const ContactsAvatars = ({ contacts }) => {
  <ul>
    {Array.from(contacts).map(({ Avatar, href }) => (
      <li>
        <a href={href}>
          <Avatar />
        </a>
      </li>
    ))}
    ;
  </ul>;
};

const FooterLinks = ({ title, links }) => {
  return (
    <>
      <h4>{title}</h4>
      <ul>
        {Array.from(links).map(({ text, href }, index) => (
          <li key={index}>
            <a href={href}>{text}</a>
          </li>
        ))}
      </ul>
    </>
  );
};
