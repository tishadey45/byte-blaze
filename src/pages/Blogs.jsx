import { useLoaderData, useNavigation } from "react-router-dom";
import BlogCard from "../components/BlogCard";
import Loader from "../components/Loader";

const Blogs = () => {
  const blogs = useLoaderData();
  const navigation=useNavigation();
  if(navigation.state==='loading')return<Loader/>
  console.log(blogs);

  // const [blog,setBlog]=useState([])
  // // console.log(blog[0].cover_image);
  // useEffect(() => {
  //   fetch("https://dev.to/api/articles?per_page=20&top=7")
  //   .then(res=>res.json())
  //   .then(data=>setBlog(data));

  // }, [])

  return (
    <section className="bg-gray-100 py-6 text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white rounded-lg shadow"
        >
          <img
            src={blogs[0]?.cover_image}
            alt=""
            className="object-cover w-full h-64 rounded-t lg:rounded-l lg:rounded-t-none sm:h-96 lg:col-span-7"
          />

          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline">
              {blogs[0]?.title}
            </h3>
            <span className="text-xs text-gray-500">
              {new Date(blogs[0]?.published_timestamp).toLocaleTimeString()}
            </span>
            <p className="text-gray-600">{blogs[0].description}</p>
          </div>
        </a>

        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
          {blogs.map((blog) => (
            <BlogCard blogData={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
