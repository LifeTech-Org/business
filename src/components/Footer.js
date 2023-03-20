import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-black">
      <article className="">
        <h3 className="capitalize font-semibold text-md text-gray-200">
          general project
        </h3>
        <p className="text-sm text-gray-100 py-6">
          is a general contractor company based in Jakarta. More than 25 years
          of experience in building and carving out Indonesia's development.
        </p>
        <ContactsAvatars
          contacts={[
            { Avatar: GoogleIcon, href: "" },
            { Avatar: FacebookIcon, href: "" },
            { Avatar: LinkedInIcon, href: "" },
            { Avatar: TwitterIcon, href: "" },
          ]}
        />
      </article>
      <div className="flex-col mt-8">
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
      </div>
    </footer>
  );
};

const ContactsAvatars = ({ contacts }) => {
  return (
    <ul className="flex ">
      {Array.from(contacts).map(({ Avatar, href }, index) => (
        <li key={index} className="mr-2">
          <a href={href} className="inline">
            <div className=" bg-slate-800 w-8 h-8 rounded-full flex items-center justify-center">
              <Avatar className="text-gray-100" style={{ fontSize: "14px" }} />
            </div>
          </a>
        </li>
      ))}
      ;
    </ul>
  );
};

const FooterLinks = ({ title, links }) => {
  return (
    <div className="flex flex-col mb-4">
      <h4 className="capitalize font-semibold text-md text-gray-200">
        {title}
      </h4>
      <ul className="py-5">
        {Array.from(links).map(({ text, href }, index) => (
          <li key={index} className="mb-3">
            <a
              href={href}
              className="text-sm underline text-gray-100 py-5 capitalize"
            >
              {text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
