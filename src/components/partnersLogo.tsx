import React from "react";
import { motion } from "framer-motion";

import logo1 from "../assets/new/partner (1).png";
import logo2 from "../assets/new/partner (1).jpg";
import logo3 from "../assets/new/partner (2).jpg";
import logo4 from "../assets/new/partner (2).png";
import logo5 from "../assets/new/partner (3).jpg";
import logo6 from "../assets/new/partner (3).png";
import logo7 from "../assets/new/partner (4).jpg";
import logo8 from "../assets/new/partner (4).png";
import logo10 from "../assets/new/partner (6).png";
import logo11 from "../assets/new/partner (7).png";
import logo12 from "../assets/new/partner (8).png";
import logo13 from "../assets/new/partner (9).png";
import logo14 from "../assets/new/partner (10).png";
import logo15 from "../assets/new/partner (11).png";
import logo16 from "../assets/new/partner (12).png";
import logo17 from "../assets/new/partner (13).png";
import logo18 from "../assets/new/partner (14).png";
import logo19 from "../assets/new/partner (15).png";
import logo20 from "../assets/new/partner (16).png";
import logo21 from "../assets/new/partner (17).png";
import logo22 from "../assets/new/partner (18).png";
import logo23 from "../assets/new/partner (19).png";
import logo24 from "../assets/new/partner (20).png";
import logo25 from "../assets/new/partner (21).png";
import logo26 from "../assets/new/partner (22).png";
import logo27 from "../assets/new/partner (23).png";
import logo28 from "../assets/new/partner (24).png";
import logo29 from "../assets/new/partner (25).png";
import logo30 from "../assets/new/partner (26).png";
import logo31 from "../assets/new/partner (27).png";
import logo32 from "../assets/new/partner (28).png";
import logo33 from "../assets/new/partner (29).png";
import logo34 from "../assets/new/partner (30).png";
import logo35 from "../assets/new/partner (31).png";
import partnerBg from "../assets/images/partners.jpg";

const logos = [
  logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo10, logo11, logo12,
  logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22,
  logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32,
  logo33, logo34, logo35
];

const PartnersLogoGrid: React.FC = () => (
  <section
    className="py-10 bg-gradient-to-b from-green-50 to-white overflow-hidden relative select-none"
    style={{
      backgroundImage: `url(${partnerBg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}
  >
    <div className="absolute inset-0 bg-white/70 backdrop-blur-sm z-0"></div>

    <div className="relative z-10 text-center mb-20">
      <h2 className="text-5xl md:text-4xl font-extrabold text-green-600 mb-4 tracking-wide">
        OUR PARTNERS
      </h2>
      <p className="text-gray-600 text-lg md:text-xl">
        A Global Network of Collaboration and Innovation
      </p>
    </div>

    <div className="relative z-10 overflow-hidden">
      {[...Array(2)].map((_, rowIndex) => (
        <motion.div
          key={rowIndex}
          className="flex mb-10 w-[max-content]"
          animate={{ x: rowIndex % 2 ? ["0%", "-50%"] : ["-50%", "0%"] }}
          transition={{ duration:100, repeat: Infinity, ease: "linear" }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <motion.div
              key={idx}
              className="mx-8 bg-white p-4 rounded-2xl shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.15 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="w-24 h-24 object-contain"
                draggable={false}
              />
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  </section>
);

export default PartnersLogoGrid;