"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from '@/hooks/useAuth';
import {LogOut, Menu, User, X} from "lucide-react";



const Header = () => {

    const { isAuthenticated, logout, getUserId } = useAuth();
    const [divValue, setDivValue] = useState("hidden")


    return (
        <header className={"h-[80px] bg-[#1E1E1E] px-4 py-1 wrap-header text-[18px] max-xl:text-[14px] max-lg:text-[9px] font-bold"}>
            <div className={"flex justify-between items-center h-[100%]"}>
                <div className="flex justify-between items-center">
                    <Link className={"px-3 py-1 rounded-xl hover:bg-[#3D3D3D]"}  href="/"><Image src={"/ascension_logo.svg"} alt={"Logo Ascension"} width={50} height={50}/></Link>
                </div>
                <div className="flex justify-start items-center w-[60%] max-md:hidden">
                    <nav>
                        <ul className={"flex gap-4"}>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/world"><li className={"uppercase"}>The World</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/characters"><li className={"uppercase"}>The Characters</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/forum"><li className={"uppercase"}>The Forum</li></Link>
                        </ul>
                    </nav>
                </div>
                <div className="flex justify-end items-center h-[100%] w-[26%] max-md:hidden">
                    <ul className={"flex gap-4"}>
                        {isAuthenticated ? (
                            <>
                                <Link className={"px-2 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href={`/users/profile/${getUserId()}`}><User size={36} /></Link>
                                <li
                                    onClick={logout}
                                    className={"px-2 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 font-bold uppercase cursor-pointer"}
                                >
                                    <LogOut size={36}/>
                                </li>
                            </>
                        ) : (
                            <>
                                <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/login"><li className={"uppercase"}>Se connecter</li></Link>
                                <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 tracking-wider"} href="/register"><li className={"uppercase"}>S'inscrire</li></Link>
                            </>
                        )}
                    </ul>
                </div>
                <button type="button" className="inline-flex items-center md:hidden"
                        onClick={() => {
                            setDivValue("absolute")
                        }}>
                    <Menu size={42} />
                </button>
                <div className={`${divValue} max-w-[500px] max-md:w-[100%] bg-neutral-800 h-[100%] right-0 top-0 p-4 flex justify-start flex-col gap-12 z-10`}>
                    <div className={"flex justify-end"}>
                        <button type="button" className="inline-flex items-center md:hidden"
                                onClick={() => {
                                    setDivValue("hidden")
                                }}>
                            <X size={42} />
                        </button>
                    </div>
                    <ul className={"flex flex-col items-center justify-center text-[18px] gap-4"}>
                        <Link onClick={() => {
                            setDivValue("hidden")
                        }} className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/world"><li className={"uppercase"}>The World</li></Link>
                        <Link onClick={() => {
                            setDivValue("hidden")
                        }} className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/characters"><li className={"uppercase"}>The Characters</li></Link>
                        <Link onClick={() => {
                            setDivValue("hidden")
                        }} className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/forum"><li className={"uppercase"}>The Forum</li></Link>
                    </ul>
                    <ul className={"flex flex-col items-center justify-center text-[18px] gap-4"}>
                        {isAuthenticated ? (
                            <>
                                <Link onClick={() => {
                                    setDivValue("hidden")
                                }} className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] transition-all duration-300 tracking-wider"} href={`/users/profile/${getUserId()}`}><li className={"uppercase"}>My Profile</li></Link>
                                <li
                                    onClick={() => {
                                        logout();
                                        setDivValue("hidden")
                                    }}
                                    className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] transition-all duration-300 font-bold uppercase cursor-pointer"}
                                >
                                    Logout
                                </li>
                            </>
                        ) : (
                            <>
                                <Link onClick={() => {
                                    setDivValue("hidden")
                                }} className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/login"><li className={"uppercase"}>Login</li></Link>
                                <Link onClick={() => {
                                    setDivValue("hidden")
                                }} className={"py-1 w-full text-center rounded-xl bg-[#3D3D3D] text-[#DDC089] tracking-wider"} href="/register"><li className={"uppercase"}>Register</li></Link>
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
