"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Code, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600">G</span>
          <span className="text-red-500">D</span>
          <span className="text-yellow-500">G</span>
          <span className="text-blue-600">OC</span>{" "}
          <span className="text-green-500">USLS</span>
        </motion.h1>
        <motion.p
          className="text-xl sm:text-2xl md:text-3xl text-gray-700 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Events and Projects
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            asChild
            size="lg"
            className="group bg-blue-600 text-white hover:bg-blue-700"
          >
            <Link href="/events">
              View Events
              <Calendar className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="group border-green-500 text-green-600 hover:bg-green-50"
          >
            <Link href="/projects">
              Explore Projects
              <Code className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {[
            { label: "Members", value: "550+", color: "text-blue-600" },
            { label: "Events", value: "20+", color: "text-red-500" },
            { label: "Projects", value: "5+", color: "text-yellow-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition"
            >
              <div className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <a
            href="http://gdsc.omsimos.com"
            className="text-green-600 hover:text-green-800 inline-flex items-center group"
          >
            Learn more about GDGOC
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
