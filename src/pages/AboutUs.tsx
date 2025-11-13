import React, { useEffect, useState } from "react";
import { motion,AnimatePresence} from "framer-motion";
import type{ Variants } from "framer-motion";
import robotImage from "../assets/images/About/robot-ai.png"; // adjust asset declarations in your project if needed
import img55 from "../assets/images/About/img77 (1).jpg";
import img56 from "../assets/images/About/img77 (2).jpg";
import img57 from "../assets/images/About/img77 (3).jpg";
import img58 from "../assets/images/About/img77 (4).jpg";
import jeam from "../assets/images/About/eye-AI.png";
import { FileText, Brain, Globe2, Building2, BookOpen } from "lucide-react";

// Part 2
import img33 from "../assets/images/About/img33.jpg";
import img7 from "../assets/images/About/img7.jpg";

import certi from "../assets/images/About/robo.jpg";

type Slide = {
  img: string;
  tag: string;
  title: string;
  bullets: string[];
};

const slides: Slide[] = [
  {
    img: img33,
    tag: "IFFAI",
    title: "Consulting & Advisory",
    bullets: [
      "AI strategy consulting for enterprises, government agencies, and NGOs.",
      "Development of AI governance, compliance, and ethical frameworks.",
      "Digital transformation roadmaps embedding AI into business models.",
      "Advisory on AI policy, regulation, and talent development.",
    ],
  },
  {
    img: img7,
    tag: "IFFAI",
    title: "Research & Innovation",
    bullets: [
      "Applied AI research in Generative AI, Healthcare AI, Climate AI & Smart Cities.",
      "Joint research with universities and R&D labs.",
      "AI white papers, conferences, journals, research events.",
      "Incubation of AI-driven innovations with industry partners.",
    ],
  },
  {
    img: img55,
    tag: "IFFAI",
    title: "AI Hubs & Global Outreach",
    bullets: [
      "Establishing AI Hubs & Centres of Excellence across universities & cities.",
      "Connecting academia, government, startups & corporates.",
      "Live projects, hackathons, internships & global exchanges.",
      "AI literacy campaigns to promote inclusive digital growth.",
    ],
  },
  {
    img: certi,
    tag: "IFFAI",
    title: "Certifications",
    bullets: [
      "Sector-focused credentials: AI for Finance, Supply Chain, UX, Manufacturing.",
      "In association with ISU, IQF and global partners.",
      "AI Basics → Applied AI → Advanced AI → Specialist AI.",
      "Global recognition across academia & industry.",
    ],
  },
];

const AUTOPLAY_MS = 4000;

const imgVariant: Variants = {
  enter: { opacity: 0, scale: 1.05 },
  center: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: "easeInOut" },
  },
  exit: { opacity: 0, scale: 1.05, transition: { duration: 0.8 } },
};

const contentVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// If your TS config errors on image imports, add `declare module '*.png'; declare module '*.jpg';` to a global.d.ts

type RelatedCard = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const images: string[] = [img55, img56, img57, img58];

const textFadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const smallFadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const fadeDown: Variants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.6, rotate: -10, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 12 },
  },
};

const gridContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.08 } },
};

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// indexed fadeUp: visible accepts custom index for staggered delay
// framer-motion supports function variants using the `custom` prop — TS types can be a bit picky,
// so we cast to `Variants` after defining the function shape.
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.06 * i, duration: 0.6, ease: "easeOut" },
  }),
} as unknown as Variants;

const relatedCards: RelatedCard[] = [
  {
    icon: <Brain className="w-10 h-10 text-pink-500" aria-hidden={true} />,
    title: "AI in Education",
    desc: "Empowering K–12 and universities with progressive AI-integrated syllabi designed for future-ready learning.",
  },
  {
    icon: <Globe2 className="w-10 h-10 text-blue-500" aria-hidden={true} />,
    title: "Global Collaboration",
    desc: "Partnering with leading academic institutions and AI research bodies to standardize AI education worldwide.",
  },
  {
    icon: <Building2 className="w-10 h-10 text-amber-500" aria-hidden={true} />,
    title: "Industry Alignment",
    desc: "Developing programs co-created with top industry experts ensuring learners gain job-ready AI skills.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-violet-500" aria-hidden={true} />,
    title: "AI Resource Library",
    desc: "Comprehensive resources, projects, and case studies curated for advanced AI learning and certification.",
  },
];

