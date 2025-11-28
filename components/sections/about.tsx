"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Globe } from "lucide-react";
import Image from "next/image";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Building responsive, performant web applications with React, Next.js, and TypeScript",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Creating beautiful, intuitive interfaces that users love",
    tags: ["Figma", "Design Systems", "Prototyping"],
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Optimizing for speed, accessibility, and SEO",
    tags: ["Core Web Vitals", "A11y", "SEO"],
  },
  {
    icon: Globe,
    title: "Full Stack",
    description: "End-to-end development from concept to deployment",
    tags: ["Node.js", "APIs", "Databases", "DevOps"],
  },
];

export function About() {
  return (
    <section className="relative w-full bg-gradient-to-b from-black via-neutral-950 to-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <div className="mb-8 flex justify-center">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 blur-2xl opacity-50"></div>
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-neutral-800 bg-neutral-900">
                <Image
                  src="/OWNERIMAGE.jpg"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
          <h2 className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group h-full border-neutral-800 bg-neutral-900/50 backdrop-blur-sm transition-all hover:border-rose-500/50 hover:bg-neutral-900">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-amber-500">
                    <skill.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm text-neutral-400">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
