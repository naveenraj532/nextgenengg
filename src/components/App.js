import { motion } from "framer-motion";
import { Clients } from "./Clients";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png"; // orange + blue logo
import ContactInfo from "./ContactInfo";
import {
  FaCogs,
  FaDraftingCompass,
  FaBolt,
  FaLeaf,
  FaStamp,
  FaCarSide,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Section = ({ title, icon: Icon, children }) => (
  <motion.div
    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300 w-full md:w-[48%] lg:w-[30%]"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-orange-600 text-3xl" />
      <h3 className="text-xl font-semibold text-gray-800 font-inter">
        {title}
      </h3>
    </div>
    <p className="text-gray-600 text-sm leading-relaxed font-inter">
      {children}
    </p>
  </motion.div>
);

function App() {
  const [fadeInSections, setFadeInSections] = useState({
    imageLoader: false,
    moreAboutUs: false,
    services: false,
    blog: false,
    clients: false,
    director: false,
  });

  const sectionRefs = useRef({
    imageLoader: null,
    moreAboutUs: null,
    services: null,
    blog: null,
    clients: null,
    director: null,
  });

  const ServiceButton = ({ to }) => (
    <div className="mt-4">
      <Link
        to={to}
        className="inline-block text-white bg-orange-600 hover:bg-orange-700 transition px-4 py-2 rounded font-medium text-sm tracking-wide"
      >
        Know More →
      </Link>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      const sectionEntries = Object.entries(sectionRefs.current).map(
        ([key, ref]) => ({
          key,
          isVisible:
            ref && ref.getBoundingClientRect().top < window.innerHeight,
        })
      );

      const newFadeInSections = sectionEntries.reduce(
        (acc, { key, isVisible }) => {
          acc[key] = isVisible;
          return acc;
        },
        {}
      );

      setFadeInSections(newFadeInSections);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 font-inter">
      {/* Hero Section */}
      <header
        className="h-[100vh] relative flex flex-col items-center justify-center text-center px-4"
        style={{
          backgroundImage: `url(${require("../assets/background.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Sticky Navbar */}
        <motion.nav
          className="fixed top-0 left-0 w-full bg-black/50 backdrop-blur-md 
   flex justify-end gap-4 sm:gap-6 px-4 sm:px-6 py-4 
   text-sm sm:text-base lg:text-lg 
   tracking-wide text-white z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#about" className="hover:text-orange-500 transition">
            About
          </a>
          <a href="#services" className="hover:text-orange-500 transition">
            Services
          </a>
          <a href="#clients" className="hover:text-orange-500 transition">
            Softwares
          </a>
          <Link to="/careers" className="hover:text-orange-500 transition">
            Careers
          </Link>
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </motion.nav>

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Skyrin Logo"
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-2 object-contain z-10 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ filter: "drop-shadow(0 0 10px white)" }}
          transition={{ duration: 1.2 }}
        />

        {/* Title */}
        <motion.h1
          className="relative text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
       font-extrabold tracking-wide mb-4 text-white drop-shadow-lg z-10"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SKYRIN ENGINEERING &amp; CONSULTING SERVICES
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="relative text-sm sm:text-base md:text-lg lg:text-xl 
       font-medium text-gray-200 tracking-widest z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          ENGINEERING | DESIGN | DETAILING | CONSULTING
        </motion.p>
      </header>

      {/* About Us */}
      <section id="about" className="py-16 px-6 md:px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <p className="text-gray-700 text-md leading-relaxed font-inter">
          At Skyrin Engineering, we specialize in providing innovative and
          customized engineering services to businesses seeking practical,
          sustainable, and cost-effective solutions. Whether you&apos;re a
          start-up or an established enterprise, our goal is to help you
          navigate complex engineering challenges and optimize your operations.
        </p>
        <br />
        <p className="text-gray-700 text-md leading-relaxed font-inter">
          Founded in 2022, Skyrin was created with a vision to blend
          cutting-edge technology with expert engineering. Our team includes
          seasoned professionals from mechanical, electrical, civil, and
          metallurgical disciplines who collaborate to drive efficiency and
          productivity.
        </p>
        <br />
        <p className="text-gray-700 text-md leading-relaxed font-inter">
          We are guided by our core values of innovation, collaboration, and
          integrity. As we grow, we aim to expand into new industries and
          continue providing forward-thinking solutions.
        </p>
        <div className="mt-6">
          <a
            href="/skyrinbook.pdf"
            download="Skyrin_Engineering_Booklet.pdf"
            className="inline-block px-6 py-2 bg-orange-600 text-white rounded-lg shadow hover:bg-orange-700 transition"
          >
            Download Company Profile
          </a>
        </div>
        <div className="mt-8 sm:mt-10 text-center">
          <p className="italic text-orange-500 font-inter text-sm">
            Trusted by 100+ happy customers worldwide
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="relative bg-cover bg-center bg-no-repeat py-20 px-6 md:px-8"
        style={{
          backgroundImage: `url(${require("../assets/services_background.jpg")})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Title */}
        <motion.h2
          className="relative text-3xl md:text-4xl font-bold text-white mb-10 text-center z-10 tracking-wide"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        {/* Service Cards */}
        <div className="relative flex flex-wrap justify-between gap-6 z-10">
          <Section title="Mechanical Engineering & Drafting" icon={FaCogs}>
            Component design, GD&T, manufacturing-ready drawings and simulation.
            <ServiceButton to="/services/mechanical-drafting" />
          </Section>

          <Section title="Piping Engineering & Drafting" icon={FaBolt}>
            P&ID creation, 3D modeling, stress analysis, and isometric
            generation.
            <ServiceButton to="/services/piping-drafting" />
          </Section>

          <Section title="PE Review & Stamping" icon={FaStamp}>
            Professional Engineer review and certification for structural and
            pressure systems.
            <ServiceButton to="/services/pe-stamping" />
          </Section>

          <Section
            title="Structural Engineering & Drafting"
            icon={FaDraftingCompass}
          >
            Steel structures, RCC detailing, and shop drawings for construction.
            <ServiceButton to="/services/structural-drafting" />
          </Section>

          <Section title="Metallurgy Consultation" icon={FaLeaf}>
            Material failure analysis, selection, corrosion mitigation, and
            coatings.
            <ServiceButton to="/services/metallurgy" />
          </Section>

          <Section title="BIM Services" icon={FaCogs}>
            Revit modeling, clash detection, MEP coordination for architectural
            & infrastructure projects.
            <ServiceButton to="/services/bim" />
          </Section>

          <Section title="Thermal Spray Coatings for Boilers" icon={FaBolt}>
            Protective coatings for boiler tubes to enhance durability and
            performance.
            <ServiceButton to="/services/boiler-coatings" />
          </Section>

          <Section title="Boiler Fatigue Life Calculations" icon={FaLeaf}>
            Finite element-based fatigue evaluation for boiler components.
            <ServiceButton to="/services/boiler-fatigue" />
          </Section>

          <Section title="Electric Vehicle Design" icon={FaCarSide}>
            EV architecture, drivetrain integration, and homologation support.
            <ServiceButton to="/services/ev-design" />
          </Section>
        </div>
      </section>

      {/* Clients */}
      <section
        id="clients"
        ref={(el) => (sectionRefs.current.clients = el)}
        className={`xl:padding-0 scroll-mt-24 ${
          fadeInSections.clients ? "animate-fadeInUp" : ""
        }`}
      >
        <Clients />
      </section>

      {/* Contact Info */}
      <section id="contact">
        <ContactInfo />
      </section>

      {/* Footer */}
      <footer className="bg-black text-gray-200 p-1 text-center mt-0">
        <motion.p
          className="text-md font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to solve your engineering challenges? Contact us at{" "}
          <a href="mailto:info@skyrinengg.com" className="underline">
            info@skyrinengineering.com
          </a>
        </motion.p>
        <p className="text-sm mt-2 font-inter">
          &copy; 2025 Skyrin Engineering &amp; Consulting Services. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
