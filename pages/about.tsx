// //crete an about page

// import React from "react";
// import Layout from "../components/layout";
// import Head from "next/head";
// import { motion } from "framer-motion";

// export default function about() {
//     return (
//         <Layout>
//         <Head>
//             <title>About</title>
//             <meta name="description" content="About me" />
//             <link rel="icon" href="/logo/logo-color.png" />
//         </Head>
//             <motion.div
//             initial = {{opacity: 0, x: -100}}
//             animate = {{opacity: 1, x: 0}}
//             transition = {{duration: 0.5}}

//             >
            
//                 <div className="flex flex-col items-center font-sans justify-center   p-10 ">
//                 <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
//                 <p className="text-xl mt-10 text-gray-700">
//                  <b>Hey there! I&apos;m Spandan, a 15-year-old tech enthusiast</b> from India. I&apos;ve always been super interested in technology, and I&apos;ve been working really hard to develop my skills in this field. I&apos;ve got a solid foundation in <b>HTML, CSS, JavaScript, and a few cool frameworks like Next.js and TailwindCSS, as well as some experience with TypeScript and Python.</b> I&apos;m always on the lookout for ways to improve my skills and keep up with the latest tech trends.
//                 </p>
                
//                 <p className="text-xl mt-10 text-gray-700">
//                    <b>Like I mentioned earlier, I have a good understanding of computers and phones, and I&apos;m always eager to learn more. My ultimate goal is to become a software developer, and I&apos;m pretty confident that with my skills and passion, I&apos;ll get there eventually.</b>
//                 </p>
//                 <div className="mt-10">
//                 <button className="border-indigo-600 border-2 px-8 py-2 mt-8 rounded-3xl hover:scale-105 transition-all ease-in-out text-indigo-600 font-semibold uppercase tracking-wide">
//               Let&apos;s Connect
//             </button>
//                 </div>
//             </div>
//             </motion.div>

//         </Layout>
//     );

// }

import React from "react";
import Layout from "../components/layout";
import Head from "next/head";
import { motion } from "framer-motion";

export default function About() {
    return (
        <Layout>
            <Head>
                <title>About</title>
                <meta name="description" content="About me" />
                <link rel="icon" href="/logo/logo-color.png" />
            </Head>
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
            >

                <div className="flex flex-col items-center font-sans justify-center p-10 w-fit ">
                    <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
                    <p className="text-xl mt-10 text-gray-700">
                        <b>Hey there! I&apos;m Spandan Sehgal, a resident of Gurugram and currently in grade 11.</b> With an insatiable curiosity for all things tech, I&apos;ve found my passion in programming and the endless possibilities it offers.
                    </p>
                    <p className="text-xl mt-4 text-gray-700">
                        Over the past five years, I&apos;ve immersed myself in the world of coding and IT, continuously expanding my knowledge and skill set. Proficient in languages like Python, HTML, CSS, and JavaScript, I&apos;m always eager to explore new technologies, currently delving into the realms of Next.js and TypeScript to further broaden my expertise.
                    </p>
                    <p className="text-xl mt-4 text-gray-700">
                        Besides coding, I enjoy hitting the gym, riding my bike, and listening to music in my free time. But I&apos;m not just about fun activities— I&apos;m also interested in things like cyber security, ethical hacking, and solving tech problems.
                       <br /> <br /> On top of that, I like to express myself through writing and photography, which adds a creative twist to my tech-focused life.
                    
                    </p>
                    
                    <div className="mt-10">
                        <button className="border-indigo-600 border-2 px-8 py-2 mt-8 rounded-3xl hover:scale-105 transition-all ease-in-out text-indigo-600 font-semibold uppercase tracking-wide">
                            Let&apos;s Connect
                        </button>
                    </div>
                </div>
            </motion.div>
        </Layout>
    );
}
