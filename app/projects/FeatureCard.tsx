import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FeaturedProject } from "./projects";

export const FeatureCard: React.FC<FeaturedProject> = ({
    title,
    image,
    link,
    department,
    color
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <Link href={link} target="_blank" rel="noreferrer">
            <Card className="flex flex-col items-center w-100 h-120 shadow-lg transition-transform duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="p-3 overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    width={2048}
                    height={2048}  
                    className="object-cover rounded-md"
                  />
                </CardHeader>
                <CardContent className="flex flex-col text-center justify-center gap-1 lg:gap-0">
                  <h3 className="text-xl lg:text-3xl leading-normal">{title}</h3>
                  <h1 className={`rounded-full p-1 w-[175px] mx-auto text-sm text-${color}`}
                      style={{ outline: `2px solid` }}
                  >
                        {department} Department
                  </h1>
                </CardContent>
              </Card>
          </Link>
        </motion.div>
    );
}