"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Image from "next/image";
import LatestPost from "./LatestPost";
import Container from "@/components/shared/Container";

const Blogs = () => {

    const [posts, setPosts]: any[] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();
    const baseUrl = 'https://blog.jrrecyclingsolutionsltd.com.bd'

    console.log(posts);

    // Function to get the URL of the featured image
    const fetchImage = async (mediaId: any) => {
        if (!mediaId) return '/path/to/default/image.png'; // Provide a default image path
        try {
            const result = await axios.get(`${baseUrl}/wp-json/wp/v2/media/${mediaId}`);
            return result.data.source_url;
        } catch (error) {
            console.error('Error fetching image:', error);
            return '/path/to/default/image.png'; // Fallback image path
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${baseUrl}/wp-json/wp/v2/posts`);

                const postData = await Promise.all(response.data.map(async (post: any) => {
                    const imageUrl = await fetchImage(post.featured_media);
                    return {
                        ...post,
                        imageUrl
                    };
                }));
                setPosts(postData);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch posts:', error);
                setError("Failed to load posts.");
                setIsLoading(false);
            }
        };

        fetchPosts();
    }, [baseUrl]);


    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container>
            <div className="flex flex-wrap p-5 gap-6">
                <div>
                    <div className="max-w-[760px] mx-auto grid md:grid-cols-2 grid-cols-1 gap-4">
                        {
                            posts.map((post: any) => (
                                <div className="max-w-[370px]" key={post.id}>
                                    <Image className="md:w-[370px] w-[350px]" src={post.imageUrl}
                                        alt={post.title.rendered} width={370} height={300}
                                    />
                                    <div className="text-center py-4 ">
                                        <p className="text-xs text-gray-600"> {post.date}</p>
                                        <h2 className="text-xl py-4 font-semibold">{post.title.rendered}</h2>
                                        <p className=" text-gray-700">More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot…</p>
                                        <button className="btn-outline btn-sm text-[#38B5F4] underline mt-6 font-semibold ">Read More</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <div className="join w-full py-4">
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
                        <input className="join-item btn btn-square" type="radio" name="options" aria-label="5" />
                    </div> <hr />
                </div>
                <div className="md:w-[400px] w-[350px] mx-auto">
                    <LatestPost />
                </div>
            </div>
        </Container>
    );
};

export default Blogs;


