import Head from "next/head";
import Layout from "../components/layout";
import Landing from "../components/landing";
import Skills from "../components/skills";
import Contact from "../components/contact";
// import Blogs from "../components/Blogs";

import Projects from "../components/project";
import React from "react";

// import Contact from '../components/contact'
export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Spandan Sehgal</title>
        <meta
          name="description"
          content="My portfolio website with my latest blog"
        />
        <link rel="icon" href="/logo/logo.png" />
        <meta
          name="google-site-verification"
          content="MTCdufNgJmf9kJAKcIrDJ5SEBN2MLzePtHJR0wgfHdE"
        />
        <meta name="keywords" content="span41n, spandan sehgal, spandyboss, span41n.vercel.app, Span41n, Spandan, Spandan Sehgal, software developer, spandan," />
      </Head>


      <Landing />
      <Skills />
      <center>
        <hr className="h-1 mt-10 w-96 bg-gray-300" />
      </center>

      <Projects />
      
      <center>
        <hr className="h-1 mt-10 w-96 bg-gray-300" />
      </center>


      <Contact />

    </Layout>
  );
}
