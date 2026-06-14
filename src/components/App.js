import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaBars,
  FaBuilding,
  FaCheckCircle,
  FaChevronRight,
  FaClipboardCheck,
  FaEnvelope,
  FaGlobe,
  FaIndustry,
  FaLayerGroup,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShieldAlt,
  FaTimes,
  FaTools,
} from "react-icons/fa";
import heroBackground from "../assets/background1.jpg";
import servicesBackground from "../assets/services_background.jpg";
import logo from "../assets/logo.png";
import { services } from "../data/services";

const capabilityHighlights = [
  {
    icon: FaLayerGroup,
    title: "Multi-Discipline Expertise",
    description:
      "Mechanical, piping, structural, metallurgy, BIM, and code-review support under one engineering umbrella.",
  },
  {
    icon: FaShieldAlt,
    title: "Code-Ready Deliverables",
    description:
      "Drawings, calculations, documentation, and review workflows aligned with project and compliance expectations.",
  },
  {
    icon: FaGlobe,
    title: "Global Delivery Footprint",
    description:
      "Responsive support across India, the United Kingdom, Australia / New Zealand, and the United States.",
  },
];

const proofPoints = [
  { value: "100+", label: "Happy Clients" },
  { value: "500+", label: "Projects Completed" },
  { value: "15+", label: "Countries Served" },
  { value: "3+", label: "Years Experience" },
];

const sectors = [
  "Industrial plants and process facilities",
  "Heavy fabrication and manufacturing",
  "Infrastructure and building projects",
  "Utilities, energy, and equipment support systems",
];

const processSteps = [
  {
    title: "Understand",
    description:
      "We start with your scope, constraints, codes, and operating environment so the engineering matches the real project.",
  },
  {
    title: "Engineer",
    description:
      "Our teams develop models, calculations, details, and drawings with constructability and manufacturability in mind.",
  },
  {
    title: "Verify",
    description:
      "Checks, coordination, and documentation are built into the workflow to reduce rework and improve approval readiness.",
  },
  {
    title: "Deliver",
    description:
      "You receive organized, actionable outputs that help your team move faster from design to execution.",
  },
];

const deliverablePoints = [
  "Manufacturing and shop drawings",
  "3D models, BIM coordination, and detailing",
  "P&IDs, isometrics, and piping supports",
  "Material selection and failure-analysis reports",
  "Design calculations and code review packages",
  "Project-ready documentation for client and site teams",
];

const featuredServices = services.slice(0, 6);
const projectBuildStages = [
  {
    id: "foundation",
    title: "Foundation Planning",
    shortTitle: "Foundation",
    icon: FaBuilding,
    service: "Civil and structural planning",
    description:
      "Start with layout intent, loads, constraints, and site-ready structural thinking.",
    insight:
      "Every strong project starts with a stable base. Skyrin supports planning and structural documentation that gives the rest of the build something reliable to stand on.",
    accent: "from-slate-700 to-slate-900",
    glow: "bg-slate-700/20",
    top: "bg-slate-400",
    side: "bg-slate-600",
  },
  {
    id: "structure",
    title: "Structure & Drafting",
    shortTitle: "Structure",
    icon: FaShieldAlt,
    service: "Structural engineering and detailing",
    description:
      "Add frames, members, detailing, and shop-drawing clarity for construction teams.",
    insight:
      "This is where engineering becomes visible. Detailing, framing, and drawing accuracy help reduce confusion between design intent and execution.",
    accent: "from-orange-500 to-orange-700",
    glow: "bg-orange-500/20",
    top: "bg-orange-300",
    side: "bg-orange-600",
  },
  {
    id: "systems",
    title: "Systems Integration",
    shortTitle: "Systems",
    icon: FaTools,
    service: "Piping, mechanical, and BIM coordination",
    description:
      "Bring mechanical, piping, and BIM workflows together so the project behaves like one system.",
    insight:
      "Projects become expensive when systems clash. Coordinated engineering helps structure, piping, and services work together before site issues appear.",
    accent: "from-sky-500 to-blue-700",
    glow: "bg-sky-500/20",
    top: "bg-sky-300",
    side: "bg-blue-700",
  },
  {
    id: "verification",
    title: "Verification & Sign-Off",
    shortTitle: "Verification",
    icon: FaClipboardCheck,
    service: "Review, documentation, and approval readiness",
    description:
      "Finish with checks, compliance alignment, and documentation that supports confident delivery.",
    insight:
      "Verified deliverables create trust. Review-ready documentation is what helps clients move from design decisions to approvals, procurement, and execution.",
    accent: "from-emerald-500 to-teal-700",
    glow: "bg-emerald-500/20",
    top: "bg-emerald-300",
    side: "bg-teal-700",
  },
];

