// src/pages/LiveClasses.tsx
import React from "react";
import PageWrapper from "../components/PageWrapper";

const LiveClasses: React.FC = () => {
  const classes = [
    { topic: "Intro to React", date: "Oct 10, 2025", time: "10:00 AM" },
    { topic: "API Integration", date: "Oct 12, 2025", time: "4:00 PM" },
  ];

  return (
    <PageWrapper title="Live Classes">
      <ul className="space-y-3">
        {classes.map((c, i) => (
          <li
            key={i}
            className="p-4 rounded-lg border dark:border-gray-700 flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{c.topic}</div>
              <div className="text-xs text-gray-500">
                {c.date} — {c.time}
              </div>
            </div>
            <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
              Join
            </button>
          </li>
        ))}
      </ul>
    </PageWrapper>
  );
};

export default LiveClasses;
