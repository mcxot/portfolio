"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { motion } from "framer-motion";
import { Mail, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const socialLinks = [
  { icon: Mail, href: "mailto:hello@destudios.com", label: "Email" },
  { icon: MessageCircle, href: "https://wa.me/1234567890", label: "WhatsApp" },
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative w-full overflow-hidden bg-black px-4 py-20">
      <BackgroundBeams className="absolute inset-0" />
      
      <div className="relative z-10 mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="bg-gradient-to-r from-rose-400 to-amber-500 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-neutral-400">
            Let&apos;s create something amazing together
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-neutral-300">
                  Name
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="border-neutral-700 bg-neutral-900/50 text-white backdrop-blur-sm focus:border-rose-500"
                  placeholder="Your name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-neutral-300">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-neutral-700 bg-neutral-900/50 text-white backdrop-blur-sm focus:border-rose-500"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-neutral-300">
                  Message
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-[150px] border-neutral-700 bg-neutral-900/50 text-white backdrop-blur-sm focus:border-rose-500"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full rounded-lg bg-gradient-to-r from-rose-500 to-amber-500 px-6 py-3 font-semibold text-white transition-all hover:shadow-lg hover:shadow-rose-500/50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >
            <h3 className="mb-6 text-2xl font-bold text-white">Connect With Me</h3>
            <p className="mb-8 text-neutral-400">
              Feel free to reach out through any of these platforms. I&apos;m always open to discussing new projects and opportunities.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4 backdrop-blur-sm transition-colors hover:border-rose-500/50"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-rose-500 to-amber-500">
                    <social.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-medium text-neutral-300">
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
