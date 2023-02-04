import React from "react";
import Head from "next/head";
import Layout from "../components/layout";
import {motion} from "framer-motion";

export default function Projects() {
    return (
        <Layout>
            <Head>
                <title>Projects</title>
                <meta name="description" content="My Projects" />
                <link rel="icon" href="/logo/logo-color.png" />
            </Head>
            <div className="flex flex-col items-center justify-center h-screen">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p className="text-2xl font-bold">Here are some of my projects</p>
            </div>
        </Layout>
    )
}