// src/pages/MyCourses.tsx
import React from "react";
import PageWrapper from "../components/PageWrapper";

const MyCourses: React.FC = () => {
  const courses = [
    { title: "React Fundamentals", progress: 80 },
    { title: "Advanced JavaScript", progress: 60 },
    { title: "UI/UX for Developers", progress: 45 },
  ];

  return (
    <PageWrapper title="My Courses">
      <div className="grid gap-4">
        {courses.map((course, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border dark:border-gray-700 flex flex-col gap-2"
          >
            <div className="font-semibold">{course.title}</div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-indigo-600 h-2"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <div className="text-xs text-gray-500">
              Progress: {course.progress}%
            </div>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default MyCourses;
