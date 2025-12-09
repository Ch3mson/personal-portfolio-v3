import Image from "next/image";
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
    description: "Data science analysis on NattyNattys challenger climb",
  },
];

const experience = [
  { role: "Software Engineer", company: "Soverin.ai", href: "https://soverin.ai/", icon: "/soverin.jpg" },
  { role: "ML Engineer", company: "Lovelytics (UTMIST)", href: "https://www.utmist.ca/", icon: "/utmist.jpg" },
  { role: "SWE Intern", company: "ABIC", href: "https://abicbuilds.com/", icon: "/abic.jpg" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Ch3mson" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/benson-yan-622413201/" },
  { name: "Twitter", href: "https://x.com/ch3mson" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="relative z-10 mx-auto max-w-[550px] px-6 pt-16 md:pt-24 md:px-0">
        <div className="flex flex-col gap-6 text-neutral-300">
          {/* Header */}
          <div className="flex flex-col gap-2">
            <h1 className="font-semibold text-2xl font-serif text-primary">Benson Yan</h1>
            <p className="text-sm text-neutral-400">San Francisco, CA</p>
          </div>

          {/* Bio */}
          <p className="font-light leading-relaxed">
            I build any type of software at a startup and enterprise scale. I&apos;ve worked TOO MUCH with Next.js. Hence  exploring AI/ML infra and scalable backend systems.
          </p>

          {/* Current */}
          <ul className="flex flex-col gap-2 text-base">
            <li className="group flex items-start gap-3 pl-4 relative">
              <div className="absolute left-0 top-[9px] w-[5px] h-[5px] bg-neutral-400 rotate-45" />
              <span className="inline-flex items-center gap-1.5">
                CS {" "}
                <Image
                  src="/uwaterloo.png"
                  alt="University of Waterloo logo"
                  width={22}
                  height={22}
                  className="rounded object-cover aspect-square"
                />
                <Link
                  href="https://uwaterloo.ca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-100 hover:text-primary transition-colors underline underline-offset-2"
                >
                  UWaterloo
                </Link>
              </span>
            </li>
          </ul>

          {/* Projects Section */}
          <div className="flex flex-col gap-3 mt-4">
            <h2 className="text-primary font-medium italic">what I&apos;ve been building:</h2>
            <ul className="flex flex-col gap-2 text-base pl-4">
              {projects.map((project) => (
                <li key={project.name} className="relative flex items-start gap-3">
                  <span className="absolute -left-4 top-0.5 text-neutral-500">↳</span>
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

          {/* Previously Section */}
          <div className="flex flex-col gap-3">
            <h2 className="text-primary font-medium italic">previously:</h2>
            <ul className="flex flex-col gap-2 text-base pl-4">
              {experience.map((exp) => (
                <li key={exp.company} className="relative flex items-start gap-3">
                  <span className="absolute -left-4 top-0.5 text-neutral-500">↳</span>
                  <span className="inline-flex items-center gap-1.5">
                    {exp.role} @{" "}
                    <Image
                      src={exp.icon}
                      alt={`${exp.company} logo`}
                      width={22}
                      height={22}
                      className="rounded object-cover aspect-square"
                    />
                    <Link
                      href={exp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neutral-100 hover:text-primary transition-colors underline underline-offset-2"
                    >
                      {exp.company}
                    </Link>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Links */}
          <div className="flex justify-between items-center mt-8 text-base text-neutral-400">
            <div className="flex gap-4">
              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-neutral-100 transition-colors"
                >
                  {social.name}
                </Link>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Link href="https://cs.uwatering.com/#https://www.1800benson.ca/?nav=prev" className="text-neutral-400 hover:text-neutral-100 transition-colors">←</Link>
              <Link href="https://cs.uwatering.com/#https://www.1800benson.ca/" target="_blank">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://cs.uwatering.com/icon.white.svg"
                  alt="CS Webring"
                  className="w-6 h-auto opacity-80"
                />
              </Link>
              <Link href="https://cs.uwatering.com/#https://www.1800benson.ca/?nav=next" className="text-neutral-400 hover:text-neutral-100 transition-colors">→</Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
