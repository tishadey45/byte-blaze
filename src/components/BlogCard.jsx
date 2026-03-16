import { Link } from "react-router-dom";

const BlogCard = ({ blogData }) => {
  console.log(blogData);
  return (
    <div className="border border-b-fuchsia-700">
      <Link
        to="/"
        className="max-w-sm mx-auto group bg-white rounded-lg  shadow hover:shadow-lg transition"
      >
        <img
          className="object-cover w-full rounded-t h-44"
          src={blogData?.cover_image}
        />

        <div className="p-6 space-y-2">
          <h3 className="text-2xl font-semibold group-hover:underline">
            {blogData?.title}
          </h3>
          <span className="text-xs text-gray-500">
            {new Date(blogData?.published_timestamp).toLocaleTimeString()}
          </span>
          <p className="text-gray-600">{blogData?.description}</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogCard;
