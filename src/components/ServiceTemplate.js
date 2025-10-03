// src/components/ServiceTemplate.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

export default function ServiceTemplate({ service }) {
  const Icon = service.icon;

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-blue-50 to-gray-100 w-full">
      {/* Hero Section */}
      <header className="relative py-32 bg-[url('/src/assets/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/65"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Icon className="text-orange-500 text-7xl md:text-8xl drop-shadow-2xl mx-auto" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-wide drop-shadow-lg"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-gray-200 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            {service.overview}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 flex justify-center gap-4 flex-wrap"
          >
            <a
              href="/skyrinbook.pdf"
              download
              className="px-8 py-3 rounded-lg bg-orange-600 text-white font-semibold shadow-lg hover:bg-orange-700 hover:shadow-xl transition transform hover:scale-105"
            >
              Download Brochure
            </a>
            <Link
              to="/"
              className="px-8 py-3 rounded-lg bg-white text-orange-600 font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition transform hover:scale-105"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </header>

      {/* About This Service Section */}
      <section className="py-20 px-6 md:px-8 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-8 tracking-tight italic">
            What We Offer
          </h2>
          <div className="space-y-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
            <p>
              Our {service.title.toLowerCase()} services combine cutting-edge technology 
              with decades of engineering expertise. We work closely with our clients to 
              understand their unique challenges and deliver solutions that are not only 
              technically sound but also practical and cost-effective.
            </p>
            <p>
              Whether you&apos;re developing a new product, optimizing existing systems, or 
              solving complex engineering problems, our team provides comprehensive support 
              from concept through execution. We leverage industry-leading tools and 
              methodologies to ensure precision, compliance, and superior results.
            </p>
            <p>
              With a proven track record across multiple industries, we pride ourselves on 
              delivering projects on time and within budget while maintaining the highest 
              standards of quality and safety.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Capabilities Section */}
      <section 
        className="relative w-full py-24 px-6 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${require('../assets/deliverablesbg.jpg')})`,
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        
        <div className="relative w-full max-w-7xl mx-auto z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center text-white tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Our Capabilities
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {service.capabilities.map((cap, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-orange-600 text-xl mt-0.5 flex-shrink-0" />
                  <p className="font-medium text-gray-800 text-base leading-relaxed">{cap}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables & Workflow Section */}
      <section className="w-full py-24 px-6 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Deliverables */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-orange-600 to-orange-700 p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-white"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-white rounded-full"></div>
                <h3 className="text-3xl font-bold">
                  Deliverables
                </h3>
              </div>
              
              <ul className="space-y-4">
                {service.deliverables.map((d, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors"
                  >
                    <FaCheckCircle className="text-white text-xl mt-1 flex-shrink-0" />
                    <span className="text-white font-medium">{d}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Workflow */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow text-white border border-orange-500/20"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-12 bg-orange-500 rounded-full"></div>
                <h3 className="text-3xl font-bold">
                  How We Work
                </h3>
              </div>

              <div className="space-y-6">
                {[
                  { step: "01", title: "Consultation", desc: "Understanding your requirements and challenges" },
                  { step: "02", title: "Proposal", desc: "Detailed project scope and timeline" },
                  { step: "03", title: "Engineering & Analysis", desc: "FEA/CFD and detailed design work" },
                  { step: "04", title: "Documentation", desc: "Shop drawings, MTO, and specifications" },
                  { step: "05", title: "Handover & Support", desc: "Final delivery with ongoing assistance" }
                ].map((phase, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-500/20 border border-orange-500/40 rounded-full flex items-center justify-center font-bold text-lg group-hover:bg-orange-500/30 group-hover:border-orange-500/60 transition">
                      {phase.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-orange-400">{phase.title}</h4>
                      <p className="text-gray-300 text-sm">{phase.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-r from-gray-800 to-gray-900">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h3>
          <p className="text-gray-300 text-lg mb-8">
            Let&apos;s discuss how we can help bring your project to life with our expert engineering solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[280px] hover:bg-white/20 transition">
              <p className="text-orange-400 font-semibold mb-2">Email Us</p>
              <a
                href={`mailto:${service.contact.email}`}
                className="text-white text-lg font-medium hover:text-orange-400 transition flex items-center gap-2"
              >
                {service.contact.email}
                <FaArrowRight className="text-sm" />
              </a>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[280px] hover:bg-white/20 transition">
              <p className="text-orange-400 font-semibold mb-2">Call Us</p>
              <a
                href={`tel:${service.contact.phone}`}
                className="text-white text-lg font-medium hover:text-orange-400 transition flex items-center gap-2"
              >
                {service.contact.phone}
                <FaArrowRight className="text-sm" />
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-200 py-8 text-center">
        <p className="text-sm">
          &copy; 2025 Skyrin Engineering & Consulting Services. All rights reserved.
        </p>
      </footer>
    </div>
  );
}