"use client";

import { CardContainer, CardBody, CardItem } from "@/components/ui/card-3d";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with real-time inventory",
    fullDescription: "A full-featured e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard. Optimized for performance with 95+ Lighthouse scores.",
    image: "/placeholder-project-1.jpg",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "SaaS Dashboard",
    description: "Analytics dashboard with beautiful data visualizations",
    fullDescription: "A comprehensive SaaS analytics dashboard featuring interactive charts, real-time data updates, and customizable widgets. Built with modern React patterns and optimized for large datasets.",
    image: "/placeholder-project-2.jpg",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "Portfolio CMS",
    description: "Headless CMS for creative professionals",
    fullDescription: "A flexible headless CMS designed for creative professionals to showcase their work. Features drag-and-drop content management, custom templates, and seamless media handling.",
    image: "/placeholder-project-3.jpg",
    tags: ["TypeScript", "GraphQL", "Prisma", "AWS"],
    github: "#",
    live: "#",
  },
];

export function Projects() {
  return (
    <section className="relative w-full bg-black px-4 py-20">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            A selection of my recent work
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <CardContainer className="inter-var">
                <CardBody className="group/card relative h-auto w-auto rounded-xl border border-neutral-800 bg-neutral-900 p-6">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-white"
                  >
                    {project.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm text-neutral-400"
                  >
                    {project.description}
                  </CardItem>
                  <CardItem translateZ="100" className="mt-4 w-full">
                    <div className="relative h-48 w-full overflow-hidden rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                      <div className="flex h-full items-center justify-center text-neutral-500">
                        Project Preview
                      </div>
                    </div>
                  </CardItem>
                  <CardItem translateZ="50" className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-neutral-800 text-neutral-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </CardItem>
                  <div className="mt-6 flex items-center justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <CardItem
                          translateZ={20}
                          as="button"
                          className="rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 px-4 py-2 text-sm font-bold text-white"
                        >
                          View Details
                        </CardItem>
                      </DialogTrigger>
                      <DialogContent className="border-neutral-800 bg-neutral-900 text-white">
                        <DialogHeader>
                          <DialogTitle>{project.title}</DialogTitle>
                          <DialogDescription className="text-neutral-400">
                            {project.fullDescription}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="mt-4 flex gap-4">
                          <a
                            href={project.github}
                            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
                          >
                            <Github className="h-4 w-4" />
                            GitHub
                          </a>
                          <a
                            href={project.live}
                            className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white"
                          >
                            <ExternalLink className="h-4 w-4" />
                            Live Demo
                          </a>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.live}
                      className="text-sm text-neutral-400 hover:text-white"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </CardItem>
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
