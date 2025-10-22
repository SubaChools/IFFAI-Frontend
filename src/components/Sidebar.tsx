// src/components/Sidebar.tsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  CalendarDays,
  Award,
  MessageSquare,
  Users,
  UserCircle,
  Settings,
  Menu,
  X,
} from "lucide-react";

type SidebarProps = {
  role: "student" | "admin";
  setRole: (role: "student" | "admin") => void;
};

// --- Role-based Navigation Menus ---
const menuItems = {
  student: [
    { label: "Dashboard", path: "/lms", icon: <LayoutDashboard size={18} /> },
    { label: "My Courses", path: "/lms/courses", icon: <BookOpen size={18} /> },
    { label: "Live Classes", path: "/lms/classes", icon: <CalendarDays size={18} /> },
    { label: "Certificates", path: "/lms/certificates", icon: <Award size={18} /> },
    { label: "Forum", path: "/lms/forum", icon: <MessageSquare size={18} /> },
    { label: "Settings", path: "/lms/settings", icon: <Settings size={18} /> },
  ],
  admin: [
    { label: "Dashboard", path: "/lms/admin", icon: <LayoutDashboard size={18} /> },
    { label: "Courses", path: "/lms/admin/courses", icon: <BookOpen size={18} /> },
    { label: "Live Classes", path: "/lms/admin/classes", icon: <CalendarDays size={18} /> },
    { label: "Students", path: "/lms/students", icon: <Users size={18} /> },
    { label: "Instructors", path: "/lms/admin/instructors", icon: <UserCircle size={18} /> },
    { label: "Reports", path: "/lms/admin/reports", icon: <Award size={18} /> },
    { label: "Settings", path: "/lms/admin/settings", icon: <Settings size={18} /> },
  ],
};

const Sidebar: React.FC<SidebarProps> = ({ role, setRole }) => {
  const [isOpen, setIsOpen] = useState(true);

  const navItems = menuItems[role];

  return (
    <>
      {/* Mobile toggle button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-indigo-600 p-2 rounded-md text-white shadow-md hover:bg-indigo-700 transition-all"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.aside
            initial={{ x: -260, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -260, opacity: 0 }}
            transition={{ type: "spring", stiffness: 120 }}
            className="fixed lg:static top-0 left-0 h-full w-64 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-r border-gray-200 dark:border-gray-700 shadow-lg p-6 flex flex-col justify-between z-40"
          >
            {/* Logo Section */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-indigo-600 rounded-xl w-10 h-10 flex items-center justify-center text-white font-bold shadow-md">
                  L
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    LMS Platform
                  </div>
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
                      `flex items-center gap-3 p-2 rounded-lg text-sm transition-all duration-150 ${
                        isActive
                          ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-700/30 dark:text-indigo-200"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`
                    }
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </NavLink>
                ))}
              </nav>

              {/* Role Switcher */}
              <div className="mt-8">
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">
                  Quick switch
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setRole("student")}
                    className={`flex-1 py-2 rounded-md text-sm transition-all ${
                      role === "student"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    Student
                  </button>
                  <button
                    onClick={() => setRole("admin")}
                    className={`flex-1 py-2 rounded-md text-sm transition-all ${
                      role === "admin"
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200"
                    }`}
                  >
                    Admin
                  </button>
                </div>
              </div>
            </div>

            <div className="text-xs text-gray-400 dark:text-gray-500 text-center mt-8">
              © LMS 2025
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
