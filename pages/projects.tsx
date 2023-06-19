//fetch data from /projects.json and display each of them in a card with title. link  and description

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import Layout from "../components/layout";

const Projects = () => {
  const [projects, setProjects] = useState([] as any[]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <>
    <Head>
    <title>Projects</title>
    <link rel="shortcut icon" href="/logo/logo-color.png" type="image/x-icon" />
    </Head>
    <Layout>
    <div className="mt-8 ">
      <h1 className="text-3xl text-center text-black ml-2 font-bold mt-6">Projects </h1>
      <div className=" space-y-3 mt-2 px-5">
        {projects.map((project) => (
          <div className="card card-side flex mx-auto " key={project.id}>
          {/* <figure><img src="/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure> */}
          <div className="card-body">
            <h2 className="card-title">{project.title}</h2>
            <p>{project.description}</p>
            <p className="bg-emerald-100 rounded-xl px-4 py-1 font-semibold text-sm w-fit">{project.version}</p>
            <div className="card-actions justify-end">
              <button  className="btn bg-gray-800 lg:px-10 md:px-8 sm:px-4  text-white"> <a href={project.link}> Visit</a></button>
            </div>
            <div>
          <hr className="w-full mt-3 flex mx-auto h-0.5 bg-gray-300"></hr>
          </div>
          </div>
         
        </div>
        ))}
      </div>
   
    </div>
    </Layout>
    </>
  );
};
export default Projects;
