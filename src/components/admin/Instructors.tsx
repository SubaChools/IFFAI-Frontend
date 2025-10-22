// src/pages/admin/Instructors.tsx
import React, { useState } from "react";
import { Search, Star, Users, BookOpen } from "lucide-react";

const instructors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    email: "sarah.johnson@example.com",
    specialization: "Data Science",
    students: 240,
    courses: 12,
    rating: 4.8,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Michael Chen",
    email: "michael.chen@example.com",
    specialization: "Web Development",
    students: 180,
    courses: 9,
    rating: 4.6,
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
  {
    id: 3,
    name: "Priya Patel",
    email: "priya.patel@example.com",
    specialization: "UI/UX Design",
    students: 310,
    courses: 14,
    rating: 4.9,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Instructors: React.FC = () => {
  const [search, setSearch] = useState("");

  const filtered = instructors.filter(
    (inst) =>
      inst.name.toLowerCase().includes(search.toLowerCase()) ||
      inst.specialization.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
            Instructors
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Overview of all instructors and their stats
          </p>
        </div>

        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            type="text"
            placeholder="Search instructor..."
            className="pl-10 pr-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table container */}
      <div className="overflow-x-auto bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
        <table className="min-w-full text-sm text-gray-700 dark:text-gray-200">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800/70 text-gray-600 dark:text-gray-400 text-xs uppercase tracking-wide">
              <th className="text-left px-6 py-4 font-medium" rowSpan={2}>
                Instructor
              </th>
              <th className="text-left px-6 py-4 font-medium" rowSpan={2}>
                Specialization
              </th>
              <th className="text-center px-6 py-4 font-medium" colSpan={3}>
                Students Info
              </th>
            </tr>
            <tr className="bg-gray-50 dark:bg-gray-800/70 text-xs text-gray-500 dark:text-gray-400 uppercase">
              <th className="px-6 py-2 text-center font-medium">Count</th>
              <th className="px-6 py-2 text-center font-medium">Courses</th>
              <th className="px-6 py-2 text-center font-medium">Rating</th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((inst) => (
              <tr
                key={inst.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                {/* Instructor */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <img
                      src={inst.avatar}
                      alt={inst.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{inst.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {inst.email}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Specialization */}
                <td className="px-6 py-4">{inst.specialization}</td>

                {/* Students Count */}
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                    <Users size={16} /> {inst.students}
                  </div>
                </td>

                {/* Courses */}
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300">
                    <BookOpen size={16} /> {inst.courses}
                  </div>
                </td>

                {/* Rating */}
                <td className="px-6 py-4 text-center">
                  <div className="flex items-center justify-center gap-2 text-yellow-500">
                    <Star size={16} /> {inst.rating}
                  </div>
                </td>
              </tr>
            ))}

            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="text-center py-10 text-gray-400 dark:text-gray-500"
                >
                  No instructors found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructors;
