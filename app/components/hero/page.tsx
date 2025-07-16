"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-[100px]">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-[20px]">
        <motion.h1
          className="text-base sm:text-xl text-[#32A951] mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          University of St. La Salle
        </motion.h1>
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 text-foreground"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Google Developer Groups <br className="hidden sm:block" /> on Campus
        </motion.h2>
        <motion.p
          className="text-sm sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Discover the Impact of Our Events, Projects, and Initiatives <br />
          in Shaping Innovation and Excellence
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            className="group bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base"
          >
            <Link href="/events">
              View Events
              <Calendar className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group border-red-500 text-red-600 hover:bg-red-50 dark:hover:bg-red-950 px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base bg-transparent"
          >
            <Link href="/projects">
              Explore Projects
              <Code className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 max-w-md sm:max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { label: "Members", value: "550+", color: "text-red-500" },
            { label: "Events", value: "20+", color: "text-blue-500" },
            { label: "Projects", value: "5+", color: "text-yellow-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition border"
            >
              <div className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          className="mt-8 sm:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="http://gdsc.omsimos.com"
            className="text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-300 inline-flex items-center group transition-colors"
          >
            Learn more about GDGOC
            <ArrowRight className="ml-2 h-4 sm:h-5 w-4 sm:w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
