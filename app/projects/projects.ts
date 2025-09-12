export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    className: string;
}

export interface FeaturedProject extends Omit<Project, 'className'> {
    department: string;
    color: string;
}

export const featuredProjects: FeaturedProject[] = [
    {
        title: "Bantala: APAC Solution Challenge 2025",
        image: "/images/bantala.png",
        link: "https://www.youtube.com/watch?v=EcPemPmNJa8&t=1s",
        department: "Team AmBot",
        color: "[#FF4E08]",
        description: 'Bantala is a disaster-preparedness web app focused exclusively on communities near Mt. Kanlaon, one of the most active volcanoes in the Philippines. It empowers communities through Evacuation Mapping, RAG-Assisted Chatbot, and Community-Driven Emergency Bulletin.'
    },
    {
        title: "The Neubrutalism",
        image: "/images/uiux.jpg",
        link: "https://www.facebook.com/dsc.usls/posts/pfbid0hrjP3N1ntZLfVW73R7iuyKXbPQGiUXZRuQeVBL4WrGAPKC2wFCdVZqVffcH7hBS8l",
        department: "UI/UX",
        color: "red-500",
        description: 'A bold design trend that embraces raw aesthetics, solid borders, and loud colors. Neubrutalism breaks away from overly polished UIs to create striking, honest, and memorable interfaces.'
    },
    {
        title: "AI & I",
        image: "/images/ai.jpg",
        link: "https://www.facebook.com/media/set/?set=a.960729226270257&type=3",
        department: "Artificial Intelligence",
        color: "yellow-500",
        description: 'This departmental project seeks to provide an introductory understanding of various Artificial Intelligence topics—such as Generative AI, Prompt Engineering, AI Hallucinations, and the latest Google Gemini updates—through a series of informative Facebook postings. It aims to educate and engage the public by breaking down complex AI concepts into accessible, easy-to-digest content.'
    },
    {
        title: "GlitchGunner",
        image: "/images/gamedev.png",
        link: "https://yuno517.itch.io/glitchgunner",
        department: "Game Development",
        color: "blue-500",   
        description: 'A 2D platformer-shooter educational game with a fully customizable quiz system designed to help people who struggle with focus while studying. Blitz through the cyberpunk streets and run away from the pursuing Hexcorp!'     
    },
];

export const projects: Project[] = [
    {
      title: "Quandary Countdown Website",
      description:
        "Countdown tool used to build anticipation for our booth during Lasallian Week.",
      image: "/images/countdown.png",
      link: "https://quandary-countdown.vercel.app",
      className: "col-span-3",
    },
    {
      title: "The Capitol",
      description:
        "Website for The Capitol: Club Fair 2024. Developed by Joseph Dale Bañares, former Chief Technology Officer.",
      image: "/images/district-3.png",
      link: "https://gdsc-3d.omsimos.com/",
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
      title: "Project Dagtaan",
      description:
        "Website containing outreach-related information. Developed by Arielle Jimera, Chief Operations Officer.",
      image: "/images/dagtaan-wb.png",
      link: "https://project-dagtaan.vercel.app/",
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
  