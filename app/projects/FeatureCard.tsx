import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { FeaturedProject } from "./projects";

export const FeatureCard: React.FC<FeaturedProject> = ({
    title,
    image,
    link,
    department
}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
          <Link href={link} target="_blank" rel="noreferrer">
            <Card className="flex flex-col items-center w-80 h-100">
                {/* FIX: Image Rendering */}
                <Image
                  src={image}
                  alt={title}
                  fill  
                  className="w-[20rem] h-[19rem] transition-transform duration-300 hover:scale-105"
                />
                <CardContent className="flex flex-col gap-2 text-center">
                  <h3>{title}</h3>
                  <p>{department} Department</p>
                </CardContent>
              </Card>
          </Link>
        </motion.div>
    );
}