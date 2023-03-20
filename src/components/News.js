import News1 from "../assets/imgs/news-1.png";
import News2 from "../assets/imgs/news-2.png";
import News3 from "../assets/imgs/news-3.png";
const News = () => {
  const news = [
    {
      img: { src: News1, alt: "news" },
      date: { day: "01", month: "sep" },
      title: "Elements of Content in Epoxy Paint",
      text: "Epoxy paint and epoxy floor contractor. Have you heard the two terms? And what does that have to do with the construction of existing buildings? Epoxy itself is included in the type of resin",
    },
    {
      img: { src: News2, alt: "news" },
      date: { day: "23", month: "aug" },
      title: "5 Right Steps in Warehouse Planning and Construction",
      text: "Planning the construction of a warehouse for both industrial, personal and other goods storage must be done carefully. When the planning is done properly, the construction is",
    },
    {
      img: { src: News3, alt: "news" },
      date: { day: "31", month: "jan" },
      title: "The Right Solution to Build a Sturdy Type 45 House",
      text: "Having a solid home is certainly everyone's dream. How not, the house is a place where the residents can rest and take shelter from the bad weather",
    },
  ];
  return (
    <section className="bg-gray-50">
      <div className="ta"></div>
      <h3 className="capitalize text-lg font-semibold pt-2 pb-3">
        News & Update
      </h3>
      <ul className="flex flex-col relative">
        {news.map((_news, index) => (
          <li key={index} className="flex-1 my-5 relative">
            <NewsBox {...{ ..._news }} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default News;

const NewsBox = ({
  img: { src, alt },
  date: { day, month },
  title,
  text,
  href,
  href_text,
}) => {
  return (
    <div className="flex flex-col">
      <img src={src} alt={alt} />
      <article>
        <h4 className="text-md font-semibold py-2 capitalize text-gray-900">
          {title}
        </h4>
        <p className="text-sm text-gray-400 leading-7">
          {text}
          <a href={href}>{href_text}</a>
        </p>
      </article>
    </div>
  );
};
