import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Blogs = () => {
    // const [blogs, setBlogs] = useState([]);
    const [blogs, setBlogs] = useState([] as any[]);

    useEffect(() => {
        fetch("https://dev.to/api/articles?username=spandan&per_page=3")
            .then((res) => res.json())
            .then((data) => setBlogs(data));
    }, []);

    return (
        <div className="blogs-container mt-10 ml-2 mr-2">
            <h1 className="title text-3xl ml-2 font-bold mt-6">Blogs</h1>
            <div className="card-container grid grid-cols-1 gap-6 mt-2 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.slice(0, 3).map((blog) => (
                    <AnimatePresence key={blog.id}>
                        <motion.article
                            className="card overflow-hidden rounded-lg mt-2 shadow h-fit bg-white transition hover:shadow-lg"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            {/*<img*/}
                            {/*    alt="Office"*/}
                            {/*    src={blog.cover_image}*/}
                            {/*    className="h-56 w-full object-cover"*/}
                            {/*/>*/}

                            <div className="content bg-white font-semibold p-4 sm:p-6">
                                <time className="date block text-xs text-gray-500">
                                    {/*{blog.created_at}*/}

                                {new Date(blog.published_at).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })

                                }
                                </time>


                                <a href={blog.url}>
                                    <h3 className="title mt-0.5 text-lg font-bold text-gray-900">
                                        {blog.title}
                                    </h3>
                                </a>

                                <p className="description mt-2 mb-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                                    {blog.description}
                                </p>
                            </div>
                        </motion.article>
                    </AnimatePresence>
                ))}
            </div>
        </div>
    );
};

export default Blogs;
