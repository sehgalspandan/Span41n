import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion'

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_io6m844', 'template_jef7zto', form.current, 'ewdfmOcUsr1Yuc1Tq')
      .then((result) => {
        
        //reset form
        form.current.reset();
        //show a modal for succes



      }, (error) => {

      });
  };

  return (

    <motion.div
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}>
      <section className=" mt-2">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl text-center pb-5 text-gray-900 font-bold">Contact</h1>

          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <p className="max-w-xl text-md text-gray-500 font-semibold">
                Got something on your mind? Whether it&apos;s work-related or just a casual chat, I&apos;m all ears. Don&apos;t hesitate to reach out—I&apos;m here to listen. Your thoughts and ideas matter, and I&apos;m ready to engage in conversation. Let&apos;s connect and have a meaningful discussion. Get in touch with me now!
              </p>
              <div className="mt-8">
                
                <address className="mt-2 text-gray-900 font-semibold not-italic">
                  My email address:
                </address>
                <a href="mailto:spandansehgal@gmail.com" className="text-2xl font-bold text-pink-600">
                  spandansehgal@gmail.com
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">Name</label>
                  <input
                    className="w-full  rounded-lg border border-gray-400 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="user_name"
                    name="user_name"
                  />
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">Email</label>
                    <input
                      className="w-full  rounded-lg border border-gray-400 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="user_email"
                      name="user_email"
                    />
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">Message</label>
                  <textarea
                    className="w-full  rounded-lg border border-gray-400 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                   />
                </div>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
                  >
                    Send Message
                  </button>
                </div>
              </form>





            </div>
          </div>
        </div>
      </section>
    </motion.div>

  );

};

export default Contact;

