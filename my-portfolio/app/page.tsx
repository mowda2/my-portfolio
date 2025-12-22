"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  MapPin,
  X,
  Command,
  ArrowRight,
  Brain,
  Code2,
  Cpu,
  ChevronDown,
  Play,
  Trophy,
  Calendar,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NeuralBackground, FloatingNodes, SectionConnector } from "@/components/neural-background";

/** ==========================================================
 * DATA
 * ========================================================== */
const DATA = {
  name: "Mohammed Owda",
  role: "Software Engineering @ Western University",
  descriptors: [
    "Building intelligent systems",
    "Designing human-centered interfaces",
    "Shipping production code",
  ],
  location: "London, ON, Canada",
  contacts: {
    email: "mowda2@uwo.ca",
    phone: "+1 (226) 977-4351",
    github: "https://github.com/mowda2",
    linkedin: "https://www.linkedin.com/in/mohammedowda",
    resumeUrl: "/Mohammed_Owda_Resume.pdf",
  },

  highlights: [
    {
      icon: Brain,
      title: "AI / Vision Systems",
      description: "YOLOv11 pipelines, thermal detection, federated learning architectures",
      color: "cyan",
    },
    {
      icon: Code2,
      title: "Full-Stack Development",
      description: "Next.js, FastAPI, real-time WebSockets, PostgreSQL",
      color: "amber",
    },
    {
      icon: Cpu,
      title: "Research & Robotics",
      description: "ROS 2 integration, edge deployment, NVIDIA hardware",
      color: "cyan",
    },
  ],

  skills: {
    Languages: ["Python", "C/C++", "Java", "TypeScript", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "FastAPI", "TailwindCSS"],
    "AI/ML": ["OpenCV", "YOLOv11", "PyTorch", "ONNX", "Federated Learning"],
    Infrastructure: ["ROS 2", "Docker", "AWS", "PostgreSQL", "WebSockets"],
  },

  experience: [
    {
      org: "Western University – Intelligent/Autonomous Systems Lab",
      title: "Undergraduate Research Assistant",
      start: "May 2025",
      end: "Present",
      points: [
        "Built a multiview AI dashboard for thermal + RGB streams (Next.js + FastAPI, WebSockets) with real-time YOLOv11 overlays and event logging.",
        "Developed a ROS 2 (rclpy) pipeline with parameterized launch files for dynamic multi-camera discovery and synchronized topics.",
        "Published detection messages and improved throughput for NVIDIA hardware deployments.",
      ],
      media: [
        { type: "video", src: "/videos/Dashboard Demo.mp4", poster: "/images/videoAnalyzed.png" },
        { type: "image", src: "/images/videoAnalyzed.png" },
      ],
    },
    {
      org: "Western Engineering Competition (WEC)",
      title: "VP Technical (Website & LMS)",
      start: "Mar 2025",
      end: "Present",
      points: [
        "Built and maintained the public site and LMS pages; handled 650+ registrations throughout event weekend.",
        "Streamlined content updates, schedules, and resources for competitors and volunteers.",
      ],
      images: ["/images/wechome.png"],
      links: [{ label: "Visit website", href: "https://www.westernengineeringcompetition.ca/" }],
    },
    {
      org: "DECO Repair",
      title: "Sales Representative",
      start: "Apr 2024",
      end: "Sept 2024",
      points: [
        "Generated $13k+ in sales, consistently exceeding daily targets through customer engagement and upselling.",
      ],
      images: ["/images/decoPic.PNG"],
    },
  ],

  projects: [
    {
      name: "Object Detection Dashboard",
      impact: "Real-time multi-camera AI analysis platform",
      bullets: [
        { title: "ROS Live Pipeline", text: "stream and analyze real-time camera feeds with ROS 2 integration." },
        { title: "Offline Analysis", text: "upload videos for object detection and automated batch processing." },
        { title: "Library System", text: "store, organize, and revisit past analyses with saved results." },
      ],
      tags: ["Next.js", "FastAPI", "WebSockets", "OpenCV", "YOLO", "Docker"],
      links: [{ label: "GitHub", href: "https://github.com/mowda2/Object-Detection-Dashboard" }],
      featured: true,
      video: "/videos/Dashboard Demo.mp4",
      poster: "/images/videoAnalyzed.png",
    },
    {
      name: "Thermal Road-User Detection",
      impact: "1st Place — GM & OVIN Automotive Innovation Challenge",
      bullets: [
        { title: "Thermal Sensing", text: "privacy-preserving road-user detection for day/night conditions." },
        { title: "Edge Optimization", text: "YOLOv11 pruned + FP16; ONNX + NCNN pipeline on Raspberry Pi 5." },
        { title: "Federated Learning", text: "Flower-based FL for privacy-preserving model updates." },
      ],
      tags: ["Thermal", "Raspberry Pi", "YOLOv11", "ONNX", "Federated Learning", "C++"],
      links: [{ label: "GitHub", href: "https://github.com/BenjaminNamayandev/AIC-GM-Comp2025" }],
      featured: true,
    },
    {
      name: "QCare – ER Virtual Waiting Room",
      impact: "1st Place — Western MSA Hackathon (SinaAI)",
      bullets: [
        { title: "AI-Assisted Triage", text: "CTAS-inspired severity scoring with automated intake." },
        { title: "Clinician Dashboard", text: "live queue view and auto-escalation for high-risk patients." },
        { title: "Structured Records", text: "secure data flow with templated notes and audit-ready logs." },
      ],
      tags: ["React", "Flask", "SQLAlchemy", "OpenAI"],
      links: [{ label: "GitHub", href: "https://github.com/omarHossain123/msa_hack.git" }],
      featured: true,
    },
    {
      name: "Vinculum",
      impact: "1st Place — HackWestern (Canada Life Stream)",
      bullets: [
        { title: "Shared Presence", text: "multi-user 2D space with synchronized avatars." },
        { title: "Live Comms", text: "WebRTC voice chat and WebSocket-driven state." },
        { title: "Fast Rendering", text: "Pixi.js canvas with smooth animations." },
      ],
      tags: ["React", "Node.js", "WebSockets", "WebRTC", "Pixi.js"],
      links: [{ label: "GitHub", href: "https://github.com/mowda2/Vinculum.git" }],
    },
    {
      name: "Western Baja E-Commerce",
      impact: "Full-stack platform for student racing team",
      bullets: [
        { title: "Storefront + Admin", text: "merch & parts ordering with role-based access." },
        { title: "Service Architecture", text: "RESTful APIs, centralized auth, containerized services." },
      ],
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      links: [{ label: "Website", href: "https://www.bajasae.net/" }],
      note: "Private repository — student IP protection",
    },
  ],

  volunteering: [
    { org: "Engineers Without Borders", role: "VP Projects & Software Advisor", logo: "/images/ewb-1.PNG" },
    { org: "Western Foot Patrol", role: "Operations Manager", logo: "/images/footpatrol-1.jpg" },
    { org: "CELC 2025", role: "Director of Finance", logo: "/images/CELC-1.jpeg" },
    { org: "Kurdish Club", role: "Vice President", logo: "/images/kurdpic-1.PNG" },
    { org: "UES Sustainability", role: "Director of Outreach", logo: "/images/sustain-1.png" },
  ],

  awards: [
    { title: "1st — GM & OVIN Automotive Innovation Challenge", image: "/images/inovchallenge.PNG" },
    { title: "1st — Western MSA Hackathon (QCare)", image: "/images/MsaHack.PNG" },
    { title: "1st — HackWestern (Vinculum)", image: "/images/HackWestern.PNG" },
    { title: "Dean's Honor List", image: "/images/Deanshonorlistr.png" },
  ],
};