const flagshipCourses: string[] = [
  "Certified AI Professional with Specialisation in Generative AI",
  "Smart Accounting with GST, Tally & AI",
  "Diploma in AI-Augmented UI/UX Design",
  "Digital Marketing with AI Applications",
  "Advanced AI in Logistics & Supply Chain Management",
  "Advanced AI & IoT in Manufacturing Professional",
  "Full Stack AI Developer Program",
  "AI-Integrated Full Stack Engineering",
  "SmartStack: Full Stack Development with AI",
  "Certificate Program in AI for Finance",
];

// Part 3
type Service = {
  title: string;
  desc: string;
  img: string;
};

const services: Service[] = [
  {
    title: "International recognition",
    desc: "International recognition for institutions that align their programs under IFFAI standards.",
    img: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Industry-backed certifications ",
    desc: "Industry-backed certifications benchmarked to global best practices.",
    img: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "AI research networks",
    desc: "Access to AI research networks, innovation hubs, and consulting expertise.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop",
  },
  {
    title: "Platform Trust",
    desc: "A platform of trust that ensures AI education, adoption, and governance meet the highest standards.",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop",
  },
];

const IFFAIOverview: React.FC = () => {
    // Part 2
    const [active, setActive] = useState<number>(0);
  const slideCount = slides.length;
  
  // autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % slideCount);
    }, AUTOPLAY_MS);
    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div>
      <div className="relative min-h-[80vh] overflow-hidden flex items-center py-16 md:py-24 bg-gradient-to-b from-indigo-50 via-white to-pink-50">
        {/* Background gradient shapes */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-25" />

        <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Section - Animated Text */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 pr-0 lg:pr-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={textFadeUp}
          >
            <p className="text-sm font-semibold mb-3 uppercase bg-green-700 bg-clip-text text-transparent tracking-wide">
              Corporate & Institutional Profile
            </p>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-blue-600 bg-clip-text text-transparent">
              International Federation for Artificial Intelligence (IFFAI)
            </h1>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
              The International Federation for Artificial Intelligence (IFFAI) is a globally recognized
              professional body headquartered in Illinois, USA, with a mandate to set universal benchmarks
              in AI education, certification, research, and consulting. As the world’s foremost authority in
              Artificial Intelligence, IFFAI empowers learners, institutions, enterprises, and governments to
              harness AI responsibly and effectively.
            </p>
          </motion.div>

          {/* Right Section - Animated Robot Image */}
          <motion.div
            className="w-full lg:w-1/2 flex justify-center lg:justify-end relative h-[400px] md:h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={imageContainerVariants}
          >
            <motion.div
              className="absolute w-36 h-36 md:w-48 md:h-48 rounded-3xl bg-gradient-to-tr from-cyan-400 to-blue-400 -top-4 left-4 md:left-12 transform -rotate-12 z-10 mix-blend-multiply opacity-70"
              variants={itemVariants}
            />
            <motion.div
              className="absolute w-56 md:w-80 h-[400px] md:h-[500px] rounded-xl overflow-hidden z-20 shadow-xl hover:scale-105 transition-all duration-500"
              variants={itemVariants}
              animate={{
                  y: ["-2%", "2%"],
                  transition: {
                    repeat: Infinity,
                    repeatType: "mirror",
                    duration: 3,
                    ease: "easeInOut"
                  },
                }}
              whileHover={{ rotate: 3 }}
            >
              <img src={robotImage} alt="AI Robot - IFFAI" className="absolute inset-0 w-full h-full object-contain" />
            </motion.div>
            <motion.div
              className="absolute w-40 h-40 md:w-52 md:h-52 rounded-tl-[80px] rounded-br-[80px] bg-gradient-to-br from-fuchsia-400 to-purple-400 -bottom-4 right-0 md:right-4 transform rotate-6 z-10 mix-blend-multiply opacity-70"
              variants={itemVariants}
            />
          </motion.div>
        </div>
      </div>

      {/* Image grid + right content */}
      <div className="w-full min-h-screen grid place-items-center font-[Poppins] px-4 py-10 md:py-20 bg-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center max-w-6xl">
          {/* Left Image Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {images.map((src, index) => (
              <div
                key={index}
                className={`relative w-full h-56 sm:h-[450px] overflow-hidden rounded-xl cursor-pointer shadow-lg transition-transform duration-500 ${
                  index % 2 === 0 ? "-translate-y-3 sm:-translate-y-5" : "translate-y-3 sm:translate-y-5"
                }`}
              >
                <img src={src} alt={`About ${index}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-150" />
              </div>
            ))}
          </div>

          {/* Right Content */}
          <motion.div
            className="flex flex-col items-start gap-4 text-gray-700 p-6 rounded-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={gridContainer}
            whileHover={{ translateY: -4, boxShadow: "0 20px 40px rgba(15,23,42,0.08)" }}
            transition={{ type: "spring", stiffness: 160, damping: 20 }}
          >
            <motion.div variants={smallFadeUp} className="space-y-1">
              <h4 className="text-xl text-orange-600 font-medium">Legal & Registration Information</h4>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">Official Credentials</h2>
            </motion.div>

            <motion.p variants={fadeDown} className="text-base leading-relaxed text-gray-600 max-w-xl">
              Verified institutional registrations and compliance details.
            </motion.p>

            <motion.div variants={smallFadeUp} className="mt-2 w-full">
              <ul className="list-disc list-inside text-gray-800 space-y-2">
                <motion.li variants={smallFadeUp}>
                  <strong>Entity Name:</strong> International Federation for Artificial Intelligence (IFFAI)
                </motion.li>
                <motion.li variants={fadeDown}>
                  <strong>Entity ID:</strong> 16676136
                </motion.li>
                <motion.li variants={smallFadeUp}>
                  <strong>EIN:</strong> 39-3849499
                </motion.li>
              </ul>

              <p className="font-medium text-gray-800 mt-5 mb-2">NAICS Codes:</p>

              <motion.ul className="list-disc list-inside text-gray-700 space-y-2">
                {[
                  "813920 – Professional Organizations",
                  "541715 – R&D in Physical, Engineering, and Life Sciences",
                  "611430 – Professional and Management Development Training",
                  "611420 – Computer Training",
                  "611513 – Apprenticeship Training",
                ].map((text, i) => (
                  <motion.li key={i} variants={i % 2 === 0 ? smallFadeUp : fadeDown}>
                    {text}
                  </motion.li>
                ))}
              </motion.ul>

              <p className="font-medium text-gray-800 mt-5">Registered Address:</p>
              <motion.p variants={smallFadeUp} className="text-gray-800">
                8221 W Giddings St, Norridge, Illinois, 60706, USA
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Dark section - Mandate & Vision */}
      <div className="font-sans text-white bg-gradient-to-b from-[#020617] via-[#0a1125] to-[#0f172a]">
        <header className="relative text-white overflow-hidden">
          <div className="relative max-w-7xl mx-auto px-6 py-14 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* LEFT CONTENT */}
              <motion.div variants={textFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <motion.h1
                  variants={fadeDown}
                  className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight
                         bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500
                         bg-clip-text text-transparent animate-pulse"
                >
                  Mandate & Vision
                </motion.h1>

                <motion.p variants={smallFadeUp} className="mt-4 text-lg md:text-xl max-w-xl leading-relaxed text-blue-200">
                  IFFAI’s mission is rooted in <span className="italic text-cyan-300">“AI for All”</span> — enabling equitable global access
                  to safe, ethical, and high-standards AI education.
                </motion.p>

                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-6 space-y-3 text-base leading-relaxed text-blue-100"
                >
                  {[
                    "To standardize AI education & certification worldwide.",
                    "To integrate AI into schools, universities & enterprises.",
                    "To promote ethical, responsible & inclusive AI practices.",
                    "To build global AI hubs, labs & research networks.",
                  ].map((text, i) => (
                    <motion.li key={i} variants={smallFadeUp} transition={{ delay: 0.2 * i }} className="list-disc list-inside hover:text-cyan-300 transition">
                      {text}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              {/* RIGHT IMAGE CARD */}
              <motion.div variants={smallFadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="w-full">
                <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#0b132b]/40 border border-blue-500/20 backdrop-blur-md hover:scale-[1.03] transition duration-700 hover:shadow-[0_0_25px_8px_rgba(0,150,255,0.4)]">
                  <motion.img
                    src={jeam}
                    alt="Artificial Intelligence team at IFFAI"
                    className="w-full h-52 md:h-72 object-cover opacity-90 hover:opacity-100 transition duration-500"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  />

                  <motion.div variants={fadeDown} className="p-6 bg-gradient-to-r from-blue-900/30 via-blue-800/20 to-cyan-900/30 text-white">
                    <h3 className="text-lg font-semibold text-cyan-300">The IFFAI</h3>
                    <p className="mt-2 text-sm text-blue-100">
                      IFFAI partners with academia, industry & governments to drive responsible AI
                      culture, innovation labs, educator development & policy-aligned AI capacity.
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </header>
      </div>

      {/* +++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}

      <div className="py-20 bg-gradient-to-b from-rose-50 via-amber-50 to-purple-50 px-6 md:px-16 font-[Poppins] overflow-hidden">
        {/* Parent container controls when children animate (stagger) */}
        <motion.div
          className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {/* LEFT SECTION */}
          <motion.div className="md:w-1/2 space-y-5" variants={fadeUp} custom={0}>
            <motion.div variants={fadeUp} custom={0}>
              <h4 className="text-xl text-orange-600 font-medium">Core Areas of Work</h4>
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                AI Courses & Curriculum Development
              </h2>
            </motion.div>

            <motion.ul
              className="space-y-3 text-gray-700 text-sm md:text-base list-disc pl-5 leading-relaxed"
              variants={fadeUp}
              custom={1}
            >
              <motion.li variants={fadeUp} custom={0}>
                Progressive AI electives for schools (K–12).
              </motion.li>
              <motion.li variants={fadeUp} custom={1}>
                University-level AI-integrated programs (Engineering, Medicine, Commerce, Arts & Sciences).
              </motion.li>
              <motion.li variants={fadeUp} custom={2}>
                Professional tracks in Generative AI, Data Science, Cloud AI, IoT, Robotics, Quantum AI, Bioinformatics, and AI in Healthcare.
              </motion.li>
              <motion.li variants={fadeUp} custom={3}>
                Custom-designed AI bootcamps and industry-focused programs for corporates.
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* RIGHT SECTION */}
          <motion.div className="md:w-1/2" variants={fadeUp} custom={2}>
            <motion.article
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all border border-violet-100 backdrop-blur-sm"
              variants={fadeUp}
              custom={0}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-start gap-3 mb-3">
                <FileText className="w-10 h-10 text-violet-500 mt-1" aria-hidden={true} />
                <div>
                  <h3 className="text-md font-semibold text-gray-800">
                    Some of Our Niche Flagship Courses Include:
                  </h3>
                </div>
              </div>

              <motion.ol
                className="text-gray-700 text-sm md:text-base space-y-2 list-decimal pl-5"
                variants={fadeUp}
                custom={1}
              >
                {flagshipCourses.map((course, index) => (
                  <motion.li key={index} variants={fadeUp} custom={index + 1}>
                    {course}
                  </motion.li>
                ))}
              </motion.ol>
            </motion.article>
          </motion.div>
        </motion.div>

        {/* EXTRA RELATED CONTENT */}
        <motion.div
          className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
        >
          {relatedCards.map((card, index) => (
            <motion.div
              key={index}
              className="bg-white/70 border border-amber-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-lg transition-all"
              variants={fadeUp}
              custom={index}
              whileHover={{
                y: -6,
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255, 179, 64, 0.2)",
              }}
            >
              <div className="flex justify-center mb-4">{card.icon}</div>
              <h4 className="text-gray-800 font-semibold text-lg mb-2">{card.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>


      {/* Part 2 */}

       <div className="relative h-screen overflow-hidden bg-black text-white font-poppins select-none">
      {/* Animated background */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          {slides.map(
            (s, idx) =>
              idx === active && (
                <motion.div
                  key={s.title}
                  className="absolute inset-0"
                  variants={imgVariant}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <motion.img
                    src={s.img}
                    alt={s.title}
                    className="w-full h-full object-cover"
                    animate={{
                      scale: [1, 1.08, 1],
                      transition: { duration: 10, repeat: Infinity, ease: "easeInOut" },
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/80" />
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="absolute top-[25%] left-[10%] z-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[active].title}
            variants={contentVariant}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="max-w-[520px]"
          >
            <p className="uppercase tracking-widest text-orange-400 text-sm font-semibold mb-2">
              {slides[active].tag}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 leading-tight drop-shadow-lg">
              {slides[active].title}
            </h2>
            <ul className="list-disc list-inside space-y-1 text-gray-200 text-sm md:text-base">
              {slides[active].bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  className="hover:text-orange-300 transition-colors duration-300"
                >
                  {b}
                </motion.li>
              ))}
            </ul>

            {/* Tagline section for filling space */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="mt-8 text-lg md:text-xl font-light italic text-gray-300"
            >
              “Empowering Global AI Standards & Innovation”
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom thumbnails */}
      <div className="absolute bottom-6 right-0 flex gap-3 px-6 justify-end z-40">
        {slides.map((s, i) => (
          <motion.div
            key={s.title}
            whileHover={{ scale: 1.1 }}
            onClick={() => setActive(i)}
            className={`relative w-[100px] h-[120px] rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${
              i === active
                ? "border-orange-500 shadow-md shadow-orange-500/40"
                : "border-transparent opacity-70 hover:opacity-100"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover rounded-lg hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-start p-2 text-[10px] text-gray-200 font-semibold">
              {s.title}
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Part 3 */}

    <section className="min-h-screen bg-gray-900 text-center py-20 px-8 xl:px-0 flex flex-col justify-center">
      <span className="text-gray-400 text-lg max-w-lg mx-auto mb-2 capitalize flex items-center justify-center">
        what we're given
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="text-indigo-500 ml-3 w-6 h-6"
          aria-hidden
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
          />
        </svg>
      </span>

      <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-semibold max-w-3xl mx-auto mb-6 leading-snug px-6">
        Global Positioning
      </h1>

      <h4 className="text-white text-2xl md:text-3xl xl:text-4xl font-extralight max-w-0.5xl mx-auto mb-8 leading-snug">
        As both a professional federation and a certification authority,
        <br />
        IFFAI uniquely offers:
      </h4>

      <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const bgStyle: React.CSSProperties = {
            backgroundImage: `url(${service.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          };

          return (
            <div
              key={index}
              className={`card bg-gray-800/60 backdrop-blur-md p-10 relative overflow-hidden group`}
            >
              <div
                className={`circle absolute inset-0 z-0`}
                style={bgStyle}
                data-position={index + 1}
                aria-hidden
              />

              <div className="overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <h2 className="capitalize text-white mb-4 text-2xl xl:text-3xl font-playfair group-hover:text-orange-800 hover:shadow-blue-400">
                  {service.title}
                </h2>
                <p className="text-gray-400 transition-colors duration-700 group-hover:text-black">
                  {service.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <br />

      <h4 className="text-white text-1xl md:text-1xl xl:text-4xl font-extralight max-w-3xl mx-auto mb-0 leading-snug">
        At IFFAI, we believe in AI for All, creating a world where Artificial Intelligence is not just the future of technology, but the foundation of inclusive, ethical, and sustainable progress.
      </h4>
    </section>
    </div>
  );
};

export default IFFAIOverview;
