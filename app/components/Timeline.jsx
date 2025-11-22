"use client";

import { useState, useRef } from "react";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { GraduationCap, Briefcase, Users, Mic, Rocket } from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const FILTER_ICON_MAP = {
  GraduationCap,
  Briefcase,
  Users,
  Mic,
};

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const containerRef = useRef(null);
  const { dictionary } = useLanguage();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filters = dictionary.timeline.filters.map((filter) => ({
    ...filter,
    Icon: filter.icon ? FILTER_ICON_MAP[filter.icon] ?? null : null,
  }));

  const events = dictionary.timeline.events;

  const filteredEvents = (
    selectedFilter === "all"
      ? events
      : events.filter((event) => event.type === selectedFilter)
  ).sort((a, b) => b.year - a.year);

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="py-20 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            {dictionary.timeline.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dictionary.timeline.subtitle}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedFilter(option.value)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                selectedFilter === option.value
                  ? "glass-button scale-110 border-primary/50"
                  : "glass-button opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              {option.Icon && <option.Icon className="w-4 h-4" />}
              <span className="text-sm font-medium">{option.label}</span>
            </button>
          ))}
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary/30" />

          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-primary origin-top"
            style={{ scaleY: scaleX }}
          />

          {filteredEvents.map((event, index) => (
            <TimelineEvent
              key={index}
              event={event}
              index={index}
              isExpanded={expandedEvent === index}
              onToggle={() =>
                setExpandedEvent(expandedEvent === index ? null : index)
              }
              isLast={index === filteredEvents.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineEvent({ event, index, isExpanded, onToggle, isLast }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isLeft = index % 2 === 0;

  const iconMap = {
    education: <GraduationCap className="w-4 h-4 text-primary" />,
    career: <Briefcase className="w-4 h-4 text-primary" />,
    community: <Users className="w-4 h-4 text-primary" />,
    talk: <Mic className="w-4 h-4 text-primary" />,
    project: <Rocket className="w-4 h-4 text-primary" />,
  };

  return (
    <motion.div
      ref={ref}
      className={`mb-8 flex justify-between items-center w-full relative ${
        isLeft ? "flex-row-reverse" : ""
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
    >
      <div className="w-5/12" />

      <div className="z-20 relative">
        <motion.div
          className={`absolute top-1/2 -translate-y-1/2 h-0.5 bg-primary/40 ${
            isLeft ? "right-8 origin-right" : "left-8 origin-left"
          }`}
          style={{ width: "calc(41.666% - 2rem)" }}
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />

        <motion.div
          className="flex items-center justify-center w-8 h-8 bg-primary rounded-full shadow-lg"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 }}
        >
          <div className="w-3 h-3 bg-background rounded-full" />
        </motion.div>
      </div>

      <motion.div
        className="w-5/12 cursor-pointer relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onToggle}
      >
        <motion.div
          className="absolute inset-0 bg-primary/5 rounded-lg blur-xl"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        <div className="p-4 glass-card rounded-lg relative overflow-hidden">
          <div
            className={`absolute top-0 ${
              isLeft ? "left-0" : "right-0"
            } w-12 h-12 bg-primary/5 ${
              isLeft ? "rounded-br-full" : "rounded-bl-full"
            }`}
          />

          <div className="flex items-center gap-2 mb-2 relative z-10">
            {iconMap[event.type]}
            <span className="font-bold text-primary">{event.year}</span>
          </div>
          <h3 className="text-lg font-semibold mb-1 relative z-10">
            {event.title}
          </h3>
          <p className="text-muted-foreground relative z-10">
            {event.description}
          </p>
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2 text-sm text-muted-foreground relative z-10">
              {event.details}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}
