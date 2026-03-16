import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const blog=useLoaderData()
  console.log(blog);

  // const [blog,setBlog]=useState([])
  // // console.log(blog[0].cover_image);
  // useEffect(() => {
  //   fetch("https://dev.to/api/articles?per_page=20&top=7")
  //   .then(res=>res.json())
  //   .then(data=>setBlog(data));
  
  // }, [])
  


  return (
    <section className="bg-gray-100 text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white rounded-lg shadow"
        >
          <img
            src={blog[0]?.cover_image}
            alt=""
            className="object-cover w-full h-64 rounded-t lg:rounded-l lg:rounded-t-none sm:h-96 lg:col-span-7"
          />

          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline">
             {blog[0]?.title}
            </h3>
            <span className="text-xs text-gray-500">{new Date (blog[0]?.published_timestamp).toLocaleTimeString()}</span>
            <p className="text-gray-600">
              {blog[0].description}
            </p>
          </div>
        </a>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href="#"
            className="max-w-sm mx-auto group bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              className="object-cover w-full rounded-t h-44"
              src="https://source.unsplash.com/random/480x360?1"
            />

            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-500">January 21, 2021</span>
              <p className="text-gray-600">
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="max-w-sm mx-auto group bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              className="object-cover w-full rounded-t h-44"
              src="https://source.unsplash.com/random/480x360?2"
            />

            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-500">January 22, 2021</span>
              <p className="text-gray-600">
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur.
              </p>
            </div>
          </a>

          <a
            href="#"
            className="max-w-sm mx-auto group bg-white rounded-lg shadow hover:shadow-lg transition"
          >
            <img
              className="object-cover w-full rounded-t h-44"
              src="https://source.unsplash.com/random/480x360?3"
            />

            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold group-hover:underline">
                In usu laoreet repudiare legendos
              </h3>
              <span className="text-xs text-gray-500">January 23, 2021</span>
              <p className="text-gray-600">
                Mei ex aliquid eleifend forensibus, quo ad dicta apeirian
                neglegentur.
              </p>
            </div>
          </a>
        </div>

        <div className="flex justify-center">
          <button className="px-6 py-3 text-sm rounded-md bg-indigo-600 text-white hover:bg-indigo-700">
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
