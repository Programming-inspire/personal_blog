import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { getAllPosts, getPostData, Post as LibPost } from "../../lib/posts";
import Head from "next/head";

// Use the imported Post type from lib/posts.ts
type PostPageProps = {
  post: LibPost;
};

export default function PostPage({ post }: PostPageProps) {
  // Pick first author for SEO or display
  const firstAuthor = post.authors?.[0];

  return (
    <>
      {/* Dynamic SEO */}
      <Head>
        <title>{post.title ?? "Untitled"} – Karthiswarn Blog</title>
        <meta name="description" content={post.description ?? post.title ?? "Blog post"} />
        {firstAuthor && <meta name="author" content={firstAuthor.name ?? ""} />}
        <meta property="og:title" content={post.title ?? "Untitled"} />
        <meta property="og:description" content={post.description ?? post.title ?? "Blog post"} />
        {post.cover && <meta property="og:image" content={post.cover} />}
        <meta property="og:type" content="article" />
      </Head>

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Back button */}
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>

        {/* Date */}
        <p className="text-sm text-gray-500 mt-4">
          {new Date(post.date ?? new Date().toISOString()).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        {/* Title */}
        <h1 className="text-3xl font-bold mt-2">{post.title ?? "Untitled"}</h1>

        {/* Authors */}
        {post.authors?.length ? (
          <p className="mt-1 text-gray-600">
            Posted by{" "}
            {post.authors.map((author, i) => (
              <span key={i}>
                {author.name ?? "Unknown"}
                {i < (post.authors?.length ?? 0) - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        ) : null}

        {/* Content */}
        <article
          className="prose prose-lg mt-6"
          dangerouslySetInnerHTML={{ __html: post.contentHtml ?? "" }}
        />
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<PostPageProps> = async ({ params }) => {
  const postData = await getPostData(params?.slug as string);

  // Normalize optional fields to avoid undefined
  const post: LibPost = {
    slug: postData.slug ?? "",
    title: postData.title ?? "Untitled",
    date: postData.date ?? new Date().toISOString(),
    contentHtml: postData.contentHtml ?? "",
    description: postData.description ?? "",
    cover: postData.cover ?? "",
    authors: postData.authors ?? [], // ensure it's always an array
    tags: postData.tags ?? [],
    readingTime: postData.readingTime ?? "",
  };

  return {
    props: { post },
  };
};
