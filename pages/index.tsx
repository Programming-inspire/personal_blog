import { GetStaticProps } from "next";
import Image from "next/image";
import { getAllPosts } from "../lib/posts";
import Head from "next/head";

type HomeProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    description: string;
    readingTime?: string;
    tags?: string[];
    cover?: string;
  }[];
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};

export default function Home({ posts }: HomeProps) {
  return (
    <>
      {/* SEO Head */}
      <Head>
        <title>Karthi&apos;s Blog – Latest Posts</title>
        <meta
          name="description"
          content="Read the latest articles from Karthi's Blog – tutorials, updates, and insights."
        />
        <meta name="author" content="Karthiswaran G" />
        <meta property="og:title" content="Karthi's Blog – Latest Posts" />
        <meta
          property="og:description"
          content="Stay up to date with the latest tutorials and updates from Karthi's Blog."
        />
        <meta property="og:type" content="website" />
      </Head>
    <main className="max-w-6xl mx-auto px-4 py-10 text-white">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold">Latest Karthiswarn Blog</h1>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col border border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-black"
          >
            {/* Cover Image */}
            {post.cover && (
              <div className="relative w-full h-48">
                <Image
                  src={post.cover}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>

              {/* Date + Like row */}
              <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                <p>{post.date}</p>
                <div className="flex items-center gap-2">
                  <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition-colors">
                    ♥
                  </button>
                  <span className="font-medium text-gray-300">0</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-300 flex-1">{post.description}</p>

              {/* Button at bottom */}
              <a
                href={`/posts/${post.slug}`}
                className="mt-4 flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 hover:bg-gray-300 hover:text-black cursor-pointer"
              >
                Read More
              </a>
            </div>
          </article>
        ))}
      </section>
    </main>
    </>
  );
}
