import { motion } from "framer-motion";
import { FaCheckCircle, FaDraftingCompass, FaLaptopCode } from "react-icons/fa";
import clientlogos from "../assets/images/softwares.png";

const workflowNotes = [
  "Drafting and detailing platforms for manufacturing and construction output",
  "3D coordination workflows for BIM, layout, and review support",
  "Software-backed engineering processes for clearer communication and fewer revisions",
];

export const Clients = () => {
  return (
    <section className="bg-gradient-to-br from-slate-100 via-white to-orange-50 px-5 py-16 sm:px-6 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
        >
          <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-orange-700">
            Toolchain
          </div>
          <h2
            className="mt-5 text-3xl font-black leading-tight text-slate-900 sm:text-4xl lg:text-5xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Software-backed workflows that support precision and coordination.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            The section is now framed around capability rather than just a
            sliding logo strip, so it feels more professional on both desktop
            and mobile while still showcasing the platforms behind the work.
          </p>

          <div className="mt-8 space-y-4">
            {workflowNotes.map((note, index) => (
              <motion.div
                key={note}
                className="flex items-start gap-3 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.05)]"
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
              >
                <FaCheckCircle className="mt-1 flex-shrink-0 text-orange-600" />
                <span className="text-sm leading-7 text-slate-700">{note}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-[2rem] border border-slate-200 bg-slate-950 p-5 shadow-[0_30px_90px_rgba(15,23,42,0.18)] sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-white">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
                <FaDraftingCompass />
              </div>
              <div className="mt-4 text-lg font-bold">Design Platforms</div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                Drafting, modeling, and detailing tools aligned to project
                deliverables and review workflows.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4 text-white">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-500/15 text-sky-200">
                <FaLaptopCode />
              </div>
              <div className="mt-4 text-lg font-bold">Coordination Support</div>
              <p className="mt-2 text-sm leading-7 text-slate-300">
                The software stack supports 2D, 3D, BIM, and documentation
                collaboration across different engineering scopes.
              </p>
            </div>
          </div>

          <div className="mt-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white p-3">
            <img
              src={clientlogos}
              alt="Software platforms used by Skyrin Engineering"
              loading="lazy"
              className="w-full rounded-[1.25rem] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
