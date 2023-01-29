//crete an about page

import React from "react";
import Layout from "../components/layout";
import Head from "next/head";

export default function about() {
    return (
        <Layout>
        <Head>
            <title>About</title>
            <meta name="description" content="About me" />
            <link rel="icon" href="/logo/logo-color.png" />
        </Head>
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-5xl font-bold">About Me</h1>
            <p className="text-2xl font-bold">This is the about page</p>
        </div>
        </Layout>
    );

}

