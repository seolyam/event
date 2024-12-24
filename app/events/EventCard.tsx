import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, MapPin, Tag } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  title: string;
  date: string;
  type: string;
  location: string;
  image: string;
  link: string;
}

export const EventCard: React.FC<EventCardProps> = ({
  title,
  date,
  type,
  location,
  image,
  link,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <div className="relative h-48">
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            className="bg-gray-100 transition-transform duration-300 hover:scale-105"
          />
        </div>
        <CardContent className="flex-grow p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {title}
          </h3>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Calendar className="w-4 h-4 mr-2" />
            {date}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Tag className="w-4 h-4 mr-2" />
            {type}
          </div>
          <div className="flex items-center text-sm text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-2" />
            {location}
          </div>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          {link ? (
            <Button asChild className="w-full">
              <Link href={link} target="_blank" rel="noreferrer">
                Learn more
              </Link>
            </Button>
          ) : (
            <Badge variant="secondary" className="w-full justify-center">
              Coming Soon
            </Badge>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
