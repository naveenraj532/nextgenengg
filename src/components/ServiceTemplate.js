// src/components/ServiceTemplate.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ServiceTemplate({ service }) {
  const Icon = service.icon;
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-inter">
      {/* Hero */}
      <header className="relative py-20 bg-[url('/src/assets/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 bg-white/5 p-4 rounded-2xl"
          >
            <Icon className="text-orange-600 text-4xl" />
            <h1 className="text-3xl sm:text-4xl font-bold text-white">
              {service.title}
            </h1>
          </motion.div>

          <p className="mt-4 text-gray-200 max-w-3xl mx-auto">{service.overview}</p>

          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/skyrinbook.pdf"
              download
              className="px-4 py-2 rounded bg-orange-600 text-white"
            >
              Download Brochure
            </a>
            <Link to="/" className="px-4 py-2 rounded border border-white/20 text-white">
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 shadow"
              >
                {cap}
              </motion.div>
            ))}
          </div>
        </section>

        <section className="mb-10">
          <h3 className="text-xl font-semibold mb-3">Deliverables</h3>
          <ul className="list-disc list-inside text-gray-700">
            {service.deliverables.map((d, i) => (
              <li key={i}>{d}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-3">How we work</h3>
          <p className="text-gray-700">
            Typical workflow: Consultation → Proposal → Detailed engineering and
            analysis (FEA/CFD as required) → Shop drawings & MTO → Handover and
            support.
          </p>
        </section>

        <section className="mb-16">
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <p className="text-gray-700">
            Email:{" "}
            <a href={`mailto:${service.contact.email}`} className="underline">
              {service.contact.email}
            </a>{" "}
            | Phone: {service.contact.phone}
          </p>
        </section>
      </main>
    </div>
  );
}
