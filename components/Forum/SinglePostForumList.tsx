import React from "react";
import Image from "next/image";
import Link from "next/link";

const SinglePostForumList = ({ post } : {post:any}) => {

    const formatDate = (date:string) => {
        const formattedDate = new Date(date);
        return `Posted on ${formattedDate.toLocaleDateString()} at ${formattedDate.toLocaleTimeString()}`
    }

    return (
        <div className={"rounded-none md:rounded-[7px] bg-neutral-800 p-4 mx-4 mb-4 h-[100px] border-[#DDC089] border-2 flex justify-between"}>
            <div className={"border-r-2 pr-6 border-[#DDC089]"}>
                <Image src={"/ascension_logo.svg"} alt={"Logo Ascension"} width={50} height={50}/>
            </div>
            <div className={"w-[70%] text-2xl"}>
                <Link className={"hover:text-[#DDC089] hover:underline underline-offset-4"} href={`/forum/posts/${post.id}`}>{post.title}</Link>
            </div>
            <div className={"border-l-2 border-[#DDC089] w-[20%] px-6 flex flex-col justify-center gap-4"}>
                <p>Written by <Link className={"text-[#DDC089] hover:underline underline-offset-2"} href="">{post.author}</Link></p>
                <p className={"text-xs"}>{formatDate(post.createdAt)}</p>
            </div>
        </div>
    )

}

export default SinglePostForumList;
