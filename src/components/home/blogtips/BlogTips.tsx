import Slider from "./Slider";
import Container from "@/components/shared/Container";


export default async function BlogTips() {
    return (
        <div className="py-12">
           <Container>
             <Slider />
           </Container>
           
        </div>
    )
}





// "use client"

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import Image from 'next/image';

// const BlogTips = () => {
//     const [posts, setPosts] = useState([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const baseUrl = 'https://blog.jrrecyclingsolutionsltd.com.bd'


//     const fetchImage = async (mediaId: any) => {
//         if (!mediaId) return '/path/to/default/image.png'; // Provide a default image path
//         try {
//             const result = await axios.get(`${baseUrl}/wp-json/wp/v2/media/${mediaId}`);
//             return result.data.source_url;
//         } catch (error) {
//             console.error('Error fetching image:', error);
//             return '/path/to/default/image.png'; // Fallback image path
//         }
//     };

//     useEffect(() => {
//         const fetchPosts = async () => {
//             try {
//                 const response = await axios.get(`${baseUrl}/wp-json/wp/v2/posts`);
//                 const postData = await Promise.all(response.data.map(async (post: any) => {
//                     const imageUrl = await fetchImage(post.featured_media);
//                     return {
//                         ...post,
//                         imageUrl
//                     };
//                 }));
//                 setPosts(postData);
//                 setIsLoading(false);
//             } catch (error) {
//                 console.error('Failed to fetch posts:', error);
//                 setError('Failed to load posts.');
//                 setIsLoading(false);
//             }
//         };

//         fetchPosts();
//     }, [baseUrl]);

//     if (isLoading) return <p>Loading...</p>;
//     if (error) return <p>Error: {error}</p>;

//     return (
//         <div>
//             <h1>Blog Posts</h1>
//             {posts.map((post: any) => (
//                 <div key={post.id}>
//                     <h2>{post.title.rendered}</h2>
//                     {/* {post.imageUrl && (
//                         <Image src={post.imageUrl} width={600} height={500} alt={post.title.rendered} style={{ width: '100%', height: 'auto' }} />
//                     )}
//                     <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} /> */}
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default BlogTips;