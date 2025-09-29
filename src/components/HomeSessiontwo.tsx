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
          <h1 className="text-4xl md:text-5xl uppercase font-extralight text-gray-900 mb-4">
            AI For All
          </h1>
          <p className="text-gray-600 leading-relaxed text-xl">
            IFFAI	stands	as	the	preeminent	global	authority	in	the	domain	of	Arti icial	Intelligence, serving	as	the	foremost	professional	body	dedicated	to	advancing	excellence,	ethics,	and	innovation	in	AI	across	industries	and	borders.		
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
            <h2 className="text-2xl font-medium mb-3 text-gray-700">Accrediting Excellence in AI</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              Recognised	under	NAICS	Code	813920,	IFFAI	operates	as	a	distinguished 
accreditation	and	certi ication	entity,	setting	the	gold	standard	for	professional	
competence	and	institutional	integrity	in	the	AI	ecosystem.	
            </p>
          </motion.div>

          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-medium mb-3 text-gray-700">AI Education for All</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              IFFAI’s	mandate	extends	from	AI	electives	for	K–12	education	to	specialist	
certi ications	in	Generative	AI,	Finance,	Healthcare,	Supply	Chain,	Cybersecurity,	and	
Digital	Transformation.	
            </p>
          </motion.div>
           <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="text-2xl font-medium mb-3 text-gray-700">AI Hubs, Research, and Responsible Adoption</h2>
            <p className="text-gray-600 leading-relaxed text-xl">
              Beyond	education,	IFFAI	establishes	AI	Hubs	and	Centres	of	Excellence,	driving	research,	
consulting,	and	workforce	development	while	ensuring	inclusivity	and	responsible	
adoption	of	Arti icial	Intelligence	across	sectors.	
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
