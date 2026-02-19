import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_PATH = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  title: string;
  date: string;
  description?: string;
  slug: string;
}

export function getAllPostSlugs(): string[] {
  const files = fs.readdirSync(POSTS_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): { meta: PostMeta; content: string } {
  const filePath = path.join(POSTS_PATH, `${slug}.mdx`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(source);

  return {
    meta: {
      title: data.title,
      date: data.date,
      description: data.description,
      slug,
    },
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug).meta);

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
