import { Link } from "react-router-dom";
import placeHolderImage from "../assets/404.jpg";

const BlogCard = ({ blogData }) => {
  const { cover_image, title, published_timestamp, description, id } = blogData;

  console.log(blogData);
  return (
    
      <Link
        to={`/blog-data/${id}`}
        className="max-w-sm mx-auto group border-2 hover:scale-105 border-primary hover:border-secondary border-opacity-30 hover:no-underline focus:no-underline  rounded-lg  shadow hover:shadow-lg transition"
      >
        <img
          className="object-cover w-full rounded-t h-44"
          src={cover_image || placeHolderImage}
        />

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline">
            {title}
          </h3>
          <span className="text-xs text-gray-500">
            {new Date(published_timestamp).toLocaleTimeString()}
          </span>
          <p className="text-gray-600">{description}</p>
        </div>
      </Link>
    
  );
};

export default BlogCard;
