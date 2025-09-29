import React from "react";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";


const logos: string[] = [
  "src/assets/new/logo1.png",
  "src/assets/new/logo2.png",
  "src/assets/new/logo3.png",
  "src/assets/new/logo4.png",
  "src/assets/new/logo5.png",
  "src/assets/new/logo6.png",
  "src/assets/new/logo7.png",
  "src/assets/new/logo8.png",
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 4, ease: "easeOut" } },
};

const LogoGrid: React.FC = () => {
  return (
    <div
      className="min-h-[30rem] flex flex-col items-center justify-center text-white bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('src/assets/new/HDBackground.png')` }}
    >
      <h2 className="text-center text-2xl mb-8">
        Trusted by{" "}
        <span className="text-green-400">Businesses Worldwide</span> for Reliable IT Solutions
      </h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-0 p-6 max-w-5xl"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex items-center justify-center border border-white/20 p-8 bg-gray-100/50 hover:bg-amber-100 transition"
          >
            <img
              src={logo}
              alt={`client logo ${index + 1}`}
              className="w-28 h-16 object-contain"
              loading="lazy"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogoGrid;
