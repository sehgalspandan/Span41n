import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta name="description" content="About me" />
                <link rel="icon" href="/logo/logo-color.png" />
            </Head>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >

                <div className="flex flex-col items-center font-sans justify-center p-10 mx-auto lg:w-2/3 ">
                    <h1 className="text-5xl font-bold text-gray-900">About Me</h1>


                    <p className="text-lg mb-4 mt-10"> <b className="text-xl">Hello there!</b> <br></br>
                        I&apos;m <span className="font-semibold">Spandan Sehgal</span>, a student in 11th grade who&apos;s exploring this amazing and never-ending world of I.T. I am very curious about how things work and how I can recreate them in my own way. In my journey of 4 years of coding, I have learned basic webdev technologies like HTML, CSS, JS, and TailwindCSS. Currently, I am learning Python and NextJs. I regularly write blogs about some useful resources that I find on the net, about programming tutorials, and much more! I am always looking to help others and share my knowledge with the community. I aim at creating quality products and simplifying tasks!
                   <br /> <div className="mt-10 text-xl space-x-5">
                        My socials: 
    <a href="https://medium.com/@spandansehgal" className="text-blue-500 hover:underline ">{" "}Medium</a>
    <a href="https://dev.to/sehgalspandan" className="text-blue-500 hover:underline ">Dev.to</a>
    <a href="https://hashnode.com/@sehgalspandan" className="text-blue-500 hover:underline ">Hashnode</a>
    <a href="https://github.com/sehgalspandan" className="text-blue-500 hover:underline ">Github</a>
    </div>
                    </p>

                
  <p className="text-lg">
     </p>



                    <div className="mt-10">
                        <button className="border-indigo-600 border-2 px-8 py-2 mt-8 rounded-3xl hover:scale-105 transition-all ease-in-out text-indigo-600 font-semibold uppercase tracking-wide">
                            Let&apos;s Connect
                        </button>
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
}
