"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EventCard } from "./EventCard";
import { Input } from "@/components/ui/input";
import { pastEvents } from "./events";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const EventsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Created an event type array to hold all event types for extendability
  const eventType = ["All Types", "Workshop / Study Group", "Conference", "Info Session", "Outreach Program"];
  
  const filteredEvents = pastEvents.filter((event) => {
    const matchesSearch = event.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || event.type === filterType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen mb-42">
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <header className="mt-32 mb-10 ">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Events</h1>
            <h2 className="text-5xl md:text-6xl font-bold"></h2>
          </div>
        </header>
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <Input
            type="text"
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder="Filter by type" />
            </SelectTrigger>
            <SelectContent>
              {eventType.map(type => {
                return <SelectItem key={type} value= {type === "All Types" ? "all" : type}>{type}</SelectItem>
              })}
            </SelectContent>
          </Select>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filteredEvents.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </motion.div>

        {filteredEvents.length === 0 && (
          <motion.p
            className="text-center text-gray-500 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No events found. Try adjusting your search or filter.
          </motion.p>
        )}
      </main>
    </div>
  );
};

export default EventsPage;
