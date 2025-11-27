"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { MovingBorderButton } from "@/components/ui/moving-border";
import { DottedGlowBackground } from "@/components/ui/dotted-glow-background";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black/[0.96] antialiased">
      <DottedGlowBackground
        className="absolute inset-0"
        gap={20}
        radius={1.5}
        color="rgba(239, 68, 68, 0.3)"
        glowColor="rgba(239, 68, 68, 0.6)"
      />
      <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="white" />
      
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="bg-gradient-to-br from-white via-white to-white/40 bg-clip-text text-4xl font-bold text-transparent md:text-7xl">
            Creative Web Designer
          </h1>
          
          <TextGenerateEffect
            words="Crafting beautiful digital experiences with modern design and cutting-edge technology"
            className="mt-6 text-lg text-neutral-300 md:text-xl"
          />

          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <MovingBorderButton
              borderRadius="1.75rem"
              className="border-neutral-200 bg-black text-white dark:border-slate-800"
            >
              View Projects
            </MovingBorderButton>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="h-16 w-40 rounded-[1.75rem] border border-neutral-700 bg-transparent px-6 text-white transition-colors hover:bg-neutral-900"
            >
              Contact Me
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm text-neutral-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="h-8 w-5 rounded-full border-2 border-neutral-400"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-auto mt-1 h-2 w-1 rounded-full bg-neutral-400"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
