import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[56vh] flex items-center justify-center text-center"
      style={{
        backgroundImage: "url('/ea9ec02f-2ec9-4d20-a602-439316caf462.png')",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
      } as React.CSSProperties} // explicitly type style for TS
    >
      {/* Semi-opaque overlay for better text contrast */}
      <div className="absolute inset-0 bg-hero-overlay mb-12" />

      <div className="relative z-10 px-6 py-20 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight tracking-tight-2 text-gray-900"
        >
          Driving Digital Transformation <br /> With Excellence
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.12 }}
          className="mt-6 text-gray-600 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quis
          quas dolorum quasi reprehenderit deserunt omnis doloremque corrupti nemo
          temporibus?
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
