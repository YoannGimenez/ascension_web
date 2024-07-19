"use client"

import React, {useState, useEffect} from "react";
import Link from "next/link";
import SinglePostForumList from "@/components/Forum/SinglePostForumList";
import {useAuth} from "@/hooks/useAuth";

const Forum = () => {

    const { isAuthenticated } = useAuth();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/posts',{
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                console.error('Erreur lors de la récupération des posts:', error);
            }
        };

        fetchPosts();
    }, []);


    return (
        <div className={"wrap-forum"}>
            <div className={"w-[100%] h-[100%] bg-[#1E1E1E] my-8 rounded-t-[20px] pb-2"}>
                <div className={"h-[120px] bg-neutral-900 flex items-center px-5 justify-between border-[#DDC089] border-b-2 rounded-t-[20px] mb-[40px]"}>
                    <h1 className={"text-5xl"}>Forum</h1>
                    { isAuthenticated && <Link href={"/forum/posts/new-post"}>Ajouter un post</Link>}
                </div>
                {posts.map((post: any) => (
                    <SinglePostForumList post={post} key={post.id}/>
                ))}
            </div>
        </div>
    )
}

export default Forum;
