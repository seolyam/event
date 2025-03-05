"use client";
import Image from "next/image";
import Link from "next/link";

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
    link: "https://gdg-quandary.vercel.app",
    className: "col-span-3",
  },
  {
    title: "Google I/O Extended Bacolod 2023",
    description:
      "A series of community led tech meetups that bring the Google I/O experience to Bacolod.",
    image: "/images/googleio.png",
    link: "https://google-io.omsimos.com/",
    className: "col-span-2",
  },
  {
    title: "Google Awards",
    description:
      "A tribute to innovation and achievement, honoring outstanding individuals in the tech community.",
    image: "/images/googleawards.png",
    link: "https://gdsc-awards.omsimos.com/",
    className: "col-span-2",
  },
  {
    title: "DEVFEST 2023",
    description:
      "Annual tech conference featuring sessions on Google technologies and developer tools.",
    image: "/images/devfest.png",
    link: "https://devfest23.omsimos.com/",
    className: "col-span-3",
  },
  {
    title: "Quandary Website",
    description:
      "Interactive platform showcasing our tech community's projects and initiatives.",
    image: "/images/quandary.png",
    link: "https://quandary-eta.vercel.app/",
    className: "col-span-3 row-span-2",
  },
  {
    title: "SOLCHA Certificate Generator",
    description:
      "Tool for creating and distributing certificates for SOLCHA event participants.",
    image: "/images/solcha.png",
    link: "https://solcha-intro-23.vercel.app/",
    className: "col-span-2",
  },
  {
    title: "GDGOC Website",
    description:
      "Official website for Google Developer Groups on Campus at University of St. La Salle.",
    image: "/images/gdgocwebsite.png",
    link: "https://gdsc.omsimos.com/",
    className: "col-span-2",
  },
];

export default function ProjectPage() {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <header className="mb-12 mt-24 sm:mb-16 sm:mt-44">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">
            Crafted Projects
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            for the Community
          </h2>
        </div>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto [&>a]:min-h-[250px] md:[&>a]:min-h-[300px]">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-lg transition-transform hover:-translate-y-1 ${project.className}`}
          >
            <div className="relative w-full h-full">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                priority={index < 3}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent">
                <div className="p-4 sm:p-6 h-full flex flex-col justify-end">
                  <h3 className="text-xl sm:text-2xl text-white font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-200 text-sm sm:text-md mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-white text-sm sm:text-base">
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

      <style jsx global>{`
        @media (min-width: 640px) {
          .col-span-2 {
            grid-column: span 2;
          }
          .col-span-3 {
            grid-column: span 2;
          }
          .row-span-2 {
            grid-row: span 1;
          }
        }

        @media (min-width: 768px) {
          .col-span-2 {
            grid-column: span 2;
          }
          .col-span-3 {
            grid-column: span 3;
          }
        }

        @media (min-width: 1024px) {
          .col-span-2 {
            grid-column: span 2;
          }
          .col-span-3 {
            grid-column: span 3;
          }
          .row-span-2 {
            grid-row: span 2;
          }
        }

        @media (min-width: 1280px) {
          .col-span-2 {
            grid-column: span 2;
          }
          .col-span-3 {
            grid-column: span 3;
          }
        }
      `}</style>
      <div className="h-16"></div>
    </div>
  );
}
