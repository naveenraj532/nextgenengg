import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Clients } from "./Clients"; // Add this import

import { AnimatePresence } from "framer-motion";

import {
  FaCogs,
  FaDraftingCompass,
  FaBolt,
  FaLeaf,
  FaStamp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

// Service Card Component
const ServiceCard = ({ title, icon: Icon, children, to }) => (
  <motion.div
    className="relative bg-white rounded-2xl p-7 shadow-lg hover:shadow-2xl transition-all duration-300 w-full md:w-[48%] lg:w-[31%] border border-orange-100 group overflow-hidden"
    whileHover={{ y: -10, scale: 1.02 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {/* Animated gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-blue-600/0 group-hover:from-orange-500/5 group-hover:to-blue-600/5 transition-all duration-500 rounded-2xl"></div>

    <div className="relative z-10">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
        <Icon className="text-white text-2xl" />
      </div>
      <h3 className="text-xl font-bold text-blue-800 mb-3 group-hover:text-orange-600 transition">
        {title}
      </h3>
      <p className="text-gray-700 text-sm leading-relaxed mb-5">{children}</p>
      <Link
        to={to}
        className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:text-blue-700 transition group-hover:gap-3"
      >
        Learn More
        <span className="transition-all">→</span>
      </Link>
    </div>

    {/* Decorative corner element */}
    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-200 to-blue-200 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
  </motion.div>
);

// Stats Component
const StatCard = ({ number, label }) => (
  <motion.div
    className="relative bg-gradient-to-br from-orange-600 via-orange-500 to-blue-700 text-center p-8 rounded-2xl shadow-xl overflow-hidden group hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="relative z-10">
      <div className="text-5xl md:text-6xl font-extrabold text-white mb-3 drop-shadow-lg">
        {number}
      </div>
      <div className="text-white text-sm font-semibold tracking-wide uppercase">
        {label}
      </div>
    </div>
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
  </motion.div>
);

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Add this new useEffect for background carousel
  const backgroundImages = [
    require("../assets/background1.jpg"),
    require("../assets/background2.jpg"),
    require("../assets/background3.jpg"),
    require("../assets/background4.jpg"),
    require("../assets/background5.jpg"),
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length,
      );
    }, 5000); // Changes every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Navbar */}
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-lg shadow-lg py-3"
            : "bg-black/50 backdrop-blur-md py-4"
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <span
            className={`font-bold text-2xl tracking-wider ${
              scrolled ? "text-orange-600" : "text-white"
            }`}
          >
            SKYRIN
          </span>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className={`font-medium text-sm hover:text-orange-600 transition ${
                scrolled ? "text-gray-700" : "text-white hover:text-orange-400"
              }`}
            >
              About
            </a>

            <a
              href="#services"
              className={`font-medium text-sm hover:text-orange-600 transition ${
                scrolled ? "text-gray-700" : "text-white hover:text-orange-400"
              }`}
            >
              Services
            </a>

            <a
              href="#clients"
              className={`font-medium text-sm hover:text-orange-600 transition ${
                scrolled ? "text-gray-700" : "text-white hover:text-orange-400"
              }`}
            >
              Softwares
            </a>
            <Link
              to="/careers"
              className={`font-medium text-sm hover:text-orange-600 transition ${
                scrolled ? "text-gray-700" : "text-white hover:text-orange-400"
              }`}
            >
              Careers
            </Link>

            <a
              href="#contact"
              className="px-5 py-2 bg-orange-600 text-white rounded-lg font-semibold text-sm hover:bg-orange-700 transition shadow-md hover:shadow-lg"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden text-2xl z-50 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 backdrop-blur-lg shadow-lg overflow-hidden"
            >
              <div className="flex flex-col px-6 py-4 space-y-4">
                <a
                  href="#about"
                  onClick={closeMobileMenu}
                  className="font-medium text-gray-700 hover:text-orange-600 transition py-2 border-b border-gray-200"
                >
                  About
                </a>

                <a
                  href="#services"
                  onClick={closeMobileMenu}
                  className="font-medium text-gray-700 hover:text-orange-600 transition py-2 border-b border-gray-200"
                >
                  Services
                </a>

                <a
                  href="#clients"
                  onClick={closeMobileMenu}
                  className="font-medium text-gray-700 hover:text-orange-600 transition py-2 border-b border-gray-200"
                >
                  Clients
                </a>
                <Link
                  to="/careers"
                  onClick={closeMobileMenu}
                  className="font-medium text-gray-700 hover:text-orange-600 transition py-2 border-b border-gray-200"
                >
                  Careers
                </Link>

                <a
                  href="#contact"
                  onClick={closeMobileMenu}
                  className="px-5 py-3 bg-orange-600 text-white rounded-lg font-semibold text-center hover:bg-orange-700 transition shadow-md"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-24">
        {/* Animated Background Images - Cross Fade */}
        {backgroundImages.map((image, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index ? 1 : 1.05,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-slate-900/70 to-black/75 z-10"></div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
          {/* Logo */}
          <motion.div
            className="relative mx-auto mb-6 sm:mb-8 w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Simple White Glow Behind Logo */}
            <div className="absolute inset-0 bg-white/40 rounded-full blur-2xl scale-110" />

            {/* Logo Image */}
            <img
              src={require("../assets/logo.png")}
              alt="Skyrin Logo"
              className="relative z-10 w-full h-full object-contain"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.5))",
              }}
            />
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-orange-500/20 to-blue-600/20 backdrop-blur-md rounded-full border border-white/20">
              <span className="text-white text-xs sm:text-sm font-semibold tracking-wider">
                ENGINEERING EXCELLENCE SINCE 2022
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-5 sm:mb-6 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              textShadow: "0 4px 30px rgba(0,0,0,0.6)",
              letterSpacing: "-0.02em",
            }}
          >
            SKYRIN ENGINEERING
            <br />
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              &amp; CONSULTING SERVICES
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 font-medium italic mb-10 sm:mb-12 max-w-2xl mx-auto tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
          >
            Vision to Verified Engineering
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href="#services"
              className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white rounded-lg font-bold text-sm sm:text-base hover:from-orange-700 hover:to-orange-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Services
            </a>

            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-lg font-bold text-sm sm:text-base hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-white/60 text-xs font-medium tracking-wider">
              SCROLL
            </span>
            <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
              <div className="w-1 h-2 bg-white/50 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatCard number="100+" label="Happy Clients" />
            <StatCard number="500+" label="Projects Completed" />
            <StatCard number="15+" label="Countries Served" />
            <StatCard number="3+" label="Years Experience" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 px-6 bg-gradient-to-br from-slate-50 via-orange-50/20 to-blue-50/20 relative"
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(234, 88, 12) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold italic text-slate-800 mb-4">
              About Skyrin Engineering
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-blue-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  At Skyrin Engineering, we specialize in providing innovative
                  and customized engineering services to businesses seeking
                  practical, sustainable, and cost-effective solutions.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded in 2022, Skyrin was created with a vision to blend
                  cutting-edge technology with expert engineering. Our team
                  includes seasoned professionals from mechanical, electrical,
                  civil, and metallurgical disciplines.
                </p>
              </div>

              <div className="flex items-center gap-3 bg-gradient-to-r from-orange-100 to-blue-100 p-5 rounded-xl shadow-md">
                <FaCheckCircle className="text-4xl flex-shrink-0 text-orange-600" />
                <span className="font-bold text-lg text-gray-800">
                  ISO Certified Excellence
                </span>
              </div>

              <a
                href="/skyrinbook.pdf"
                download="Skyrin_Engineering_Booklet.pdf"
                className="inline-block px-8 py-4 bg-slate-800 text-white rounded-xl font-semibold hover:bg-slate-900 transition shadow-lg hover:shadow-xl"
              >
                Download Profile
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold mb-2 text-white">
                  Innovation
                </div>
                <p className="text-orange-100 text-xs leading-tight">
                  Cutting-edge solutions
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl text-white mt-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold mb-2 text-white">
                  Quality
                </div>
                <p className="text-gray-200 text-xs leading-tight">
                  Uncompromised standards
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-xl text-white transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold mb-2 text-white">
                  Integrity
                </div>
                <p className="text-gray-200 text-xs leading-tight">
                  Transparent practices
                </p>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-orange-700 p-6 rounded-2xl shadow-xl text-white mt-8 transform hover:scale-105 transition-transform duration-300">
                <div className="text-3xl font-extrabold mb-2 text-white">
                  Excellence
                </div>
                <p className="text-orange-100 text-xs leading-tight">
                  Proven track record
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="relative py-24 px-6"
        style={{
          backgroundImage: `url(${require("../assets/services_background.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-900/75 to-black/80"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your needs
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6">
            <ServiceCard
              title="Mechanical Engineering & Drafting"
              icon={FaCogs}
              to="/services/mechanical-drafting"
            >
              Component design, GD&T, manufacturing-ready drawings and
              simulation.
            </ServiceCard>

            <ServiceCard
              title="Piping Engineering & Drafting"
              icon={FaBolt}
              to="/services/piping-drafting"
            >
              P&ID creation, 3D modeling, stress analysis, and isometric
              generation.
            </ServiceCard>

            <ServiceCard
              title="PE Review & Stamping"
              icon={FaStamp}
              to="/services/pe-stamping"
            >
              Professional Engineer review and certification for structural
              systems.
            </ServiceCard>

            <ServiceCard
              title="Structural Engineering & Drafting"
              icon={FaDraftingCompass}
              to="/services/structural-drafting"
            >
              Steel structures, RCC detailing, and shop drawings for
              construction.
            </ServiceCard>

            <ServiceCard
              title="Metallurgy Consultation"
              icon={FaLeaf}
              to="/services/metallurgy"
            >
              Material failure analysis, selection, and corrosion mitigation.
            </ServiceCard>

            <ServiceCard title="BIM Services" icon={FaCogs} to="/services/bim">
              Revit modeling, clash detection, MEP coordination for projects.
            </ServiceCard>
            {/* 
            <ServiceCard
              title="Thermal Spray Coatings for Boilers"
              icon={FaBolt}
              to="/services/boiler-coatings"
            >
              Protective coatings for boiler tubes to enhance durability.
            </ServiceCard>

            <ServiceCard
              title="Boiler Fatigue Life Calculations"
              icon={FaLeaf}
              to="/services/boiler-fatigue"
            >
              Finite element-based fatigue evaluation for components.
            </ServiceCard>

            <ServiceCard
              title="Electric Vehicle Design"
              icon={FaCarSide}
              to="/services/ev-design"
            >
              EV architecture, drivetrain integration, and homologation support.
            </ServiceCard> */}
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="scroll-mt-24">
        <Clients />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 via-orange-400 to-blue-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-300 text-lg">
              Ready to start your next project? We&apos;re here to help.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Cards */}
            <div className="space-y-5">
              <motion.div
                className="flex items-start space-x-5 p-7 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:bg-white/15"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-white mb-2 text-lg">Phone</p>
                  <p className="text-sm text-gray-300 leading-relaxed">
                    +91 994034846 (IN)
                    <br />
                    +61 86 616 0605 (AU / NZ)
                    <br />
                    +44 77 4151 9310 (UK)
                    <br />
                    +1 501 746 3438 (USA)
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-5 p-7 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:bg-white/15"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <p className="font-bold text-white mb-2 text-lg">Email</p>
                  <a
                    href="mailto:info@skyrinengineering.com"
                    className="text-sm text-orange-300 hover:text-orange-200 hover:underline transition"
                  >
                    info@skyrinengineering.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start space-x-5 p-7 bg-white/10 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition border border-white/20 hover:bg-white/15"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div className="grid gap-6 md:grid-cols-2 flex-1">
                  <div>
                    <p className="font-bold text-white mb-2 text-lg">
                      Corporate Address
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
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
                  <div>
                    <p className="font-bold text-white mb-2 text-lg">
                      Back Office
                    </p>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      4/222, 6th Street, Sakthi Nagar, Kattur,
                      <br />
                      Tiruchirappalli - 620019
                      <br />
                      India
                      <br />
                      +91 994034846
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* CTA Box */}
            <motion.div
              className="bg-gradient-to-br from-orange-600 via-orange-500 to-blue-700 p-10 rounded-2xl shadow-2xl text-white relative overflow-hidden border border-orange-400/30"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-white opacity-10 rounded-full -mr-20 -mt-20 blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-400 opacity-20 rounded-full -ml-16 -mb-16 blur-2xl"></div>

              <div className="relative z-10">
                <h3 className="text-3xl font-extrabold mb-4 leading-tight text-white">
                  Ready to Start Your Project?
                </h3>
                <p className="text-white/90 mb-8 leading-relaxed text-lg">
                  Let&apos;s discuss how we can help bring your engineering
                  vision to life with innovative solutions.
                </p>
                <a
                  href="mailto:info@skyrinengineering.com"
                  className="inline-block bg-white text-orange-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition shadow-xl hover:shadow-2xl transform hover:scale-105"
                >
                  Schedule a Consultation →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-300 py-12 px-6 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <span className="font-bold text-2xl text-orange-500 tracking-wider">
                SKYRIN
              </span>
              <p className="text-sm text-gray-400 mt-4 leading-relaxed">
                Engineering excellence since 2022. Providing innovative
                solutions worldwide.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Quick Links</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#about"
                  className="block hover:text-orange-400 transition"
                >
                  About Us
                </a>
                <a
                  href="#services"
                  className="block hover:text-orange-400 transition"
                >
                  Services
                </a>
                <a
                  href="#contact"
                  className="block hover:text-orange-400 transition"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <p>info@skyrinengineering.com</p>
                <p>+44 77 4151 931</p>
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            <p>
              &copy; 2025 Skyrin Engineering &amp; Consulting Services. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
