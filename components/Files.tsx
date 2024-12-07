"use client"

import React, {useEffect} from 'react'
import {animate, motion, useMotionTemplate, useMotionValue} from 'framer-motion'
import { HiDownload } from 'react-icons/hi'

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export default function Files() {
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
            id={"about"}
            style={{backgroundImage}}
            className={"grid min-h-screen min-w-full place-content-center overflow-hidden text-gray-200"}
        >
            <motion.div
                className='text-lg font-medium flex flex-col gap-5'
                initial={{opacity: 0, y: 100}}
                animate={{opacity: 1, y: 0}}
                transition={{delay: 0.1}}
            >
                <a
                    className={"group flex items-center justify-center gap-2 rounded-full px-4 py-3 focus:scale-105 hover:scale-105 active:scale-100 transition"}
                    href={'/jake-edwards-resume1.pdf'} download
                >
                    Support
                    <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/>
                </a>
                <a
                    className={"group flex items-center justify-center gap-2 rounded-full px-4 py-3 focus:scale-105 hover:scale-105 active:scale-100 transition"}
                    href='/jake-edwards-resume2.pdf' download
                >
                    Software Engineering
                    <HiDownload className='opacity-60 group-hover:translate-y-1 transition cursor-pointer'/>
                </a>
            </motion.div>
        </motion.section>
    )
}
