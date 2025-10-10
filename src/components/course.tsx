import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import react from "../assets/images/react.png";
import TS from "../assets/images/typescript.png";
import next from "../assets/images/nextjs.png";

type Course = {
  title: string;
  description: string;
  image: string;
};

const courses: Course[] = [
  {
    title: 'React Fundamentals',
    description: 'Learn the basics of React including hooks and components.',
    image: react,
  },
  {
    title: 'Advanced TypeScript',
    description: 'Type your code like a pro with advanced TS patterns.',
    image: TS,
  },
  {
    title: 'Next.js Mastery',
    description: 'Build fullstack apps with Next.js and server components.',
    image: next,
  },
];

const CourseStack: React.FC = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % courses.length);
  };

  return (
    <div
      className="relative w-[340px] h-[420px] mx-auto mt-12 cursor-pointer"
      onClick={handleNext}
    >
      <AnimatePresence>
        {courses
          .slice(index, index + 3)
          .map((course, i) => (
            <motion.div
              key={course.title}
              className="absolute top-0 left-0 w-full h-full bg-gray-800 text-white rounded-2xl p-6 shadow-xl flex flex-col items-center justify-center transition-all"
              initial={{ x: i * 10, scale: 1 - i * 0.05, opacity: 0 }}
              animate={{ x: i * 10, scale: 1 - i * 0.05, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.4 }}
              style={{ zIndex: courses.length - i }}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {course.title}
              </h3>
              <p className="text-sm text-gray-300 text-center">
                {course.description}
              </p>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
};

export default CourseStack;
