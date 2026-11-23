"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import {
  Layers,
  Settings,
  Microscope,
  Presentation,
  Rocket,
} from "lucide-react";
import { useLanguage } from "../providers/LanguageProvider";

const iconMap = {
  Layers,
  Settings,
  Microscope,
  Presentation,
  Rocket,
};

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef(null);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const { dictionary } = useLanguage();

  const featureData = dictionary.featureCarousel.items;

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  const handleDragEnd = () => {
    const currentX = x.get();
    if (currentX > 0) {
      controls.start({
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    } else if (currentX < -width) {
      controls.start({
        x: -width,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      });
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
          {dictionary.featureCarousel.title}
        </h2>
        <motion.div ref={carousel} className="cursor-grab overflow-hidden">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            onDragEnd={handleDragEnd}
            className="flex"
          >
            {featureData.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[300px] h-[400px] p-8 m-4 glass-card rounded-3xl flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out hover:border-primary/20"
              >
                <div>
                  <div className="mb-4 text-primary">
                    {(() => {
                      const Icon = iconMap[feature.icon];
                      return Icon ? <Icon className="w-10 h-10" /> : null;
                    })()}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
