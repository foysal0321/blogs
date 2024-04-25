import Blogs from "@/components/home/blogs/Blogs";
import LatestPost from "@/components/home/blogs/LatestPost";
import Container from "@/components/shared/Container";
import Image from "next/image";

export default async function page() {

    return (
        <div className="py-20">
          <Container>
            <Blogs />
          </Container>
        </div>
    )
}
