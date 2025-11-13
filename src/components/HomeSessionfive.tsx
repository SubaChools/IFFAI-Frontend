import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { Cpu, FileText , HeartPulse, TrendingUp, HardDrive, Users, BookOpen, Sun, Key, Rocket} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Course = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  bg: string;
  url:string;
};

const courses: Course[] = [
  {
    Icon: Cpu,
    title: 'Core Artificial Intelligence & Machine Learning',
    desc: 'This domain shapes professionals who design, train, and deploy intelligent systems capable of self-learning and adaptation. It builds deep mastery in neural networks, deep learning, and reinforcement systems that drive autonomous decision-making. ',
    bg: 'bg-gradient-to-br from-green-50 to-teal-100',
    url:"/product"
  },
  {
    Icon: FileText,
    title: 'AI in Technology, Robotics & Automation',
    desc: 'AI has become the new diagnostic lens of modern medicine.This domain unites computational intelligence with biomedical science to enable predictive, personalized healthcare. It covers diagnostic modeling, drug discovery, genomics, and clinical decision support systems.',
    bg: 'bg-gradient-to-br from-rose-50 to-pink-100',
    url:"/product"
  },
  {
    Icon: HeartPulse,
    title: 'AI in Healthcare & Life Sciences ',
    desc: 'AI has become the new diagnostic lens of modern medicine.This domain unites computational intelligence with biomedical science to enable predictive, personalized healthcare. It covers diagnostic modeling, drug discovery, genomics, and clinical decision support systems.',
    bg: 'bg-gradient-to-br from-sky-50 to-indigo-100',
    url:"/product"
  },
  {
    Icon: TrendingUp,
    title: ' AI in Finance, Economics & Business Intelligence ',
    desc: 'This domain develops professionals who understand how AI automates trading, forecasting, and enterprise analytics. It explores cognitive finance, risk modeling, and intelligent business strategy for a digital economy.',
    bg: 'bg-gradient-to-br from-green-50 to-teal-100',
    url:"/product"
  },
  {
    Icon: HardDrive,
    title: 'Generative AI & Creative Intelligence ',
    desc: 'This domain empowers creators to use AI for storytelling, design, content synthesis, and multimedia production. It explores large language models, diffusion systems, and cognitive design frameworks.',
    bg: 'bg-gradient-to-br from-rose-50 to-pink-100',
    url:"/product"
  },
  {
    Icon: Users,
    title: 'AI in Leadership, Strategy & Policy ',
    desc: 'This domain shapes executives and policymakers capable of steering organizations through cognitive disruption. It covers strategic AI management, ethical governance, and public policy for responsible innovation.',
    bg: 'bg-gradient-to-br from-sky-50 to-indigo-100',
    url:"/product"
  },
  {
    Icon: BookOpen,
    title: 'AI in Education & Learning Technologies',
    desc: 'This domain transforms educators into learning scientists who use AI for pedagogy, assessment, and institutional analytics. It explores smart classrooms, cognitive tutoring, and data-driven curriculum innovation.',
    bg: 'bg-gradient-to-br from-green-50 to-teal-100',
    url:"/product"
  },
  {
    Icon: Sun,
    title: 'AI for Climate, Energy & Sustainability',
    desc: 'This domain applies artificial intelligence to environmental modeling, renewable energy, and sustainable urban systems. It emphasizes predictive climate analysis, precision agriculture, and smart city design.',
    bg: 'bg-gradient-to-br from-rose-50 to-pink-100',
    url:"/product"
  },
  {
    Icon: Key,
    title: 'AI in Cybersecurity, Defense & Intelligence',
    desc: 'This domain integrates AI into cybersecurity, defense analytics, and national intelligence systems. It explores predictive threat detection, quantum encryption, and adversarial resilience.',
    bg: 'bg-gradient-to-br from-sky-50 to-indigo-100s',
    url:"/product"
  },
   {
    Icon: Rocket,
    title: ' Frontier & Emerging AI Domains',
    desc: 'This domain encourages exploration beyond traditional algorithms into cognitive and cosmic systems. It bridges scientific imagination with applied innovation in quantum AI, metaverse systems, and human enhancement technologies.',
    bg: 'bg-gradient-to-br from-rose-50 to-pink-100',
    url:"/product"
  },
];

// Duplicate for seamless loop
const scrollingCourses = [...courses, ...courses];

const AutoScrollCourses: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!reduceMotion) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 30,
          },
        },
      });
    }
  }, [controls, reduceMotion]);

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    if (!reduceMotion) {
      controls.start({
        x: ["0%", "-50%"],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration: 60,
          },
        },
      });
    }
  };

  return (
    <section className="relative py-10 bg-white">
      <div className="max-w-6xl mx-auto mb-10 text-center px-4">
        <h2 className="text-4xl font-extrabold text-green-500 uppercase drop-shadow-lg">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Stay ahead with our certified learning paths and real-world projects.
        </p>
      </div>

      <div
        className="relative overflow-x-hidden overflow-y-visible pt-12"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        {/* track: inline-flex so duplicated content flows horizontally and wraps correctly */}
        <motion.div
          className="inline-flex gap-6"
          animate={controls}
          style={{ willChange: "transform" }}
        >
          {scrollingCourses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.08,
                y: -12,
                zIndex: 20,
                transition: { duration: 0.25 },
              }}
              className={`relative z-0 w-[320px] md:w-[360px] h-[380px] flex-shrink-0  ${course.bg} rounded-xl  p-6 flex flex-col justify-between transition-all duration-300`}
            >
              <div className="flex flex-col flex-grow overflow-hidden">
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/70 text-green-600 shadow-sm mb-4">
                  <course.Icon size={24} />
                </div>

                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
                  {course.title}
                </h3>

                {/* DESCRIPTION: Ensure wrapping */}
                <p className="text-sm text-gray-600 leading-relaxed whitespace-normal break-words overflow-hidden">
                  {course.desc}
                </p>
              </div>

              <div className="mt-4">
                <a
                  href={course.url}
                  className="text-green-700 font-medium text-sm hover:underline"
                >
                  Learn more →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AutoScrollCourses;