//crete an about page

import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { motion } from "framer-motion";

export default function about() {
    return (
        <Layout>
        <Head>
            <title>About</title>
            <meta name="description" content="About me" />
            <link rel="icon" href="/logo/logo-color.png" />
        </Head>
            <motion.div
            initial = {{opacity: 0, x: -100}}
            animate = {{opacity: 1, x: 0}}
            transition = {{duration: 1.2}}

            >
            <div className="flex flex-col items-center font-sans justify-center h-screen p-10 ">
                <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
                <p className="text-xl mt-10 text-gray-700">
                 <b>   I&apos;m Spandan, a 14-year-old tech enthusiast</b> from India. I&apos;ve been fascinated by technology for as long as I can remember, and I&apos;ve been working hard to turn that fascination into real skills. I&apos;ve got a solid foundation in <b> HTML, CSS, JavaScript, and a few frameworks like Next.js and TailwindCSS, as well as experience with TypeScript and Python.</b> I&apos;m always looking for ways to improve my skills and stay up-to-date with the latest technologies.
                </p>
                <p className="text-xl mt-10 text-gray-700">
                    Aside from my love for tech, I also have a creative side. <b> I enjoy photography</b> and finding new ways to express myself through my pictures. I find that my photography skills help me to think outside of the box and bring a fresh perspective to my tech projects.
                </p>
                <p className="text-xl mt-10 text-gray-700">
                   <b> As I mentioned, I have a good understanding of computers and phones, and I&apos;m always eager to learn more. My ultimate goal is to become a software developer, and I&apos;m confident that with my skills and passion, I&apos;ll get there eventually.</b>
                </p>
                <div className="mt-10">
                    <button className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-white hover:border-green-500 hover:border-2 hover:text-green-500 transition-all ease-in-out ">
                        <a href="https://github.com/spandyboss" rel="noreferrer" target="_blank"> Connect with me </a>
                    </button>
                </div>
            </div>
            </motion.div>

        </Layout>
    );

}

