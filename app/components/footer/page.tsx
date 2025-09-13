"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { siFacebook, siGithub, siInstagram } from "simple-icons/icons";

const footerData = [
  {
    title: "Quick Links",
    items: [
      { title: "Events", link: "/events" },
      { title: "Projects", link: "/projects" },
      { title: "About GDGOC", link: "http://gdsc.omsimos.com" },
    ],
  },
  {
    title: "Resources",
    items: [
      { title: "GitHub", link: "https://github.com/gdgoc-usls" },
      {
        title: "Community",
        link: "https://gdg.community.dev/gdg-on-campus-university-of-st-la-salle-bacolod-philippines/",
      },
    ],
  },
  {
    title: "Contact",
    items: [
      { title: "Email", link: "mailto:gdsc@usls.edu.ph" },
      { title: "Facebook", link: "https://www.facebook.com/dsc.usls" },
      { title: "Instagram", link: "https://www.instagram.com/gdg.usls/" },
    ],
  },
];

// Utility function to render simple-icons SVG
const Icon = ({ icon, label }: { icon: string; label: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="h-5 w-5"
    aria-label={label}
    role="img"
    fill="currentColor"
  >
    <path d={icon} />
  </svg>
);

const FooterPage = () => {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">
              <span className="text-blue-600">G</span>
              <span className="text-red-500">D</span>
              <span className="text-yellow-500">G</span>
              <span className="text-blue-600">OC</span>{" "}
              <span className="text-green-500">USLS</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Powered by Intellect, Driven by Values
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="https://github.com/gdgoc-usls" aria-label="GitHub">
                  <Icon icon={siGithub.path} label="GitHub" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.facebook.com/dsc.usls"
                  aria-label="Facebook"
                >
                  <Icon icon={siFacebook.path} label="Facebook" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/gdg.usls/"
                  aria-label="Instagram"
                >
                  <Icon icon={siInstagram.path} label="Instagram" />
                </Link>
              </Button>
            </div>
          </div>
          {footerData.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.link}
                      className="text-sm text-muted-foreground hover:text-foreground hover:underline transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Google Developer Groups on Campus
            — USLS. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;
