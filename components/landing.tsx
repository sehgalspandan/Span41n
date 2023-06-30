import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
export default function Landing() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex items-center w justify-center">
        <div className=" font-semibold text-center w-full mx-auto">
          <Image
            width={250}
            height={250}
            className="mb-3 w-48 h-48 hover:scale-125 transition-all ease-out rounded-full shadow-lg mx-auto"
            src="/pf.jpeg"
            alt="Spandan"
          />
          <h1 id="name" className="text-5xl text-gray-700 mt-4 ">
            {" "}
            Spandan Sehgal{" "}
          </h1>
          <h3 className="font-medium text-xs md:text-sm mt-2 lg:text-lg text-blue-600 ">
            {" "}
            Software Developement Student{" "}
          </h3>
          <p className="  text-slate-400 font-medium text-sm md:text-base text-center">
            Currently learning Python, Nextjs and TypeScript...
          </p>
          <a href="mailto:spandansehgal@gmail.com">
            <button className="border-indigo-600 border-2 px-8 py-2 mt-8 rounded-3xl hover:scale-105 transition-all ease-in-out text-indigo-600 font-semibold uppercase tracking-wide">
              Let&apos;s Connect
            </button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
