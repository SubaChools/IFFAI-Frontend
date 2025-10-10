// src/pages/Forum.tsx
import React from "react";
import PageWrapper from "../components/PageWrapper";

const Forum: React.FC = () => {
  const threads = [
    { title: "How to optimize React performance?", replies: 12 },
    { title: "Difference between useMemo and useCallback?", replies: 8 },
  ];

  return (
    <PageWrapper title="Forum Discussions">
      <div className="space-y-3">
        {threads.map((t, i) => (
          <div
            key={i}
            className="p-4 border dark:border-gray-700 rounded-lg flex justify-between items-center"
          >
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-gray-500">
                {t.replies} replies
              </div>
            </div>
            <button className="text-indigo-600 text-sm hover:underline">
              Open
            </button>
          </div>
        ))}
      </div>
    </PageWrapper>
  );
};

export default Forum;
