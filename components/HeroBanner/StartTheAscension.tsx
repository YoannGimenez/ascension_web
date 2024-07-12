import React from "react";
import Image from "next/image";

const StartTheAscension = () => {
    return (
        <section>
            <div className={"h-[780] bg-gray-700 relative w[100vw]"}>
                <div className={"-z[1]"}>
                    <p className={"hero-banner-font absolute bottom-[45%] left-[35%] text-[2vw] uppercase drop-shadow-[7px_6px_3px_rgba(0,0,0,1)]"}>It&apos;s time to start</p>
                    <p className={"hero-banner-font absolute bottom-[35%] left-[42%] text-[2vw] uppercase drop-shadow-[7px_6px_3px_rgba(0,0,0,1)]"}>The</p>
                    <p className={"hero-banner-font text-[#DDC089] absolute bottom-[32%] left-[46.5%] text-[4vw] uppercase drop-shadow-[7px_6px_3px_rgba(0,0,0,1)]"}>Ascension</p>
                    <Image unoptimized={true} src={"/banner-notext.jpg"} alt={"babeltower"} width={1920} height={780}/>
                </div>

            </div>
        </section>
        )
}

export default StartTheAscension;
