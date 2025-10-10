// src/pages/Certificates.tsx
import React from "react";
import PageWrapper from "../components/PageWrapper";

const Certificates: React.FC = () => {
  const certs = [
    { name: "React Developer", date: "Sep 2025" },
    { name: "JavaScript Expert", date: "Aug 2025" },
  ];

  return (
    <PageWrapper title="Certificates">
      <div className="grid gap-4">
        {certs.map((c, i) => (
          <div
            key={i}
            className="p-4 rounded-lg border dark:border-gray-700 flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{c.name}</div>
              <div className="text-xs text-gray-500">Issued: {c.date}</div>
            </div>
            <button className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700">
              View
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Certificates;
