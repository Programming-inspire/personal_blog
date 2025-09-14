import { GetStaticProps } from "next";
import { getAllPosts } from "../lib/posts";

type HomeProps = {
  posts: {
    slug: string;
    title: string;
    date: string;
    description: string;
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
    <main className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-3xl font-extrabold">Latest Karthiswarn Blog</h1>
      </header>

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="flex flex-col border rounded-lg p-5 hover:shadow-md transition-shadow min-h-[500px]"
          >
            {/* Date + Like row */}
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500">{post.date}</p>
              <div className="flex items-center gap-2">
                <button className="flex h-7 w-7 items-center justify-center rounded-full border border-white bg-black text-white hover:bg-white hover:text-black transition-colors">
                  ♥
                </button>
                <span className="text-sm font-medium text-gray-700">0</span>
              </div>
            </div>

            {/* Title + content */}
            <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
            <p className="mt-3 text-white text-sm leading-relaxed">
              {post.description}
            </p>

            {/* Button at bottom */}
            <a
              href={`/posts/${post.slug}`}
              className="mt-auto flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 text-sm font-medium text-gray-100 transition-colors duration-200 hover:bg-gray-300 hover:text-black cursor-pointer"
            >
              Read More
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}

