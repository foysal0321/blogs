import BlogDetails from "@/components/home/blogDetails/BlogDetails";
import Blogs from "@/components/home/blogs/Blogs";
import BlogTips from "@/components/home/blogtips/BlogTips";
import Gallery from "@/components/home/gallery/Gallery";
import Header from "@/components/home/header/Header";

export default function Home() {
  return (
   <div>
    <Header />
    <BlogTips />
    <BlogDetails />
    <Blogs />
    <Gallery />
   </div>
  );
}
