// src/pages/LMS.tsx
import React, { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardHome from "../components/DashboardHome";
import MyCourses from "../components/MyCourses";
import LiveClasses from "../components/LiveClasses";
import Certificates from "../components/Certificates";
import Forum from "../components/Forum";
import Students from "../components/Students";
import Settings from "../components/Settings";
import Instructors from "../components/admin/Instructors";
import { ThemeContext } from "../context/ThemeContext";
import { Moon, Sun } from "lucide-react";

const Lms: React.FC = () => {
  const [role, setRole] = useState<"student" | "admin">("student");
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <div
      className={`flex min-h-screen transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-800"
      }`}
    >
      <Sidebar role={role} setRole={setRole} />
      <main className="flex-1 p-8 overflow-y-auto relative">
        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="absolute top-5 right-5 bg-gray-200 dark:bg-gray-700 p-2 rounded-full shadow"
        >
          {darkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <Routes>
          {/* Default route when /lms is opened */}
          <Route index element={<DashboardHome role={role} />} />
          {/* Nested routes */}
          <Route path="courses" element={<MyCourses />} />
          <Route path="classes" element={<LiveClasses />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="forum" element={<Forum />} />
          <Route path="students" element={<Students />} />
          <Route path="settings" element={<Settings />} />
          <Route path="/admin/Instructors" element={<Instructors />} />
          
        </Routes>
      </main>
    </div>
  );
};



export default Lms;
