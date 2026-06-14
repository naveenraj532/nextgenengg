import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCheckCircle,
  FaChevronRight,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import heroBackground from "../assets/background3.jpg";
import detailBackground from "../assets/deliverablesbg.jpg";
import logo from "../assets/logo.png";

const workflowSteps = [
  {
    step: "01",
    title: "Scope Alignment",
    desc: "We review requirements, constraints, codes, and project expectations before execution begins.",
  },
  {
    step: "02",
    title: "Engineering Development",
    desc: "Our team prepares calculations, models, drafting packages, and supporting technical outputs.",
  },
  {
    step: "03",
    title: "Review & Coordination",
    desc: "Documentation is checked for clarity, coordination, and practical use across disciplines.",
  },
  {
    step: "04",
    title: "Delivery Support",
    desc: "Final deliverables are issued in a format teams can act on for review, procurement, or execution.",
  },
];

const HeroStat = ({ value, label }) => (
  <div className="rounded-[1.5rem] border border-white/10 bg-white/10 p-4 shadow-[0_18px_50px_rgba(15,23,42,0.25)] backdrop-blur-md">
    <div className="text-2xl font-black text-white sm:text-3xl">{value}</div>
    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200">
      {label}
    </div>
  </div>
);

export default function ServiceTemplate({ service }) {
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-[#f5f7fb] text-slate-900">
      <section className="relative overflow-hidden pt-16">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(2,6,23,0.93)_0%,rgba(15,23,42,0.88)_42%,rgba(30,41,59,0.82)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.12),transparent_26%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:py-24">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/15"
            >
              <img src={logo} alt="Skyrin Engineering" className="h-8 w-8 rounded-full object-contain" />
              Back to Home
            </Link>
          </div>

          <div className="mt-12 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
                Service Overview
              </div>
              <h1
                className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                {service.title}
              </h1>
              <p className="mt-6 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
                {service.overview}
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href={`mailto:${service.contact.email}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-orange-700 transition hover:bg-orange-50"
                >
                  Request Consultation
                  <FaArrowRight />
                </a>
                <a
                  href={`tel:${service.contact.phone}`}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Call About This Service
                  <FaPhoneAlt />
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_30px_90px_rgba(15,23,42,0.28)] backdrop-blur-md sm:p-8"
            >
              <div className="flex items-center gap-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-[1.5rem] bg-orange-500/15 text-orange-300">
                  <Icon className="text-3xl" />
                </div>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">
                    Skyrin Focus
                  </div>
                  <div className="mt-1 text-2xl font-bold text-white">
                    Practical, project-ready delivery
                  </div>
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <HeroStat value={service.capabilities.length} label="Capabilities Included" />
                <HeroStat value={service.deliverables.length} label="Core Deliverables" />
                <HeroStat value="Client-Ready" label="Documentation Standard" />
                <HeroStat value="End-To-End" label="Support Mindset" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">
              What This Service Covers
            </div>
            <h2
              className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Technical support shaped around useful outputs, not just activity.
            </h2>
            <div className="mt-6 space-y-5 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)]">
              <p className="text-base leading-8 text-slate-600">
                Skyrin approaches {service.title.toLowerCase()} with a focus on
                clarity, coordination, and project usability. The goal is not
                only to produce engineering documents, but to create outputs
                that teams can review, approve, fabricate, construct, or act on
                with confidence.
              </p>
              <p className="text-base leading-8 text-slate-600">
                This service is suited to clients who need dependable technical
                support, better documentation quality, and an engineering
                partner who understands how design decisions affect downstream
                execution.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Clear documentation structure",
              "Responsive engineering coordination",
              "Practical and build-aware outputs",
              "Professional communication and review readiness",
            ].map((point) => (
              <div
                key={point}
                className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
              >
                <FaCheckCircle className="text-2xl text-orange-600" />
                <div className="mt-4 text-lg font-bold text-slate-900">{point}</div>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  Included to help this service deliver better accuracy,
                  smoother review, and stronger project confidence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-16 sm:px-6 lg:py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${detailBackground})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.9),rgba(15,23,42,0.88))]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-200">
              Capabilities
            </div>
            <h2
              className="mt-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Detailed capabilities within this service line.
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
              Each capability below reflects areas where the service can be
              tailored to specific project needs, constraints, and deliverable
              expectations.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {service.capabilities.map((capability, idx) => (
              <motion.div
                key={capability}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="rounded-[1.75rem] border border-white/10 bg-white/10 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.2)] backdrop-blur-md"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                    <FaCheckCircle />
                  </div>
                  <div>
                    <div className="text-lg font-bold">{capability}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      Delivered with an emphasis on usable documentation,
                      technical rigor, and coordination with the overall scope.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] bg-gradient-to-br from-orange-600 to-orange-700 p-8 text-white shadow-[0_30px_90px_rgba(249,115,22,0.22)]"
          >
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-orange-100">
              Deliverables
            </div>
            <h3 className="mt-5 text-3xl font-black">What You Can Expect</h3>
            <div className="mt-8 space-y-4">
              {service.deliverables.map((deliverable) => (
                <div
                  key={deliverable}
                  className="flex items-start gap-4 rounded-[1.5rem] border border-white/10 bg-white/10 p-4 backdrop-blur-sm"
                >
                  <FaCheckCircle className="mt-1 flex-shrink-0 text-white" />
                  <div className="text-sm font-medium leading-7 text-white">
                    {deliverable}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.06)]"
          >
            <div className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600">
              Workflow
            </div>
            <h3 className="mt-5 text-3xl font-black text-slate-900">
              How Skyrin Typically Delivers
            </h3>
            <div className="mt-8 space-y-5">
              {workflowSteps.map((phase) => (
                <div key={phase.step} className="flex items-start gap-4">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                    {phase.step}
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900">
                      {phase.title}
                    </div>
                    <p className="mt-1 text-sm leading-7 text-slate-600">
                      {phase.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-5 pb-16 sm:px-6 lg:pb-24">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[2.25rem] bg-slate-950 p-8 text-white shadow-[0_35px_100px_rgba(15,23,42,0.18)] lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-orange-200">
              Next Step
            </div>
            <h3 className="mt-5 text-3xl font-black sm:text-4xl">
              Want to discuss this service for your project?
            </h3>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-300">
              Reach out with your scope, drawings, or requirements and we can
              discuss the most practical engineering approach for this service
              area.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={`mailto:${service.contact.email}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3 text-orange-200">
                  <FaEnvelope />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                    Email
                  </span>
                </div>
                <div className="mt-3 text-lg font-bold text-white">
                  {service.contact.email}
                </div>
              </a>
              <a
                href={`tel:${service.contact.phone}`}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
              >
                <div className="flex items-center gap-3 text-orange-200">
                  <FaPhoneAlt />
                  <span className="text-sm font-semibold uppercase tracking-[0.22em]">
                    Phone
                  </span>
                </div>
                <div className="mt-3 text-lg font-bold text-white">
                  {service.contact.phone}
                </div>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={`mailto:${service.contact.email}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-orange-700"
            >
              Start A Conversation
              <FaArrowRight />
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/15"
            >
              Explore More Services
              <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
