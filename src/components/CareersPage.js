// src/pages/CareersPage.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react"; // Add this import

import {
  FaArrowLeft,
  FaEnvelope,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaRocket,
} from "react-icons/fa";

export default function CareersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Replace this with your actual Google Form link
  const GOOGLE_FORM_LINK = "https://forms.gle/YOUR_FORM_ID_HERE";
  const CAREERS_EMAIL = "careers@skyrinengineering.com";

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "We encourage creative thinking and cutting-edge solutions",
    },
    {
      icon: FaHandshake,
      title: "Collaboration",
      description: "Teamwork and mutual respect drive our success",
    },
    {
      icon: FaUsers,
      title: "Growth",
      description: "Continuous learning and professional development",
    },
    {
      icon: FaRocket,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do",
    },
  ];

  const benefits = [
    "Competitive salary packages",
    "Professional development opportunities",
    "Work on diverse, challenging projects",
    "Collaborative and supportive work environment",
    "Flexible working arrangements",
    "Industry-leading tools and technologies",
  ];

  return (
    <div className="min-h-screen font-inter bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <header className="relative py-32 bg-[url('/src/assets/background.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative max-w-6xl mx-auto px-6 z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-orange-400 transition mb-8 group"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-wide">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Be part of a dynamic engineering team shaping the future of
              innovation and excellence
            </p>
            <motion.a
              href="#apply"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg rounded-lg shadow-xl transition-all"
            >
              Apply Now →
            </motion.a>
          </motion.div>
        </div>
      </header>

      {/* About Working at Skyrin */}
      <section className="py-20 px-6 md:px-8 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            Why Skyrin Engineering?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed max-w-4xl mx-auto">
            At Skyrin Engineering & Consulting Services, we believe our people
            are our greatest asset. Founded in 2022, we&apos;ve built a culture
            that values innovation, collaboration, and continuous growth. Our
            multidisciplinary team of mechanical, civil, electrical, and
            metallurgical engineers work together to solve complex challenges
            and deliver world-class solutions.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
            >
              <value.icon className="text-orange-600 text-4xl mx-auto mb-4" />
              <h3 className="font-bold text-lg text-gray-800 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>

        {/* What We Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-orange-50 to-white rounded-2xl p-10 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-orange-600 mb-6 text-center">
            What We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 bg-white rounded-lg"
              >
                <div className="w-2 h-2 bg-orange-600 rounded-full flex-shrink-0"></div>
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Who We're Looking For */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
              Who We&apos;re Looking For
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We&apos;re always seeking talented engineers and professionals who
              are passionate about innovation and excellence. Whether
              you&apos;re a fresh graduate or an experienced professional, we
              want to hear from you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                For Fresh Graduates
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Recent graduates in Mechanical, Civil, Electrical, Metallurgical
                Engineering, or related fields. We provide comprehensive
                training, mentorship, and hands-on experience with
                industry-leading tools and real-world projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                For Experienced Professionals
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Experienced engineers looking to work on challenging projects
                across multiple industries. Bring your expertise in design,
                analysis, drafting, or consulting and help us deliver excellence
                to our clients worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section
        id="apply"
        className="py-20 px-6 bg-gradient-to-r from-gray-800 to-gray-900 scroll-mt-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-10">
            Submit your application and join a team that values innovation,
            excellence, and your growth
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Email Option */}
            <motion.a
              href={`mailto:${CAREERS_EMAIL}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-orange-600 hover:bg-orange-700 text-white p-8 rounded-xl shadow-xl transition-all group"
            >
              <FaEnvelope className="text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2">Email Your Resume</h3>
              <p className="text-orange-100 text-sm mb-3">
                Send your CV and cover letter directly
              </p>
              <p className="text-white font-semibold break-all">
                {CAREERS_EMAIL}
              </p>
            </motion.a>

            {/* Google Form Option */}
            <motion.a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-100 text-gray-800 p-8 rounded-xl shadow-xl transition-all group"
            >
              <div className="text-5xl mx-auto mb-4 group-hover:scale-110 transition-transform">
                📝
              </div>
              <h3 className="text-xl font-bold mb-2">Fill Application Form</h3>
              <p className="text-gray-600 text-sm mb-3">
                Complete our online application
              </p>
              <p className="text-orange-600 font-semibold">Click to Apply →</p>
            </motion.a>
          </div>

          <p className="text-gray-400 text-sm mt-8">
            We review all applications carefully and will contact shortlisted
            candidates within 2-3 weeks
          </p>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-200 py-8 text-center">
        <p className="text-sm">
          &copy; 2025 Skyrin Engineering & Consulting Services. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
