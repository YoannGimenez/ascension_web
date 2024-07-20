import {TextGenerateEffect} from "@/components/Aceternity/TextGenerateEffect";
import Image from "next/image";

export default function World(){

    const words : string = `"As the stakes rise and the battles intensify, only the most cunning, relentless, and heroic will ascend to claim their place in history at the very top. In order to do so, they have to start their Ascension." - Unknown writer`

    return(
        <div className={"wrap py-4"}>
            <div className={"w-full bg-neutral-900 p-8"}>
                <div className={"flex justify-between mb-8"}>
                    <div className={"w-29% "}>
                        <div className={"w-[346px] h-[606px] bg-neutral-900 border-[#DDC089] transition-all duration-200 border-4 relative"}>
                            <Image
                                src={"/ascension_tower_art.jpg"}
                                alt={`Ascension tower`}
                                fill={true}
                            />
                        </div>
                    </div>
                    <div className={"w-[75%]"}>
                        <TextGenerateEffect words={words}/>
                    </div>
                </div>
                <div className={"h-full text-2xl"}>
                    <p>The tournament known as Ascension began centuries ago in the heart of a vast empire. Conceived by Emperor Valtorius the Visionary, Ascension was meant to be the ultimate spectacle, a grand coliseum that towered over the capital city. The tower itself, an architectural marvel, reached into the skies with levels dedicated to increasingly difficult and thrilling combat arenas. Valtorius envisioned a place where the best warriors from across the lands could test their mettle, entertain the masses, and gain immortality through glory.

                        In its early days, Ascension was a simple tournament where combatants fought to the death, much like traditional gladiator games. However, as the empire grew more sophisticated, so did the tournament. Advances in healing magic and alchemical sciences allowed for a revolutionary change: combatants would no longer die but instead be healed of their wounds after each bout. This innovation transformed Ascension into a perpetual spectacle, where fighters could continually participate without the finality of death.

                        Over the centuries, Ascension grew in scale and complexity. The tower was expanded, adding more levels and incorporating diverse environments and challenges within each arena. The tournament became an annual event, attracting fighters from every corner of the world and audiences from all walks of life. The empire's best architects, engineers, and mages worked tirelessly to ensure that each season of Ascension was more spectacular than the last.

                        The public's enthusiasm for Ascension reached a fever pitch. The tower became a cultural epicenter, with its games broadcast across the empire. Crowds would gather not only within the colossal stadium surrounding the tower but also in public squares and taverns, cheering and celebrating their favorite fighters. Merchants thrived on the economic boom brought by the influx of spectators, and the empire reveled in the unity and distraction the games provided.

                        Today, Ascension remains at the pinnacle of entertainment and cultural significance. The tournament has continued to evolve, incorporating advanced technology and enchantments to create ever more immersive and thrilling experiences. The healing magic that ensures combatants' safety has been perfected, allowing for even more intense and spectacular battles. Each year, new fighters rise to the challenge, bringing their unique skills and stories to the tower.

                        The public's adoration for Ascension has only grown. Entire festivals are built around the tournament season, with music, food, and celebrations that last for days. The tower itself has become a symbol of unity and pride for the empire, its towering presence a constant reminder of the glory and excitement it brings.

                        The tournament's history is rich with epic tales of bravery, strategy, and perseverance. It is a stage where legends are born, where ordinary people can become extraordinary, and where the masses can lose themselves in the thrill of the fight. Ascension continues to captivate, inspire, and entertain, proving that even after centuries, the allure of the ultimate battle for glory remains as strong as ever.</p>
                </div>
            </div>
        </div>
    )
}
