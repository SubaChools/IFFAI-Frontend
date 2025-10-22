import React from "react";
import { motion } from "framer-motion";
import mainImage from "../assets/images/3d-world-global.jpg";

const networkPoints = [
  {
    label: "Leading universities and technical institutions",
    color: "text-blue-500",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2L1 7l11 5 11-5-11-5zm0 7l-9-4 9-4 9 4-9 4zm-7 2v8h14v-8l-7 3-7-3z" />
      </svg>
    ),
  },
  {
    label: "Government AI taskforces and innovation councils",
    color: "text-purple-500",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 22v-2h18v2H3zm2-4V8l7-4 7 4v10H5zm2-8v6h10v-6l-5-2.5L7 10z" />
      </svg>
    ),
  },
  {
    label: "Fortune 500 companies and emerging startups",
    color: "text-green-500",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M3 21h18v-2H3v2zm2-4h14v-8H5v8zm2-6h10v4H7v-4z" />
      </svg>
    ),
  },
  {
    label: "Policy think tanks and research foundations",
    color: "text-red-500",
    icon: (
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 2a7 7 0 00-7 7c0 3.87 7 13 7 13s7-9.13 7-13a7 7 0 00-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  },
];

const Sixpart: React.FC = () => {
  return (
    <section className="mb-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[55%_40%] items-center gap-12">
        {/* Left text content */}
        <div className="order-2 lg:order-1">
          <p className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold mt-20 drop-shadow-lg">
            Our Global Network
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Collaborating Across Continents
          </h2>
          <p className="text-gray-600 max-w-xl mb-8">
            IFFAI maintains active partnerships across North America, Europe, Asia, and the Middle East, working with:
          </p>

          {/* List of Network Points */}
          <ul className="space-y-6">
            {networkPoints.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <motion.div
                  className={`mt-1 mr-3 flex-shrink-0 ${item.color}`}
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  {item.icon}
                </motion.div>
                <span className="text-gray-700">{item.label}</span>
              </motion.li>
            ))}
          </ul>

          <p className="text-gray-600 mt-6">
            Through this network, we deliver co-branded certifications, global faculty exchange, AI innovation hubs, and cross-border research initiatives that accelerate global AI readiness.
          </p>
        </div>

        {/* Right image */}
        <div className="relative order-1 lg:order-2 overflow-visible">
          <div className="overflow-hidden  relative z-0">
            <img
              src={mainImage}
              alt="Global Network"
              className="w-full h-80 sm:h-[420px] md:h-[520px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sixpart;
