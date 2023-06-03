import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/layout";
import Head from "next/head";


function Blogs() {
  return (
    
    <Layout>
            <Head>
                <title>Blogs</title>
                <meta name="description" content="My Projects" />
                <link rel="icon" href="/logo/logo-color.png" />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-5xl font-bold">Blog</h1>
                <p className="text-2xl font-bold">Here are some of my recent posts</p>
            </div>
        </Layout>
  )
}

export default Blogs