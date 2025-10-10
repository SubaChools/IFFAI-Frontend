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
        heading: "Professional Certifications",
        links: [
          "Certified Associate in Artificial Intelligence (CAAI)®",
          "Artificial Intelligence Professional (AIP)®",
          "Generative AI Professional (GAiP)®",
          "All Professional Certifications",
        ],
      },
      {
        heading: "Specialized Certifications",
        links: [
          "Certified AI Professional with Specialisation in Generative AI",
          "Advanced AI in Logistics & Supply Chain Management",
          "Certificate Program in AI for Finance",
          "Advanced AI & IoT in Manufacturing Professional",
          "Digital Marketing with AI Applications",
          "Cloud & Edge	AI Mastery	",
          "Certified Professional in Data Management	for	Healthcare (CPDM-HC)",
          "Certified Manager	in AI Driven	Healthcare Administration	(CMA-HAI)",
        ],
      },
      {
        heading: "Certification Resources",
        links: [
          "Celebrate Your Certification",
          "Maintain & Renew Your Certification",
          "Check a Certification",
          "Certification FAQs",
          "IFFAI Official Mobile App",
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
      {
        heading: "Thought Leadership",
        links: [
          "Thought Leadership",
          "Brightline Initiative",
          "AI Journal",
          "Academic Sponsored Research",
        ],
      },
    ],
  },
  {
    title: "Resources",
    sections: [
      {
        heading: "Connect and Contribute",
        links: [
          "Infinity AI Tool",
          "Online Community – opens in a new tab",
          "IFFAI Global Alliance – opens in a new tab",
        ],
      },
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
          "IFFAI Job Board – opens in a new tab",
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
          "Explore all Membership Benefits",
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
          "Leadership Institute – opens in a new tab",
          "Search Volunteer Opportunities – opens in a new tab",
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
          "IFFAI Global Summit Series 2026 – opens in a new tab",
          "IFFAI Training",
        ],
      },
      {
        heading: "Virtual Events",
        links: ["AI – opens in a new tab", "Webinars"],
      },
      {
        heading: "Participate in Events",
        links: ["Speaker Opportunities", "Sponsorship & Exhibitor Opportunities"],
      },
    ],
  },
  {
    title: "IFFAI for Organizations",
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
      {
        heading: "Business Resources",
        links: ["Enterprise Research & Insights"],
      },
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
      {
        heading: "Press Room",
        links: ["Press & Media", "Media Kit", "Request a Speaker"],
      },
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
      className={`w-full   fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-white/70 shadow-sm border-b"
          : "bg-white"
      }`}
    >
      {/* TOP BAR */}
      <div className="flex items-center justify-between px-6 py-3  border-b text-sm">
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
          <a href="" className="text-gray-600 hover:text-indigo-600">
            Store
          </a>
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
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
          {/* DESKTOP */}
          <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
            {navItems.map((item, index) => (
  <li
    key={item.title}
    className="relative group"
    onMouseEnter={() => setHoveredMenu(index)}
    onMouseLeave={() => setHoveredMenu(null)}
  >
    <span className="relative cursor-pointer pb-1 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-green-600 after:transition-all after:duration-300 group-hover:after:w-full">
      {item.title}
    </span>

    {/* Mega Dropdown */}
    <AnimatePresence>
      {hoveredMenu === index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25 }}
          className={`
            absolute top-full mt-3
            bg-white/95 backdrop-blur-md
            shadow-2xl border border-gray-100 rounded-xl
            max-w-[90vw]
            min-w-[300px] md:min-w-[600px] lg:min-w-[800px]
            overflow-x-auto
            ${index >= navItems.length - 2 ? "right-0" : "left-0"}
            z-50
          `}
          style={{
            maxWidth: "calc(100vw - 1rem)" // prevents overflow
          }}
        >
          <div
            className={`
              grid gap-6 p-6
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-${item.sections.length >= 3 ? 3 : item.sections.length}
            `}
          >
            {item.sections.map((section, sIdx) => (
              <div key={sIdx} className="min-w-[200px]">
                <h4 className="relative inline-block font-bold after:content-[''] after:block after:w-3/4 after:h-[1.5px] after:bg-green-500 after:mb-2 after:mx-auto">
                  {section.heading}
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="hover:text-green-700 cursor-pointer transition-colors break-words px-2 py-1 rounded hover:bg-green-50"
                    >
                      {link}
                    </li>
                  ))}
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
                            <h4 className="font-semibold text-sm text-gray-700 mt-2">
                              {section.heading}
                            </h4>
                            <ul className="pl-2 text-sm text-gray-600 space-y-1">
                              {section.links.map((link, lIdx) => (
                                <li key={lIdx} className="hover:text-indigo-600">
                                  {link}
                                </li>
                              ))}
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
