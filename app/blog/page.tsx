import Link from "next/link";

export default function Blog() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 mx-auto max-w-[550px] px-6 pt-16 md:pt-24 md:px-0">
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

          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl font-serif text-primary">Blog</h1>
            <p className="text-sm text-neutral-400">Thoughts and writings</p>
          </div>

          {/* Empty state */}
          <p className="text-neutral-400 italic">Coming soon...</p>
        </div>
      </main>
    </div>
  );
}
