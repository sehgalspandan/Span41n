
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import { useRouter } from 'next/router'




export default function Navbar() {
    const router = useRouter();

    return (
        <div>
            <div className="navbar font-sans   ">
  <div className="navbar-start">
  <img src="/logo/logo-no-bg.png" className='hidden md:block w-20 h-20 rounded-full' alt="" />
 

  </div>
  <div className="navbar-center lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a href='/' className={`text-lg  text-gray-700 mr-2   ${router.pathname === '/' ? 'underline underline-offset-8 ' : ''} hover:scale-110 transition-all ease-out`}> Home</a></li>
      <li><a href='/about' className={`text-lg   text-gray-700    ${router.pathname === '/about' ? ' underline underline-offset-8' : ''} hover:scale-110 transition-all ease-out`}>About</a></li>  
      <li><a href='/blog' className={`text-lg  text-gray-700    ${router.pathname === '/blog' ? ' underline underline-offset-8' : ''} hover:scale-110 transition-all ease-out`}>Blog</a></li>
      <li><a href='/projects' className={`text-lg  text-gray-700    ${router.pathname === '/projects' ? ' underline underline-offset-8' : ''} hover:scale-110 transition-all ease-out`}>Projects</a></li>
      {/* <li><a href='/utils' className='text-lg  text-gray-500  hover:scale-110 transition-all ease-out'>Utilities</a></li> */}
      {/* <li><a href='/skills' className='text-lg  text-gray-500  hover:scale-110 transition-all ease-out'>Skills</a></li> */}
    </ul>
  </div>
  <div className="navbar-end" />
</div>
        </div>
    )
}

// import React from 'react';
// import { useRouter } from 'next/router';
// import Link from 'next/link';

// export default function Navbar() {
//     const router = useRouter();

//     return (
//       <center>
//         <div className="navbar font-sans "> {/* Added text-center class to center the navbar */}
//             <div className="navbar-start">
//                 <img src="/logo/logo-color.png" className='hidden md:block w-20 h-20 rounded-full' alt="" />
//             </div>
//             <div className="navbar-center lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <li>
//                         <Link legacyBehavior href="/">
//                             <a className={`text-lg text-gray-500 ${router.pathname === '/' ? 'underline' : ''}  hover:scale-110 transition-all ease-out`}>Home</a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link legacyBehavior href="/about">
//                             <a className={`text-lg text-gray-500 ${router.pathname === '/about' ? 'underline' : ''}  hover:scale-110 transition-all ease-out`}>About</a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link legacyBehavior href="/blog">
//                             <a className={`text-lg text-gray-500 ${router.pathname === '/blog' ? 'underline' : ''}  hover:scale-110 transition-all ease-out`}>Blog</a>
//                         </Link>
//                     </li>
//                     <li>
//                         <Link legacyBehavior href="/projects">
//                             <a className={`text-lg text-gray-500 ${router.pathname === '/projects' ? 'underline' : ''}  hover:scale-110 transition-all ease-out`}>Projects</a>
//                         </Link>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//         </center>
//     );
// }