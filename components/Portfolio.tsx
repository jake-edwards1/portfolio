"use client"

import React, {useEffect, useState} from "react";
import Image from "next/image";
import {animate, motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Link from "next/link";
import webAdmin from "@/assets/qwa.png"

const projects = [
    {
        id: 1,
        year: "2022-2024",
        title: "QuickBill Web Admin",
        description: "Lead developer on an Enterprise Web Application for Henry Schein One. QuickBill Web Admin " +
            "is used internally to manage, support, and troubleshoot billing statements sent by ~38% of dental " +
            "offices in the United states. Key features include managing and creating accounts for " +
            "dental offices, viewing billing statements and their related events, and integrating with " +
            "Active Directory for user-group-based authorization.",
        image: webAdmin,
        stack: ["React", "Next.js", "Material UI", "Java", "Spring Boot"]
    },
    {
        id: 2,
        year: "2023",
        title: "Class Project - Movies Website",
        description: "Mock website used for browsing movies and TV shows. Each movie has a 'details' page where " +
            "users can view ratings, plot, cast, images, etc.",
        video: "https://www.youtube.com/embed/uIucu5IqOi8?si=f2NjHpP4LXBQ4xcY",
        link: "https://github.com/jake-edwards1/CSE341-Group-Project",
        stack: ["HTML", "SCSS", "JavaScript", "Vite", "Babel"]
    },
    {
        id: 3,
        year: "2023",
        title: "Class Project - Mobile Weather App",
        description: "Kotlin mobile application that takes a city as input and returns the day's weather " +
            "information for that location.",
        video: "https://www.youtube.com/embed/3G8aiCqBAA4?si=VyfNKu7uN7g0sKtk",
        link: "https://github.com/jake-edwards1/Weather_App",
        stack: ["Kotlin", "Espresso"]
    },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(projects[0]);

    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, []);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`

    return (
        <motion.section
            id={"portfolio"}
            className={"py-32 text-white"}
            style={{backgroundImage}}
        >
            <div className={"max-w-full lg:max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12"}>
                <div>
                    <h2 className={"text-6xl font-bold mb-10"}>
                        Selected <span className={"text-emerald-400"}>Projects</span>
                    </h2>
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            onClick={() => setSelectedProject(project)}
                            className={"cursor-pointer mb-8 group"}
                        >
                            <p className={"text-gray-400 text-lg mb-2"}>{project.year}</p>
                            <h3 className={`text-3xl font-semibold group-hover:text-emerald-400 transition-colors 
                                ${selectedProject.id === project.id ? "text-gray-200" : ""} duration-300`}
                            >
                                {project.title}
                            </h3>
                            {selectedProject.id === project.id && (
                                <div className={"border-b-2 border-gray-200 my-4"}></div>
                            )}
                            {selectedProject.id === project.id && (
                                <p className={"text-gray-400 transition-all duration-500 ease-in-out"}>
                                    {project.description}
                                </p>
                            )}
                            {selectedProject.id === project.id && project.link && (
                                <Link
                                    href={project.link}
                                    className={"text-gray-400 transition-all duration-500 ease-in-out"}
                                    target={"_blank"}
                                >
                                    <br/>
                                    Github: <span className={"text-blue-400 hover:underline"}>{project.link}</span>
                                </Link>
                            )}
                            {selectedProject.id === project.id && project.stack && (
                                <ul className={"flex flex-wrap pt-2 gap-3"}>
                                    {project.stack.map((link, i) => (
                                        <li
                                            key={i}
                                            className={"rounded-full bg-gray-600/50 px-3 py-1.5 text-sm"}
                                        >
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            )}

                        </div>
                    ))}
                </div>
                {selectedProject.image &&
                    <Image
                        src={selectedProject.image.src}
                        alt={selectedProject.title}
                        className={"rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"}
                        width={800}
                        height={450}
                    />
                }
                {selectedProject.video &&
                    <iframe
                        className={"rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"}
                        src={selectedProject.video}
                        width={"100%"}
                        height={"100%"}
                        allowFullScreen
                        loading={"lazy"}
                    />
                }
            </div>
        </motion.section>
    )
}