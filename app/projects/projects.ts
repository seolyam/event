export interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
    className: string;
}

export interface FeaturedProject extends Omit<Project, 'description' | 'className'> {
    department: string;
}

export const featuredProjects: FeaturedProject[] = [
    {
        title: "Raw and Bold: The Neubrutalism",
        image: "/images/uiux.jpg",
        link: "https://www.facebook.com/dsc.usls/posts/pfbid0hrjP3N1ntZLfVW73R7iuyKXbPQGiUXZRuQeVBL4WrGAPKC2wFCdVZqVffcH7hBS8l",
        department: "UI/UX"
    },
    {
        title: "AI & I",
        image: "/images/ai.png",
        link: "",
        department: "AI",
    },
    {
        title: "GlitchGunner",
        image: "/images/gamedev.png",
        link: "",
        department: "Game Dev",
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
  