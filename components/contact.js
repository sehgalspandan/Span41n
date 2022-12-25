import React from 'react'
import {motion} from 'framer-motion'
export default function Contact() {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const s_name = ('sender-name');
        const email = formData.get('email');
        const message = formData.get('message');
        console.log(s_name, email, message)
        // Send form data to server or third-party service here
      }
  return (
    <motion.div>
     <form onSubmit={handleSubmit}>
  <label className="block font-bold mb-2 text-gray-700" htmlFor="name">
    Name
  </label>
  <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="sender-name"
    type="text"
    placeholder="Jane Doe"
  />

  <label className="block font-bold mb-2 text-gray-700" htmlFor="email">
    Email
  </label>
  <input
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="email"
    type="email"
    placeholder="jane.doe@example.com"
  />

  <label className="block font-bold mb-2 text-gray-700" htmlFor="message">
    Message
  </label>
  <textarea
    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
    id="message"
    placeholder="Enter your message here..."
  />
  <button
  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  type="submit"
>
  Send
</button>

</form>
   
    </motion.div>
  )
}
