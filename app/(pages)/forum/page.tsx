import React from "react";
import Link from "next/link";

const Forum = () => {
    return (
        <div className={"wrap"}>
            <div className={"w-[100%] h-[100vw] bg-amber-300 mt-10"}>
                <div className={"h-[120px] bg-gray-700 flex items-center px-5 justify-between"}>
                    <h1 className={""}>Forum</h1>
                    <h2 className={""}>Ajouter un post</h2>
                </div>
                <div className={"bg-amber-700 h-[150px] w-[100%] mt-10"}>
                    <p>Titre du post</p>
                    <p>Par <Link href={"zdqdqz"}>Utilisateur</Link></p>
                    <p>Le 06/10/24 - à 08:00:53</p>
                </div>
            </div>
        </div>
    )
}

export default Forum;