/** ==========================================================
 * Utility Components
 * ========================================================== */

// Typing effect for hero descriptor
function TypeWriter({ words }: { words: string[] }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < word.length) {
          setCurrentText(word.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(word.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="text-[#00E5CC]">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

// Lightbox
function Lightbox({ open, src, onClose }: { open: boolean; src: string; onClose: () => void }) {
  if (!open) return null;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full border border-white/10 bg-background/80 p-2 hover:bg-white/10 transition-colors"
        onClick={onClose}
      >
        <X className="h-5 w-5" />
      </button>
      <img
        src={src}
        alt="Preview"
        className="max-h-[90vh] max-w-[92vw] rounded-xl"
        onClick={(e) => e.stopPropagation()}
      />
    </motion.div>
  );
}

// Command Palette
function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      if ((isMac && e.metaKey && e.key === "k") || (!isMac && e.ctrlKey && e.key === "k")) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
    { label: "Download Resume", href: DATA.contacts.resumeUrl },
  ];

  const filtered = items.filter((i) => i.label.toLowerCase().includes(query.toLowerCase()));

  if (!open) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh] px-4 bg-black/60 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: -20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="w-full max-w-lg glass rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 p-4 border-b border-white/10">
          <Command className="h-4 w-4 text-[#00E5CC]" />
          <Input
            autoFocus
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="bg-transparent border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <kbd className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">esc</kbd>
        </div>
        <div className="max-h-72 overflow-auto p-2">
          {filtered.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <ArrowRight className="h-4 w-4 text-[#8A8F98] group-hover:text-[#00E5CC] transition-colors" />
              <span>{item.label}</span>
            </a>
          ))}
          {!filtered.length && (
            <div className="px-4 py-6 text-center text-[#8A8F98]">No results found</div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// Section wrapper
function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id={id}
      ref={ref}
      className={`py-20 md:py-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {children}
      </motion.div>
    </section>
  );
}

// Section header
function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 md:mb-16">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-2 text-[#8A8F98]">{subtitle}</p>}
      <div className="mt-4 h-px w-16 bg-gradient-to-r from-[#00E5CC] to-transparent" />
    </div>
  );
}

/** ==========================================================
 * Hero Section
 * ========================================================== */
function HeroSection() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);
  const y = useTransform(scrollY, [0, 400], [0, 100]);

  return (
    <motion.section
      style={{ opacity, y }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <FloatingNodes />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            className="lg:col-span-3 text-center lg:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-[#8A8F98] mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E5CC] animate-pulse" />
              Open to opportunities
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]">
              {DATA.name}
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-[#8A8F98]">
              <TypeWriter words={DATA.descriptors} />
            </p>

            <p className="mt-4 text-[#8A8F98] flex items-center justify-center lg:justify-start gap-2">
              <MapPin className="h-4 w-4" />
              {DATA.location} · 3rd Year {DATA.role}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <a href="#projects">
                <Button className="bg-[#00E5CC] text-[#0D0D0F] hover:bg-[#00E5CC]/90 gap-2 group">
                  View Projects
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href={DATA.contacts.resumeUrl}>
                <Button variant="outline" className="border-white/10 hover:bg-white/5 gap-2">
                  Resume
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4">
              <a
                href={DATA.contacts.github}
                target="_blank"
                className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={DATA.contacts.linkedin}
                target="_blank"
                className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${DATA.contacts.email}`}
                className="p-3 rounded-full glass hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          {/* Right: Headshot */}
          <motion.div
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00E5CC]/40 to-[#FFAA00]/20 blur-2xl" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-2 ring-[#00E5CC]/30 ring-offset-4 ring-offset-[#0D0D0F]">
                <img
                  src="/images/Headshot.jpg"
                  alt="Mohammed Owda"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating badge */}
              <motion.div
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-full glass text-sm font-medium"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <span className="text-[#00E5CC]">3x</span> Hackathon Winner
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="h-6 w-6 text-[#8A8F98]" />
      </motion.div>
    </motion.section>
  );
}

