"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const services = [
  {
    id: "design",
    label: "Design",
    title: "UI/UX Design",
    description: "Beautiful, user-centered design solutions",
    features: [
      "User Research & Analysis",
      "Wireframing & Prototyping",
      "Design Systems",
      "Responsive Design",
      "Accessibility Standards",
      "Brand Identity",
    ],
    price: "Starting at $2,500",
  },
  {
    id: "development",
    label: "Development",
    title: "Web Development",
    description: "Modern, performant web applications",
    features: [
      "React & Next.js Development",
      "TypeScript Implementation",
      "API Integration",
      "Performance Optimization",
      "SEO Best Practices",
      "Testing & QA",
    ],
    price: "Starting at $5,000",
  },
  {
    id: "fullstack",
    label: "Full Stack",
    title: "Complete Solutions",
    description: "End-to-end project delivery",
    features: [
      "Full Design & Development",
      "Backend Architecture",
      "Database Design",
      "Cloud Deployment",
      "Maintenance & Support",
      "Analytics Integration",
    ],
    price: "Starting at $10,000",
  },
];

export function Services() {
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
          <h2 className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Services
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Tailored solutions for your digital needs
          </p>
        </motion.div>

        <Tabs defaultValue="design" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-900 p-1">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-rose-500 data-[state=active]:to-amber-500"
              >
                {service.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-2xl text-white">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-neutral-400">
                          {service.description}
                        </CardDescription>
                      </div>
                      <Badge className="bg-gradient-to-r from-rose-500 to-amber-500 text-white">
                        {service.price}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {service.features.map((feature) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 rounded-lg bg-neutral-800/50 p-3"
                        >
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-rose-500 to-amber-500">
                            <Check className="h-4 w-4 text-white" />
                          </div>
                          <span className="text-sm text-neutral-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-rose-500/50"
                      >
                        Get Started
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
