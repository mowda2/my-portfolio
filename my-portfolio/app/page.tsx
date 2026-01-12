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
  Camera,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { NeuralBackground, FloatingNodes, SectionConnector, ScrollProgress, Magnetic } from "@/components/neural-background";

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
      type: "Work",
      start: "May 2025",
      end: "Present",
      points: [
        "Contributed to applied AI research by implementing ROS 2-based pipelines for real-time object detection, multi-camera handling, and thermal imaging analysis.",
        "Built a multiview AI dashboard for thermal + RGB streams (Next.js + FastAPI, WebSockets) with real-time YOLOv11 overlays and event logging.",
        "Developed a ROS 2 (rclpy) pipeline with parameterized launch files for dynamic multi-camera discovery and synchronized topics.",
      ],
      skills: ["ROS", "Python", "C++", "JavaScript", "FastAPI", "Object Detection", "Data Visualization"],
      media: [
        { type: "video", src: "/videos/Dashboard Demo.mp4", poster: "/images/videoAnalyzed.png" },
        { type: "image", src: "/images/videoAnalyzed.png" },
      ],
    },
    {
      org: "RBC",
      title: "Design Thinking Fellow",
      type: "Work",
      start: "Sep 2025",
      end: "Present",
      points: [
        "Exploring how AI and emerging technologies can create new use cases in traditionally non-technical industries through a 3-month design thinking program.",
        "Designed and prototyped Canon Health, a secure patient-doctor platform for managing medical documentation with QR-code access, offline signed payloads, and encryption.",
        "Pitched to Dean Kenneth Coley, Dean of Engineering at Western, receiving valuable feedback.",
      ],
      skills: ["Design Thinking", "Project Management", "Product Development", "Business Innovation", "Pitch Development"],
      media: [
        { type: "image", src: "/images/rbc-pitch-wide.jpg" },
        { type: "image", src: "/images/rbc-pitch-closeup.jpg" },
        { type: "image", src: "/images/rbc-pitch-presenting.jpg" },
      ],
    },
    {
      org: "Western Engineering Competition (WEC)",
      title: "VP Technical",
      type: "Work",
      start: "May 2025",
      end: "Nov 2025",
      points: [
        "Managed the LMS, website, and core systems built over months of prep for 470+ competitors.",
        "Coordinated communication and support systems for competitors.",
        "Oversaw backend operations to keep everything running smoothly.",
        "Volunteered at HackWestern between rounds, helping teams debug code and refine their ideas.",
      ],
      skills: ["Web Development", "Leadership", "Event Management"],
      media: [
        { type: "image", src: "/images/wec-team-group.jpg" },
        { type: "image", src: "/images/wec-team-standing.jpg" },
        { type: "image", src: "/images/wec-audience.jpg" },
      ],
      links: [{ label: "Visit website", href: "https://www.westernengineeringcompetition.ca/" }],
    },
    {
      org: "DECO Windshield Repair",
      title: "Sales Representative",
      type: "Work",
      start: "Mar 2024",
      end: "Sep 2024",
      points: [
        "Utilized CRM software to manage customer interactions and sales pipelines, improving workflow efficiency.",
        "Generated over $15,000 in revenue through personalized customer consultations, providing tailored service recommendations and strengthening client relationships.",
      ],
      skills: ["Communication", "Sales", "Team Building", "Marketing", "Customer Service", "CRM Software"],
      media: [
        { type: "image", src: "/images/decoPic.PNG" },
      ],
    },
  ],

  // Leadership & Volunteering roles
  volunteering: [
    { 
      org: "Engineers Without Borders", 
      role: "VP of Projects", 
      period: "Sep 2023 - Present",
      description: "Directed project teams in designing and deploying technology-driven engineering solutions focused on sustainability and community impact for underserved regions. Expanded STEM outreach by leading workshops and interactive sessions.",
      logo: "/images/ewb-1.PNG",
      gallery: ["/images/ewb-2.PNG"],
    },
    { 
      org: "UES Sustainability Committee", 
      role: "Director of Sustainability", 
      period: "Sep 2025 - Present",
      description: "Organized and led a campuswide Sustainability Hackathon (Campus: Hacked) challenging students to design technical solutions for improving sustainability at Western. Coordinated logistics, partnerships, and judging.",
      logo: "/images/campus-hacked-team.jpg",
      gallery: [],
    },
    { 
      org: "Jordanian Cultural Club Western", 
      role: "Vice President of Outreach", 
      period: "Aug 2025 - Present",
      description: "Responsible for club's outreach efforts including working with sponsors, fundraising for initiatives, and collaboration with other associations.",
      logo: "/images/jcc.jpg",
      gallery: [],
    },
    { 
      org: "Western Foot Patrol", 
      role: "Operations Manager", 
      period: "Sep 2024 - Present",
      description: "Committed to enhancing and maintaining campus safety by providing services for students and staff.",
      logo: "/images/footpatrol-1.jpg",
      gallery: [],
    },
    { 
      org: "Kurdish Student Association", 
      role: "Vice President", 
      period: "Oct 2024 - Present",
      description: "Responsible for managing all teams and operations.",
      logo: "/images/kurdpic-1.PNG",
      gallery: [],
    },
    { 
      org: "CELC 2025", 
      role: "Director of Finance", 
      period: "2024 - 2025",
      description: "Managing financial operations for the Canadian Engineering Leadership Conference.",
      logo: "/images/CELC-1.jpeg",
      gallery: [],
    },
  ],

  // Photo gallery / moments
  gallery: [
    {
      title: "WEC Weekend",
      description: "Supporting 470+ competitors across Ontario at the Western Engineering Competition as part of the organizing team.",
      image: "/images/wec-team-group.jpg",
      date: "Nov 2025",
    },
    {
      title: "Campus: Hacked - Sustainability Hackathon",
      description: "Innovation meets Sustainability at Western Engineering. Students tackled real-world environmental challenges, from smart waste systems to the 'Ride W' carpooling app.",
      image: "/images/campus-hacked-team.jpg",
      images: ["/images/campus-hacked-team.jpg", "/images/sustainability-hack-presentation.gif", "/images/sustainability-hack-ridew.gif"],
      date: "Nov 2025",
    },
    {
      title: "RBC Design Thinking - Canon Health",
      description: "Built Canon Health with my team - a secure patient-doctor platform. Pitched to Dean Kenneth Coley, Dean of Engineering at Western.",
      image: "/images/rbc-pitch-wide.jpg",
      date: "Dec 2025",
    },
    {
      title: "GreenHaX '25 - EWB Hackathon",
      description: "Organized and ran GreenHaX '25, a sustainability-focused hackathon presented by Engineers Without Borders UWO.",
      image: "/images/ewb-2.PNG",
      date: "2025",
    },
    {
      title: "Stupid Hackathon 2025 - 2nd Place",
      description: "Built 'Weldon Seat Sonar' - a webcam app that detects empty chairs and annoys people into leaving. Features hostile UX, fake ads, and a cookie banner that tracks your soul.",
      image: "/images/stupid-hack-app.png",
      images: ["/images/stupid-hack-app.png"],
      date: "Dec 2025",
    },
  ],

  projects: [
    {
      name: "Canon Health",
      impact: "RBC Design Thinking Program — Secure Healthcare Platform",
      bullets: [
        { title: "Patient-Owned Records", text: "data model that pulls records from multiple providers with granular consent." },
        { title: "Document Workflow", text: "scan, upload, request documents with approve/deny access controls." },
        { title: "Security First", text: "2FA (DUO push), TLS/HTTPS encryption, healthcare-grade security." },
      ],
      tags: ["React", "Node.js", "Encryption", "Healthcare", "Design Thinking"],
      links: [{ label: "GitHub", href: "https://github.com/mowda2/canon-health-mpv" }],
      featured: true,
    },
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
      name: "Weldon Seat Sonar",
      impact: "2nd Place — Stupid Hackathon 2025",
      bullets: [
        { title: "Chair Detection", text: "webcam-based empty chair detection using COCO-SSD model." },
        { title: "Hostile UX", text: "intentionally annoying interface with fake ads, popups, and a cookie banner that 'tracks your soul'." },
        { title: "Maximum Chaos", text: "designed to frustrate users into leaving their seats - the stupidest solution to library seating." },
      ],
      tags: ["React", "TensorFlow.js", "Computer Vision", "Bad UX"],
      links: [{ label: "GitHub", href: "https://github.com/stevensalib05/consent-driven-development" }],
      featured: true,
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

  awards: [
    { title: "1st — GM & OVIN Automotive Innovation Challenge", image: "/images/inovchallenge.PNG" },
    { title: "1st — Western MSA Hackathon (QCare)", image: "/images/MsaHack.PNG" },
    { title: "1st — HackWestern (Vinculum)", image: "/images/HackWestern.PNG" },
    { title: "2nd — Stupid Hackathon 2025", image: "/images/stupid-hack-app.png" },
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
              <Magnetic>
                <a
                  href={DATA.contacts.github}
                  target="_blank"
                  className="p-3 rounded-full glass hover:bg-white/10 hover:ring-1 hover:ring-[#00E5CC]/30 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={DATA.contacts.linkedin}
                  target="_blank"
                  className="p-3 rounded-full glass hover:bg-white/10 hover:ring-1 hover:ring-[#00E5CC]/30 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={`mailto:${DATA.contacts.email}`}
                  className="p-3 rounded-full glass hover:bg-white/10 hover:ring-1 hover:ring-[#00E5CC]/30 transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </Magnetic>
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
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [lightbox, setLightbox] = useState<{ images: string[]; currentIndex: number; org: string; role: string } | null>(null);

  const nextImage = () => {
    if (lightbox && lightbox.images.length > 1) {
      setLightbox({
        ...lightbox,
        currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length
      });
    }
  };

  const prevImage = () => {
    if (lightbox && lightbox.images.length > 1) {
      setLightbox({
        ...lightbox,
        currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length
      });
    }
  };

  return (
    <Section id="volunteering">
      <SectionHeader title="Leadership & Community" subtitle="Giving back and growing together" />
      
      <div className="grid sm:grid-cols-2 gap-6">
        {DATA.volunteering.map((vol, i) => {
          const isExpanded = expandedCard === `${vol.org}-${vol.role}`;
          const uniqueKey = `${vol.org}-${vol.role}`;
          const allImages = [vol.logo, ...(vol.gallery || [])];
          
          return (
            <motion.div
              key={uniqueKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="glass-card group hover:border-[#00E5CC]/30 transition-all duration-300 overflow-hidden">
                {/* Main Image - Click to view in lightbox with all images */}
                <button
                  className="w-full"
                  onClick={() => setLightbox({ images: allImages, currentIndex: 0, org: vol.org, role: vol.role })}
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                    <img 
                      src={vol.logo} 
                      alt={vol.org} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0F] via-[#0D0D0F]/40 to-transparent" />
                    
                    {/* Image count badge */}
                    {allImages.length > 1 && (
                      <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white flex items-center gap-1">
                        <Camera className="w-3 h-3" />
                        {allImages.length}
                      </div>
                    )}
                    
                    {/* Click to expand indicator */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-4 h-4 text-[#00E5CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </button>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg leading-tight">{vol.org}</h3>
                      <p className="text-[#00E5CC] text-sm mt-1">{vol.role}</p>
                      {vol.period && (
                        <p className="text-[#8A8F98] text-xs mt-1">{vol.period}</p>
                      )}
                    </div>
                    {vol.description && (
                      <button
                        onClick={() => setExpandedCard(isExpanded ? null : uniqueKey)}
                        className="shrink-0 p-2 rounded-lg hover:bg-white/5 transition-colors"
                      >
                        <ChevronDown className={`h-4 w-4 text-[#8A8F98] transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  
                  {/* Expandable description */}
                  <AnimatePresence>
                    {isExpanded && vol.description && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="text-sm text-[#8A8F98] mt-3 leading-relaxed border-t border-white/10 pt-3">
                          {vol.description}
                        </p>
                        
                        {/* Gallery preview - clickable thumbnails */}
                        {allImages.length > 1 && (
                          <div className="mt-3 flex gap-2 overflow-x-auto pb-2">
                            {allImages.map((img, idx) => (
                              <button
                                key={idx}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setLightbox({ images: allImages, currentIndex: idx, org: vol.org, role: vol.role });
                                }}
                                className="shrink-0 w-20 h-14 rounded-lg overflow-hidden border border-white/10 hover:border-[#00E5CC]/50 transition-colors"
                              >
                                <img src={img} alt={`${vol.org} event ${idx + 1}`} className="w-full h-full object-cover" />
                              </button>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal with Navigation */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation arrows */}
              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronDown className="h-6 w-6 rotate-90" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronDown className="h-6 w-6 -rotate-90" />
                  </button>
                </>
              )}
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={lightbox.images[lightbox.currentIndex]}
                  alt={lightbox.org}
                  className="w-full h-auto max-h-[70vh] object-contain bg-[#141418]"
                />
              </div>
              
              {/* Caption and counter */}
              <div className="mt-4 text-center">
                <h3 className="text-xl font-semibold">{lightbox.org}</h3>
                <p className="text-[#00E5CC] mt-1">{lightbox.role}</p>
                {lightbox.images.length > 1 && (
                  <p className="text-[#8A8F98] text-sm mt-2">
                    {lightbox.currentIndex + 1} / {lightbox.images.length}
                  </p>
                )}
              </div>
              
              {/* Thumbnail dots */}
              {lightbox.images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {lightbox.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox({ ...lightbox, currentIndex: idx })}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === lightbox.currentIndex ? 'bg-[#00E5CC]' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}

/** ==========================================================
 * Gallery / Moments Section
 * ========================================================== */
function GallerySection() {
  const [lightbox, setLightbox] = useState<{ images: string[]; currentIndex: number; title: string; description: string } | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const nextImage = () => {
    if (lightbox && lightbox.images.length > 1) {
      setLightbox({
        ...lightbox,
        currentIndex: (lightbox.currentIndex + 1) % lightbox.images.length
      });
    }
  };

  const prevImage = () => {
    if (lightbox && lightbox.images.length > 1) {
      setLightbox({
        ...lightbox,
        currentIndex: (lightbox.currentIndex - 1 + lightbox.images.length) % lightbox.images.length
      });
    }
  };

  return (
    <Section id="gallery">
      <SectionHeader title="Moments & Events" subtitle="Snapshots from hackathons, conferences, and community events" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-4">
        {DATA.gallery.map((item, i) => {
          const allImages = (item as any).images || [item.image];
          
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group cursor-pointer ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setLightbox({ images: allImages, currentIndex: 0, title: item.title, description: item.description })}
            >
              <div className="relative overflow-hidden rounded-2xl h-full">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Image count badge */}
                {allImages.length > 1 && (
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-black/50 backdrop-blur-sm text-xs text-white flex items-center gap-1">
                    <Camera className="w-3 h-3" />
                    {allImages.length}
                  </div>
                )}
                
                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                  initial={{ opacity: 0.6 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0.6 }}
                />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: hoveredIndex === i ? 0 : 10, opacity: hoveredIndex === i ? 1 : 0.8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs text-[#00E5CC] font-medium">{item.date}</span>
                    <h3 className={`font-semibold leading-tight mt-1 ${i === 0 ? 'text-lg md:text-xl' : 'text-sm'}`}>
                      {item.title}
                    </h3>
                    {hoveredIndex === i && (
                      <motion.p
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#8A8F98] mt-2 text-xs line-clamp-2"
                      >
                        {item.description}
                      </motion.p>
                    )}
                  </motion.div>
                </div>
                
                {/* Expand icon */}
                <motion.div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: hoveredIndex === i ? 1 : 0, scale: hoveredIndex === i ? 1 : 0.8 }}
                >
                  <svg className="w-4 h-4 text-[#00E5CC]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Lightbox Modal with Navigation */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation arrows */}
              {lightbox.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronDown className="h-6 w-6 rotate-90" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-black/70 transition-colors z-10"
                  >
                    <ChevronDown className="h-6 w-6 -rotate-90" />
                  </button>
                </>
              )}
              
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={lightbox.images[lightbox.currentIndex]}
                  alt={lightbox.title}
                  className="w-full h-auto max-h-[75vh] object-contain bg-[#141418]"
                />
              </div>
              
              {/* Caption and counter */}
              <div className="mt-4 text-center max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold">{lightbox.title}</h3>
                <p className="text-[#8A8F98] mt-2">{lightbox.description}</p>
                {lightbox.images.length > 1 && (
                  <p className="text-[#00E5CC] text-sm mt-2">
                    {lightbox.currentIndex + 1} / {lightbox.images.length}
                  </p>
                )}
              </div>
              
              {/* Thumbnail dots */}
              {lightbox.images.length > 1 && (
                <div className="mt-4 flex justify-center gap-2">
                  {lightbox.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setLightbox({ ...lightbox, currentIndex: idx })}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === lightbox.currentIndex ? 'bg-[#00E5CC]' : 'bg-white/30 hover:bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
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
            <Magnetic>
              <a
                href={DATA.contacts.github}
                target="_blank"
                className="p-4 rounded-full glass hover:bg-white/10 hover:ring-1 hover:ring-[#00E5CC]/30 transition-all"
              >
                <Github className="h-6 w-6" />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href={DATA.contacts.linkedin}
                target="_blank"
                className="p-4 rounded-full glass hover:bg-white/10 hover:ring-1 hover:ring-[#00E5CC]/30 transition-all"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </Magnetic>
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
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/5 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#8A8F98]">
          <p>© {new Date().getFullYear()} Mohammed Owda. Built with Next.js & Framer Motion.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">⌘</kbd>
              <span>+</span>
              <kbd className="px-2 py-1 text-xs rounded bg-white/5 border border-white/10">K</kbd>
              <span className="ml-2">to navigate</span>
            </div>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full glass hover:bg-white/10 hover:text-[#00E5CC] transition-all"
              aria-label="Back to top"
            >
              <ChevronDown className="h-4 w-4 rotate-180" />
            </button>
          </div>
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
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = ["about", "experience", "projects", "skills", "awards", "contact"];
      let current = "";
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    ["About", "#about", "about"],
    ["Experience", "#experience", "experience"],
    ["Projects", "#projects", "projects"],
    ["Skills", "#skills", "skills"],
    ["Awards", "#awards", "awards"],
    ["Gallery", "#gallery", "gallery"],
    ["Contact", "#contact", "contact"],
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
        <a href="#" className="font-bold text-[#00E5CC] px-2 hover:scale-110 transition-transform">MO</a>
        
        <div className="hidden md:flex items-center gap-1 ml-4">
          {links.map(([label, href, id]) => (
            <a
              key={label}
              href={href}
              className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                activeSection === id
                  ? "text-[#00E5CC] bg-[#00E5CC]/10"
                  : "text-[#8A8F98] hover:text-foreground hover:bg-white/5"
              }`}
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
      <ScrollProgress />
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
        <SectionConnector />
        <GallerySection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
