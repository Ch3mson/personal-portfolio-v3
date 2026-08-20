import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen">
      <main className="relative z-10 mx-auto max-w-[550px] px-6 py-16 md:py-24 md:px-0">
        <div className="flex flex-col gap-6 text-foreground">
          {/* Navbar */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-lg text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-lg text-muted-foreground hover:text-primary transition-colors">
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

          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl font-serif text-primary">Blog</h1>
            <p className="text-sm text-muted-foreground">Thoughts and writings</p>
          </div>

          {/* Posts list */}
          {posts.length === 0 ? (
            <p className="text-muted-foreground italic">Coming soon...</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col gap-1"
                  >
                    <span className="text-foreground group-hover:text-primary transition-colors">
                      {post.title}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
}
