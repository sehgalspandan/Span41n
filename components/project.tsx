

//fetch data from /projects.json and display each of them in a card with title. link  and description

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { Link } from "gatsby"

const Project = () => {
    const [projects, setProjects] = useState([] as any [])

    useEffect(() => {
        fetch("/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data))
    }, [])

    return (
        <div className="mt-8">
        <h1 className="text-3xl ml-2 font-bold mt-6">Projects </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {projects.map((project) => (
                <div key={project.id} className="ml-2">

                    <AnimatePresence>
                        <motion.a
                            initial={{ y: "100%" }}
                            animate={{ y: 0 }}
                            exit={{ y: "100%" }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="relative mt-6 block w-96 bg-inherit rounded-xl border border-black p-8 shadow-md"
                            href={project.link}
                        >
                            <span
                                className="absolute right-4 top-4 rounded-full bg-green-100 px-3 py-1.5 text-xs font-medium text-green-600"
                            >
                                {project.version}
                            </span>

                            <div className="mt-4 text-gray-500 sm:pr-8">
                                <svg
                                    className="h-8 w-8 sm:h-10 sm:w-10"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                    ></path>
                                </svg>

                                <h3 className="mt-4 text-xl font-bold text-gray-900">{project.title}</h3>

                                <p className="mt-2 hidden text-sm sm:block">
                                    {project.description}
                                </p>
                            </div>
                        </motion.a>
                    </AnimatePresence>
                </div>
            ))}
        </div>

        </div>
    )

}
export default Project;