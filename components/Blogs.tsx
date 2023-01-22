// //fetch posts data from posts folder and display 3 of them in a card with title. link  and description the design of the card should be nice and different from the one in projects.tsx
//
// import React, { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// // import { Link } from "gatsby"
//
// const Blogs = () => {
//     const [blogs, setBlogs] = useState([])
//
//     useEffect(() => {
//         fetch("/blogs.json")
//             .then((res) => res.json())
//             .then((data) => setBlogs(data))
//     }, [])
//
//     return (
//         <div className="mt-10 ml-2 ">
//             <h1 className="text-3xl ml-2 font-bold mt-6">Blogs </h1>
//         <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2 lg:grid-cols-3">
//             {blogs.map((blog) => (
//                 <div key={blog.id}>
//                     <AnimatePresence>
//
//                             <article className="overflow-hidden rounded-lg mt-2 shadow h-96 bg-white transition hover:shadow-lg">
//                                 <img
//                                     alt="Office"
//                                     src={blog.image}
//                                     className="h-56 w-full object-cover"
//                                 />
//
//                                 <div className="bg-white font-semibold p-4 sm:p-6">
//                                     <time  className="block text-xs text-gray-500">
//                                         {blog.date}
//                                     </time>
//
//                                     <a href={blog.link}>
//                                         <h3 className="mt-0.5 text-lg font-bold text-gray-900">
//                                             {blog.title}
//                                         </h3>
//                                     </a>
//
//                                     <p className="mt-2 mb-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
//                                         {blog.description}
//                                     </p>
//                                 </div>
//                             </article>
//
//
//                     </AnimatePresence>
//                 </div>
//             ))}
//         </div>
//
//             </div>
//             )
// }
//
// export default Blogs


//fetch posts data from posts folder and display 3 of them in a card with title. link  and description the design of the card should be nice and different from the one in projects.tsx

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
// import { Link } from "gatsby"

const Blogs = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch(" https://dev.to/api/articles?username=spandyboss&per_page=3 ")

            .then((res) => res.json())
            .then((data) => setBlogs(data))



    }
    )


//limit the number of blogs to 3

    return (
        <div className="mt-10 ml-2 ">
            <h1 className="text-3xl ml-2 font-bold mt-6">Blogs </h1>
            <div className="grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2 grid-rows-1 lg:grid-cols-3">
                {blogs.map((blog) => (
                    <div key={blog.id}>
                        <AnimatePresence>

                            <article className="overflow-hidden rounded-lg mt-2 shadow h-fit bg-white transition hover:shadow-lg">
                                {/*<img*/}
                                {/*    alt="Office"*/}
                                {/*    src={blog.cover_image}*/}
                                {/*    className="h-56 w-full object-cover"*/}
                                {/*/>*/}

                                <div className="bg-white font-semibold p-4 sm:p-6">
                                    <time className="block text-xs text-gray-500">
                                        {blog.created_at}
                                    </time>

                                    <a href={blog.url}>
                                        <h3 className="mt-0.5 text-lg font-bold text-gray-900">
                                            {blog.title}
                                        </h3>
                                    </a>

                                    <p className="mt-2 mb-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                        {blog.description}
                                    </p>
                                </div>
                            </article>


                        </AnimatePresence>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Blogs
