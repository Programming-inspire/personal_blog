import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

type PostMeta = {
  title: string;
  date: string;
  description: string;
};

type Post = PostMeta & {
  slug: string;
};



// posts folder path
const postsDirectory = path.join(process.cwd(), "posts");

// function to get single post by slug
export async function getPostData(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

 // extract metadata + content
  const matterResult = matter(fileContents);

    // convert markdown -> HTML
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);

     const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...matterResult.data, // title, date, etc.
  };
}


export function getAllPosts(): Post[] {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPosts: Post[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, ""); // remove .md
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as PostMeta), // cast to PostMeta
    };
  });

  // sort by date (newest first)
  return allPosts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
