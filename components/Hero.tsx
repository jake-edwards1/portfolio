"use client"

import React, {useEffect} from "react";
import {FiArrowRight} from "react-icons/fi";
import {animate, motion, useMotionTemplate, useMotionValue} from "framer-motion";
import Image from 'next/image';
import portrait from "@/assets/portrait.jpg"

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

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    return (
        <motion.section
            id={"about"}
            style={{backgroundImage}}
            className={"relative grid min-h-screen place-content-center overflow-hidden text-gray-200"}
        >
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
                    Recent <b>Software Development</b> graduate, with over <i>two years</i> of professional fullstack
                    experience
                </p>

                <motion.a
                    style={{border, boxShadow}}
                    whileHover={{scale: 1.015}}
                    whileTap={{scale: 0.985}}
                    className={"flex w-fit items-center gap-2 rounded-full px-4 py-3"}
                    href={'/jake-edwards-resume.pdf'} download
                >
                    Download Resume
                    <FiArrowRight className={""}/>
                </motion.a>
            </div>

            <div className={"bg-circle-container"}>
                <div className={"bg-circle-background"}></div>
                <div className={"bg-circle"}></div>
            </div>
        </motion.section>
    )
}