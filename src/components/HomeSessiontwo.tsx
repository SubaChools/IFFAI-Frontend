import React from "react";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";
import sideImg from "../assets/images/AI20.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  // `custom` is the index you pass via the `custom` prop
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.3, ease: "easeOut" },
  }),
};

const HomePage: React.FC = () => {
  return (
    <div>
      {/* ================= Hero Section ================= */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16  bg-white">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="max-w-4xl"
        >
          <p className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold mt-20 drop-shadow-lg mb-2">
            Who We Are
          </p>
           <motion.h1
            className="text-4xl md:text-5xl text-center uppercase font-extralight mb-4"
            style={{ display: "inline-block" }}
            animate={{
              scale: [1, 1.1, 1, 1.1, 1],
              rotate: [0, 2, -2, 2, 0],
              y: [0, -5, 0, 5, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              },
            }}
          >
            <motion.span
              className="text-red-500 font-bold  bg-clip-text "
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              AI{" "}
            </motion.span>
            <motion.span
              className="text-indigo-600 font-bold bg-clip-text "
              animate={{
                backgroundPosition: ["100% 50%", "0% 50%", "100% 50%"],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              For{" "}
            </motion.span>
            <motion.span
              className="text-green-500 font-bold bg-clip-text "
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                transition: {
                  duration: 6,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              All
            </motion.span>
          </motion.h1>
          <p className="text-gray-600 leading-relaxed text-xl">
           Artificial Intelligence is redefining every dimension of human potential — from how we create, communicate, and design, to how we heal, innovate, and lead. The International Federation for Artificial Intelligence (IFFAI) is a global federation of excellence dedicated to advancing Artificial Intelligence, ethical innovation, and inclusive digital transformation.
          </p>
        </motion.div>

        {/* Right Button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mt-6 md:mt-0"
        >
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition duration-300">
            Learn More About Us
          </button>
        </motion.div>
      </div>

      {/* ================= Features Section ================= */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-16 py-6 bg-gradient-to-b from-white to-gray-50">
        {/* Left Image (30%) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full md:w-1/3"
        >
          <img
            src={sideImg}
            alt="Team"
            className="rounded-xl shadow-lg"
          />

        </motion.div>

        {/* Right Content (70%) */}
        <div className="w-full md:w-2/3 md:pl-12 mt-8 md:mt-0 space-y-10">
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* <h2 className="text-2xl font-medium mb-3 text-gray-700">Accrediting Excellence in AI</h2> */}
            <p className="text-gray-600 leading-relaxed text-xl">
              Headquartered in Chicago, Illinois, USA, IFFAI serves as an international accrediting body, knowledge consortium, and innovation catalyst, connecting academia, industry, and governments across continents.
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* <h2 className="text-2xl font-medium mb-3 text-gray-700">AI Education for All</h2> */}
            <p className="text-gray-600 leading-relaxed text-xl">
              Our guiding philosophy is embodied in our global motto — “AI for All.”
We believe Artificial Intelligence should be a force that uplifts, educates, and empowers every human being, regardless of geography, discipline, or background.
	
            </p>
          </motion.div>
           <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* <h2 className="text-2xl font-medium mb-3 text-gray-700">AI Education for All</h2> */}
            <p className="text-gray-600 leading-relaxed text-xl">
               <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* <h2 className="text-2xl font-medium mb-3 text-gray-700">AI Education for All</h2> */}
            <p className="text-gray-600 leading-relaxed text-xl">
              Our Innovative Programs and Certifications are designed to empower learners, professionals, and institutions with competencies that merge technical mastery, ethical intelligence, and human creativity.
            </p>
          </motion.div>
	
            </p>
          </motion.div>
           <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {/* <h2 className="text-2xl font-medium mb-3 text-gray-700">AI Hubs, Research, and Responsible Adoption</h2> */}
            <p className="text-gray-600 leading-relaxed text-xl">
              Beyond	education,	IFFAI	establishes	AI	Hubs	and	Centres	of	Excellence,	driving	research,	
consulting,	and	workforce	development	while	ensuring	inclusivity	and	responsible	
adoption	of	Artificial	Intelligence	across	sectors.	
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
