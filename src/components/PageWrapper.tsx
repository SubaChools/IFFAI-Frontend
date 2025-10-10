// src/components/PageWrapper.tsx
import React from "react";

const PageWrapper: React.FC<{ title: string; children?: React.ReactNode }> = ({
  title,
  children,
}) => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm">
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
