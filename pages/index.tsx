import Head from 'next/head'
import Layout from '../components/layout'
import Landing from '../components/landing'
import Skills from '../components/skills'
import Contact from '../components/contact'
import Blogs from '../components/Blogs'
import Projects from "../components/project";
import React from "react";
export default function Home() {
  return (

      <Layout>
      <Head>
        <title>Spandan Sehgal</title>
        <meta name="description" content="My portfolio website with my latest blog"/>
        <link rel="icon" href="/logo/logo-color.png" />
        </Head>
     
      <Landing/>
     <Skills/>
          <center>
              <hr className="h-1 mt-10 w-96 bg-gray-300"></hr>
          </center>
          <Projects/>
          <center>
              <hr className="h-1 mt-10 w-96 bg-gray-300"></hr>
          </center>
     {/* <Contact/> */}
      <Blogs/>
          <center>
              <hr className="h-1 mt-10 w-96 bg-gray-300"></hr>
          </center>
      </Layout>



  )
}
