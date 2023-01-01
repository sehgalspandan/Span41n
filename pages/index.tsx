import Head from 'next/head'
import Layout from '../components/layout'
import Landing from '../components/landing'
import Skills from '../components/skills'
import Contact from '../components/contact'
// import Blog from '../components/blog'
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
     <Contact/>
     {/* <Blog/> */}
      </Layout>



  )
}
