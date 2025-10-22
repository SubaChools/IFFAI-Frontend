import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { Cloud, Shield, UserCheck, type LucideIcon } from 'lucide-react';

type Course = {
  Icon: LucideIcon;
  title: string;
  desc: string;
  bg: string;
};

const courses: Course[] = [
  {
    Icon: Cloud,
    title: 'Cloud Solutions',
    desc: 'Scalable cloud infrastructure tailored to your needs.',
    bg: 'bg-green-50 border-green-100',
  },
  {
    Icon: Shield,
    title: 'Cybersecurity',
    desc: 'Protect your assets with top-tier security services.',
    bg: 'bg-blue-50 border-blue-100',
  },
  {
    Icon: UserCheck,
    title: 'IT Consulting',
    desc: 'Expert advice to drive digital transformation.',
    bg: 'bg-purple-50 border-purple-100',
  },
  {
    Icon: Cloud,
    title: 'DevOps Automation',
    desc: 'Automate your pipelines and delivery processes.',
    bg: 'bg-yellow-50 border-yellow-100',
  },
  {
    Icon: Shield,
    title: 'AI/ML Integration',
    desc: 'Embed intelligence into your product features.',
    bg: 'bg-red-50 border-red-100',
  },
  {
    Icon: UserCheck,
    title: 'Infrastructure Support',
    desc: 'Maintain, monitor, and optimize your systems.',
    bg: 'bg-indigo-50 border-indigo-100',
  },
];

// Duplicate for seamless loop
const scrollingCourses = [...courses, ...courses];

const AutoScrollCourses: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  // Start the animation
  useEffect(() => {
    if (!reduceMotion) {
      controls.start({
        x: ['0%', '-50%'],
        transition: {
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
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
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          ease: 'linear',
          duration: 30,
        },
      },
    });
  };

  return (
    <section className="relative py-10 bg-white">
      <div className="max-w-6xl mx-auto mb-10 text-center">
        <h2 className="text-4xl font-extrabold text-green-500 uppercase drop-shadow-lg">
          Explore Our Courses
        </h2>
        <p className="text-gray-600 mt-3 text-lg max-w-2xl mx-auto">
          Stay ahead with our certified learning paths and real-world projects.
        </p>
      </div>

      <div
        className="relative overflow-x-hidden overflow-y-visible pt-12 "
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={containerRef}
      >
        <motion.div
          className="flex gap-6 w-max"
          animate={controls}
        >
          {scrollingCourses.map((course, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.12,
                y: -20,
                zIndex: 20,
                transition: { duration: 0.3 },
              }}
              className={`relative z-0 min-w-[280px] md:min-w-[320px] flex-shrink-0 border ${course.bg} rounded-xl shadow-lg p-6 flex flex-col justify-between transition-all duration-300`}
            >
              <div>
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-white/70 text-green-600 shadow-sm mb-4">
                  <course.Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-gray-600">{course.desc}</p>
              </div>
              <div className="mt-4">
                <a
                  href="#"
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
