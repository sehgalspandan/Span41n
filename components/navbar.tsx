// /* eslint-disable @next/next/no-html-link-for-pages */
// import React from 'react'
// // import ToggleButton from './togglebtn'
// export default function navbar() {
//     return (
//         <div>
//             <div className="navbar  bg-base-200">
//   <div className="navbar-start">
//   <img src="/logo/logo-color.png" className='hidden md:block w-20 h-20 rounded-full' alt="" />
 

//   </div>
//   <div className="navbar-center lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a href='/' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>Home</a></li>
//       <li><a href='/about' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>About</a></li>  
//       <li><a href='/blog' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>Blog</a></li>
//       <li><a href='/projects' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>Projects</a></li>
//       {/*<li><a href='/utilities' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>Utilities</a></li>*/}
//       <li><a href='/skills' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>Skills</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//   </div>
// </div>
//         </div>
//     )
// }
/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start">
          <img src="/logo/logo-color.png" className="hidden md:block w-20 h-20 rounded-full" alt="" />
        </div>
        <div className="navbar-center lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a
                href="/"
                className={`text-lg text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out ${
                  router.pathname === '/' ? 'text-gray-800 font-bold' : ''
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className={`text-lg text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out ${
                  router.pathname === '/about' ? 'text-gray-800 font-bold' : ''
                }`}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/blog"
                className={`text-lg text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out ${
                  router.pathname === '/blog' ? 'text-gray-800 font-bold' : ''
                }`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/projects"
                className={`text-lg text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out ${
                  router.pathname === '/projects' ? 'text-gray-800 font-bold' : ''
                }`}
              >
                Projects
              </a>
            </li>
            {/*<li><a href='/utilities' className='text-lg  text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out'>Utilities</a></li>*/}
            <li>
              <a
                href="/skills"
                className={`text-lg text-gray-500 hover:text-gray-800 hover:scale-110 transition-all ease-out ${
                  router.pathname === '/skills' ? 'text-gray-800 font-bold' : ''
                }`}
              >
                Skills
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end"></div>
      </div>
    </div>
  );
}