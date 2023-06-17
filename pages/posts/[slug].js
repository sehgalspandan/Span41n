
import fs from "fs";
import matter from "gray-matter";
import { motion } from "framer-motion";
import { useEffect } from "react";
import Layout from "../../components/layout";
import Image from "next/image";
import MarkdownIt from "markdown-it";
import Head from "next/head";

export default function Post({ frontmatter, content }) {
  const { title, author,  date, bannerImage } = frontmatter;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const md = new MarkdownIt(); // Initialize the markdown-it instance

  return (
    <>
    <Head>
      <title>{title}</title>
      <link rel="shortcut icon" href="/logo/logo-color.png" type="image/x-icon" />
    </Head>
    <Layout>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        exit={{ opacity: 0 }}
      >
        <div className="max-w-2xl mx-auto">
          {/* <Image
            src={bannerImage}
            alt={title}
            className="rounded-lg flex mx-auto"
            width={300}
            height={200}
          /> */}
          <h1 className="text-3xl font-bold mt-4" id="title">{title}</h1>
          <h2 className="text-lg text-gray-600">
            {author}, {date}
          </h2>
          {/* <h3 className="text-sm text-gray-500 mb-2">
            Tags: {tags.join(", ")}
          </h3> */}
          <div
            className="prose max-w-none mt-4"
            dangerouslySetInnerHTML={{ __html: md.render(content) }}
            id="post-body"
          />
        </div>
      </motion.div>
    </Layout>
    </>
  );
}

// Rest of the code remains the same
export async function getStaticPaths() {
  const files = fs.readdirSync("posts");
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}