import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <motion.section
      className="bg-[#f4f4f5] text-[#1f1f1f] py-10 px-6 md:px-20 shadow-inner mt-0 rounded-3xl"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-bold text-[#896a21] mb-10 text-center font-inter">
        Get in Touch
      </h2>

      <div className="flex flex-col md:flex-row justify-between gap-10 font-inter">
        {/* Left Contact Info Section */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-sm"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaPhoneAlt className="text-[#896a21] text-xl mt-1" />
            <div>
              <p className="font-semibold">Phone</p>
              <p>+91 9025332603</p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaEnvelope className="text-[#896a21] text-xl mt-1" />
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:info@nextgenengg.com" className="underline">
                info@nextgenengg.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaMapMarkerAlt className="text-[#896a21] text-xl mt-1" />
            <div>
              <p className="font-semibold">Address</p>
              <p>
                43, 4th Cross, Gokula Nagar Extn,
                <br />
                Kattur, Tiruchirappalli – 620019,
                <br />
                Tamil Nadu, India
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side Box + Website */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col justify-between gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition flex-1 flex items-center justify-center text-center h-full">
            <div className="max-w-xs">
              <p className="text-lg font-semibold text-[#896a21] mb-2">
                Have a project in mind?
              </p>
              <p className="text-sm text-[#2f2f2f]">
                We&apos;re here to help with your engineering challenges. Reach
                out and let&apos;s build something great together.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition">
            <FaGlobe className="text-[#896a21] text-xl mt-1" />
            <div>
              <p className="font-semibold">Website</p>
              <a
                href="https://www.nextgenengg.com"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                www.nextgenengg.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactInfo;
