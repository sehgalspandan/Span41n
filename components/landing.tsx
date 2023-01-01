import React from 'react'
import {motion} from 'framer-motion'
import Head from 'next/head'
export default function Landing() {
  return (
    <motion.div initial={{
        opacity: 0
    }}
    
    animate={{
        opacity:1
    }}

    transition={{
        duration:1.5
    }}
   
>

<div className="flex items-center justify-center">
  <div className=" font-semibold text-center p-10 max-w-xl">
    <img
      className="mb-3 w-48 h-48 hover:scale-125 transition-all ease-out rounded-full shadow-lg mx-auto"
      src="/pf.jpeg"
      alt="Spandan"
    />
    <h1 id='name' className="text-6xl text-gray-700 mt-4 " > Spandan Sehgal </h1>
    <h3 className="font-medium text-xs md:text-sm mt-2 lg:text-lg text-purple-500 "> Software Development Student </h3>
    <p className="  text-slate-500 dark:text-gray-300 font-medium text-sm md:text-base text-center">
      I&apos;m currently learning python from Udemy & building websites...
    </p>
    <button   className="border-indigo-600 border-4 px-8 py-2 mt-8 rounded-3xl hover:scale-110 transition-all ease-in-out text-indigo-600 font-semibold uppercase tracking-wide">
     <a href="mailto:spandansehgal@gmail.com"> Contact </a>
    </button>
    
  </div>
</div>

    </motion.div>
  )
}
