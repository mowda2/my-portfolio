"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Github,
  Linkedin,
  Globe,
  Briefcase,
  Heart,
  ExternalLink,
  MapPin,
  Phone,
  Moon,
  Sun,
  X,
  GraduationCap,
  Award,
  Sparkles,
  Command,
  Wand2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/** Types for mixed media */
type MediaItem = {
  type: "image" | "video";
  src: string;
  alt?: string;
  poster?: string;
};

/** Award item */
type AwardItem = {
  title: string;
  image: string; // path under /public
  date?: string;
  issuer?: string;
  link?: string;
};

/** ==========================================================
 * DATA (unchanged structure / content)
 * ========================================================== */
const DATA = {
  name: "Mohammed Owda",
  role: "Software Engineering @ Western University",
  tagline:
    "Building AI-powered platforms, real-time detection systems, and full-stack web apps for research & community impact.",
  location: "London, ON, Canada",
  contacts: {
    email: "mowda2@uwo.ca",
    phone: "+1 (226) 977-4351",
    github: "https://github.com/mowda2",
    linkedin: "https://www.linkedin.com/in/mohammedowda",
    website: "https://mohammedowda.com",
    resumeUrl: "/images/Mohammed_Owda_Resume.pdf",
  },

  /** Education block (shown in hero) */
  education: {
    school: "Western University",
    program: "BESc Software Engineering",
    year: "Year 3",
    timeline: "2023 – 2027",
    items: [
      {
        label: "Dean’s Honour List",
        role: "CGPA 85%",
        when: "2024–2025",
      },
      {
        label: "RBC Design Thinking Fellow",
        role: "Built & pitched Canon Health to Dean of Engineering",
        when: "2025",
      },
      {
        label: "Chorley & Bisset Award · MacKay-Lassonde Award",
        role: "Recipient",
        when: "",
      },
    ],
  },

  skills: [
    "Python",
    "TypeScript",
    "C/C++",
    "Java",
    "SQL",
    "Bash",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Flask",
    "TailwindCSS",
    "ROS 2",
    "YOLOv26",
    "OpenCV",
    "TensorRT",
    "PostgreSQL",
    "Docker",
    "AWS",
    "Git",
    "Linux",
    "Vercel",
  ],

  experience: [
    {
      org: "Western University – Intelligent/Autonomous Systems Lab",
      title: "Undergraduate Research Assistant",
      start: "May 2025",
      end: "Present",
      points: [
        "Built a multi-view AI dashboard with YOLOv26 overlays, ROS 2 data pipelines, and structured event logging across live camera feeds.",
        "Engineered a ROS 2 multi-camera pipeline for modular detection publishing, synchronized overlays, and reproducible data collection.",
      ],
      media: [
        {
          type: "video",
          src: "/videos/Dashboard Demo.mp4",
          poster: "/images/videoAnalyzed.jpg",
          alt: "Dashboard demo clip",
        },
        { type: "image", src: "/images/videoAnalyzed.png", alt: "Dashboard UI" },
      ],
      images: [],
    },
    {
      org: "RBC",
      title: "Design Thinking Fellow",
      start: "Sep 2025",
      end: "Present",
      points: [
        "Explored AI and emerging tech use cases in financial services through the RBC Design Thinking Program.",
        "Built and pitched Canon Health prototype to the Dean of Engineering.",
      ],
      images: ["/images/rbc-pitch-wide.jpg", "/images/rbc-pitch-presenting.jpg", "/images/rbc-pitch-closeup.jpg"],
      links: [],
    },
    {
      org: "Western Engineering Competition (WEC)",
      title: "VP Technical Operations",
      start: "Mar 2025",
      end: "Present",
      points: [
        "Delivered digital infrastructure (website, LMS) for 650+ registrants; authored technical handoff documentation and training for successor VPs.",
      ],
      images: ["/images/wechome.png", "/images/wec-team-group.jpg", "/images/wec-audience.jpg", "/images/wec-team-standing.jpg"],
      links: [
        { label: "Visit website", href: "https://www.westernengineeringcompetition.ca/" },
      ],
    },
    {
      org: "DECO Windshield Repair",
      title: "Sales Representative",
      start: "Mar 2024",
      end: "Sept 2024",
      points: [
        "Generated $15K+ in revenue through customer engagement, upselling, and CRM management.",
      ],
      images: ["/images/decoPic.PNG"],
      links: [],
    },
  ],

  volunteering: [
    {
      org: "Engineers Without Borders (Western Chapter)",
      role: "VP of Projects",
      when: "Sept 2023 – Present",
      desc: "Led STEM workshops for 200+ youth; co-organized a Sustainability Hackathon with 100+ participants.",
      images: ["/images/ewb-1.PNG", "/images/ewb-2.PNG"],
    },
    {
      org: "Western Foot Patrol",
      role: "Operations Manager",
      when: "Sept 2023 – Present",
      desc: "Coordinated volunteer scheduling and introduced shift-reporting automation to streamline campus safety logistics.",
      images: ["/images/footpatrol-1.jpg"],
    },
    {
      org: "Undergraduate Engineering Society (UES)",
      role: "Sustainability Director of Outreach",
      when: "Sept 2024 – Present",
      desc: "Organized sustainability hackathons, workshops, and case competitions for engineering students.",
      images: ["/images/sustain-1.png", "/images/sustainability-2.jpg"],
    },
    {
      org: "Canadian Engineering Leadership Competition (CELC)",
      role: "Director of Finance",
      when: "2025",
      desc: "Managed budgeting and sponsorship coordination for national engineering leadership conference.",
      images: ["/images/CELC-1.jpeg"],
    },
    {
      org: "Kurdish Club (Western)",
      role: "Vice President",
      when: "2025 – Present",
      desc: "Community building, cultural programming, and campus partnerships.",
      images: ["/images/kurdpic-1.PNG"],
    },
    {
      org: "Jordanian Culture Club (Western)",
      role: "VP Outreach (Sponsorship & Club Outreach)",
      when: "2025 – Present",
      desc: "Coordinated sponsorships and cross-club collaborations to expand event reach. Also sole developer of the club website.",
      images: ["/images/jcc.jpg"],
    },
  ],

  projects: [
    {
      name: "TrafficIQ — AI Traffic Analytics Platform",
      bullets: [
        { title: "Computer Vision", text: "converts traffic video into turning-movement counts and speed studies for client stakeholders." },
        { title: "Full-Stack Pipeline", text: "FastAPI backend and React dashboard integrating YOLOv26 detection and tracking across varied deployment conditions." },
      ],
      tags: ["Python", "YOLOv26", "OpenCV", "FastAPI", "React", "PostgreSQL"],
      links: [],
    },
    {
      name: "DeenDuel — Islamic Knowledge Duels",
      bullets: [
        { title: "Real-time Multiplayer", text: "challenge friends to Islamic trivia duels across Quran, Seerah, Fiqh & more." },
        { title: "Game Modes", text: "quick match, private rooms with QR codes, daily challenges, and AI-powered study tools." },
        { title: "Full Platform", text: "leaderboards, game history, custom quiz creation, flashcards, and lesson builder." },
      ],
      tags: ["React", "Node.js", "Socket.io", "Supabase", "Anthropic AI", "PWA"],
      links: [
        { label: "Play Now", href: "https://deenduel.com" },
        { label: "GitHub Repo", href: "https://github.com/mowda2/Deen-Duel" },
      ],
    },
    {
      name: "Elmadhoun Family Tree",
      bullets: [
        { title: "Bilingual Platform", text: "interactive family tree with Arabic + English support for 1,300+ records across Palestine and the diaspora." },
        { title: "Smart Navigation", text: "authentication, branch navigation, keyword search, and hierarchical tree rendering." },
      ],
      tags: ["Next.js", "React", "PostgreSQL", "Prisma", "REST API"],
      links: [
        { label: "Visit Site", href: "https://elmadhoun.ca" },
        { label: "GitHub Repo", href: "https://github.com/mowda2/elmadhoun-family-tree" },
      ],
    },
    {
      name: "Jordanian Culture Club Website",
      bullets: [
        { title: "Live Production", text: "event listings, sponsor directory, executive profiles, photo gallery, and membership flow." },
        { title: "Deployed & Maintained", text: "responsive layouts on Vercel with streamlined club content flows." },
      ],
      tags: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      links: [
        { label: "Visit Site", href: "https://jordaniancultureclub.com" },
        { label: "GitHub Repo", href: "https://github.com/mowda2/jcc-website" },
      ],
    },
    {
      name: "Object Detection Dashboard",
      bullets: [
        { title: "ROS Live Pipeline", text: "stream and analyze real-time camera feeds with ROS 2 integration." },
        { title: "Offline Analysis", text: "upload videos for object detection and automated batch processing." },
        { title: "Library System", text: "store, organize, and revisit past analyses with saved results and metadata." },
      ],
      tags: ["Next.js", "FastAPI", "WebSockets", "OpenCV", "YOLO", "Docker"],
      links: [
        { label: "GitHub Repo", href: "https://github.com/mowda2/Object-Detection-Dashboard" },
      ],
    },
    {
      name: "Thermal Road-User Detection — GM Challenge Winner",
      bullets: [
        { title: "Thermal Sensing", text: "privacy-preserving road-user detection using thermal imagery for day/night conditions." },
        { title: "Edge Optimization", text: "YOLOv11 pruned + FP16; ONNX + NCNN with a C++ pipeline on Raspberry Pi 5." },
        { title: "Federated Learning", text: "Flower-based FL so sites share model updates—not raw footage—plus on-device results." },
      ],
      tags: ["Thermal", "Raspberry Pi 5", "YOLOv11", "ONNX", "NCNN", "Federated Learning", "C++"],
      links: [
        { label: "GitHub Repo", href: "https://github.com/BenjaminNamayandev/AIC-GM-Comp2025" },
      ],
    },
    {
      name: "QCare – ER Virtual Waiting Room",
      bullets: [
        { title: "AI-Assisted Triage", text: "CTAS-inspired severity scoring with automated intake and reassessments." },
        { title: "Clinician Dashboard", text: "live queue view, status changes, and auto-escalation for high-risk patients." },
        { title: "Structured Records", text: "secure data flow with templated notes and audit-ready logs." },
      ],
      tags: ["React", "Flask", "SQLAlchemy", "OpenAI", "PostgreSQL"],
      links: [
        { label: "GitHub Repo", href: "https://github.com/omarHossain123/msa_hack.git" },
      ],
    },
    {
      name: "Vinculum – Real-time Collaborative Web App",
      bullets: [
        { title: "Shared Presence", text: "multi-user 2D space with synchronized avatars and cursor trails." },
        { title: "Live Comms", text: "WebRTC voice chat and WebSocket-driven room state." },
        { title: "Fast Rendering", text: "Pixi.js canvas with smooth animations and efficient updates." },
      ],
      tags: ["React", "Node.js", "WebSockets", "WebRTC", "Pixi.js"],
      links: [
        { label: "GitHub Repo", href: "https://github.com/mowda2/Vinculum.git" },
      ],
    },
  ],

  awards: [
    {
      title: "1st – Western Engineering Automotive Innovation Challenge (GM & OVIN)",
      image: "/images/inovchallenge.PNG",
      issuer: "Western Engineering / GM & OVIN",
    },
    {
      title: "1st – Western MSA Hackathon (SinaAI Stream) – QCare",
      image: "/images/MsaHack.PNG",
      issuer: "Western MSA",
    },
    {
      title: "1st – HackWestern (Canada Life Stream) – Vinculum",
      image: "/images/HackWestern.PNG",
      issuer: "HackWestern",
    },
    {
      title: "2nd – Stupid Hackathon 2025",
      image: "/images/stupid-hack-presenting.jpg",
      issuer: "Stupid Hackathon",
    },
    {
      title: "Dean’s Honour List (2024–2025)",
      image: "/images/Deanshonorlistr.png",
      issuer: "Western University",
    },
  ] as AwardItem[],
};

