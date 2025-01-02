"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { EventCard } from "./EventCard";
import { Input } from "@/components/ui/input";
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

  const pastEvents = [
    {
      title:
        "SONDER: International GDG on Campus Community Building - Study Group 2024",
      date: "20 Dec 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/sonder.png",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-sonder-international-gdg-on-campus-community-building-study-group-2024/cohost-gdg-on-campus-university-of-st-la-salle-bacolod-philippines",
    },
    {
      title: "View-Source Networking Session",
      date: "14 Dec 2024",
      type: "Conference",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/viewsource.png",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-view-source-networking-session/",
    },
    {
      title: "Core Team - Team Building Program",
      date: "9 Nov 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/coreteam.png",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-core-team-team-building-program/",
    },
    {
      title: "1st General Assembly & Chapter Characters Info Session",
      date: "8 Nov 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/assembly.png",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-1st-general-assembly-amp-chapter-characters-info-session/",
    },
    {
      title: "Public Relations Department Study Group & Working Session",
      date: "30 Oct 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/pr.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-public-relations-department-study-group-amp-working-session/",
    },
    {
      title: "Technology Department Study Group & Working Session",
      date: "30 Oct 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/tech.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-technology-department-study-group-amp-working-session/",
    },
    {
      title: "Events Department Study Group & Working Session",
      date: "30 Oct 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/events.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-events-department-study-group-amp-working-session/",
    },
    {
      title: "Membership Transitioning & General Assembly",
      date: "25 Oct 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/general.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-membership-transitioning-amp-general-assembly/",
    },
    {
      title: "Core Team Working Session & Planning",
      date: "17 Oct 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/coreteamass.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-core-team-working-session-amp-planning/",
    },
    {
      title: "Hack La Salle 2024 Info Session & Ideathon Community Mixer",
      date: "16 Oct 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/hack.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-hack-la-salle-2024-info-session-amp-ideathon-community-mixer/",
    },
    {
      title: "Internal Strategic Meeting & Bevy Workshop",
      date: "11 Oct 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/chill.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-internal-strategic-meeting-amp-bevy-workshop/",
    },
    {
      title: "Hack La Salle 2024 - Kickoff Event & Creatives Workshop",
      date: "24 Sept 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/hacklasalle.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-hack-la-salle-2024-kickoff-event-amp-creatives-workshop/",
    },
    {
      title: "Game On! USLS 2024",
      date: "20 Sept 2024",
      type: "Hackathon",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/gameon.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-game-on-usls-2024/",
    },
    {
      title: "Hack La Salle 2024",
      date: "16 Sept 2024",
      type: "Hackathon",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/hack2024.png",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-hack-la-salle-2024/",
    },
    {
      title: "University Club Fair - The Capitol Booth & Series of Events",
      date: "9 Sept 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/capitol.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-university-club-fair-the-capitol-booth-amp-series-of-events/",
    },
    {
      title: "Community Events & Lead Workshop, Working Session",
      date: "26 Aug 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/community.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-community-events-amp-lead-workshop-working-session/",
    },
    {
      title: "Mastering UI/UX Etiquette Workshop",
      date: "26 Aug 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/mastering.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-mastering-uiux-etiquette-workshop/",
    },
    {
      title: "Character Design Workshop",
      date: "24 Aug 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/chardesign.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-character-design-workshop/",
    },
    {
      title: "Slack Workshop & Volunteers Onboarding Session",
      date: "17 Aug 2024",
      type: "Workshop / Study Group",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/slack.png",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-slack-workshop-amp-volunteers-onboarding-session/",
    },
    {
      title: "College Freshmen Orientation: Club Booth & Info Session",
      date: "3 Aug 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/breakout.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-college-freshmen-orientation-club-booth-amp-info-session/",
    },
    {
      title:
        "University HEU Orientation Program - Club Promotion & Info Session",
      date: "1 Aug 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/freshmen.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-university-heu-orientation-program-club-promotion-amp-info-session/",
    },
    {
      title: "Next: Navigating Extraordinary Talents",
      date: "1 Aug 2024",
      type: "Info Session",
      location:
        "GDG on Campus University of St. La Salle - Bacolod, Philippines",
      image: "/images/info.jpg",
      link: "https://gdg.community.dev/events/details/google-gdg-on-campus-university-of-st-la-salle-bacolod-philippines-presents-next-navigating-extraordinary-talents/",
    },
  ];

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
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Workshop / Study Group">
                Workshop / Study Group
              </SelectItem>
              <SelectItem value="Conference">Conference</SelectItem>
              <SelectItem value="Info Session">Info Session</SelectItem>
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
