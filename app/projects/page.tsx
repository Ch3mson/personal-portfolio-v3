import Link from "next/link";

const projects = [
  {
    name: "TopClip.ai",
    href: "https://www.topclip.ai/",
    description: "AI YouTube clipping tool. 70,000+ users",
  },
  {
    name: "BetterWrite.ai",
    href: "https://www.betterwrite.ai/",
    description: "Humanizer to bypass GPT detectors. 1,000+ users",
  },
  {
    name: "Rizz Glasses",
    href: "https://github.com/Ch3mson/RizzKhalifa",
    description: "Helps you rizz with Meta Ray Bans. 100,000+ impressions",
  },
  {
    name: "Veyesor",
    href: "https://github.com/krishchopra/veyesor",
    description: "Live panoramic video stitcher. McHacks 2025 winner",
  },
  {
    name: "NattyNatt",
    href: "https://github.com/Ch3mson/nattynatt",
    description: "Data analysis on NattyNattys challenger climb",
  },
];

export default function Projects() {
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
                <Link href="/projects" className="text-lg text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-lg text-neutral-400 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl font-serif text-primary">Projects</h1>
            <p className="text-sm text-neutral-400">Things I&apos;ve built</p>
          </div>

          {/* Projects List */}
          <ul className="flex flex-col gap-4 text-base">
            {projects.map((project) => (
              <li key={project.name} className="relative flex items-start gap-3 pl-4">
                <span className="absolute -left-0 top-0.5 text-neutral-500">↳</span>
                <span>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-100 hover:text-primary transition-colors underline underline-offset-2"
                  >
                    {project.name}
                  </Link>
                  {" "}- {project.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
