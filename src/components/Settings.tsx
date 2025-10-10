// src/pages/Settings.tsx
import React, { useState } from "react";
import PageWrapper from "../components/PageWrapper";

const Settings: React.FC = () => {
  const [email, setEmail] = useState("student@lms.com");
  const [notifications, setNotifications] = useState(true);

  return (
    <PageWrapper title="Settings">
      <form className="space-y-5 max-w-md">
        <div>
          <label className="text-sm text-gray-500 block mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border dark:border-gray-700 rounded-md bg-transparent"
          />
        </div>
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
          <span className="text-sm">Enable notifications</span>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm hover:bg-indigo-700"
        >
          Save Changes
        </button>
      </form>
    </PageWrapper>
  );
};

export default Settings;
