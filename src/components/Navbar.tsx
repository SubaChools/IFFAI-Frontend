import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart} from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/IFFAI Logo.png";

// ==========================
// NAVIGATION DATA STRUCTURE
// ==========================
const navItems = [
  {
    title: "Certifications",
    sections: [
      {
        heading: "",
        links: [
          { name: "Core Artificial Intelligence & Machine Learning", path: "/product" },
          { name: "AI in Technology, Robotics & Automation", path: "/product2" },
          { name: "AI in Leadership, Strategy & Policy", path: "/product6" },
          { name: "AI in Education & Learning Technologies", path: "/product7" },
         // { name: "AI for Climate, Energy & Sustainability", path: "/ai-climate" },
          // { name: "AI in Cybersecurity, Defense & Intelligence", path: "/ai-cybersecurity" },
          { name: "Frontier & Emerging AI Domains", path: "/product10" },
          { name: "AI in Supply Chain, Logistics & Operations Management", path: "/product12" },
        ],
      },
      {
        heading: "",
        links: [
          { name: "AI in Healthcare & Life Sciences", path: "/product3" },
          { name: "AI in Finance, Economics & Business Intelligence", path: "/product4" },
          { name: "Generative AI & Creative Intelligence", path: "/product5" },
          { name: "AI for Climate, Energy & Sustainability", path: "/product8" },
          { name: "AI in Cybersecurity, Defense & Intelligence", path: "/product9" },
          { name: "AI in Agriculture", path: "/product11" },
         
        ],
      },
    ],
  },
  {
    title: "Learning",
    sections: [
      {
        heading: "Explore by Type",
        links: [
          "Exam Prep",
          "Online Courses",
          "Free Online Courses",
          "Instructor Led Training",
          "Webinars",
          "IFFAI Training",
          "Academic Programs",
        ],
      },
      {
        heading: "Explore by Topic",
        links: [
          "Artificial Intelligence",
          "Cloud",
          "Careers in AI",
          "AIs",
          "Sustainability",
          "Explore All Learning Topics",
        ],
      },
      // {
      //   heading: "Thought Leadership",
      //   links: [
      //     "Thought Leadership",
      //     "Brightline Initiative",
      //     "AI Journal",
      //     "Academic Sponsored Research",
      //   ],
      // },
    ],
  },
  {
    title: "Resources",
    sections: [
      // {
      //   heading: "Connect and Contribute",
      //   links: [
      //     "Infinity AI Tool",
      //     "Online Community – opens in a new tab",
      //     "IFFAI Global Alliance – opens in a new tab",
      //   ],
      // },
      {
        heading: "Discover and Learn",
        links: [
          "Templates and Insights",
          "IFFAI Blog",
          "The Shift Code™ Podcast",
          "Projectified® Podcast",
          "AI Today Podcast",
        ],
      },
      {
        heading: "Grow Your Career",
        links: [
          "IFFAI Job Board",
          "Career Resources",
          "Career Navigator",
          "For Military",
        ],
      },
    ],
  },
  {
    title: "Membership",
    sections: [
      {
        heading: "Join IFFAI",
        links: [
          "About IFFAI Membership",
          "IFFAI® Membership",
          "Chapter Membership",
          "Student Membership",
          "Membership FAQs",
        ],
      },
      {
        heading: "Membership Benefits",
        links: [
          "Infinity AI Tool",
          "IFFAI® Guide",
          "Membership Benefits",
          "Membership Login",
        ],
      },
    ],
  },
  {
    title: "Get Involved",
    sections: [
      {
        heading: "Volunteer Opportunities",
        links: [
          "Volunteer with IFFAI",
          "Leadership Institute",
          "Search Volunteer Opportunities",
        ],
      },
      {
        heading: "Social Impact Initiatives",
        links: [
          "Social Impact Initiatives",
          "IFFAI Educational Foundation",
          "Project Managers Without Borders",
          "UN Sustainable Development Goals",
        ],
      },
    ],
  },
  {
    title: "Events",
    sections: [
      {
        heading: "Attend Events",
        links: [
          "Attend Events",
          "IFFAI Training",
        ],
      },
      {
        heading: "Virtual Events",
        links: ["AI ", "Webinars"],
      },
      // {
      //   heading: "Participate in Events",
      //   links: ["Speaker Opportunities", "Sponsorship & Exhibitor Opportunities"],
      // },
    ],
  },
  {
    title: "IFFAI for AI Solutions",
    sections: [
      {
        heading: "Enterprise Solutions",
        links: [
          "About Enterprise Solutions",
          "Business Transformation",
          "Enterprise Membership",
          "Global Executive Council",
          "Job Board and Recruiting",
          "IFFAI Training for Teams",
        ],
      },
      {
        heading: "Industry Solutions",
        links: [
          "Academic Institutions",
          "Construction",
          "Government",
          "Healthcare",
          "Human Resources",
          "Marketing",
          "Non-Profits and NGOs",
          "Training Partners",
        ],
      },
      // {
      //   heading: "Business Resources",
      //   links: ["Enterprise Research & Insights"],
      // },
    ],
  },
  {
    title: "About IFFAI",
    sections: [
      {
        heading: "Who We Are",
        links: [
          "Our Legacy",
          "IFFAI Board of Directors",
          "IFFAI Leadership Team",
          "Join Our Team",
        ],
      },
      {
        heading: "What We Do",
        links: [
          "Our Mission & Vision",
          "Our Purpose",
          "Impact & Sustainability at IFFAI",
          "Culture & Diversity at IFFAI",
          "Ethics",
          "IFFAI Awards",
        ],
      },
      // {
      //   heading: "Press Room",
      //   links: ["Press & Media", "Media Kit", "Request a Speaker"],
      // },
    ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full    top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-sm border-b"
          : "bg-white"
      }`}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between bg-gradient-to-br from-green-50 to-teal-100 px-6 py-2  text-sm">
        <div className="flex items-center space-x-2">
          <img src={Logo} alt="IFFAI Logo" className="h-15" />
          <span className="font-semibold text-xl text-gray-700 hidden sm:block">
            International Federation For Artificial Intelligence
          </span>
        </div>
        <div className="flex items-center space-x-6">
          <select className="border border-gray-300 rounded px-2 py-1 text-sm bg-white">
            <option>English</option>
            <option>Español</option>
            <option>Français</option>
            <option>Arabic</option>
            <option>Hindi</option>
          </select>
          <a href="/" className="text-gray-600 hover:text-indigo-600">
            <span>🏠</span>
          </a>
          {/* <Home className="w-5 h-5 text-gray-600" /> */}
          {/* <a href="" className="text-gray-600 hover:text-indigo-600">
            Store
          </a> */}
          <ShoppingCart className="w-5 h-5 text-gray-600" />
          <Link
            to="/register"
            className="px-3 py-1 border border-indigo-600 text-indigo-600 rounded hover:bg-indigo-50 transition"
          >
            Register
          </Link>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search"
              className="pl-3 pr-10 py-1 border rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <Search className="w-4 h-4 absolute right-3 top-2 text-gray-500" />
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className="relative ">
        <div className="max-w-7xl mx-auto flex items-center justify-between ">
          {/* DESKTOP */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            {navItems.map((item, index) => (
      <li
        key={item.title}
        onMouseEnter={() => setHoveredMenu(index)}
        onMouseLeave={() => setHoveredMenu(null)}
        className={`relative px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${
          hoveredMenu === index
            ? "bg-green-600 text-white shadow-md"
            : "hover:bg-green-100 hover:text-green-700"
        }`}
      >
        {item.title}

    {/* Mega Dropdown */}
    <AnimatePresence>
      {hoveredMenu === index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className={`
            absolute top-full mt-2
            bg-white/95 backdrop-blur-sm
            shadow-lg border border-gray-200 rounded-lg
            max-w-[80vw]
            min-w-[400px] md:min-w-[600px]
            overflow-x-auto
            ${index >= navItems.length - 2 ? "right-0" : "left-0"}
            z-50
          `}
        >
          <div
            className={`
              grid gap-2 p-3
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-${item.sections.length >= 3 ? 3 : item.sections.length}
            `}
          >
            {item.sections.map((section, sIdx) => (
              <div key={sIdx} className="min-w-[200px]">
                {section.heading && (
                  <h4 className="font-semibold text-blue-800 mb-1 border-b border-green-400 inline-block pb-1">
                    {section.heading}
                  </h4>
                )}

                <ul className="space-y-1 text-sm text-gray-600">
                  {section.links.map((link, i) => {
                    // Handle links with navigation
                    if (typeof link !== "string") {
                      return (
                        <li key={i}>
                          <Link
                            to={link.path}
                            className="hover:text-green-700 cursor-pointer transition-colors break-words px-2 py-1 rounded hover:bg-green-50 block"
                          >
                            {link.name}
                          </Link>
                        </li>
                      );
                    }

                    // Handle simple text links
                    return (
                      <li
                        key={i}
                        className="hover:text-green-700 cursor-pointer transition-colors break-words px-2 py-1 rounded hover:bg-green-50"
                      >
                        {link}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </li>
))}

          </ul>

          {/* MOBILE TOGGLE */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t shadow-md px-4 py-3 space-y-3 overflow-hidden"
            >
              {navItems.map((item, idx) => (
                <div key={idx}>
                  <button
                    onClick={() =>
                      setActiveMenu(activeMenu === idx ? null : idx)
                    }
                    className="w-full flex justify-between items-center text-left font-medium text-gray-800"
                  >
                    {item.title}
                    <span>{activeMenu === idx ? "−" : "+"}</span>
                  </button>
                 <AnimatePresence>
                  {activeMenu === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-2 space-y-2 pl-3 overflow-hidden"
                    >
                      {item.sections.map((section, sIdx) => (
                        <div key={sIdx}>
                          {section.heading && (
                            <h4 className="font-semibold text-sm text-gray-700 mt-2">
                              {section.heading}
                            </h4>
                          )}
                          <ul className="pl-2 text-sm text-gray-600 space-y-1">
                            {section.links.map((link, lIdx) => {
                              if (typeof link !== "string") {
                                // ✅ Link object with path
                                return (
                                  <li key={lIdx}>
                                    <Link
                                      to={link.path}
                                      className="block hover:text-indigo-600 transition-colors"
                                      onClick={() => setMobileOpen(false)} // close menu on click
                                    >
                                      {link.name}
                                    </Link>
                                  </li>
                                );
                              }

                              // ✅ Plain text fallback
                              return (
                                <li
                                  key={lIdx}
                                  className="hover:text-indigo-600 transition-colors cursor-pointer"
                                >
                                  {link}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>

                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
