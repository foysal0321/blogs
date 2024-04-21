import BlogDetails from "@/components/home/blogDetails/BlogDetails";
import BlogTips from "@/components/home/blogtips/BlogTips";
import Header from "@/components/home/header/Header";

export default function Home() {
  return (
   <div>
    <Header />
    <BlogTips />
    <BlogDetails />
   </div>
  );
}
