"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from '@/hooks/useAuth';


const Header = () => {

    const { isAuthenticated, logout } = useAuth();


    return (
        <header className={"h-[80px] bg-[#1E1E1E]"}>
            <div className={"wrap-banner flex justify-between items-center h-[100%]"}>
                <div className="flex justify-start items-center gap-32 px-4">
                    <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D]"}  href="/"><Image src={"ascension_logo.svg"} alt={"Logo Ascension"} width={50} height={50}/></Link>
                    <nav>
                        <ul className={"flex gap-4"}>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/"><li className={"uppercase"}>The Ascension</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href=""><li className={"uppercase"}>The Game</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/world"><li className={"uppercase"}>The World</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href=""><li className={"uppercase"}>The Champions</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/forum"><li className={"uppercase"}>The Forum</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-start items-center h-[100%] gap-32 px-4">
                    <ul className={"flex gap-4"}>
                        {isAuthenticated ? (

                            <li
                                onClick={logout}
                                className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider cursor-pointer uppercase"}
                            >
                                Se déconnecter
                            </li>
                        ) : (
                            <>
                                <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/login"><li className={"uppercase"}>Se connecter</li></Link>
                                <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/register"><li className={"uppercase"}>S'inscrire</li></Link>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
