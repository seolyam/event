"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { projects, featuredProjects } from "./projects";
import { FeatureCard } from './FeatureCard';

export default function ProjectPage() {
  const [imagesLoaded, setImagesLoaded] = useState<Record<number, boolean>>({});

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [index]: true,
    }));
  };

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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-lg transition-transform hover:-translate-y-1 ${project.className}`}
          >
            <div className="relative w-full h-full min-h-[250px] md:min-h-[300px]">
              <div
                className={`absolute inset-0 bg-gray-200 animate-pulse ${
                  imagesLoaded[index] ? "hidden" : "block"
                }`}
              ></div>
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                quality={95}
                priority={index < 4}
                onLoad={() => handleImageLoad(index)}
                className={`object-cover transition-opacity duration-300 ${
                  imagesLoaded[index] ? "opacity-100" : "opacity-0"
                }`}
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                style={{
                  objectPosition: "center",
                }}
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
        /* On mobile (<640px), force each item to span 1 column */
        @media (max-width: 639px) {
          .col-span-2,
          .col-span-3,
          .row-span-2 {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }

        /* On sm and above, maintain your grid layout as defined */
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
            grid-column: span 1;
          }
          .col-span-3 {
            grid-column: span 2;
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

      {/*NEW: Featured Projects Section*/}
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col text-center">
          <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-2 sm:mb-4">Featured Projects</h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">from other Departments</h1>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap  gap-4 lg:gap-20 p:4 sm:p-8 mb-4">
          {featuredProjects.map((project, index) => {
            return <FeatureCard key={index} {...project}></FeatureCard>
          })}
        </div>
      </div>
    </div>
  );
}
