import placeHolderImage from "../assets/404.jpg";

const Content = ({ blog }) => {
  const {
    title,
    description,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
    published_timestamp,
    tags,
    cover_image,
  } = blog;
  return (
    <div>
      {/* Tags */}
      <div className="flex flex-wrap py-6 gap-2">
        <img
          src={cover_image || placeHolderImage}
          alt=""
          className="object-cover w-full h-64 rounded-t lg:rounded-l lg:rounded-t-none sm:h-96 lg:col-span-7"
        />

        {tags.map((tag) => (
          <a
            key={tag}
            href="#"
            className="px-3 py-1 rounded-sm hover:underline"
          >
            #{tag}
          </a>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default Content;
