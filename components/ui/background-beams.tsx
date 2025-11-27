"use client";

import { motion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

const paths = [
  "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
  "M-373 -197C-373 -197 -305 208 159 335C623 462 691 867 691 867",
  "M-366 -205C-366 -205 -298 200 166 327C630 454 698 859 698 859",
];

const gradientConfigs = [
  { y2: "98%", duration: 15, delay: 0 },
  { y2: "96%", duration: 18, delay: 0.5 },
  { y2: "99%", duration: 12, delay: 1 },
];

export const BackgroundBeams = ({ className }: { className?: string }) => {

  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 flex items-center justify-center bg-transparent",
        className
      )}
    >
      <svg
        className="pointer-events-none absolute h-full w-full"
        width="100%"
        height="100%"
        viewBox="0 0 696 316"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path, index) => (
          <motion.path
            key={`path-${index}`}
            d={path}
            stroke={`url(#linearGradient-${index})`}
            strokeOpacity="0.4"
            strokeWidth="0.5"
          />
        ))}
        <defs>
          {paths.map((_, index) => (
            <motion.linearGradient
              id={`linearGradient-${index}`}
              key={`gradient-${index}`}
              initial={{
                x1: "0%",
                x2: "0%",
                y1: "0%",
                y2: "0%",
              }}
              animate={{
                x1: ["0%", "100%"],
                x2: ["0%", "95%"],
                y1: ["0%", "100%"],
                y2: ["0%", gradientConfigs[index].y2],
              }}
              transition={{
                duration: gradientConfigs[index].duration,
                ease: "easeInOut",
                repeat: Infinity,
                delay: gradientConfigs[index].delay,
              }}
            >
              <stop stopColor="#8b5cf6" stopOpacity="0"></stop>
              <stop stopColor="#8b5cf6"></stop>
              <stop offset="32.5%" stopColor="#3b82f6"></stop>
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0"></stop>
            </motion.linearGradient>
          ))}
        </defs>
      </svg>
    </div>
  );
};
