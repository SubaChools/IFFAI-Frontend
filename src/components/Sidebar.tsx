// src/components/Sidebar.tsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  Grid,
  BookOpen,
  Calendar,
  Award,
  MessageSquare,
  User,
  Settings,
} from "lucide-react";

type SidebarProps = {
  role: "student" | "admin";
  setRole: (role: "student" | "admin") => void;
};

const navItems = [
  { label: "Dashboard", path: "/lms", icon: <Grid size={16} /> },
  { label: "My Courses", path: "/lms/courses", icon: <BookOpen size={16} /> },
  { label: "Live Classes", path: "/lms/classes", icon: <Calendar size={16} /> },
  { label: "Certificates", path: "/lms/certificates", icon: <Award size={16} /> },
  { label: "Forum", path: "/lms/forum", icon: <MessageSquare size={16} /> },
  { label: "Students", path: "/lms/students", icon: <User size={16} /> },
  { label: "Settings", path: "/lms/settings", icon: <Settings size={16} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ role, setRole }) => {
  return (
    <aside className="w-64 mt-30 bg-white dark:bg-gray-800 dark:text-gray-100 border-r dark:border-gray-700 p-6">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-indigo-600 rounded-md w-10 h-10 flex items-center justify-center text-white font-bold">
          L
        </div>
        <div>
          <div className="font-semibold">LMS Platform</div>
          <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
            {role} Dashboard
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `flex items-center gap-3 p-2 rounded-md transition-all ${
                isActive
                  ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-700/30"
                  : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              }`
            }
          >
            {item.icon}
            <span className="text-sm">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Role switch */}
      <div className="mt-6">
        <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Quick switch</div>
        <div className="flex gap-2">
          <button
            onClick={() => setRole("student")}
            className={`flex-1 py-2 rounded-md text-sm ${
              role === "student"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex-1 py-2 rounded-md text-sm ${
              role === "admin"
                ? "bg-indigo-600 text-white"
                : "bg-gray-100 dark:bg-gray-700"
            }`}
          >
            Admin
          </button>
        </div>
      </div>

      <div className="mt-8 text-xs text-gray-400">© LMS 2025</div>
    </aside>
  );
};

export default Sidebar;
