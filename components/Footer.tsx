import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'

export const Footer = () => {
    return (
        <section
            className={"text-white max-w-[1200px] mx-auto lg:grid grid-cols-2 gap-5 flex flex-col-reverse items-center my-6"}
        >
            <div className={"text-lg"}>
                ©2024. All rights reserved.
            </div>
            <div className={"flex justify-end gap-2"}>
                <a
                    href="https://linkedin.com/in/jake-edwards647"
                    target="_blank"
                >
                    <FaLinkedin size={30} />
                </a>
                <a
                    href="https://github.com/jake-edwards1"
                    target="_blank"
                >
                    <FaGithubSquare size={30} />
                </a>
            </div>
        </section>
    )
}