"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import { GraduationCap, Briefcase, Users, Mic, Rocket } from "lucide-react";
import { timelineEvents } from "../constants/timelineData";

const FlowerIcon = ({ progress }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6"
    style={{ transform: `scale(${progress})` }}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M12 8C12 8 14 10 14 12C14 14 12 16 12 16C12 16 10 14 10 12C10 10 12 8 12 8Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

const filterOptions = [
  { type: "all", label: "Todos", icon: null },
  { type: "education", label: "Educação", icon: GraduationCap },
  { type: "career", label: "Carreira", icon: Briefcase },
  { type: "community", label: "Comunidade", icon: Users },
  { type: "talk", label: "Palestras", icon: Mic },
];

export default function Timeline() {
  const [expandedEvent, setExpandedEvent] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState("all");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const filteredEvents = (
    selectedFilter === "all"
      ? timelineEvents
      : timelineEvents.filter((event) => event.type === selectedFilter)
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
            Minha Jornada
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A minha evolução ao longo dos anos
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filterOptions.map((option) => (
            <button
              key={option.type}
              onClick={() => setSelectedFilter(option.type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                selectedFilter === option.type
                  ? "glass-button scale-110 border-primary/50"
                  : "glass-button opacity-70 hover:opacity-100 hover:scale-105"
              }`}
            >
              {option.icon && <option.icon className="w-4 h-4" />}
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
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
