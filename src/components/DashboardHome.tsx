// src/pages/DashboardHome.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const DashboardHome: React.FC<{ role: string }> = ({ role }) => {
  const studentData = [
    { week: "W1", score: 60, hours: 4 },
    { week: "W2", score: 70, hours: 6 },
    { week: "W3", score: 78, hours: 8 },
    { week: "W4", score: 85, hours: 9 },
    { week: "W5", score: 90, hours: 11 },
  ];

  const adminData = [
    { month: "Jan", students: 120, revenue: 4500 },
    { month: "Feb", students: 150, revenue: 5200 },
    { month: "Mar", students: 180, revenue: 5800 },
    { month: "Apr", students: 200, revenue: 6400 },
    { month: "May", students: 230, revenue: 7100 },
  ];

  return (
    <div className="space-y-6 ">
      <h1 className="text-2xl font-semibold">
        {role === "admin" ? "Admin Analytics" : "Student Dashboard"}
      </h1>

      {/* Common cards */}
      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
          <div className="text-xs text-gray-400">Total Courses</div>
          <div className="font-bold text-lg mt-2">12</div>
          <div className="text-sm text-gray-500">Active this month</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
          <div className="text-xs text-gray-400">Certificates</div>
          <div className="font-bold text-lg mt-2">4</div>
          <div className="text-sm text-gray-500">Earned so far</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-sm">
          <div className="text-xs text-gray-400">Active Hours</div>
          <div className="font-bold text-lg mt-2">32 hrs</div>
          <div className="text-sm text-gray-500">Last 5 weeks</div>
        </div>
      </div>

      {/* Student or Admin chart */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
        <h3 className="font-semibold text-lg mb-4">
          {role === "admin" ? "User Growth & Revenue" : "Learning Progress"}
        </h3>
        <div style={{ height: 300 }}>
          <ResponsiveContainer width="100%" height="100%">
            {role === "admin" ? (
              <BarChart data={adminData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="students" fill="#4f46e5" />
                <Bar dataKey="revenue" fill="#06b6d4" />
              </BarChart>
            ) : (
              <LineChart data={studentData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#4f46e5"
                  strokeWidth={3}
                  dot
                />
                <Line
                  type="monotone"
                  dataKey="hours"
                  stroke="#06b6d4"
                  strokeWidth={2}
                  dot
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
