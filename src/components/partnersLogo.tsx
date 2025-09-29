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
// import logo9 from "../assets/new/partner (5).png";
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



const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo10, logo11, logo12, logo13, logo14, logo15, logo16,
  logo17, logo18, logo19, logo20,logo21, logo22, logo23, logo24, logo25, logo26, logo27, logo28, logo29, logo30, logo31, logo32,
  logo33, logo34, logo35
];
const LOGO_WIDTH = 140;

const partnersLogoGrid: React.FC = () => {
    const extendedLogos = [...logos, ...logos]; // Duplicate for infinite loop
  return (
    <section className="bg-gradient-to-r from-indigo-50 via-white to-indigo-50 mt-8 py-40 px-6 select-none"
    style={{
    backgroundImage: `url('src/assets/partner.jpeg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }} >
{/* Title inside a circle */}
      <div className="flex justify-center mb-8 ">
        <div className="w-90 h-20 bg-blue-900 rounded-full flex justify-center shadow-lg">
          <h2 className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold mt-6 drop-shadow-lg">
            OUR PARTNERS
          </h2>
        </div>
      </div>

    
        <div></div>
      <div className="max-w-7xl mx-auto">
        

        {/* Carousel container */}
        <div className="overflow-hidden">
          <motion.div
            className="flex"
            style={{ width: `${extendedLogos.length * LOGO_WIDTH}px` }}
            animate={{ x: ["0px", `-${logos.length * LOGO_WIDTH}px`] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: logos.length * 4, // Adjust scroll speed here
            }}
          >
            {extendedLogos.map((logo, idx) => (
              <motion.div
                key={idx}
                className="flex items-center justify-center mx-6 bg-white rounded-xl p-4 shadow-lg"
                style={{ width: LOGO_WIDTH }}
                whileHover={{ scale: 1.3, zIndex: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={logo}
                  alt={`Partner logo ${idx + 1}`}
                  className="h-15 w-20  cursor-pointer drop-shadow-lg"
                  draggable={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default partnersLogoGrid;