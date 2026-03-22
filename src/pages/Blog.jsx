import { MdBookmarkAdd } from "react-icons/md";
import { useLoaderData } from "react-router-dom";
import Author from "../components/Author";
import Content from "../components/Content";
import { saveBlog } from "../utils";
const Blog = () => {
  const blog = useLoaderData();

  const {
    title,
    reading_time_minutes,
    comments_count,
    public_reactions_count,
    published_timestamp,
    tags,
    cover_image,
    profile_image,
  } = blog;

  const handleBookmark = (blog) => {
    // console.log(blog);
    saveBlog(blog);
  };

  return (
    <div>
      <div className="max-w-3xl px-6 py-16 mx-auto space-y-12">
        <article className="space-y-8 dark:text-gray-900">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
              {title}
            </h1>

            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-600">
              <div className="flex items-center md:space-x-2">
                <img
                  src="https://source.unsplash.com/75x75/?portrait"
                  alt=""
                  className="w-6 h-6 border rounded-full"
                />

                <p className="text-sm">
                  {reading_time_minutes} min read •{" "}
                  {new Date(published_timestamp).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>

              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                {comments_count} comments • {public_reactions_count} reactions
              </p>
            </div>
          </div>

          {/* Tabs */}
          <div className="tabs tabs-lift">
            {/* Content Tab */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Content"
              defaultChecked
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <Content blog={blog} />
            </div>

            {/* Author Tab */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Author"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <Author blog={blog} />
            </div>
            <div
              onClick={() => handleBookmark(blog)}
              className="bg-primary p-3 ml-5 rounded-full hover:bg-opacity-30 bg-opacity-20 cursor-pointer hover:scale-105 overflow-hidden"
            >
              <MdBookmarkAdd size={20} className="text-secondary" />
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
