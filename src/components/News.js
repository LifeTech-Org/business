const News = () => {
  const news = [];
  return news.map((_news, index) => (
    <NewsBox alt={""} date={{ day: "01", month: "Sep" }} />
  ));
};

export default News;

const NewsBox = ({
  src,
  alt,
  date: { day, month },
  title,
  text,
  href,
  href_text,
}) => {
  return (
    <div>
      <img src={src} alt={alt} />
      <article>
        <h4>{title}</h4>
        <p>
          {text}
          <a href={href}>{href_text}</a>
        </p>
      </article>
    </div>
  );
};
