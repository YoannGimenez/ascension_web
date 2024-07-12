import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className={"h-[200px] bg-black mt-auto"}>
            <div className={"wrap-banner flex flex-col items-center h-[100%] justify-center gap-6"}>
                <div>
                    <Image src={"ascension_logo.svg"} alt={"Logo Ascension"} width={50} height={50}/>
                </div>
                <div>
                    <nav>
                        <ul className={"flex gap-4"}>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/"><li className={"uppercase"}>The Ascension</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href=""><li className={"uppercase"}>The Game</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href="/world"><li className={"uppercase"}>The World</li></Link>
                            <Link className={"px-4 py-1 rounded-xl hover:bg-[#3D3D3D] hover:text-[#DDC089] transition-all duration-300 text-[18px] font-bold tracking-wider"} href=""><li className={"uppercase"}>The Champions</li></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
