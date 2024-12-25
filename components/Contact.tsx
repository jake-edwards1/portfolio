"use client"

import { motion } from "framer-motion";
import { sendEmail } from "@/serverActions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";


export const Contact = () => {
    return (
        <section id={"contact"} className={"py-32 text-white max-w-[1200px] mx-auto px-4 overflow-x-clip"}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                // className={"grid lg:grid-cols-2 gap-16"}
            >
                <div className={"space-y-8"}>
                    <motion.h2
                        initial={{opacity: 0, x: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.2}}
                        className={"text-7xl font-bold text-gray-300 p-1"}
                    >
                        <span className={"text-lime-400"}>Contact</span> me
                    </motion.h2>
                    <motion.div
                        initial={{opacity: 0, y: -20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 0.6, delay: 0.4}}
                        className={"glass px-8 pb-8 rounded-2xl"}
                    >
                        <form
                            className="mt-10 flex flex-col dark:text-black"
                            action={async (formData) => {
                                const {data, error} = await sendEmail(formData);

                                if (error) {
                                    toast.error(error);
                                    return;
                                }

                                toast.success("Email sent successfully!");
                            }}
                        >
                            <input
                                className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                                name="senderEmail"
                                type="email"
                                required
                                maxLength={500}
                                placeholder="Your email"
                            />
                            <textarea
                                className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                                name="message"
                                placeholder="Your message"
                                required
                                maxLength={5000}
                            />
                            <SubmitBtn/>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}