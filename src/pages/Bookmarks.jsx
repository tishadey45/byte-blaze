import { useEffect,useState } from "react";
import { getBlogs } from "../utils";
import BlogCard from "../components/BlogCard";

const Bookmarks = () => {
  const[blogs, setBlogs]=useState([])
  useEffect(()=>{
    const storedBlogs=getBlogs()
    setBlogs(storedBlogs)
   }, [])
  return (
    <div className="grid justify-center items-center px-4 sm:px-8 py-8 lg:psx-12 grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {blogs.map((blog) => (
        <BlogCard blogData={blog} key={blog.id} />
      ))}
    </div>
  );
};

export default Bookmarks;
