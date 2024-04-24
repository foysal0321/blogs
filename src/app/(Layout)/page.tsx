import BlogDetails from "@/components/home/blogDetails/BlogDetails";
import Blogs from "@/components/home/blogs/Blogs";
import BlogTips from "@/components/home/blogtips/BlogTips";
import Gallery from "@/components/home/gallery/Gallery";
import Header from "@/components/home/header/Header";
import PopularBlog from "@/components/home/mostBlogs/PopularBlog";

export default function Home() {
  return (
   <div>
    <Header />
    <BlogTips />
    <PopularBlog />
    <BlogDetails />
    <Blogs />
    <Gallery />
   </div>
  );
}
