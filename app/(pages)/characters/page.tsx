"use client"

import Image from 'next/image'
import {useState} from "react";
import {TextGenerateEffect} from "@/components/Aceternity/TextGenerateEffect";

export default function Characters(){

    const [selectedCharacter, setSelectedCharacter] = useState<null | any >(null);

    const characterList = [
        {
            name : "The Forgotten",
            imageSrc : "/characters/character_1_1.png",
            citation : `"Quiet and introspective, he carries an air of enigmatic detachment. He speaks little, allowing his actions in the arena to define him. Despite his silent demeanor, he possesses a fierce sense of justice and an unyielding spirit. His eyes, often described as piercing and filled with a haunting determination, reflect the weight of his untold past and the burning desire to be remembered." - Unknown writer`,
            lore : "For him, the Ascension is more than just a path to fame. It is a crucible through which he seeks to forge a new identity, one that transcends the obscurity of his past. He fights not only for the adulation of the masses but to prove to himself that he can rise above his forgotten origins and leave an indelible mark on the world. Each victory brings him closer to his goal of being remembered, not just as a combatant in the arena, but as a legend in his own right."
        },
        {
            name : "The Relentless",
            imageSrc : "/characters/character_2_1.png",
            citation : `"He is remembered not just as a warrior, but as a beacon of hope and a champion of the oppressed. His story is one of courage and sacrifice, a testament to the power of love and the unbreakable bond of family. Through his struggles and triumphs, Marcus teaches that true strength lies not just in the might of one's sword, but in the unwavering resolve to fight for what is right." - Unknown writer`,
            lore : "The Ascension represents a labyrinthine web of intrigue and danger, and Marcus is determined to cut through it to uncover the truth and save Elara. He suspects that the organization is more than it seems, its layers of spectacle hiding a darker purpose. His participation in the tournament is a means to an end, a way to gain access to the inner workings of the Ascension and find the clues that will lead him to his sister. Each fight brings him closer to uncovering the secrets he needs to save her."
        },
    ]


    return(
        <div className={"wrap py-4"}>
            {selectedCharacter ? (
                <div>
                    <div>
                        <button className={"text-[#DDC089] bg-[#1E1E1E] px-4 py-1 mb-2 rounded-[6px] text-xl"} onClick={() => {
                            setSelectedCharacter(null)
                        }}>Back to characters list</button>
                    </div>
                    <div className={"w-full bg-neutral-900 p-8"}>
                        <div className={"flex justify-between mb-8"}>
                            <div className={"w-[69%]"}>
                                <TextGenerateEffect words={selectedCharacter!.citation}/>
                            </div>
                            <div className={"w-29% "}>
                                <div className={"w-[346px] h-[606px] bg-neutral-900 border-[#DDC089] transition-all duration-200 border-4 relative"}>
                                    <Image
                                        src={selectedCharacter.imageSrc}
                                        alt={`Portrait of ${selectedCharacter.name}`}
                                        fill={true}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={"h-full text-2xl"}>
                            <p>{selectedCharacter.lore}</p>
                        </div>
                    </div>
                </div>

            ) : (
                <div className={"flex flex-wrap justify-start gap-4 ml-11"}>
                    {characterList.map((character: any) => (
                        <button key={character.name} onClick={() => {
                            setSelectedCharacter(character)
                        }}>
                            <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[-7deg] transition-all duration-200 border-4 hover:scale-[103%]"}>
                                <Image
                                    src={character.imageSrc}
                                    alt={`Portrait of ${character.name}`}
                                    fill={true}
                                />
                                <div className={"bg-neutral-900/70 w-full h-[15%] absolute z-10 bottom-0 flex justify-center items-center"}>
                                    <p className={"text-4xl uppercase skew-x-[7deg]"}>{character.name}</p>
                                </div>
                            </div>
                        </button>
                    ))}
                    <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[-7deg] transition-all duration-200 border-4 hover:scale-[103%] flex items-center justify-center cursor-pointer"}>
                        <p className={"text-[298px] skew-x-[7deg]"}>?</p>
                    </div>
                    <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[-7deg] transition-all duration-200 border-4 hover:scale-[103%] flex items-center justify-center cursor-pointer"}>
                        <p className={"text-[298px] skew-x-[7deg]"}>?</p>
                    </div>
                    <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[7deg] transition-all duration-200 border-4 hover:scale-[103%] flex items-center justify-center cursor-pointer"}>
                        <p className={"text-[298px] skew-x-[-7deg]"}>?</p>
                    </div>
                    <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[7deg] transition-all duration-200 border-4 hover:scale-[103%] flex items-center justify-center cursor-pointer"}>
                        <p className={"text-[298px] skew-x-[-7deg]"}>?</p>
                    </div>
                    <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[7deg] transition-all duration-200 border-4 hover:scale-[103%] flex items-center justify-center cursor-pointer"}>
                        <p className={"text-[298px] skew-x-[-7deg]"}>?</p>
                    </div>
                    <div className={"bg-neutral-900 w-[346px] h-[606px] border-[#DDC089] skew-x-[7deg] transition-all duration-200 border-4 hover:scale-[103%] flex items-center justify-center cursor-pointer"}>
                        <p className={"text-[298px] skew-x-[-7deg]"}>?</p>
                    </div>

                </div>
            )}

        </div>
    )
}
