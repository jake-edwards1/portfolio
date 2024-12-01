"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import React from "react";
import cpp_logo from "@/assets/logos/cpp.png"
import net_logo from "@/assets/logos/net.png"
import aws_logo from "@/assets/logos/aws.png"
import azureLogo from "@/assets/logos/azure.png"
import javaLogo from "@/assets/logos/java.webp"
import cssLogo from "@/assets/logos/css.png"
import dockerLogo from "@/assets/logos/docker.png"
import graphQlLogo from "@/assets/logos/graphql.png"
import htmlLogo from "@/assets/logos/html.png"
import kotlinLogo from "@/assets/logos/kotlin.png"
import kubernetesLogo from "@/assets/logos/kubernetes.png"
import linuxLogo from "@/assets/logos/linux.png"
import mySqlLogo from "@/assets/logos/mySql.png"
import powershellLogo from "@/assets/logos/powershell.png"
import pythonLogo from "@/assets/logos/python.webp"
import reactNativeLogo from "@/assets/logos/reactNative.png"
import tailwindLogo from "@/assets/logos/tailwind.png"
import unityLogo from "@/assets/logos/unity.png"

const images = [
    { src: cpp_logo, alt: "C++" },
    { src: net_logo, alt: ".NET" },
    { src: graphQlLogo, alt: ".NET" },
    { src: tailwindLogo, alt: ".NET" },
    { src: javaLogo, alt: ".NET" },
    { src: pythonLogo, alt: ".NET" },
    { src: dockerLogo, alt: ".NET" },
    { src: aws_logo, alt: ".NET" },
    { src: htmlLogo, alt: ".NET" },
    { src: cssLogo, alt: ".NET" },
    { src: kubernetesLogo, alt: ".NET" },
    { src: linuxLogo, alt: ".NET" },
    { src: mySqlLogo, alt: ".NET" },
    { src: powershellLogo, alt: ".NET" }
]

export const LogoAnimation = () => {
    return (
        <div className={"py-8 bg-slate-200 opacity-80"}>
            <div className={"container mx-auto text-center"}>
                {/*<h2 className={"text-4xl font-bold mb-4 -mt-4 text-black/60"}>Coursework</h2>*/}
                <div className={"overflow-hidden " +
                    "[mask-image:linear-gradient(to_right,_transparent,_black_25%,_transparent)]"}>
                    <motion.div
                        className={"flex gap-14 flex-none pr-14"}
                        animate={{ translateX: '-50%' }}
                        transition={{
                            duration: 35,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        {images.map((image, index) => (
                            <Image
                                key={index}
                                src={image.src}
                                alt={image.alt}
                                height={40}
                            />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    )
}