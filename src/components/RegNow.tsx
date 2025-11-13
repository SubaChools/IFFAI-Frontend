import React from "react";
import { motion } from "framer-motion";
import bgImg from "../assets/images/AI2.jpg";
import sideImg from "../assets/images/learnAI.jpg";

const RegNow: React.FC = () => {
  const listItems = [
    {
      text: "Accredited under NAICS Code 813920 – International Professional and Educational Association.",
      color: "text-blue-500",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 7.6l-9-4 9-4 9 4-9 4zM5 9v8h14V9l-7 3.11L5 9z" />
        </svg>
      ),
    },
    {
      text: "Co-certification partnerships with International Skill University (ISU) and Chools Group.",
      color: "text-purple-500",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M21 13v-2l-7-6-5 4-5-4-4 3v2l4-3 5 4 5-4 7 6zm0 0l-7 6-5-4-5 4-4-3v2l4 3 5-4 5 4 7-6v-2z" />
        </svg>
      ),
    },
    {
      text: "Trusted by universities, industries, and policymakers to deliver world-class, ethically grounded AI education.",
      color: "text-green-500",
      icon: (
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 2a5 5 0 00-5 5v2a5 5 0 0010 0V7a5 5 0 00-5-5zm-7 14a7 7 0 0114 0v3H5v-3z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      className="w-full relative bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      <div className="relative z-10 container mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-16">
        {/* ✅ Left: Text Content */}
        <motion.div
          className="bg-white rounded-2xl shadow-lg p-8 md:p-12 flex flex-col h-full w-full"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Gradient Animated Heading */}
          <h2 className="text-4xl font-extrabold uppercase mb-6 bg-clip-text text-green-500">
            Our Legacy of Excellence
          </h2>

          {/* Animated List */}
          <ul className="md:text-lg space-y-6">
            {listItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.8,
                  type: "spring",
                  stiffness: 120,
                }}
              >
                <motion.div
                  className={`mt-1 mr-3 flex-shrink-0 ${item.color}`}
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <span>{item.text}</span>
              </motion.li>
            ))}
          </ul>

          <p className="md:text-lg text-gray-800 mt-6">
            Sign up for a free IFFAI account to unlock dozens of online courses, digital tools,
            virtual events, and thought leadership insights to accelerate your career.
          </p>

          {/* ✅ Centered Button */}
          <div className="flex justify-center mt-8">
            <a href="/register">
              <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition">
                Register Now
              </button>
            </a>
          </div>
        </motion.div>

        {/* ✅ Right: Hero Image with Hover Animation */}
        <motion.div
          className="h-full flex justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <img
            src={sideImg}
            alt="AI"
            className="w-full max-w-lg rounded-2xl rounded-tl-full rounded-tr-full rounded-bl-full object-cover shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default RegNow;