/** ==========================================================
 * Little Utilities & UI bits
 * ========================================================== */
function useTheme() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    if (typeof document !== "undefined")
      document.documentElement.classList.toggle("dark", dark);
  }, [dark]);
  return { dark, setDark } as const;
}

const Section = ({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4">
      <div className="mb-8 sm:mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight flex items-center gap-2">
          <Sparkles className="h-5 w-5" /> {title}
        </h2>
        {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
        {/* gradient underline */}
        <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-emerald-500" />
      </div>
      {children}
    </div>
  </section>
);

/* Colorful pill that supports inline gradients */
const Pill = ({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) => (
  <span
    style={style}
    className="px-4 py-1.5 rounded-full text-sm border border-white/10 shadow-[inset_0_0_1px_rgba(255,255,255,.18)] hover:shadow hover:translate-y-[-1px] transition"
  >
    {children}
  </span>
);

/** Lightweight lightbox */
function Lightbox({
  open,
  src,
  alt,
  onClose,
}: {
  open: boolean;
  src: string;
  alt?: string;
  onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close"
        className="absolute top-4 right-4 rounded-full border bg-background/80 p-2"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <X className="h-5 w-5" />
      </button>
      <div className="h-full w-full flex items-center justify-center p-4">
        <img
          src={src}
          alt={alt || "image preview"}
          className="max-h-[90vh] max-w-[92vw] rounded-xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  );
}

/** Skills marquee (looping) + edge fades + colorful chips */
function SkillsMarquee({ items }: { items: string[] }) {
  const row = [...items, ...items, ...items]; // smooth loop

  const grad = (i: number) => {
    const g = [
      "linear-gradient(90deg, rgba(99,102,241,.28), rgba(56,189,248,.28))",   // indigo → sky
      "linear-gradient(90deg, rgba(236,72,153,.28), rgba(34,197,94,.28))",    // pink → green
      "linear-gradient(90deg, rgba(250,204,21,.30), rgba(99,102,241,.28))",   // amber → indigo
      "linear-gradient(90deg, rgba(59,130,246,.28), rgba(16,185,129,.28))",   // blue → emerald
    ];
    return g[i % g.length];
  };

  return (
    <div className="relative overflow-hidden py-6">
      {/* Edge fades for nicer crop */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-background to-transparent" />
      <motion.div
        className="flex gap-3 will-change-transform"
        aria-hidden
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 22, ease: "linear" }}
      >
        {row.map((s, i) => (
          <Pill
            key={i}
            style={{
              background: grad(i),
              boxShadow:
                "0 1px 0 rgba(255,255,255,.08) inset, 0 10px 30px rgba(99,102,241,.10)",
            }}
          >
            {s}
          </Pill>
        ))}
      </motion.div>
    </div>
  );
}

/** Tilt Card (playful perspective on hover) */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y / rect.height) - 0.5) * -8;
    const ry = ((x / rect.width) - 0.5) * 8;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };
  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className="[transform:perspective(800px)_rotateX(var(--rx))_rotateY(var(--ry))] transition-transform duration-150"
    >
      {children}
    </div>
  );
}

