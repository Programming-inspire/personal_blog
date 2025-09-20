import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type Author = {
  name: string;
  twitter?: string;
  avatar?: string; 
};

type PostMeta = {
  title: string;
  date: string;
  description: string;
  authors?: Author[];
  tags?: string[];
  cover?: string;
  draft?: boolean;
};

export type Post = PostMeta & {
  slug: string;
  contentHtml?: string; 
  readingTime?: string;
};


// posts folder path
const postsDirectory = path.join(process.cwd(), "posts");

function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200; // average reading speed
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}


// function to get single post by slug
export async function getPostData(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    readingTime: calculateReadingTime(matterResult.content),
    ...(matterResult.data as PostMeta),
  };
}

export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts: Post[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      readingTime: calculateReadingTime(content),
      ...(data as PostMeta),
    };
  });

  return allPosts
    .filter((post) => !post.draft) // hide draft posts
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
