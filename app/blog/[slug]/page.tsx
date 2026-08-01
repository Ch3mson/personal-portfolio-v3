import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  try {
    const { meta } = getPostBySlug(slug);
    return {
      title: meta.title,
      description: meta.description,
    };
  } catch {
    return { title: "Post Not Found" };
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post;
  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  const { meta, content } = post;

  return (
    <div className="min-h-screen">
      <main className="relative z-10 mx-auto max-w-[650px] px-6 py-16 md:py-24 md:px-0">
        <div className="flex flex-col gap-6 text-neutral-300">
          {/* Navbar */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-lg text-neutral-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-lg text-neutral-400 hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-lg text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Back link */}
          <Link href="/blog" className="text-sm text-neutral-400 hover:text-primary transition-colors">
            ← Back to blog
          </Link>

          {/* Post header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl font-serif text-primary">{meta.title}</h1>
            <p className="text-sm text-neutral-500">
              {new Date(meta.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Post content */}
          <article className="prose prose-invert prose-neutral max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-neutral-300 prose-a:text-primary prose-a:underline prose-strong:text-neutral-200">
            <MDXRemote source={content} />
          </article>
        </div>
      </main>
    </div>
  );
}
