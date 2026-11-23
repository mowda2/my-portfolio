/* eslint-disable @next/next/no-img-element */

import { ArrowUpRight, Download, Github, Linkedin, Mail, MapPin, Phone, Play } from "lucide-react";

/* ==========================================================
 * Content
 * ========================================================== */
const ME = {
  name: "Mohammed Owda",
  location: "London, Ontario",
  email: "mowda2@uwo.ca",
  phone: "+1 (226) 977-4351",
  github: "https://github.com/mowda2",
  linkedin: "https://www.linkedin.com/in/mohammedowda",
  resume: "/Mohammed_Owda_Resume.pdf",
};

const NOW = [
  {
    label: "Working",
    value: "Software Developer co-op",
    detail: "Libro Credit Union, 2026 to present",
  },
  {
    label: "Latest",
    value: "4th place, QNX hardware stream",
    detail: "Hack Western 13, November 2026",
  },
  {
    label: "Studying",
    value: "BESc Software Engineering",
    detail: "Western University, 85% average, Dean's Honour List",
  },
];

type Job = {
  title: string;
  org: string;
  when: string;
  points: string[];
  photos?: { src: string; alt: string }[];
  link?: { label: string; href: string };
};

const EXPERIENCE: Job[] = [
  {
    title: "Software Developer (Co-op)",
    org: "Libro Credit Union",
    when: "2026 – Present",
    points: [
      "Build and maintain C#/.NET microservices and REST APIs behind Libro's digital-banking e-Transfer features.",
      "Helped validate and roll out a .NET 10 upgrade of a payments microservice: smoke testing, dependency conflicts, and build-and-deploy pipelines.",
      "Work in two-week agile sprints with pull-request reviews, SQL Server, and close collaboration with QA.",
    ],
  },
  {
    title: "Undergraduate Research Assistant",
    org: "Intelligent/Autonomous Systems Lab, Western University",
    when: "May 2025 – Present",
    points: [
      "Built a multi-view AI dashboard with real-time YOLO detection overlays and structured event logging across live camera feeds.",
      "Engineered a modular ROS 2 pipeline for multi-camera discovery, detection publishing, and synchronized overlays.",
    ],
    photos: [{ src: "/photos/detection-dashboard.jpg", alt: "Detection dashboard analysing a street scene" }],
    link: { label: "Watch the dashboard demo", href: "/videos/Dashboard%20Demo.mp4" },
  },
  {
    title: "Design Thinking Fellow",
    org: "RBC Design Thinking Program",
    when: "Sept – Dec 2025",
    points: [
      "Designed Canon Health, a platform for secure patient–provider document exchange, from user research into workflow gaps.",
      "Wrote the business case and pitched the prototype to the Dean of Engineering.",
    ],
    photos: [{ src: "/photos/rbc-pitch.jpg", alt: "Pitching Canon Health to an audience" }],
  },
  {
    title: "Sales Representative",
    org: "DECO Windshield Repair",
    when: "2024",
    points: ["Generated $13K+ in revenue through customer engagement and upselling."],
  },
];

type Result = {
  place: string;
  event: string;
  project?: string;
  text?: string;
  photo: string;
  alt: string;
  href?: string;
};

const RESULTS: Result[] = [
  {
    place: "1st",
    event: "Western Engineering Automotive Innovation Challenge (GM & OVIN)",
    project: "Thermal Road-User Detection",
    text: "Privacy-preserving day and night detection from thermal imagery, running a pruned YOLOv11 model in a C++ pipeline on a Raspberry Pi 5, with federated learning so sites share model updates instead of footage.",
    photo: "/photos/gm-ovin-challenge.jpg",
    alt: "Team holding certificates at the GM and OVIN innovation challenge",
    href: "https://github.com/BenjaminNamayandev/AIC-GM-Comp2025",
  },
  {
    place: "1st",
    event: "Hack Western, Canada Life stream",
    project: "Vinculum",
    text: "A real-time collaborative 2D space with synchronized avatars, WebSocket room state, and WebRTC voice chat.",
    photo: "/photos/hack-western-vinculum.jpg",
    alt: "Team presenting Vinculum at Hack Western",
    href: "https://github.com/mowda2/Vinculum",
  },
  {
    place: "1st",
    event: "Western MSA Hackathon, SinaAI stream",
    project: "QCare",
    text: "An ER virtual waiting room with AI-assisted triage and a live clinician dashboard that escalates high-risk patients.",
    photo: "/photos/msa-hacks-qcare.jpg",
    alt: "Team at MSA Hacks",
    href: "https://github.com/omarHossain123/msa_hack",
  },
  {
    place: "2nd",
    event: "Stupid Hackathon 2025",
    photo: "/photos/stupid-hackathon.jpg",
    alt: "Presenting at the Stupid Hackathon",
  },
];