/** ==========================================================
 * Signal Cards (About/Highlights)
 * ========================================================== */
function SignalCards() {
  return (
    <Section id="about">
      <SectionHeader title="What I Do" subtitle="Core competencies and focus areas" />
      
      <div className="grid md:grid-cols-3 gap-6">
        {DATA.highlights.map((highlight, i) => (
          <motion.div
            key={highlight.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Card className="glass-card h-full group hover:border-[#00E5CC]/30 transition-colors">
              <CardContent className="p-6">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                    highlight.color === "cyan"
                      ? "bg-[#00E5CC]/10 text-[#00E5CC]"
                      : "bg-[#FFAA00]/10 text-[#FFAA00]"
                  }`}
                >
                  <highlight.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{highlight.title}</h3>
                <p className="text-[#8A8F98] text-sm leading-relaxed">{highlight.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/** ==========================================================
 * Experience Timeline
 * ========================================================== */
function ExperienceSection() {
  const [expanded, setExpanded] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Section id="experience">
      <SectionHeader title="Experience" subtitle="Where I've made an impact" />
      
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#00E5CC] via-[#00E5CC]/50 to-transparent">
          <motion.div
            className="absolute top-0 w-full h-20 bg-[#00E5CC]"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        <div className="space-y-8">
          {DATA.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-8 md:pl-20"
            >
              {/* Timeline node */}
              <div className="absolute left-0 md:left-8 top-2 -translate-x-1/2">
                <div className="w-4 h-4 rounded-full bg-[#0D0D0F] border-2 border-[#00E5CC] ring-4 ring-[#00E5CC]/20" />
              </div>

              <Card
                className={`glass-card cursor-pointer transition-all duration-300 ${
                  expanded === i ? "border-[#00E5CC]/40" : "hover:border-white/20"
                }`}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <CardContent className="p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <p className="text-[#00E5CC] text-sm">{job.org}</p>
                    </div>
                    <span className="text-sm text-[#8A8F98] flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {job.start} – {job.end}
                    </span>
                  </div>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ul className="mt-4 space-y-2 text-sm text-[#8A8F98]">
                          {job.points.map((point, idx) => (
                            <li key={idx} className="flex gap-2">
                              <span className="text-[#00E5CC] mt-1">›</span>
                              {point}
                            </li>
                          ))}
                        </ul>

                        {/* Media */}
                        {((job as any).media || (job as any).images) && (
                          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                            {((job as any).media || (job as any).images?.map((src: string) => ({ type: "image", src }))).map(
                              (m: any, k: number) =>
                                m.type === "video" ? (
                                  <video
                                    key={k}
                                    className="rounded-lg w-full h-24 object-cover"
                                    controls
                                    playsInline
                                    poster={m.poster}
                                  >
                                    <source src={encodeURI(m.src)} type="video/mp4" />
                                  </video>
                                ) : (
                                  <button
                                    key={k}
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      setLightbox(m.src);
                                    }}
                                    className="rounded-lg overflow-hidden hover:ring-2 ring-[#00E5CC]/50 transition-all"
                                  >
                                    <img src={m.src} alt="" className="w-full h-24 object-cover" />
                                  </button>
                                )
                            )}
                          </div>
                        )}

                        {(job as any).links && (
                          <div className="mt-4 flex gap-2">
                            {(job as any).links.map((l: any, k: number) => (
                              <a key={k} href={l.href} target="_blank" onClick={(e) => e.stopPropagation()}>
                                <Button size="sm" variant="outline" className="gap-1 text-xs">
                                  {l.label} <ExternalLink className="h-3 w-3" />
                                </Button>
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {expanded !== i && (
                    <p className="mt-2 text-sm text-[#8A8F98]">Click to expand</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox open={!!lightbox} src={lightbox || ""} onClose={() => setLightbox(null)} />
    </Section>
  );
}

/** ==========================================================
 * Projects Bento Grid
 * ========================================================== */
function ProjectsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  return (
    <Section id="projects">
      <SectionHeader title="Projects" subtitle="Selected builds and case work" />
      
      {/* Bento Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DATA.projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={project.featured ? "md:col-span-2 lg:col-span-1 lg:row-span-1" : ""}
          >
            <Card className="glass-card h-full group hover:border-[#00E5CC]/30 transition-all duration-300 overflow-hidden">
              {/* Video/Image preview for featured projects */}
              {project.video && (
                <div className="relative aspect-video bg-black/50">
                  {playingVideo === i ? (
                    <video
                      className="w-full h-full object-cover"
                      controls
                      autoPlay
                      playsInline
                    >
                      <source src={encodeURI(project.video)} type="video/mp4" />
                    </video>
                  ) : (
                    <button
                      className="relative w-full h-full"
                      onClick={() => setPlayingVideo(i)}
                    >
                      <img
                        src={project.poster}
                        alt={project.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
                        <div className="w-14 h-14 rounded-full bg-[#00E5CC] flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Play className="h-6 w-6 text-[#0D0D0F] ml-1" />
                        </div>
                      </div>
                    </button>
                  )}
                </div>
              )}

              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  {project.impact && project.impact.includes("1st") && (
                    <Trophy className="h-5 w-5 text-[#FFAA00] flex-shrink-0" />
                  )}
                </div>
                
                <p className="mt-1 text-sm text-[#00E5CC]">{project.impact}</p>

                <ul className="mt-4 space-y-2 text-sm text-[#8A8F98]">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>
                      <span className="text-foreground font-medium">{bullet.title}</span>
                      {" — "}
                      {bullet.text}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-white/5 text-[#8A8F98] border-white/10 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Hover CTA */}
                <div className="mt-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank">
                      <Button
                        size="sm"
                        className="bg-[#00E5CC] text-[#0D0D0F] hover:bg-[#00E5CC]/90 gap-1"
                      >
                        {link.label} <ArrowRight className="h-3 w-3" />
                      </Button>
                    </a>
                  ))}
                </div>

                {project.note && (
                  <p className="mt-3 text-xs text-[#8A8F98] italic">{project.note}</p>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/** ==========================================================
 * Skills Node Graph
 * ========================================================== */
function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = Object.keys(DATA.skills);

  return (
    <Section id="skills">
      <SectionHeader title="Skills" subtitle="Technologies I work with" />
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Category buttons */}
        <div className="space-y-4">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(activeCategory === category ? null : category)}
              className={`w-full text-left p-4 rounded-xl transition-all ${
                activeCategory === category
                  ? "glass-card border-[#00E5CC]/40"
                  : "glass hover:bg-white/5"
              }`}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{category}</span>
                <span className="text-sm text-[#8A8F98]">
                  {(DATA.skills as any)[category].length} skills
                </span>
              </div>
              
              <AnimatePresence>
                {activeCategory === category && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 flex flex-wrap gap-2"
                  >
                    {(DATA.skills as any)[category].map((skill: string) => (
                      <motion.span
                        key={skill}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                          hoveredSkill === skill
                            ? "bg-[#00E5CC] text-[#0D0D0F]"
                            : "bg-white/5 border border-white/10"
                        }`}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          ))}
        </div>

        {/* Visual node graph */}
        <div className="relative h-80 md:h-auto glass rounded-2xl overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-full h-full" viewBox="0 0 400 400">
              {/* Connection lines */}
              {categories.map((cat, i) => {
                const angle = (i * 360) / categories.length;
                const x = 200 + Math.cos((angle * Math.PI) / 180) * 100;
                const y = 200 + Math.sin((angle * Math.PI) / 180) * 100;
                return (
                  <motion.line
                    key={cat}
                    x1="200"
                    y1="200"
                    x2={x}
                    y2={y}
                    stroke={activeCategory === cat ? "#00E5CC" : "#333"}
                    strokeWidth="1"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                  />
                );
              })}
              
              {/* Center node */}
              <circle cx="200" cy="200" r="30" fill="#141418" stroke="#00E5CC" strokeWidth="2" />
              <text x="200" y="205" textAnchor="middle" fill="#F5F5F7" fontSize="10" fontWeight="600">
                Skills
              </text>
              
              {/* Category nodes */}
              {categories.map((cat, i) => {
                const angle = (i * 360) / categories.length;
                const x = 200 + Math.cos((angle * Math.PI) / 180) * 100;
                const y = 200 + Math.sin((angle * Math.PI) / 180) * 100;
                const isActive = activeCategory === cat;
                
                return (
                  <g key={cat}>
                    <motion.circle
                      cx={x}
                      cy={y}
                      r={isActive ? 25 : 20}
                      fill={isActive ? "#00E5CC" : "#1A1A1F"}
                      stroke={isActive ? "#00E5CC" : "#333"}
                      strokeWidth="2"
                      whileHover={{ scale: 1.1 }}
                      style={{ cursor: "pointer" }}
                      onClick={() => setActiveCategory(isActive ? null : cat)}
                    />
                    <text
                      x={x}
                      y={y + 4}
                      textAnchor="middle"
                      fill={isActive ? "#0D0D0F" : "#8A8F98"}
                      fontSize="8"
                      fontWeight="500"
                      style={{ pointerEvents: "none" }}
                    >
                      {cat.slice(0, 6)}
                    </text>
                    
                    {/* Skill nodes around category */}
                    {isActive &&
                      (DATA.skills as any)[cat].slice(0, 5).map((skill: string, j: number) => {
                        const skillAngle = angle + ((j - 2) * 25);
                        const sx = x + Math.cos((skillAngle * Math.PI) / 180) * 50;
                        const sy = y + Math.sin((skillAngle * Math.PI) / 180) * 50;
                        
                        return (
                          <motion.g
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: j * 0.05 }}
                          >
                            <line x1={x} y1={y} x2={sx} y2={sy} stroke="#00E5CC" strokeWidth="0.5" opacity="0.5" />
                            <circle cx={sx} cy={sy} r="12" fill="#141418" stroke="#00E5CC" strokeWidth="1" />
                            <text
                              x={sx}
                              y={sy + 3}
                              textAnchor="middle"
                              fill="#F5F5F7"
                              fontSize="5"
                            >
                              {skill.slice(0, 8)}
                            </text>
                          </motion.g>
                        );
                      })}
                  </g>
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </Section>
  );
}

/** ==========================================================
 * Awards Section
 * ========================================================== */
function AwardsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <Section id="awards">
      <SectionHeader title="Awards" subtitle="Recognition and achievements" />
      
      <div className="grid sm:grid-cols-2 gap-6">
        {DATA.awards.map((award, i) => (
          <motion.div
            key={award.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="glass-card group hover:border-[#FFAA00]/30 transition-colors overflow-hidden">
              <button
                className="w-full"
                onClick={() => setLightbox(award.image)}
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-[#FFAA00]" />
                      <p className="text-sm font-medium text-white">{award.title}</p>
                    </div>
                  </div>
                </div>
              </button>
            </Card>
          </motion.div>
        ))}
      </div>

      <Lightbox open={!!lightbox} src={lightbox || ""} onClose={() => setLightbox(null)} />
    </Section>
  );
}

/** ==========================================================
 * Volunteering Section
 * ========================================================== */
function VolunteeringSection() {
  return (
    <Section id="volunteering">
      <SectionHeader title="Leadership & Community" subtitle="Giving back and growing together" />
      
      <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
        {DATA.volunteering.map((vol, i) => (
          <motion.div
            key={vol.org}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="flex-shrink-0"
          >
            <Card className="glass-card w-64 hover:border-white/20 transition-colors">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl overflow-hidden bg-white/5 flex-shrink-0">
                    <img src={vol.logo} alt={vol.org} className="w-full h-full object-cover" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-sm truncate">{vol.org}</p>
                    <p className="text-xs text-[#8A8F98] truncate">{vol.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

/** ==========================================================
 * Contact Section
 * ========================================================== */
function ContactSection() {
  return (
    <Section id="contact" className="relative">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#00E5CC]/5 to-transparent rounded-3xl" />
      
      <div className="relative text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold">Let&apos;s build something.</h2>
          <p className="mt-4 text-[#8A8F98]">
            I&apos;m always excited to collaborate on innovative projects. Whether it&apos;s AI, robotics, or full-stack development — let&apos;s talk.
          </p>
          
          <a
            href={`mailto:${DATA.contacts.email}`}
            className="inline-block mt-8 text-2xl md:text-3xl font-medium text-[#00E5CC] hover:underline"
          >
            {DATA.contacts.email}
          </a>
          
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href={DATA.contacts.github}
              target="_blank"
              className="p-4 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={DATA.contacts.linkedin}
              target="_blank"
              className="p-4 rounded-full glass hover:bg-white/10 transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
          
          <div className="mt-12">
            <a href={DATA.contacts.resumeUrl}>
              <Button className="bg-[#FFAA00] text-[#0D0D0F] hover:bg-[#FFAA00]/90 gap-2 text-lg px-8 py-6">
                Download Resume
                <ExternalLink className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/** ==========================================================
 * Footer
 * ========================================================== */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-wrap items-center justify-between gap-4 text-sm text-[#8A8F98]">
        <p>© {new Date().getFullYear()} Mohammed Owda. Built with Next.js & Framer Motion.</p>
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">⌘</kbd>
          <span>+</span>
          <kbd className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">K</kbd>
          <span className="ml-2">to navigate</span>
        </div>
      </div>
    </footer>
  );
}

/** ==========================================================
 * Navigation
 * ========================================================== */
function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["About", "#about"],
    ["Experience", "#experience"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Awards", "#awards"],
    ["Contact", "#contact"],
  ];

  return (
    <motion.header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 ${
        scrolled ? "w-auto" : "w-full max-w-6xl px-4"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <nav
        className={`glass rounded-full py-2 px-4 flex items-center gap-2 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <a href="#" className="font-bold text-[#00E5CC] px-2">MO</a>
        
        <div className="hidden md:flex items-center gap-1 ml-4">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="px-3 py-1.5 rounded-full text-sm text-[#8A8F98] hover:text-foreground hover:bg-white/5 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>
        
        <div className="ml-auto flex items-center gap-2">
          <a href={DATA.contacts.resumeUrl} className="hidden sm:block">
            <Button size="sm" className="bg-[#00E5CC] text-[#0D0D0F] hover:bg-[#00E5CC]/90">
              Resume
            </Button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}

/** ==========================================================
 * Main Page
 * ========================================================== */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0D0D0F] text-[#F5F5F7]">
      <NeuralBackground />
      <CommandPalette />
      <Navigation />
      
      <main>
        <HeroSection />
        <SectionConnector />
        <SignalCards />
        <SectionConnector />
        <ExperienceSection />
        <SectionConnector />
        <ProjectsSection />
        <SectionConnector />
        <SkillsSection />
        <SectionConnector />
        <AwardsSection />
        <VolunteeringSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
