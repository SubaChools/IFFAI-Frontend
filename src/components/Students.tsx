// src/pages/Students.tsx
import React from "react";
import PageWrapper from "../components/PageWrapper";

const Students: React.FC = () => {
  const students = [
    { name: "Ravi Kumar", course: "React Basics", progress: 80 },
    { name: "Anjali Singh", course: "UX Design", progress: 65 },
    { name: "Karan Patel", course: "Advanced JS", progress: 90 },
  ];

  return (
    <PageWrapper title="Students">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b dark:border-gray-700 text-left">
            <th className="p-2">Name</th>
            <th className="p-2">Course</th>
            <th className="p-2">Progress</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, i) => (
            <tr key={i} className="border-b dark:border-gray-700">
              <td className="p-2">{s.name}</td>
              <td className="p-2">{s.course}</td>
              <td className="p-2">{s.progress}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </PageWrapper>
  );
};

export default Students;