type Project = {
  name: string;
  text: string;
  stack: string;
  links: { label: string; href: string }[];
};

const PROJECTS: Project[] = [
  {
    name: "DeenDuel",
    text: "A live multiplayer quiz platform with private QR rooms, daily challenges, leaderboards, and AI study tools.",
    stack: "React, Node.js, Socket.io, Supabase",
    links: [{ label: "deenduel.com", href: "https://deenduel.com" }],
  },
  {
    name: "TrafficIQ",
    text: "Turns traffic video into turning-movement counts and speed studies using detection and multi-object tracking.",
    stack: "Python, YOLO, OpenCV, FastAPI, React, PostgreSQL",
    links: [],
  },
  {
    name: "Elmadhoun Family Tree",
    text: "A bilingual Arabic and English genealogy platform preserving 1,300+ records, with search and branch navigation.",
    stack: "Next.js, PostgreSQL, Prisma",
    links: [{ label: "elmadhoun.ca", href: "https://elmadhoun.ca" }],
  },
  {
    name: "Jordanian Culture Club",
    text: "The club's production site: events, sponsors, executive profiles, gallery, and membership. Built and maintained solo.",
    stack: "Next.js, Tailwind CSS, Vercel",
    links: [
      { label: "jordaniancultureclub.com", href: "https://jordaniancultureclub.com" },
      { label: "Code", href: "https://github.com/mowda2/jcc-website" },
    ],
  },
  {
    name: "Object Detection Dashboard",
    text: "Streams live ROS 2 camera feeds, analyses uploaded video offline, and keeps a library of past results.",
    stack: "Next.js, FastAPI, WebSockets, YOLO, Docker",
    links: [],
  },
  {
    name: "Lara Food",
    text: "A responsive storefront site for a food brand, built mobile-first.",
    stack: "HTML, CSS, JavaScript",
    links: [{ label: "larafood.com", href: "https://larafood.com" }],
  },
];

const LEADERSHIP = [
  {
    role: "President",
    org: "Jordanian Culture Club, Western",
    when: "2025 – Present",
    text: "Lead the executive team and club operations. Previously VP Outreach, managing partnerships with 20+ organizations.",
  },
  {
    role: "VP Technical Operations",
    org: "Western Engineering Competition",
    when: "Mar 2025 – Present",
    text: "Delivered the website and LMS for 650+ registrants, and wrote handoff documentation and training for successor VPs.",
  },
  {
    role: "VP Projects",
    org: "Engineers Without Borders, Western",
    when: "Sept 2023 – Present",
    text: "Led STEM workshops for 200+ youth and co-organized a Sustainability Hackathon with 100+ participants.",
  },
  {
    role: "Sustainability Director of Outreach",
    org: "Undergraduate Engineering Society",
    when: "2024 – Present",
    text: "Organize sustainability hackathons, workshops, and case competitions for engineering students.",
  },
  {
    role: "Operations Manager",
    org: "Western Foot Patrol",
    when: "2023 – Present",
    text: "Coordinate volunteer scheduling for the campus safe-walk service.",
  },
  {
    role: "Vice President",
    org: "Kurdish Club, Western",
    when: "2025 – Present",
    text: "Cultural programming and campus partnerships.",
  },
  {
    role: "Director of Finance",
    org: "Canadian Engineering Leadership Competition",
    when: "2025",
    text: "Managed budgeting and sponsorship coordination for the national conference.",
  },
];

const LEADERSHIP_PHOTOS = [
  { src: "/photos/wec-team.jpg", alt: "Western Engineering Competition organizing team" },
  { src: "/photos/jcc.jpg", alt: "Jordanian Culture Club event" },
  { src: "/photos/ewb.jpg", alt: "Engineers Without Borders volunteers" },
];

const SKILLS = [
  { group: "Languages", items: "C#, JavaScript, TypeScript, SQL (T-SQL, PostgreSQL), Python, Java, C/C++, HTML, CSS, Bash" },
  { group: "Back end", items: ".NET (ASP.NET Core Web API, Entity Framework Core, Azure Functions), Node.js, Express, FastAPI, Flask" },
  { group: "Front end", items: "React, Next.js, Tailwind CSS, Vite" },
  { group: "Data and cloud", items: "SQL Server, PostgreSQL, Supabase, Azure, AWS (EC2, S3), Docker, REST APIs, WebSockets" },
  { group: "Practice", items: "Agile and Scrum, Azure DevOps, Git, pull-request review, CI/CD, technical documentation" },
  { group: "Vision and robotics", items: "YOLO, OpenCV, ROS 2, ONNX, NCNN, federated learning (Flower)" },
];