const SectionHeading = ({ eyebrow, title, description, light = false }) => (
  <div className="max-w-3xl">
    {eyebrow ? (
      <div
        className={`mb-4 inline-flex rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] ${
          light
            ? "border-white/20 bg-white/10 text-orange-200"
            : "border-orange-200 bg-orange-50 text-orange-700"
        }`}
      >
        {eyebrow}
      </div>
    ) : null}
    <h2
      className={`text-3xl font-black leading-tight sm:text-4xl lg:text-5xl ${
        light ? "text-white" : "text-slate-900"
      }`}
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {title}
    </h2>
    {description ? (
      <p
        className={`mt-4 max-w-2xl text-base leading-7 sm:text-lg ${
          light ? "text-slate-200" : "text-slate-600"
        }`}
      >
        {description}
      </p>
    ) : null}
  </div>
);

const ProofCard = ({ value, label }) => (
  <motion.div
    className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45 }}
  >
    <div className="text-3xl font-black text-slate-900 sm:text-4xl">{value}</div>
    <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
  </motion.div>
);

const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.08)]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(249,115,22,0.12),_transparent_40%)] opacity-0 transition duration-300 group-hover:opacity-100" />
      <div className="relative z-10">
        <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-slate-900 text-white shadow-lg">
          <Icon className="text-xl" />
        </div>
        <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{service.short}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Engineering
          </span>
          <Link
            to={`/services/${service.slug}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-orange-600 transition hover:text-slate-900"
          >
            View Service
            <FaChevronRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const BuildingFace = ({ className, rows, cols }) => (
  <div
    className={`absolute overflow-hidden rounded-t-[2rem] border border-white/20 bg-gradient-to-b from-slate-100/90 via-slate-300/35 to-slate-900/90 shadow-[0_25px_80px_rgba(15,23,42,0.45)] ${className}`}
  >
    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.3),transparent_35%,rgba(255,255,255,0.05))]" />
    <div
      className="absolute inset-3 grid gap-2"
      style={{
        gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
      }}
    >
      {Array.from({ length: rows * cols }).map((_, index) => (
        <div
          key={index}
          className="rounded-md border border-white/10 bg-gradient-to-b from-orange-300/70 to-sky-200/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.35)]"
        />
      ))}
    </div>
  </div>
);

const HeroVisual = () => (
  <motion.div
    className="relative mx-auto mt-12 w-full max-w-[30rem] lg:mt-0"
    initial={{ opacity: 0, x: 40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7, delay: 0.2 }}
  >
    <div className="relative h-[24rem] overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/50 shadow-[0_35px_120px_rgba(15,23,42,0.55)] backdrop-blur-md sm:h-[29rem]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />
      <div className="absolute left-6 top-6 right-6 h-24 rounded-[1.5rem] border border-white/10 bg-gradient-to-r from-orange-500/15 via-white/5 to-sky-400/10" />
      <div className="absolute left-1/2 top-10 h-20 w-20 -translate-x-1/2 rounded-full bg-orange-500/15 blur-2xl" />
      <div className="absolute bottom-10 left-1/2 h-10 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-2xl" />

      <BuildingFace className="bottom-16 left-8 h-44 w-24 sm:h-52 sm:w-28" rows={4} cols={2} />
      <BuildingFace className="bottom-16 left-[35%] h-60 w-32 sm:h-72 sm:w-36" rows={6} cols={3} />
      <BuildingFace className="bottom-16 right-8 h-36 w-20 sm:h-44 sm:w-24" rows={4} cols={2} />

      <div className="absolute bottom-12 left-6 right-6 h-5 rounded-full bg-slate-950/80" />
      <div className="absolute bottom-11 left-10 right-10 h-8 rounded-2xl border border-white/10 bg-gradient-to-r from-slate-900 to-slate-700" />
      <div className="absolute bottom-[3.65rem] left-14 right-14 h-[2px] bg-gradient-to-r from-transparent via-orange-300 to-transparent opacity-70" />

      <motion.div
        className="absolute left-4 top-24 rounded-2xl border border-orange-300/20 bg-white/10 px-4 py-3 backdrop-blur-md"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-orange-200">
          BIM / Drafting
        </div>
        <div className="mt-1 text-sm font-semibold text-white">
          Models to build-ready drawings
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-24 right-4 rounded-2xl border border-sky-200/15 bg-slate-950/60 px-4 py-3 backdrop-blur-md"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-sky-100">
          Review Ready
        </div>
        <div className="mt-1 text-sm font-semibold text-white">
          Codes, checks, and clarity
        </div>
      </motion.div>
    </div>
  </motion.div>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [builtLayers, setBuiltLayers] = useState([projectBuildStages[0].id]);
  const [activeLayerId, setActiveLayerId] = useState(projectBuildStages[0].id);
  const [showServiceHint, setShowServiceHint] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const serviceHintDismissed = window.localStorage.getItem(
      "skyrin-service-hint-dismissed",
    );

    if (serviceHintDismissed === "true") {
      setShowServiceHint(false);
    }
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const dismissServiceHint = () => {
    setShowServiceHint(false);
    window.localStorage.setItem("skyrin-service-hint-dismissed", "true");
  };

  const handleBuildStage = (stageId) => {
    setActiveLayerId(stageId);
    setBuiltLayers((currentLayers) => {
      if (currentLayers.includes(stageId)) {
        return currentLayers;
      }

      return [...currentLayers, stageId];
    });
  };

  const resetProjectBuild = () => {
    setBuiltLayers([projectBuildStages[0].id]);
    setActiveLayerId(projectBuildStages[0].id);
  };

  const activeBuildLayer =
    projectBuildStages.find((stage) => stage.id === activeLayerId) ||
    projectBuildStages[0];

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <motion.nav
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "border-b border-slate-200/70 bg-white/92 py-3 shadow-[0_15px_50px_rgba(15,23,42,0.08)] backdrop-blur-xl"
            : "bg-slate-950/30 py-4 backdrop-blur-md"
        }`}
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6">
          <Link
            to="/"
            className={`flex items-center gap-3 ${scrolled ? "text-slate-900" : "text-white"}`}
          >
            <img src={logo} alt="Skyrin Engineering" className="h-10 w-10 rounded-full object-contain" />
            <div>
              <div className="text-lg font-black tracking-[0.18em]">SKYRIN</div>
              <div
                className={`text-[0.65rem] font-semibold uppercase tracking-[0.32em] ${
                  scrolled ? "text-slate-500" : "text-white/70"
                }`}
              >
                Engineering
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {[
              ["About", "#about"],
              ["Services", "#services"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={`text-sm font-semibold transition ${
                  scrolled
                    ? "text-slate-700 hover:text-orange-600"
                    : "text-white/90 hover:text-orange-300"
                }`}
              >
                {label}
              </a>
            ))}
            <Link
              to="/careers"
              className={`text-sm font-semibold transition ${
                scrolled
                  ? "text-slate-700 hover:text-orange-600"
                  : "text-white/90 hover:text-orange-300"
              }`}
            >
              Careers
            </Link>
            <a
              href="#contact"
              className="rounded-full bg-orange-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              Request Consultation
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden ${scrolled ? "text-slate-900" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="border-t border-slate-200/60 bg-white/95 shadow-lg backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4">
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-orange-600"
                >
                  About
                </a>
                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-orange-600"
                >
                  Services
                </a>
                <Link
                  to="/careers"
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-3 font-semibold text-slate-700 transition hover:bg-slate-100 hover:text-orange-600"
                >
                  Careers
                </Link>
                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="mt-1 rounded-xl bg-orange-600 px-4 py-3 text-center font-bold text-white"
                >
                  Request Consultation
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <section className="relative overflow-hidden pt-28 sm:pt-32">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.84)_38%,rgba(15,23,42,0.70)_62%,rgba(2,6,23,0.86)_100%)]" />
        <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.18),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.16),transparent_32%)]" />

        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-20 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200 backdrop-blur-md">
              Engineering & Consulting Services
            </div>
            <h1
              className="mt-6 max-w-4xl text-4xl font-black leading-[1.02] text-white sm:text-5xl lg:text-6xl xl:text-[4.4rem]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Practical engineering support for projects that need clarity,
              speed, and build-ready output.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Skyrin Engineering helps clients move from concept to verified
              deliverables with drafting, analysis, BIM, metallurgy, and review
              services tailored to industrial and infrastructure work.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-700"
              >
                Explore Core Services
                <FaArrowRight />
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {capabilityHighlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/10 p-5 shadow-[0_20px_70px_rgba(15,23,42,0.3)] backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: 0.1 * index }}
                  >
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-200">
                      <Icon className="text-lg" />
                    </div>
                    <h2 className="mt-4 text-lg font-bold text-white">{item.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      {item.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <HeroVisual />
        </div>
      </section>

      <section className="relative -mt-8 px-5 pb-16 sm:px-6 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2 xl:grid-cols-4">
          {proofPoints.map((item) => (
            <ProofCard key={item.label} value={item.value} label={item.label} />
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="A modern engineering partner built around useful, project-ready work."
              description="The company positioning across your site points to a practical engineering team that supports clients with multidisciplinary expertise rather than just isolated drafting output. This redesign leans into that strength."
            />

            <div className="mt-8 space-y-5">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                <p className="text-base leading-8 text-slate-600">
                  Skyrin Engineering provides customized engineering and
                  consulting support for clients who need dependable technical
                  outputs, responsive communication, and a workflow that aligns
                  with real project delivery.
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">
                  The service mix spans mechanical, piping, structural, BIM,
                  metallurgy, and review-based work, helping teams reduce
                  coordination gaps and keep engineering decisions connected to
                  fabrication, construction, and compliance needs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {deliverablePoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                  >
                    <FaCheckCircle className="mt-1 flex-shrink-0 text-orange-600" />
                    <span className="text-sm leading-7 text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-7 text-white shadow-[0_28px_80px_rgba(15,23,42,0.16)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <FaBuilding className="text-xl" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                    Why Clients Choose Us
                  </div>
                  <div className="mt-1 text-xl font-bold">
                    Engineering that balances detail with delivery
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Clear documentation structure",
                  "Constructability-aware detailing",
                  "Cross-discipline coordination support",
                  "Professional, client-facing output quality",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-orange-50 via-white to-sky-50 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <FaIndustry className="text-xl" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-500">
                    Focus Areas
                  </div>
                  <div className="mt-1 text-xl font-bold text-slate-900">
                    Typical project environments
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3">
                {sectors.map((sector) => (
                  <div
                    key={sector}
                    className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    <FaChevronRight className="text-orange-600" />
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <SectionHeading
              eyebrow="How We Work"
              title="A straightforward process designed to keep technical delivery moving."
              description="The strongest company signal in your existing content is reliability across complex scopes. This section makes that workflow visible."
              light
            />
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.title}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-white shadow-[0_24px_70px_rgba(2,6,23,0.24)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
              >
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-orange-200">
                  0{index + 1}
                </div>
                <h3 className="mt-4 text-2xl font-bold">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${servicesBackground})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.96))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(15,23,42,0.08),transparent_32%)]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Core Services"
              title="Specialized engineering support across the project lifecycle."
              description="The homepage now presents the offer more like a serious engineering consultancy: fewer buzzwords, clearer service framing, and direct paths into each discipline."
            />

            <a
              href="#contact"
              className="inline-flex items-center gap-3 self-start rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Discuss Your Requirement
              <FaArrowRight />
            </a>
          </div>

          <AnimatePresence>
            {showServiceHint ? (
              <motion.div
                initial={{ opacity: 0, y: 18, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.98 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
                className="relative mt-8 max-w-lg rounded-[1.25rem] border border-orange-200/80 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.08)] sm:px-6"
              >
                <div className="absolute -bottom-2.5 left-10 h-5 w-5 rotate-45 border-b border-r border-orange-200/80 bg-white" />
                <div className="pr-8">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.24em] text-orange-700">
                    Explore Services
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-6 text-slate-600 sm:text-[15px]">
                    Open <span className="font-semibold text-orange-600">View Service</span> on any card to see full capabilities, deliverables, and workflow.
                  </p>
                  <button
                    type="button"
                    onClick={dismissServiceHint}
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-700 transition hover:text-orange-800"
                  >
                    Got it
                    <FaArrowRight className="text-xs" />
                  </button>
                </div>
                <button
                  type="button"
                  onClick={dismissServiceHint}
                  className="absolute right-3 top-3 rounded-full p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                  aria-label="Dismiss service hint"
                >
                  <FaTimes />
                </button>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredServices.map((service, index) => (
              <div key={service.slug} className="relative">
                {showServiceHint && index === 0 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: [0, -6, 0] }}
                    transition={{
                      opacity: { duration: 0.35 },
                      y: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
                    }}
                    className="absolute -top-3 left-5 z-20 rounded-full border border-slate-200 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-700 shadow-[0_10px_25px_rgba(15,23,42,0.08)]"
                  >
                    Start Here
                  </motion.div>
                ) : null}
                <ServiceCard service={service} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-7xl rounded-[2.25rem] border border-slate-200 bg-white p-6 shadow-[0_28px_80px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Interactive Build"
                title="Build a project layer by layer and see how the services come together."
                description="Tap the stages to grow a small 3D-style project stack. It is a simple way to show how planning, structural work, systems, and verification all support a successful engineering outcome."
              />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projectBuildStages.map((item, index) => {
                  const Icon = item.icon;
                  const isBuilt = builtLayers.includes(item.id);
                  const isActive = activeLayerId === item.id;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleBuildStage(item.id)}
                      className={`rounded-[1.5rem] border p-5 text-left transition ${
                        isActive
                          ? "border-orange-300 bg-orange-50 shadow-[0_18px_45px_rgba(249,115,22,0.12)]"
                          : isBuilt
                            ? "border-sky-200 bg-sky-50 shadow-[0_18px_45px_rgba(14,165,233,0.1)]"
                          : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                      }`}
                    >
                      <div
                        className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                          isActive
                            ? "bg-orange-600 text-white"
                            : isBuilt
                              ? "bg-sky-600 text-white"
                            : "bg-slate-900 text-white"
                        }`}
                      >
                        <Icon />
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3">
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.title}
                        </h3>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] ${
                            isActive
                              ? "bg-orange-600 text-white"
                              : isBuilt
                                ? "bg-sky-600 text-white"
                                : "bg-slate-200 text-slate-600"
                          }`}
                        >
                          {isActive ? "Live" : isBuilt ? "Built" : `Stage 0${index + 1}`}
                        </span>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                      <p className="mt-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {item.service}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                  Progress: {builtLayers.length}/{projectBuildStages.length} layers built
                </div>
                <button
                  type="button"
                  onClick={resetProjectBuild}
                  className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Reset Build
                </button>
              </div>
            </div>

            <motion.div
              className="rounded-[2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_28px_80px_rgba(15,23,42,0.18)] sm:p-8"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.26em] text-orange-200">
                Project Builder
              </div>
              <h3 className="mt-5 text-2xl font-black sm:text-3xl">
                {activeBuildLayer.title}
              </h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">
                {activeBuildLayer.service}
              </p>
              <p className="mt-4 text-sm leading-8 text-slate-300 sm:text-base">
                {activeBuildLayer.insight}
              </p>

              <div className="mt-8 rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 sm:p-6">
                <div className="relative mx-auto h-[18rem] w-full max-w-[24rem] [perspective:1200px] sm:h-[20rem]">
                  <div className="absolute bottom-4 left-1/2 h-5 w-52 -translate-x-1/2 rounded-full bg-orange-500/20 blur-2xl" />
                  <div className="absolute bottom-0 left-1/2 h-4 w-64 -translate-x-1/2 rounded-full bg-slate-700/70" />

                  {projectBuildStages.map((stage, index) => {
                    const isBuilt = builtLayers.includes(stage.id);
                    const isActive = activeLayerId === stage.id;

                    return (
                      <motion.div
                        key={stage.id}
                        initial={false}
                        animate={{
                          opacity: isBuilt ? 1 : 0.18,
                          y: isBuilt ? 0 : 18,
                          scale: isActive ? 1.03 : 1,
                        }}
                        transition={{ duration: 0.35 }}
                        className="absolute left-1/2 w-44 -translate-x-1/2 sm:w-52"
                        style={{
                          bottom: `${index * 52 + 24}px`,
                          transformStyle: "preserve-3d",
                        }}
                      >
                        <div
                          className={`relative h-12 rounded-[0.9rem] bg-gradient-to-r ${stage.accent} shadow-[0_16px_35px_rgba(15,23,42,0.25)]`}
                          style={{
                            transform:
                              "rotateX(62deg) rotateZ(-42deg)",
                          }}
                        >
                          <div
                            className={`absolute inset-x-0 -bottom-3 h-3 rounded-b-[0.8rem] ${stage.side}`}
                            style={{ transform: "skewX(-48deg)" }}
                          />
                          <div
                            className={`absolute -right-3 inset-y-0 w-3 rounded-r-[0.8rem] ${stage.side}`}
                            style={{ transform: "skewY(-42deg)" }}
                          />
                          <div className="absolute inset-0 flex items-center justify-between px-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-white sm:text-xs">
                            <span>{stage.shortTitle}</span>
                            {isBuilt ? "Ready" : "Pending"}
                          </div>
                          {isActive ? (
                            <div className={`absolute -inset-2 rounded-[1.1rem] ${stage.glow} blur-xl`} />
                          ) : null}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projectBuildStages.map((stage) => {
                  const Icon = stage.icon;
                  const isBuilt = builtLayers.includes(stage.id);

                  return (
                    <div
                      key={stage.id}
                      className={`rounded-[1.5rem] border p-4 ${
                        isBuilt
                          ? "border-white/10 bg-white/5"
                          : "border-white/5 bg-white/[0.03]"
                      }`}
                    >
                      <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                        <Icon />
                      </div>
                      <div className="mt-3 text-sm font-semibold uppercase tracking-[0.22em] text-orange-200">
                        {isBuilt ? "Added To Build" : "Waiting"}
                      </div>
                      <div className="mt-1 text-lg font-bold text-white">
                        {stage.shortTitle}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,0.18)]">
            <SectionHeading
              eyebrow="Contact"
              title="Let’s turn scope into a clear engineering path."
              description="Reach out for project discussions, drafting support, engineering review, or ongoing consulting engagement."
              light
            />

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <FaPhoneAlt />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Phone</div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    +91 99403 48468 (IN)
                    <br />
                    +61 86 616 0605 (AU / NZ)
                    <br />
                    +44 77 4151 9310 (UK)
                    <br />
                    +1 501 746 3438 (USA)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                  <FaEnvelope />
                </div>
                <div>
                  <div className="text-lg font-bold text-white">Email</div>
                  <a
                    href="mailto:info@skyrinengineering.com"
                    className="mt-2 inline-block text-sm text-orange-200 transition hover:text-white"
                  >
                    info@skyrinengineering.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-100 text-orange-700">
                  <FaMapMarkerAlt />
                </div>
                <div className="mt-5 text-xl font-bold text-slate-900">
                  Corporate Address
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Office 15702 E6 2JA
                  <br />
                  182-184 High Street North
                  <br />
                  East Ham, London E6 2JA
                  <br />
                  United Kingdom
                  <br />
                  +44 77 4151 9310
                </p>
              </div>

              <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                  <FaBuilding />
                </div>
                <div className="mt-5 text-xl font-bold text-slate-900">
                  Back Office
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  4/222, 6th Street, Sakthi Nagar, Kattur,
                  <br />
                  Tiruchirappalli - 620019
                  <br />
                  India
                  <br />
                  +91 99403 48468
                </p>
              </div>
            </div>

            <motion.div
              className="rounded-[2rem] border border-slate-200 bg-gradient-to-br from-orange-600 via-orange-500 to-slate-900 p-8 text-white shadow-[0_30px_90px_rgba(249,115,22,0.22)]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white">
                <FaClipboardCheck />
              </div>
              <h3 className="mt-5 text-3xl font-black">Need a sharper project start?</h3>
              <p className="mt-4 max-w-2xl text-base leading-8 text-orange-50">
                Share your scope, drawings, or upcoming requirement and we can
                discuss the most practical engineering support path.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="mailto:info@skyrinengineering.com"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-50"
                >
                  Email Skyrin
                  <FaArrowRight />
                </a>
                <Link
                  to="/careers"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
                >
                  View Careers
                  <FaTools />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-10 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="text-2xl font-black tracking-[0.2em] text-slate-900">
              SKYRIN
            </div>
            <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
              Engineering and consulting support focused on useful technical
              outputs, professional communication, and dependable project
              delivery.
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm font-semibold text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <a href="#about" className="transition hover:text-orange-600">
              About
            </a>
            <a href="#services" className="transition hover:text-orange-600">
              Services
            </a>
            <a href="#contact" className="transition hover:text-orange-600">
              Contact
            </a>
            <Link to="/careers" className="transition hover:text-orange-600">
              Careers
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-slate-200 pt-6 text-sm text-slate-500">
          &copy; 2025 Skyrin Engineering &amp; Consulting Services. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
