import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/navbar/page";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  className: string;
}

const projects: Project[] = [
  {
    title: "Quandary Countdown Website",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/countdown.png",
    link: "#",
    className: "col-span-3",
  },
  {
    title: "Google I/O Extended Bacolod 2023",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/googleio.png",
    link: "#",
    className: "col-span-2",
  },
  {
    title: "Google Awards",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/googleawards.png",
    link: "#",
    className: "col-span-2",
  },
  {
    title: "DEVFEST 2023",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/devfest.png",
    link: "#",
    className: "col-span-3",
  },
  {
    title: "Quandary Website",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/quandary.png",
    link: "#",
    className: "col-span-3 row-span-2",
  },
  {
    title: "SOLCHA Certificate Generator",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/solcha.png",
    link: "#",
    className: "col-span-2",
  },
  {
    title: "GDGOC Website",
    description:
      "Countdown tool used to build anticipation for our booth during Lasallian Week.",
    image: "/images/gdgocwebsite.png",
    link: "#",
    className: "col-span-2",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen p-8">
      <Navbar />
      <header className="mb-16 mt-44">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Crafted Projects
          </h1>
          <h2 className="text-5xl md:text-6xl font-bold">for the Community</h2>
        </div>
      </header>

      <div className="grid grid-cols-5 gap-6 max-w-7xl mx-auto [&>a]:min-h-[300px]">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            className={`group relative overflow-hidden rounded-lg transition-transform hover:-translate-y-1 ${project.className}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent transition-opacity">
                <div className="p-6 h-full flex flex-col justify-end">
                  <h3 className="text-2xl text-white font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-md mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-white">
                    Learn more
                    <svg
                      className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
