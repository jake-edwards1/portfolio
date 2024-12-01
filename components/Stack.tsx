import React from "react"
import {FaReact, FaJava} from "react-icons/fa";
import {IoLogoNodejs} from "react-icons/io";
import {SiJavascript, SiMicrosoftsqlserver, SiSpring} from "react-icons/si";
import {TbBrandNextjs} from "react-icons/tb";

const stackItems = [
    { id: 1, name: "React", icon: FaReact, color: '#61DAFB'},
    { id: 2, name: "Node.js", icon: IoLogoNodejs, color: '#339933'},
    { id: 3, name: "JavaScript", icon: SiJavascript, color: '#3178C6'},
    { id: 4, name: "Microsoft SQL", icon: SiMicrosoftsqlserver, color: '#47A248'},
    { id: 5, name: "Next.js", icon: TbBrandNextjs, color: '#cbcbcb'},
    // { id: 6, name: "Java", icon: FaJava, color: '#D4360E'},
    // { id: 7, name: "Spring Boot", icon: SiSpring, color: '#6CB52D'},
]

export const Stack = () => {
    return (
        <section
            id={"stack"}
            className={"py-16 glass"}
        >
            <div className={"max-w-[1200px] mx-auto px-4 text-center"}>
                <h2 className={"text-5xl text-gray-200 font-bold mb-4"}>My Stack</h2>
                <div className={"grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"}>
                    {stackItems.map((item) => (
                        <div
                            key={item.id}
                            className={"flex items-center justify-center flex-col rounded-xl p-4"}
                        >
                            <div className={"mb-4 bg-white/10 p-6 rounded-xl"}>
                            {/*<div className={"mb-4"}>*/}
                                {React.createElement(item.icon, {
                                    className: "w-32 h-32",
                                    style: {color: item.color},
                                })}
                            </div>
                            <p className={"text-gray-400 font-semibold"}>
                                {item.name}
                            </p>
                            </div>
                            ))}
                        </div>
                        </div>
        </section>
    )
}