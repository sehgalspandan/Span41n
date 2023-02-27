import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {motion} from 'framer-motion'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_io6m844', 'template_jef7zto', form.current, 'ewdfmOcUsr1Yuc1Tq')
            .then((result) => {
                
            }, (error) => {
                
            });
    };

    return (
    <motion.div initial={{opacity:0, x:10}}
    animate={{opacity:1, x:0}}
    transition={{duration:1}}
    >
        <div className="flex justify-center mt-10">
            <p className='text-4xl font-bold '>Get in touch ✉</p>
        </div>
        <form ref={form} onSubmit={sendEmail} className="text-gray-700 bg-gray-100 p-6 ">
            <label className="block font-bold text-xl mb-2">Name</label>
            <input type="text" name="user_name" className="w-full p-3 rounded-lg border-2 border-gray-300" />
            <label className="block font-bold text-xl mt-6 mb-2">Email</label>
            <input type="email" name="user_email" className="w-full p-3 rounded-lg border-2 border-gray-300" />
            <label className="block font-bold text-xl mt-6 mb-2">Message</label>
            <textarea name="message" className="w-full p-3 rounded-lg border-2 border-gray-300 h-32"></textarea>
            <div className="flex justify-center">
                <input type="submit" value="Send" className="mt-6 py-3 px-6 rounded-xl w-80 hover:bg-gray-800 hover:text-white transition-all ease-in-out hover:cursor-pointer border-gray-800 border-2 text-gray-600 font-bold" />
            </div>
        </form>
    </motion.div>
    );

};

export default Contact;

