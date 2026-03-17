import { useLoaderData } from "react-router-dom";

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
  } = blog;

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
              <div>
                {/* Tags */}
                <div className="flex flex-wrap py-6 gap-2">
                  <img
                    src={cover_image}
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

                {/* Related */}
                <div className="space-y-2 mt-4">
                  <h4 className="text-lg font-semibold">Related posts</h4>
                  <ul className="ml-4 space-y-1 list-disc">
                    <li>
                      <a href="#" className="hover:underline">
                        Nunc id magna mollis
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Duis molestie, neque eget pretium
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:underline">
                        Mauris nec urna volutpat
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Author Tab */}
            <input
              type="radio"
              name="my_tabs_3"
              className="tab"
              aria-label="Author"
            />
            <div className="tab-content bg-base-100 border-base-300 p-6">
              <h2 className="text-xl font-semibold">Author Info</h2>
              <p>This section will show author details.</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Blog;