const NAV = [
  ["Experience", "#experience"],
  ["Hackathons", "#hackathons"],
  ["Projects", "#projects"],
  ["Leadership", "#leadership"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

/* ==========================================================
 * Building blocks
 * ========================================================== */
function Section({
  id,
  title,
  note,
  tone = "",
  children,
}: {
  id: string;
  title: string;
  note?: string;
  tone?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={tone}>
      <div className="mx-auto grid max-w-6xl gap-x-12 gap-y-8 px-5 py-16 sm:px-8 lg:grid-cols-[13rem_1fr] lg:py-24">
        <div>
          <h2 className="text-3xl font-semibold lg:sticky lg:top-24">{title}</h2>
          {note ? <p className="mt-3 text-sm text-muted lg:sticky lg:top-36">{note}</p> : null}
        </div>
        <div>{children}</div>
      </div>
    </section>
  );
}

function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-1 font-medium text-signal underline decoration-signal/30 hover:decoration-signal"
    >
      {children}
      {external ? <ArrowUpRight className="h-4 w-4" aria-hidden /> : null}
    </a>
  );
}

/* ==========================================================
 * Page
 * ========================================================== */
export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Navigation */}
      <header className="tone-dark sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center gap-6 px-5 py-3 sm:px-8">
          <a href="#top" className="font-display text-lg font-semibold tracking-tight">
            {ME.name}
          </a>
          <nav aria-label="Sections" className="ml-auto hidden items-center gap-6 text-[0.95rem] md:flex">
            {NAV.map(([label, href]) => (
              <a key={href} href={href} className="text-muted hover:text-white">
                {label}
              </a>
            ))}
          </nav>
          <a
            href={ME.resume}
            className="ml-auto inline-flex items-center gap-2 bg-tag px-4 py-2 text-sm font-medium text-ink hover:bg-white md:ml-0"
          >
            <Download className="h-4 w-4" aria-hidden /> Resume
          </a>
        </div>
        <nav aria-label="Sections" className="flex gap-5 overflow-x-auto border-t border-line px-5 py-2 text-[0.95rem] md:hidden">
          {NAV.map(([label, href]) => (
            <a key={href} href={href} className="shrink-0 text-muted hover:text-white">
              {label}
            </a>
          ))}
        </nav>
      </header>

      <main id="main">
        {/* Hero */}
        <div id="top" className="tone-blue">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 sm:px-8 lg:grid-cols-[1fr_26rem] lg:pb-24 lg:pt-20">
          <div>
            <p className="flex items-center gap-2 text-muted">
              <MapPin className="h-4 w-4" aria-hidden /> {ME.location}
            </p>
            <h1 className="mt-4 text-5xl font-semibold sm:text-7xl">{ME.name}</h1>
            <p className="mt-6 max-w-xl font-display text-2xl leading-snug tracking-tight sm:text-[1.75rem]">
              Software developer who ships. Payment services at Libro Credit Union on weekdays, hackathon hardware on
              weekends.
            </p>
            <p className="mt-5 max-w-xl text-muted">
              I am a Software Engineering student at Western University on a developer co-op, building C#/.NET services
              behind e-Transfers. Outside work I build computer-vision projects and web apps that people use every day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={`mailto:${ME.email}`}
                className="inline-flex items-center gap-2 bg-tag px-5 py-3 font-medium text-ink hover:bg-white"
              >
                <Mail className="h-4 w-4" aria-hidden /> Email me
              </a>
              <a href={ME.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-signal">
                <Github className="h-5 w-5" aria-hidden /> GitHub
              </a>
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-medium hover:text-signal">
                <Linkedin className="h-5 w-5" aria-hidden /> LinkedIn
              </a>
            </div>
          </div>

          {/* Photo with detection boxes, the way his own vision projects label a frame */}
          <figure className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative overflow-hidden bg-ink">
              <img
                src="/photos/hero.jpg"
                alt="Mohammed Owda presenting G.A.R.Y. at Hack Western 13, with two laptops showing the project"
                width={1200}
                height={1500}
                className="block h-auto w-full"
              />
              <div aria-hidden className="detect" style={{ left: "27%", top: "7%", width: "55%", height: "69%" }}>
                <span className="detect-label">mohammed 0.99</span>
              </div>
              <div aria-hidden className="detect detect-late" style={{ left: "50%", top: "77%", width: "40%", height: "21%" }}>
                <span className="detect-label">gary_demo 0.97</span>
              </div>
            </div>
            <figcaption className="mt-3 text-sm text-muted">Demo day at Hack Western 13, November 2026.</figcaption>
          </figure>
        </div>
        </div>

        {/* Now */}
        <div className="tone-yellow">
          <dl className="mx-auto grid max-w-6xl divide-y divide-line px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
            {NOW.map((n, i) => (
              <div key={n.label} className={`py-6 ${i === 0 ? "md:pr-8" : "md:px-8"}`}>
                <dt className="text-sm text-muted">{n.label}</dt>
                <dd className="mt-1">
                  <span className="block font-display text-xl font-semibold tracking-tight">{n.value}</span>
                  <span className="mt-1 block text-[0.95rem] text-muted">{n.detail}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Experience */}
        <Section id="experience" title="Experience" tone="tone-white">
          <ol className="divide-y divide-line">
            {EXPERIENCE.map((job) => (
              <li key={job.org} className="py-8 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-[0.95rem] text-muted">{job.when}</p>
                </div>
                <p className="mt-1 font-medium text-signal">{job.org}</p>
                <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 marker:text-line">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                {job.photos?.length ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {job.photos.map((ph) => (
                      <img key={ph.src} src={ph.src} alt={ph.alt} loading="lazy" className="h-44 w-auto max-w-full object-cover" />
                    ))}
                  </div>
                ) : null}
                {job.link ? (
                  <p className="mt-4">
                    <a href={job.link.href} className="inline-flex items-center gap-2 font-medium text-signal underline decoration-signal/30 hover:decoration-signal">
                      <Play className="h-4 w-4" aria-hidden /> {job.link.label}
                    </a>
                  </p>
                ) : null}
              </li>
            ))}
          </ol>
        </Section>

        {/* Hackathons */}
        <Section id="hackathons" title="Hackathons" note="Three first-place finishes, and a goat." tone="tone-dark">
          {/* Latest: G.A.R.Y. */}
          <article className="bg-[#2447f9] text-white">
            <img
              src="/photos/gary-team.jpg"
              alt="The four-person G.A.R.Y. team behind two laptops running the project at Hack Western 13"
              width={1600}
              height={1200}
              loading="lazy"
              className="block aspect-[16/10] w-full object-cover object-[center_35%]"
            />
            <div className="p-6 sm:p-9">
              <p className="inline-block bg-tag px-2 py-1 font-label text-xs font-medium text-ink">
                4th place, QNX hardware stream, Hack Western 13
              </p>
              <h3 className="mt-4 text-3xl font-semibold sm:text-4xl">G.A.R.Y., a pocket goat that turns walks into quests</h3>
              <p className="mt-4 max-w-2xl text-white/80">
                Press his button and G.A.R.Y. identifies what the camera sees, then turns real places around London,
                Ontario into quests. A Raspberry Pi 5 running QNX 8.0 runs two vision models per frame in C++ and answers
                a button press in about 170 ms. Photos and location never leave the device.
              </p>
              <p className="mt-3 max-w-2xl text-white/80">
                Built in a weekend by a team of four with a FastAPI back end and a React web app styled as a pixel-art
                handheld.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 font-medium">
                <a
                  href="https://youtube.com/shorts/uiAKWd4bhNw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white px-4 py-2 text-ink hover:bg-tag"
                >
                  <Play className="h-4 w-4" aria-hidden /> Watch the demo
                </a>
                <a href="https://devpost.com/software/gary-the-goat" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-white/40 hover:decoration-white">
                  Devpost <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
                <a href="https://github.com/anaybaid7/hackwestern13-gary" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 underline decoration-white/40 hover:decoration-white">
                  Code <ArrowUpRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-px bg-white/10">
              <img src="/photos/gary-judging.jpg" alt="Explaining G.A.R.Y. to a judge during the first judging round" loading="lazy" className="aspect-[4/3] w-full object-cover" />
              <img src="/photos/gary-building.jpg" alt="The team debugging around a laptop late at night" loading="lazy" className="aspect-[4/3] w-full object-cover object-[center_40%]" />
            </div>
          </article>

          {/* Earlier results */}
          <ul className="mt-12 divide-y divide-line border-y border-line">
            {RESULTS.map((r) => (
              <li key={r.event} className="grid gap-5 py-7 sm:grid-cols-[5.5rem_1fr_9rem] sm:items-start">
                <p className="font-display text-4xl font-semibold tracking-tight text-signal">{r.place}</p>
                <div>
                  <h3 className="text-xl font-semibold">{r.project ?? r.event}</h3>
                  {r.project ? <p className="mt-1 text-[0.95rem] text-muted">{r.event}</p> : null}
                  {r.text ? <p className="mt-3 max-w-xl">{r.text}</p> : null}
                  {r.href ? (
                    <p className="mt-3">
                      <TextLink href={r.href}>Code</TextLink>
                    </p>
                  ) : null}
                </div>
                <img src={r.photo} alt={r.alt} loading="lazy" className="aspect-[4/3] w-full object-cover sm:w-36" />
              </li>
            ))}
          </ul>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects" note="Things I built that are live or in use." tone="tone-tint">
          <ul className="grid gap-5 sm:grid-cols-2">
            {PROJECTS.map((p) => (
              <li key={p.name} className="border-t-4 border-signal bg-surface p-5">
                <h3 className="text-xl font-semibold">{p.name}</h3>
                <p className="mt-2">{p.text}</p>
                <p className="mt-3 text-[0.95rem] text-muted">{p.stack}</p>
                {p.links.length ? (
                  <p className="mt-3 flex flex-wrap gap-x-5 gap-y-1">
                    {p.links.map((l) => (
                      <TextLink key={l.href} href={l.href}>
                        {l.label}
                      </TextLink>
                    ))}
                  </p>
                ) : null}
              </li>
            ))}
          </ul>
        </Section>

        {/* Leadership */}
        <Section id="leadership" title="Leadership" tone="tone-white">
          <div className="grid grid-cols-3 gap-3">
            {LEADERSHIP_PHOTOS.map((ph) => (
              <img key={ph.src} src={ph.src} alt={ph.alt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            ))}
          </div>
          <ul className="mt-8 divide-y divide-line">
            {LEADERSHIP.map((l) => (
              <li key={l.org} className="grid gap-x-8 gap-y-1 py-5 sm:grid-cols-[1fr_9.5rem]">
                <div>
                  <h3 className="font-body text-[1.0625rem] font-semibold tracking-normal">
                    {l.role}, <span className="font-medium text-signal">{l.org}</span>
                  </h3>
                  <p className="mt-1 max-w-xl text-muted">{l.text}</p>
                </div>
                <p className="text-[0.95rem] text-muted sm:text-right">{l.when}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Skills" tone="tone-yellow">
          <dl className="divide-y divide-line">
            {SKILLS.map((s) => (
              <div key={s.group} className="grid gap-x-8 gap-y-1 py-4 first:pt-0 sm:grid-cols-[11rem_1fr]">
                <dt className="font-semibold">{s.group}</dt>
                <dd className="text-muted">{s.items}</dd>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-[0.95rem] text-muted">
            Awards: Dean&apos;s Honour List (2024–2025), Chorley &amp; Bisset Award (2025), MacKay-Lassonde Award (2025).
          </p>
        </Section>

        {/* Contact */}
        <section id="contact" className="tone-blue">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <h2 className="max-w-3xl text-4xl font-semibold sm:text-6xl">Looking for a developer co-op? Let&apos;s talk.</h2>
            <p className="mt-6 max-w-xl text-muted">
              I am available for a co-op term starting January 2027. Email is the fastest way to reach me.
            </p>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-lg">
              <a href={`mailto:${ME.email}`} className="inline-flex items-center gap-2 underline decoration-white/40 hover:decoration-tag">
                <Mail className="h-5 w-5" aria-hidden /> {ME.email}
              </a>
              <a href="tel:+12269774351" className="inline-flex items-center gap-2 underline decoration-white/40 hover:decoration-tag">
                <Phone className="h-5 w-5" aria-hidden /> {ME.phone}
              </a>
              <a href={ME.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-white/40 hover:decoration-tag">
                <Linkedin className="h-5 w-5" aria-hidden /> LinkedIn
              </a>
              <a href={ME.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 underline decoration-white/40 hover:decoration-tag">
                <Github className="h-5 w-5" aria-hidden /> GitHub
              </a>
            </div>
            <p className="mt-10">
              <a href={ME.resume} className="inline-flex items-center gap-2 bg-white px-5 py-3 font-medium text-ink hover:bg-tag">
                <Download className="h-4 w-4" aria-hidden /> Download resume
              </a>
            </p>
          </div>
          <div className="tone-dark">
            <p className="mx-auto max-w-6xl px-5 py-6 text-sm text-muted sm:px-8">
              © {new Date().getFullYear()} {ME.name}. {ME.location}.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
