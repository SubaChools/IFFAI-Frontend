import React from "react";
import { motion, useReducedMotion} from "framer-motion";
import type {Variants } from "framer-motion";
import { Cloud, Shield, UserCheck, type LucideIcon } from "lucide-react";

type Service = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  bg: string; // tailwind classes
};

const services: Service[] = [
  {
    Icon: Cloud,
    title: "Cloud Solutions",
    desc:
      "Sagittis donec cursus sed pretium varius non sagittis ut. Amet mi augue purus malesuada pulvinar.",
    bg: "bg-green-50 border-green-100",
  },
  {
    Icon: Shield,
    title: "Cybersecurity",
    desc:
      "Sagittis donec cursus sed pretium varius non sagittis ut. Amet mi augue purus malesuada pulvinar.",
    bg: "bg-blue-50 border-blue-100",
  },
  {
    Icon: UserCheck,
    title: "IT Consulting",
    desc:
      "Sagittis donec cursus sed pretium varius non sagittis ut. Amet mi augue purus malesuada pulvinar.",
    bg: "bg-purple-50 border-purple-100",
  },
];

// container controls the stagger and initial delay
const container = (shouldReduceMotion: boolean | null): Variants => ({
  hidden: {},
  show: shouldReduceMotion
    ? { transition: { staggerChildren: 0 } }
    : {
        transition: {
          delayChildren: 0.28,
          staggerChildren: 0.18,
        },
      },
});

// card entrance: subtle fade + lift
const card = (shouldReduceMotion: boolean): Variants => ({
  hidden: shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : { opacity: 0, y: 28, scale: 0.996 },
  show: shouldReduceMotion
    ? { opacity: 1, y: 0, scale: 1 }
    : {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
      },
});

// icon pop animation
const icon = (shouldReduceMotion: boolean): Variants => ({
  hidden: shouldReduceMotion
    ? { opacity: 1, scale: 1, rotate: 0 }
    : { opacity: 0, scale: 0.86, rotate: -8 },
  show: shouldReduceMotion
    ? { opacity: 1, scale: 1, rotate: 0 }
    : {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
      },
});

const ServicesSection: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className=" px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 text-center">
          <div className="text-gray-400 mb-2">•</div>
          <h2 className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold mt-20 drop-shadow-lg">
            Become a certified success
          </h2>
          <p className="mt-2 text-gray-500 text-xl mb-10">
            Certifications are an excellent way to increase your earning power, drive project success, and stand out from the crowd. 
          </p>
        </div>

        <motion.div
          variants={container(shouldReduceMotion ?? false)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.article
              key={s.title}
              variants={card(shouldReduceMotion ?? false)}
              whileHover={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: 1.03,
                      y: -6,
                      transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
                    }
              }
              className={`p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between border ${s.bg}`}
            >
              <div>
                <motion.div
                  variants={icon(shouldReduceMotion ?? false)}
                  className="w-14 h-14 rounded-md flex items-center justify-center bg-white/70 text-green-600 mb-6 shadow-sm"
                >
                  <s.Icon size={26} aria-hidden />
                </motion.div>

                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {s.title}
                </h3>
                <p className="text-gray-700">{s.desc}</p>
              </div>

              <div className="mt-6">
                <a
                  href="#"
                  className="text-green-700 font-medium inline-block mt-2 hover:underline"
                  aria-label={`Learn more about ${s.title}`}
                >
                  LEARN MORE
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
