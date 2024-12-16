"use client"

import React, {useEffect} from "react";
import {FiArrowRight, FiChevronsDown} from "react-icons/fi";
import {animate, motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from 'next/image';
import portrait from "@/assets/portrait.jpg"
import "./stars.scss"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
    }, [color]);

    const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
            id="about"
            style={{backgroundImage}}
            className="bg-image background overflow-hidden"
        >
            <div id="stars"/>
            <div id="stars2"/>
            <div id="stars3"/>
            <div className={"relative grid min-h-screen place-content-center text-gray-200"}>
                <div className={"z-10 -translate-y-4 flex flex-col items-center"}>
                    <h1 className={"text-white/40 text-5xl md:text-7xl font-black"}>Hi, I&apos;m</h1>
                    <h1 className={"max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black " +
                        "leading-tight text-transparent text-5xl md:text-7xl"}>
                        Jake Edwards
                    </h1>

                    <Image
                        src={portrait}
                        alt='Jake Portrait'
                        width={250}
                        quality={95}
                        priority
                        className='my-5 rounded-full border-[0.25rem] border-white'
                    />
                    <p className={"mb-5 max-w-xl text-xl text-center"}>
                        Recent <b>Software Development</b> graduate, with over two years of professional
                        full stack experience
                    </p>

                    <motion.a
                        // style={{border, boxShadow}}
                        style={{border, boxShadow}}
                        whileHover={{scale: 1.015}}
                        whileTap={{scale: 0.985}}
                        className={"flex w-fit items-center gap-2 rounded-full px-4 py-3"}
                        href={'/jake-edwards-resume.pdf'} download
                    >
                        Download Resume
                        <FiArrowRight/>
                    </motion.a>
                </div>

                <a className={"absolute bottom-7 left-1/2 transform -translate-x-1/2"} href='#stack'>
                    <motion.div
                        animate={{
                            y: [0, 10, 0, 3, 0],
                        }}
                        transition={{
                            duration: 2.5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 3,
                            delay: 7,
                        }}
                    >
                        <FiChevronsDown
                            className={"text-gray-100 transition-colors duration-300"}
                            size={50}
                        />
                    </motion.div>
                </a>
                {/*<div className={"bg-circle-container"}>*/}
                {/*    <div className={"bg-circle-background"}></div>*/}
                {/*    <div className={"bg-circle"}></div>*/}
                {/*</div>*/}
            </div>
        </motion.section>

    )
}