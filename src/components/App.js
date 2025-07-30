import { motion } from "framer-motion";
import { Clients } from "./Clients";
import { useEffect, useState, useRef } from "react";
import logo from "../assets/logo.png";
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
    className="bg-[#f4f4f5] rounded-2xl p-6 shadow-lg hover:shadow-2xl transition duration-300 w-full md:w-[48%] lg:w-[30%]"
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="flex items-center space-x-4 mb-4">
      <Icon className="text-[#896a21] text-3xl" />
      <h3 className="text-xl font-semibold text-[#1f1f1f] font-inter">
        {title}
      </h3>
    </div>
    <p className="text-[#2f2f2f] text-sm leading-relaxed font-inter">
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
    <div className="min-h-screen bg-gradient-to-br from-[#e1e1e1] to-[#cfcfcf] font-inter">
      {/* Hero Section */}
      <header className="h-[100vh] bg-[#0c2020] text-white flex flex-col items-center justify-center text-center px-4 relative">
        <motion.nav
          className="absolute top-8 right-8 flex gap-6 text-sm font-medium tracking-wide text-[#f4f4f5] z-50"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <a href="#about" className="hover:text-[#896a21] transition">
            About
          </a>
          <a href="#services" className="hover:text-[#896a21] transition">
            Services
          </a>
          <a href="#clients" className="hover:text-[#896a21] transition">
            Softwares We Use
          </a>
          <a href="#contact" className="hover:text-[#896a21] transition">
            Contact
          </a>
        </motion.nav>
        <motion.img
          src={logo}
          alt="Company Logo"
          className="w-24 h-24 mb-4"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-wide mb-4 text-[#f4f4f5]"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          NEXTGEN ENGINEERING SOLUTIONS
        </motion.h1>
        <motion.p
          className="text-xl font-medium text-[#b0b0b0] tracking-widest"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          DESIGN | ENGINEERING | SERVICES
        </motion.p>
      </header>

      {/* About Us */}
      <section id="about" className="py-16 px-8 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-[#896a21] mb-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <p className="text-[#1f1f1f] text-md leading-relaxed font-inter">
          At NextGen Engineering Solutions, we specialize in innovative and
          customized engineering services. Our goal is to help businesses
          navigate complex challenges and optimize operations with practical,
          sustainable, and cost-effective solutions.
        </p>
        <br />
        <p className="text-[#1f1f1f] text-md leading-relaxed font-inter">
          Founded in 2025, NextGen was created with a vision to blend
          cutting-edge technology with expert engineering. Our team includes
          seasoned professionals from mechanical, electrical, civil, and
          metallurgical disciplines who collaborate to drive efficiency and
          productivity.
        </p>
        <br />
        <p className="text-[#1f1f1f] text-md leading-relaxed font-inter">
          We are guided by our core values of innovation, collaboration, and
          integrity. As we grow, we aim to expand into new industries and
          continue providing forward-thinking solutions.
        </p>
        <div className="mt-6">
          <a
            href="/nextgenbooklet.pdf"
            download="NextGen_Engineering_Booklet.pdf"
            className="inline-block px-5 py-2 bg-[#896a21] text-white rounded-lg shadow hover:bg-[#a07d2a] transition"
          >
            Download NextGen BookLet
          </a>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        className="bg-[#f7f7f7] px-8 py-20 max-w-7xl mx-auto"
      >
        <motion.h2
          className="text-3xl font-bold text-[#896a21] mb-8 text-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Core Capabilities & Services
        </motion.h2>

        <div className="flex flex-wrap justify-between gap-6">
          <Section title="Mechanical & Piping Engineering" icon={FaCogs}>
            Equipment and valve design, stress and FEA analysis, CFD and
            acoustic analysis, using ASME, IS, and API codes.
          </Section>
          <Section title="Civil & Structural Design" icon={FaDraftingCompass}>
            Structural detailing, layout planning, fabrication drawings for
            industrial infrastructure.
          </Section>
          <Section title="PE Seal & Stamping" icon={FaStamp}>
            Certification and stamping for tanks, structural elements, and
            pressure parts.
          </Section>
          <Section title="Metallurgy Consultation" icon={FaBolt}>
            Material selection, boiler failure analysis, coating and fatigue
            life calculations.
          </Section>
          <Section title="Boiler Troubleshooting" icon={FaLeaf}>
            Solutions for thermal power plant issues, boiler site consultation,
            EN 12952-3 fatigue calculations.
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
        className={`max-sm:px-2 xl:padding-0 wide:padding-r  scroll-mt-24 ${
          fadeInSections.clients ? "animate-fadeInUp" : ""
        }`}
      >
        <Clients />
      </section>

      {/* ... other sections like Softwares We Use ... */}
      <MajorClients />

      {/* Contact Info Section */}
      <section id="contact">
        {" "}
        <ContactInfo />{" "}
      </section>

      {/* Footer */}
      <footer className="bg-[#0c2020] text-[#f4f4f5] p-6 text-center mt-0">
        <motion.p
          className="text-md font-inter"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Ready to solve your engineering challenges? Contact us at{" "}
          <a href="mailto:info@nextgenengg.com" className="underline">
            info@nextgenengg.com
          </a>
        </motion.p>
        <p className="text-sm mt-2 font-inter">
          &copy; 2025 NextGen Engineering Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
