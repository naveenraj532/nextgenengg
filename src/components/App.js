import { motion } from "framer-motion";
import { Clients } from "./Clients";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.jpg"; // orange + blue logo
import ContactInfo from "./ContactInfo";
import MajorClients from "./MajorClients";
import {
  FaCogs,
  FaDraftingCompass,
  FaBolt,
  FaLeaf,
  FaStamp,
  FaCarSide,
} from "react-icons/fa";

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
      <header className="h-[100vh] bg-[#0c2020] text-white flex flex-col items-center justify-center text-center px-4 relative">
        {/* Sticky Navbar */}
        <motion.nav
          className="fixed top-0 left-0 w-full bg-[#0c2020]/70 backdrop-blur-md 
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
          <a href="#contact" className="hover:text-orange-500 transition">
            Contact
          </a>
        </motion.nav>

        {/* Logo */}
        <motion.img
          src={logo}
          alt="Skyrin Logo"
          className="w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 mb-6 object-contain"
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Title */}
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl 
             font-extrabold tracking-wide mb-4 text-white"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          SKYRIN ENGINEERING &amp; CONSULTING SERVICES
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl 
             font-medium text-gray-300 tracking-widest"
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
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-gradient-to-r from-blue-50 to-gray-100 px-6 md:px-8 py-20 max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-3xl font-bold text-orange-600 mb-10 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Core Capabilities &amp; Services
        </motion.h2>

        <div className="flex flex-wrap justify-between gap-6">
          <Section title="Mechanical &amp; Piping Engineering" icon={FaCogs}>
            Equipment and valve design, stress and FEA analysis, CFD and
            acoustic analysis, using ASME, IS, and API codes.
          </Section>
          <Section
            title="Civil &amp; Structural Design"
            icon={FaDraftingCompass}
          >
            Structural detailing, layout planning, fabrication drawings for
            industrial infrastructure.
          </Section>
          <Section title="PE Review &amp; Stamping" icon={FaStamp}>
            Certification and stamping for tanks, structural elements, and
            pressure parts.
          </Section>
          <Section title="Metallurgy Consultation" icon={FaBolt}>
            Material selection, boiler failure analysis, coating and fatigue
            life calculations.
          </Section>
          <Section title="Boiler Troubleshooting" icon={FaLeaf}>
            Solutions for thermal power plant issues, boiler site consultation,
            fatigue calculations.
          </Section>
          <Section title="Electric Vehicle Consultation" icon={FaCarSide}>
            EV design, prototype development, and homologation consulting.
          </Section>
        </div>
      </section>

      {/* Clients */}
      <section
        id="clients"
        ref={(el) => (sectionRefs.current.clients = el)}
        className={`px-4 sm:px-6 xl:padding-0 scroll-mt-24 ${
          fadeInSections.clients ? "animate-fadeInUp" : ""
        }`}
      >
        <Clients />
      </section>

      {/* Major Clients */}
      <MajorClients />

      {/* Contact Info */}
      <section id="contact">
        <ContactInfo />
      </section>

      {/* Footer */}
      <footer className="bg-[#0c2020] text-gray-200 p-6 text-center mt-0">
        <motion.p
          className="text-md font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to solve your engineering challenges? Contact us at{" "}
          <a href="mailto:info@skyrinengg.com" className="underline">
            info@skyrinengg.com
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
