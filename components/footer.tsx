/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div>
     
              
    
    <hr className='w-full ' />
    <footer className="footer p-10 ">
    
  <div>
    <Link className="footer-title hover:text-black transition-all ease-in-out  " href='/'>Home</Link> 
    <a className="footer-title hover:text-black transition-all ease-in-out " href='/about'>About</a> 

  </div> 
  <div>
    <Link className="footer-title hover:text-black transition-all ease-in-out" href='/blog'>Blog</Link> 
    <a className="footer-title hover:text-black transition-all ease-in-out" href='/projects'>Projects</a>
    <a className="footer-title hover:text-black transition-all ease-in-out" href='mailto:spandansehgal@gmail.com'>Contact</a> 
  </div> 
  <div>
    <a className="footer-title hover:text-black transition-all ease-in-out" href='https://github.com/sehgalspandan' target='_blank' rel="noreferrer">GitHub</a> 
    <a className="footer-title hover:text-black transition-all ease-in-out" href='https://dev.to/spandyboss' target='_blank' rel="noreferrer"> Dev community</a>
  
  </div>
</footer> 
<footer className="footer px-10 py-4  text-gray-500   ">
  <div className="items-center grid-flow-col">
    <p>Made with Nextjs and TailwindCSS by 💖 <br/>No Ads! {"🤗"}</p>
  </div> 
  
</footer>
    </div>
  )
}
