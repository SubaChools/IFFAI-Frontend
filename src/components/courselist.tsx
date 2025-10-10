import React from 'react';
import { Link } from 'react-router-dom';

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const courses: Course[] = [
  {
    id: 'react-fundamentals',
    title: 'React Fundamentals',
    description: 'Learn the basics of React including hooks and components.',
    image: '/images/react.png',
  },
  {
    id: 'advanced-typescript',
    title: 'Advanced TypeScript',
    description: 'Type your code like a pro with advanced TS patterns.',
    image: '/images/typescript.png',
  },
  {
    id: 'nextjs-mastery',
    title: 'Next.js Mastery',
    description: 'Build fullstack apps with Next.js and server components.',
    image: '/images/nextjs.png',
  },
];

const CourseList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-10">Available Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between"
          >
            <div>
              <img
                src={course.image}
                alt={course.title}
                className="w-16 h-16 mb-4 object-contain"
              />
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm">{course.description}</p>
            </div>
            <div className="mt-6">
              <Link
                to={`/courses/${course.id}`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                View Course
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseList;
