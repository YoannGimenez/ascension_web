"use client"

import React, {useEffect, useState} from "react";

    const Post = ({ params }: { params: { id: string }}) => {

        const [post, setPost] = useState({
            title: "",
            content: ""
        });


        useEffect(() => {
            console.log(params)
            const fetchPost = async () => {
                try {
                    const response = await fetch(`http://localhost:4000/api/posts/${params.id}`,{
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                    })
                    const data = await response.json();
                    setPost(data.post);
                } catch (error) {
                    console.error('Erreur lors de la récupération des posts:', error);
                }
            };

            fetchPost();
        }, []);

        return (
            <div className={"wrap-forum"}>
                <div className={"w-[100%] h-[100%] bg-[#1E1E1E] my-8 rounded-t-[20px] pb-2"}>
                    <div className={"h-[120px] bg-neutral-900 flex items-center px-5 justify-between border-[#DDC089] border-b-2 rounded-t-[20px] mb-[40px]"}>
                        <h1 className={"text-3xl"}>{post.title}</h1>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.content }} className={"p-4 mx-4 mb-4"}>

                    </div>
                </div>
            </div>
        )
    }

    export default Post