/** Tiny confetti helper (no hard dependency — safe fallback) */
function useConfetti() {
  const fire = React.useCallback(async () => {
    try {
      const mod = await import("canvas-confetti");
      const c = mod.default;
      c?.({ particleCount: 140, spread: 70, origin: { y: 0.2 } });
    } catch {
      // graceful no-op if library not installed
    }
  }, []);
  return fire;
}

/** Command Palette (⌘K / Ctrl+K) */
function CommandK() {
  const [open, setOpen] = React.useState(false);
  const [q, setQ] = React.useState("");
  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      if ((isMac && e.metaKey && e.key.toLowerCase() === "k") || (!isMac && e.ctrlKey && e.key.toLowerCase() === "k")) {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const items = [
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Volunteering", href: "#volunteering" },
    { label: "Skills", href: "#skills" },
    { label: "Awards", href: "#awards" },
    { label: "Contact", href: "#contact" },
    { label: "Download Resume", href: DATA.contacts.resumeUrl },
  ];
  const filtered = items.filter((i) => i.label.toLowerCase().includes(q.toLowerCase()));

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-start sm:place-items-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-lg rounded-2xl border bg-background/95 shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 p-3 border-b">
          <Command className="h-4 w-4" />
          <Input autoFocus placeholder="Type to jump… (esc to close)" value={q} onChange={(e) => setQ(e.target.value)} />
        </div>
        <div className="max-h-72 overflow-auto p-2">
          {filtered.map((i) => (
            <a key={i.label} href={i.href} className="block rounded-lg px-3 py-2 hover:bg-muted">
              {i.label}
            </a>
          ))}
          {!filtered.length && (
            <div className="text-sm text-muted-foreground px-3 py-4">No results. Try “Projects”.</div>
          )}
        </div>
      </div>
    </div>
  );
}

