"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from '@/hooks/useAuth';


const Header = () => {

    const { isAuthenticated, logout } = useAuth();


    return (
        <header className={"h-[80px] bg-[#1E1E1E] px-4 py-1 wrap-header text-[18px] max-xl:text-[14px] max-lg:text-[9px] font-bold"}>
            <div className={"flex justify-between items-center h-[100%]"}>
                <div className="flex justify-between items-center">
                    <Link className={"px-3 py-1 rounded-xl hover:bg-[#3D3D3D]"}  href="/"><Image src={"/ascension_logo.svg"} alt={"Logo Ascension"} width={50} height={50}/></Link>
                </div>
                <div className="flex justify-start items-center w-[60%] max-md:hidden">
                    <nav>
                        <ul className={"flex gap-4"}>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href=""><li className={"uppercase"}>The Game</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/world"><li className={"uppercase"}>The World</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/characters"><li className={"uppercase"}>The Characters</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/forum"><li className={"uppercase"}>The Forum</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end items-center h-[100%] w-[26%] max-md:hidden">
                    <ul className={"flex gap-4"}>
                        {isAuthenticated ? (
                            <li
                                onClick={logout}
                                className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 font-bold uppercase cursor-pointer"}
                            >
                                Se déconnecter
                            </li>
                        ) : (
                            <>
                                <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/login"><li className={"uppercase"}>Se connecter</li></Link>
                                <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/register"><li className={"uppercase"}>S'inscrire</li></Link>
                            </>
                        )}
                    </ul>
                </div>
                <button type="button" className="inline-flex items-center md:hidden"
                        onClick={() => {}}>
                    {/* Menu icon */}
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="40"
                         height="40"
                         viewBox="0 0 24 24">
                        <path fill="#fff"
                              d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                    </svg>
                </button>
                <div className={"hidden max-w-[500px] max-md:w-[100%] bg-neutral-800 h-[100%] max-md:absolute right-0 top-0 p-4 max-md:flex justify-start flex-col gap-12 z-10"}>
                    <div className={"flex justify-end"}>
                        <button type="button" className="inline-flex items-center md:hidden"
                                onClick={() => {}}>
                            {/* Menu icon */}
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 width="40"
                                 height="40"
                                 viewBox="0 0 24 24">
                                <path fill="#fff"
                                      d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/>
                            </svg>
                        </button>
                    </div>
                    <ul className={"flex flex-col items-center justify-center text-[18px] gap-4"}>
                        <Link className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href=""><li className={"uppercase"}>The Game</li></Link>
                        <Link className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/world"><li className={"uppercase"}>The World</li></Link>
                        <Link className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href=""><li className={"uppercase"}>The Champions</li></Link>
                        <Link className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/forum"><li className={"uppercase"}>The Forum</li></Link>
                    </ul>
                    <ul className={"flex flex-col items-center justify-center text-[18px] gap-4"}>
                        {isAuthenticated ? (
                            <li
                                onClick={logout}
                                className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] transition-all duration-300 tracking-wider"}
                            >
                                Se déconnecter
                            </li>
                        ) : (
                            <>
                                <Link className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/login"><li className={"uppercase"}>Se connecter</li></Link>
                                <Link className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/register"><li className={"uppercase"}>S'inscrire</li></Link>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
