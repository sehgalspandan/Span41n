import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import Head from "next/head";
// import { getSortedPostsData } from "../lib/posts"
import Link from "next/link";
import fs from "fs"
import Image from "next/image"
import matter from "gray-matter";
function Blogs({ posts }) {
  return (

    <Layout>
      <Head>
        <title>Blogs</title>
        <meta name="description" content="My Projects" />
        <link rel="icon" href="/logo/logo-color.png" />
      </Head>
      <motion.div 
      
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1.5, y: 0}}
      transition={{duration: 0.5}}
  
        
      
      className="text-center">
    <h2 className="mb-2 text-4xl font-extrabold leading-tight text-gray-900">
       Blog
    </h2>
    <p className="text-lg text-gray-500">
     All of my blog posts
    </p>
  </motion.div>
      {/* <div className="flex flex-col items-center justify-center h-fit mb-2 ">
        <h1 className="text-5xl font-bold">Blog</h1>
        <p className="text-2xl font-bold">Here are some of my recent posts</p>
      </div> */}
      <motion.div
         initial={{opacity: 0, y: 100}}
         animate={{opacity: 1.5, y: 0}}
         transition={{duration: 0.5}}
     
         
      >
      <section>
        {posts.map(post => {
          //extract slug and frontmatter
          const { slug, frontmatter } = post
          //extract frontmatter properties
          const { title, author, category, date, bannerImage, description } = frontmatter



          //JSX for individual blog listing
          return (
<section key={title} className="w-full px-4  mx-auto max-w-7xl md:w-3/4 lg:w-2/4">
 
  <div className="flex flex-col space-y-12 divide-y divide-gray-200">
    <div>
      <p className="pt-12 mb-3 text-sm font-normal text-gray-500">
        {date}
      </p>
      <h2 className="mb-2 text-xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-3xl">
        <a href={`/posts/${slug}`} className="text-gray-900 hover:text-blue-700 transition-all ease-in-out">
         {title}
        </a>
      </h2>
      <p className="mb-4 text-base font-normal text-gray-600">
        {description}
      </p>
      <a href={`/posts/${slug}`}className="btn btn-light dark:text-white btn-sm">
        Continue Reading
      </a>
    </div>
    </div>
    <hr className="h-0.5 flex mx-auto mt-3 w-full font-bold bg-gray-300"/>
</section>

            // <article key={slug} s="true" className="flex bg-white mx-auto  mt-4 transition hover:shadow-xl  mb-4 max-w-4xl  rounded-md  shadow-md" >
            //   <div className="rotate-180 p-2  [writing-mode:_vertical-lr]">
            //     <time
            //       dateTime="2022-10-10"
            //       className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
            //     >
            //       <span>🕐</span>
            //       <span className="w-px flex-1 bg-gray-900/10" />
            //       <span>{date}</span>
            //     </time>
            //   </div>
            //   <div className="hidden sm:block sm:basis-56">
            //     <img
            //       alt={title}
            //       src={bannerImage}
            //       className="aspect-square h-full w-full object-cover"
            //     />
            //   </div>
            //   <div className="flex flex-1 flex-col justify-between">
            //     <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
            //       <a href="#">
            //         <h3 className="font-bold uppercase text-gray-900">
            //           {title}
            //         </h3>
            //       </a>
            //       <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            //         {description}
            //       </p>
            //     </div>
            //     <div className="sm:flex sm:items-end sm:justify-end">
            //       <a
            //         href={`/posts/${slug}`}
            //         className="block bg-yellow-300 rounded-sm px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
            //       >
            //         Read Blog
            //       </a>
            //     </div>
            //   </div>
            // </article>

          )
        })}
      </section>
      </motion.div>

    </Layout>
  )
}

export default Blogs


//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync('posts');
  
  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);

    return {
      slug,
      frontmatter,
    };
  });

  // Sort posts based on the date in chronological order
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date);
    const dateB = new Date(b.frontmatter.date);
    return dateB - dateA;
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}