/** Experience timeline dot */
function Dot() {
  return (
    <span className="absolute left-[-10px] top-2 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_0_4px_rgba(99,102,241,0.18)]" />
  );
}

/** ==========================================================
 * Main Page
 * ========================================================== */
export default function PortfolioPage() {
  const { dark, setDark } = useTheme();
  const [lb, setLB] = React.useState<{ src: string; alt?: string } | null>(null);
  const confetti = useConfetti();

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setLB(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      {/* Colorful background: richer blobs + soft grid */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(30rem_30rem_at_30%_-10%,rgba(99,102,241,0.22),transparent),radial-gradient(36rem_36rem_at_75%_110%,rgba(16,185,129,0.18),transparent),radial-gradient(28rem_28rem_at_10%_80%,rgba(14,165,233,0.16),transparent)]" />
        <div className="absolute inset-0 opacity-[0.08] [background:linear-gradient(to_right,transparent_0,transparent_calc(100%-1px),hsl(var(--foreground))_calc(100%-1px)),linear-gradient(to_bottom,transparent_0,transparent_calc(100%-1px),hsl(var(--foreground))_calc(100%-1px))] [background-size:24px_24px]" />
      </div>

      {/* Command Palette */}
      <CommandK />

      {/* NAV — colorful glass dock */}
      <header className="sticky top-3 z-40">
        <div className="max-w-6xl mx-auto px-4">
          <div className="rounded-full border bg-background/70 backdrop-blur shadow-sm flex items-center gap-2 px-2 py-2 ring-1 ring-white/5">
            <div className="px-3 font-semibold tracking-tight"> 
              <span className="bg-gradient-to-r from-indigo-400 via-sky-400 to-emerald-400 bg-clip-text text-transparent">
                {DATA.name}
              </span>
            </div>
            <nav className="ml-auto hidden sm:flex items-center gap-1 text-sm">
              {[
                ["Experience", "#experience"],
                ["Projects", "#projects"],
                ["Volunteering", "#volunteering"],
                ["Skills", "#skills"],
                ["Awards", "#awards"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <a key={label} href={href} className="px-3 py-1.5 rounded-full hover:bg-muted">
                  {label}
                </a>
              ))}
            </nav>
            <Button size="icon" variant="ghost" aria-label="Toggle theme" onClick={() => setDark(!dark)}>
              {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <a href={DATA.contacts.resumeUrl} className="hidden sm:inline-flex">
              <Button className="gap-1"><Wand2 className="h-4 w-4" /> Resume</Button>
            </a>
          </div>
          <div className="mt-2 text-xs text-muted-foreground">Press <kbd className="px-1 py-0.5 rounded bg-muted">⌘</kbd>+<kbd className="px-1 py-0.5 rounded bg-muted">K</kbd> to jump</div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative">
        <div className="max-w-6xl mx-auto px-4 pt-10 sm:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-3 gap-8 lg:gap-10 items-start"
          >
            {/* Left: intro + actions */}
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight flex items-center gap-3">
                {DATA.name}
                <span className="inline-block animate-bounce">👋</span>
              </h1>
              <p className="mt-3 text-lg text-muted-foreground">{DATA.role}</p>
              <p className="mt-4 leading-relaxed max-w-2xl">{DATA.tagline}</p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a href={DATA.contacts.github} target="_blank" className="inline-flex items-center gap-2">
                  <Button variant="secondary">
                    <Github className="h-4 w-4" /> GitHub
                  </Button>
                </a>
                <a href={DATA.contacts.linkedin} target="_blank" className="inline-flex items-center gap-2">
                  <Button variant="secondary">
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </Button>
                </a>
                {DATA.contacts.website && (
                  <a href={DATA.contacts.website} target="_blank" className="inline-flex items-center gap-2">
                    <Button variant="secondary">
                      <Globe className="h-4 w-4" /> Website
                    </Button>
                  </a>
                )}
              </div>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {DATA.location}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Mail className="h-4 w-4" />
                  {DATA.contacts.email}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Phone className="h-4 w-4" />
                  {DATA.contacts.phone}
                </span>
              </div>

              {/* Highlights card with gradient border wrapper */}
              <div className="mt-8 rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/40 via-fuchsia-500/40 to-emerald-500/40">
                <Card className="border-dashed rounded-[1rem] [background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))]">
                  <CardContent className="p-6">
                    <h3 className="font-semibold flex items-center gap-2">
                      <Briefcase className="h-5 w-5" /> Highlights
                    </h3>
                    <ul className="mt-3 space-y-2 list-disc list-inside text-sm">
                      <li>Real-time YOLOv26 detection on multi-camera ROS 2 pipelines for research & traffic analytics.</li>
                      <li>Live production sites: elmadhoun.ca, jordaniancultureclub.com, deenduel.com.</li>
                      <li>Full-stack apps with FastAPI, Next.js, Socket.io, Supabase, and more.</li>
                    </ul>
                    <div className="mt-4 flex gap-2">
                      <a href="#projects">
                        <Button>See Projects</Button>
                      </a>
                      <Button variant="secondary" onClick={confetti}>
                        Celebrate <Sparkles className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Right: headshot + education */}
            <div className="grid grid-rows-[auto_auto] gap-4">
              <TiltCard>
                <Card className="overflow-hidden ring-1 ring-border/60 [background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))]">
                  <div className="relative">
                    <img src="/images/Headshot.jpg" alt="Mohammed Owda headshot" className="w-full h-64 object-cover" />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="text-white text-sm">Hi, I’m Mohammed</div>
                      <div className="text-white/90 text-xs">Software Engineering @ Western</div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-xl border p-3">
                        <div className="text-xs text-muted-foreground">Year</div>
                        <div className="font-semibold">{DATA.education.year}</div>
                      </div>
                      <div className="rounded-xl border p-3">
                        <div className="text-xs text-muted-foreground">Program</div>
                        <div className="font-semibold">Software Eng.</div>
                      </div>
                      <div className="rounded-xl border p-3">
                        <div className="text-xs text-muted-foreground">School</div>
                        <div className="font-semibold">Western</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TiltCard>

              <Card className="ring-1 ring-border/60 [background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))]">
                <CardContent className="p-5">
                  <div className="flex items-start gap-2">
                    <GraduationCap className="h-5 w-5 mt-0.5" />
                    <div>
                      <h3 className="font-semibold">Education</h3>
                      <div className="text-sm mt-1">
                        <div className="font-medium">
                          {DATA.education.program} — {DATA.education.year}
                        </div>
                        <div className="text-muted-foreground">
                          {DATA.education.school} · {DATA.education.timeline}
                        </div>
                      </div>

                      <div className="mt-3 space-y-1">
                        {DATA.education.items.map((e: any, i: number) => (
                          <div key={i} className="text-sm">
                            <span className="font-medium">{e.label}</span>
                            {" · "}
                            <span className="text-muted-foreground">{e.role}</span>
                            {" · "}
                            <span className="text-muted-foreground">{e.when}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>

        {/* Skills label + colorful marquee */}
        <div id="skills" className="max-w-6xl mx-auto px-4">
          <div className="mt-10 mb-2 flex items-center gap-2 text-sm uppercase tracking-widest text-muted-foreground">
            <Sparkles className="h-4 w-4" />
            <span>Skills</span>
          </div>
          <SkillsMarquee items={DATA.skills} />
        </div>
      </div>

      {/* EXPERIENCE (timeline) */}
      <Section id="experience" title="Experience" subtitle="Roles with measurable impact.">
        <div className="relative pl-6 before:absolute before:left-3 before:top-0 before:bottom-0 before:w-px before:bg-border/70">
          {DATA.experience.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="relative mb-8"
            >
              <Dot />
              <TiltCard>
                <Card className="hover:shadow-md transition-shadow [background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))]">
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold">{job.title}</h3>
                        <p className="text-sm text-muted-foreground">{job.org}</p>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {job.start} – {job.end}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2 text-sm list-disc list-inside">
                      {job.points.map((p: string, idx: number) => (
                        <li key={idx}>{p}</li>
                      ))}
                    </ul>

                    {/* Media grid */}
                    {(() => {
                      const media: MediaItem[] = (job as any).media?.length
                        ? ((job as any).media as MediaItem[])
                        : ((job as any).images || []).map(
                            (src: string) => ({ type: "image", src, alt: "experience image" } as MediaItem)
                          );

                      return media.length ? (
                        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {media.map((m, k) =>
                            m.type === "video" ? (
                              <video
                                key={k}
                                className="rounded-xl border w-full h-36 object-cover"
                                controls
                                playsInline
                                preload="metadata"
                                poster={m.poster}
                              >
                                <source src={encodeURI(m.src)} type="video/mp4" />
                                Your browser does not support the video tag.
                              </video>
                            ) : (
                              <button
                                key={k}
                                type="button"
                                onClick={() => setLB({ src: m.src, alt: m.alt })}
                                className="group relative block rounded-xl border overflow-hidden w-full h-36 cursor-zoom-in"
                                aria-label="Open image preview"
                              >
                                <img
                                  src={m.src}
                                  alt={m.alt || "experience image"}
                                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                                />
                              </button>
                            )
                          )}
                        </div>
                      ) : null;
                    })()}

                    {/* Links */}
                    {(job as any).links?.length ? (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {(job as any).links.map((l: any, k: number) => (
                          <a key={k} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex">
                            <Button variant="secondary" size="sm" className="inline-flex items-center gap-1">
                              {l.label} <ExternalLink className="h-3 w-3" />
                            </Button>
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" title="Projects" subtitle="Selected builds & case work.">
        <div className="grid sm:grid-cols-2 gap-6">
          {DATA.projects.map((p, i) => (
            <motion.div key={i} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 250, damping: 18 }}>
              <TiltCard>
                <Card className="group hover:shadow-md transition-shadow [background:linear-gradient(180deg,rgba(255,255,255,.03),rgba(255,255,255,.015))]">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="w-full">
                        <h3 className="text-lg font-semibold">{p.name}</h3>

                        {Array.isArray((p as any).bullets) ? (
                          <ul className="mt-2 text-sm text-muted-foreground space-y-1">
                            {(p as any).bullets.map((b: { title: string; text: string }, idx: number) => (
                              <li key={idx}>
                                <span className="font-semibold">{b.title}</span> — {b.text}
                              </li>
                            ))}
                          </ul>
                        ) : (p as any).desc ? (
                          <p className="text-sm text-muted-foreground mt-1">{(p as any).desc}</p>
                        ) : null}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tags.map((t, idx) => (
                        <Badge key={idx} variant="secondary">
                          {t}
                        </Badge>
                      ))}
                    </div>

                    {p.links?.length ? (
                      <div className="mt-4 flex flex-wrap gap-2">
                        {p.links.map((l, k) => {
                          const isGitHub = /github\.com/i.test(l.href);
                          return (
                            <a key={k} href={l.href} target="_blank" rel="noopener noreferrer" className="inline-flex">
                              <Button variant="secondary" size="sm" className="inline-flex items-center gap-1">
                                {isGitHub ? <Github className="h-4 w-4" /> : <Globe className="h-4 w-4" />}
                                {l.label}
                              </Button>
                            </a>
                          );
                        })}
                      </div>
                    ) : null}

                    {(p as any).note ? (
                      <p className="mt-2 text-xs text-muted-foreground">{(p as any).note}</p>
                    ) : null}
                  </CardContent>
                </Card>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* VOLUNTEERING */}
      <Section id="volunteering" title="Volunteering" subtitle="Community & leadership.">
        <div className="grid sm:grid-cols-2 gap-6">
          {DATA.volunteering.map((v, i) => (
            <TiltCard key={i}>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2">
                    <Heart className="h-5 w-5" />
                    <div>
                      <h3 className="font-semibold">{v.org}</h3>
                      <p className="text-sm text-muted-foreground">
                        {v.role} · {v.when}
                      </p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm">{v.desc}</p>
                  {v.images?.length ? (
                    <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {v.images.map((src, k) => (
                        <button
                          key={k}
                          type="button"
                          onClick={() => setLB({ src, alt: "volunteering image" })}
                          className="group relative block rounded-xl border overflow-hidden w-full h-36 cursor-zoom-in"
                          aria-label="Open image preview"
                        >
                          <img
                            src={src}
                            alt="volunteering image"
                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                          />
                        </button>
                      ))}
                    </div>
                  ) : null}
                </CardContent>
              </Card>
            </TiltCard>
          ))}
        </div>
      </Section>

      {/* AWARDS & CERTIFICATES (horizontal gallery) */}
      <Section id="awards" title="Awards & Certificates" subtitle="Highlights, certificates, and honors.">
        <div className="relative">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-background to-transparent" />
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar pr-2">
            {(DATA.awards as AwardItem[]).map((a, i) => (
              <TiltCard key={i}>
                <Card className="min-w-[280px] max-w-[320px] snap-start overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setLB({ src: a.image, alt: a.title })}
                    className="block w-full"
                    aria-label={`Open ${a.title} image`}
                  >
                    <img
                      src={a.image}
                      alt={a.title}
                      className="w-full h-40 object-cover transition-transform duration-300 hover:scale-[1.02]"
                    />
                  </button>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4" />
                      <p className="text-sm font-medium">{a.title}</p>
                    </div>
                    {(a.issuer || a.date) && (
                      <p className="text-xs text-muted-foreground mt-1">
                        {a.issuer ? a.issuer : ""}
                        {a.issuer && a.date ? " • " : ""}
                        {a.date ? a.date : ""}
                      </p>
                    )}
                    {a.link ? (
                      <a
                        href={a.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs underline mt-2"
                      >
                        View / Verify <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : null}
                  </CardContent>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" title="Contact" subtitle="Happy to share work samples & references.">
        <div className="grid sm:grid-cols-2 gap-6">
          <TiltCard>
            <Card>
              <CardContent className="p-6 space-y-3">
                <div className="text-sm text-muted-foreground">Email me directly:</div>
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4" />
                  <a className="underline" href={`mailto:${DATA.contacts.email}`}>
                    {DATA.contacts.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  {DATA.contacts.phone}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  {DATA.location}
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Github className="h-4 w-4" />
                  <a className="underline" href={DATA.contacts.github} target="_blank">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Linkedin className="h-4 w-4" />
                  <a className="underline" href={DATA.contacts.linkedin} target="_blank">
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </TiltCard>

          <TiltCard>
            <Card className="border-dashed">
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2">Quick message (opens your email app):</div>
                <div className="flex items-center gap-2">
                  <Input placeholder="Subject" id="subj" />
                  <a
                    id="mailto"
                    href={`mailto:${DATA.contacts.email}?subject=Hello%20${encodeURIComponent(DATA.name)}`}
                    onClick={(e) => {
                      const s = (document.getElementById("subj") as HTMLInputElement)?.value || "Hello";
                      (e.currentTarget as HTMLAnchorElement).href = `mailto:${DATA.contacts.email}?subject=${encodeURIComponent(
                        s
                      )}`;
                    }}
                  >
                    <Button>Open Mail</Button>
                  </a>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  For serious roles, attach your resume and link to specific projects.
                </p>
              </CardContent>
            </Card>
          </TiltCard>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t py-10">
        <div className="max-w-6xl mx-auto px-4 text-sm text-muted-foreground flex flex-wrap items-center justify-between gap-2">
          <span>
            © {new Date().getFullYear()} {DATA.name}. All rights reserved.
          </span>
          <a href={DATA.contacts.resumeUrl} className="inline-flex items-center gap-1 underline">
            Download Resume <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </footer>

      {/* LIGHTBOX OVERLAY */}
      <Lightbox open={!!lb} src={lb?.src ?? ""} alt={lb?.alt} onClose={() => setLB(null)} />

      {/* tiny global helpers */}
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
