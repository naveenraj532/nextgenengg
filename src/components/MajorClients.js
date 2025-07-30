import { motion } from "framer-motion";
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client 2.png";

const MajorClients = () => {
  return (
    <div className="p-8">
      <h1 className="font-inter font-bold text-[#896a21] text-2xl sm:text-3xl md:text-4xl text-center mb-10">
        Our Major Clients
      </h1>

      <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10">
        <motion.div
          className="bg-white p-3 sm:p-4 rounded-xl shadow-md w-24 sm:w-28 md:w-32 lg:w-36 aspect-[1/1] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={client1}
            alt="Client 1"
            className="w-full h-full object-contain"
          />
        </motion.div>
        <motion.div
          className="bg-white p-3 sm:p-4 rounded-xl shadow-md w-24 sm:w-28 md:w-32 lg:w-36 aspect-[1/1] flex items-center justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img
            src={client2}
            alt="Client 2"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default MajorClients;
