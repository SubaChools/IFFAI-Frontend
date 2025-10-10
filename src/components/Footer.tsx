import React, { useState, } from "react";
import type  { FormEvent } from "react";
import { motion} from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Book,
  Users,
  Library,
  Info,
  Briefcase,
  PenTool,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "../assets/images/IFFAI Logo.png";

// Type definitions for feature items
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>;
  text: string;
}

interface FeatureColumn {
  title: string;
  items: FeatureItem[];
}

// Reusable animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

export default function AIEmailSubscription() {
  const [email, setEmail] = useState<string>("");
  const [sent, setSent] = useState<boolean>(false);

  function handleSubscribe(e: FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
    setTimeout(() => setEmail(""), 1200);
    setTimeout(() => setSent(false), 2600);
  }

  const featureColumns: FeatureColumn[] = [
    {
      title: "Discover",
      items: [
        { icon: Book, text: "Academies" },
        { icon: Users, text: "Skill Development" },
        { icon: Briefcase, text: "Consulting" },
        { icon: Library, text: "Digital Library" },
        { icon: Info, text: "About Us" },
      ],
    },
    {
      title: "Work with us",
      items: [
        { icon: PenTool, text: "Become an Instructor" },
        { icon: PenTool, text: "Blog as Guest" },
      ],
    },
    {
      title: "Contact",
      items: [
        {
          icon: MapPin,
          text: "USA",
        },
        { icon: Phone, text: "+966536834733" },
        { icon: Phone, text: "+966505107100" },
        { icon: Mail, text: "sn@theiffai.com" },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0b1020] via-[#080814] to-[#04040a] text-white ">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="mb-5 text-center"
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            AI Studio — Ship Smarter
          </h1>
          {/* <p className="mt-2 text-gray-300 max-w-2xl mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
            tempore veniam nobis est. Ea placeat, soluta doloremque error sint
            inventore, amet, reprehenderit sed officiis rerum quod explicabo
            expedita quis odit?
          </p> */}
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-2">
          {featureColumns.map((col, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="rounded-2xl border border-white/6 bg-gradient-to-br from-white/2 to-transparent p-5 backdrop-blur-lg shadow-lg"
            >
              <h3 className="text-lg font-semibold mb-4 text-center">
                {col.title}
              </h3>
              <div className="flex flex-col gap-3">
                {col.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <item.icon className="h-6 w-6 text-green-500" />
                    <p className="text-sm text-gray-300">{item.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Subscription Card */}
        <motion.div
          initial={{ scale: 0.98, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="rounded-3xl border border-white/6 bg-gradient-to-tr from-[#071022]/60 to-[#061018]/30 p-6 backdrop-blur-2xl shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            {/* Left: Text + Form */}
            <div className="flex-1">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="text-2xl font-bold"
              >
                Get early IFFAI updates
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-1 text-gray-300"
              >
                Weekly notes: model improvements, prompts, and practical demos.
              </motion.p>

              {/* Email Subscription Form */}
              <motion.form
                onSubmit={handleSubscribe}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-4 flex max-w-xl w-full items-center gap-3"
              >
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative flex-1">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@mail.com"
                    className={`w-full rounded-full py-3 pl-4 pr-36 text-gray-900 placeholder-gray-500 outline-none transition-shadow duration-200 shadow-sm ${
                      sent ? "ring-2 ring-emerald-400" : "ring-1 ring-white/6"
                    }`}
                  />
                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.96 }}
                    className="absolute right-1 top-1/2 -translate-y-1/2 bg-gradient-to-r from-green-500 to-green-400 px-4 py-2 rounded-full font-semibold shadow-md"
                  >
                    <span className="inline-flex items-center gap-2">
                      {sent ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="black"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="black"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      )}
                      <span className="text-black text-sm">
                        {sent ? "Subscribed" : "Subscribe"}
                      </span>
                    </span>
                  </motion.button>
                </div>
              </motion.form>

              {/* Micro Hints */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="mt-4 flex items-center gap-3 text-sm text-gray-400"
              >
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3">
                  ⚡ Model tips
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3">
                  🔐 Security
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/3">
                  🚀 Deployables
                </span>
              </motion.div>
            </div>

            {/* Right: Preview Image */}
            <motion.div
              initial={{ opacity: 0, x: 18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full lg:w-64 p-4 rounded-xl border border-white/4 bg-gradient-to-b from-white/3 to-transparent flex items-center justify-center"
            >
              <img src={Logo} alt="IFFAI Preview" className="rounded-md" />
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mt-6 text-s text-gray-400 text-center lg:text-left"
          >
            We respect your privacy — unsubscribe any time.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
