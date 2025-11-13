import React, { useState } from "react";
import { motion } from "framer-motion";

// Import images
import P1 from "../assets/images/product/AI.jpg";
import P2 from "../assets/images/product/AI2.jpg";
import P3 from "../assets/images/product/AI3.jpg";
import P4 from "../assets/images/product/AI4.jpg";
import P5 from "../assets/images/product/AI6.jpg";
import P6 from "../assets/images/product/AI7.jpg";
import P7 from "../assets/images/product/AI8.png";
import P8 from "../assets/images/product/AI10.jpg";
import P9 from "../assets/images/product/AI5.png";
import P10 from "../assets/images/product/AI9.png";
import Bg from "../assets/images/product/pro-page-bg1.jpg";
import C1 from "../assets/images/product/core-L1.jpg";
import C2 from "../assets/images/product/core-L2.jpg";
import C3 from "../assets/images/product/core-L3.jpg";
import C4 from "../assets/images/product/core-L4.png";
import C5 from "../assets/images/product/core-L5.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  // enrollmentLink: string;
}

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

const products: Product[] = [
  // { id: 1, name: "FOUNDATION", image: P10, description: "Learn the basics of AI.", enrollmentLink: "#" },
  { id: 1, name: "FOUNDATION", image: C1, description: "Understand the fundamentals of supply chain systems, logistics flow, and the role of AI in operations efficiency." },
  { id: 2, name: "PRACTITIONER", image: C2, description: "Apply AI to practical financial and business scenarios."},
  { id: 3, name: "PROFESSIONAL", image: C3, description: "Master advanced AI applications for finance, economics, and business intelligence." },
  { id: 4, name: "EXPERT", image: C4, description: "Lead enterprise-level AI strategy in finance and business." },
  { id: 5, name: "VISIONARY", image: C5, description: "Innovate at the frontiers of financial AI, predictive economics, and corporate intelligence." },
];

// --- 🔹 Define 12 Courses per Product ---
const productCourses: Record<number, Course[]> = {
  1: [ { id: 1, name: "Introduction to AI in Supply Chain", description: "Explore how AI reshapes supply chain planning, logistics, and operations.", image: P1, link: "#" }, 
    { id: 2, name: "Fundamentals of Logistics & Operations", description: "Understand key logistics principles, workflows, and management systems..", image: P3, link: "#" }, 
    { id: 3, name: "Data Analytics for Supply Chain", description: "Learn basic data collection, analysis, and visualization in supply operations.", image: P4, link: "#" }, 
    { id: 4, name: "Intelligent Inventory Management Basics", description: "Discover how AI optimizes inventory control and reduces waste.", image: P5, link: "#" }, 
    { id: 5, name: "Digital Supply Chain Ecosystems", description: "Study the shift from traditional to data-driven, connected supply chains.", image: P10, link: "#" }, 
   ],

  2: [
    { id: 1, name: "Predictive Demand Forecasting", description: "Use AI models to predict demand and production requirements.-", image: P3, link: "#" },
    { id: 2, name: "Smart Logistics and Route Optimization", description: "Implement AI-based routing and fleet management systems.", image: P6, link: "#" },
    { id: 3, name: "Warehouse Automation Systems", description: "Explore robotics, sensors, and AI in warehouse operations.", image: P8, link: "#" },
    { id: 4, name: "Intelligent Procurement and Sourcing", description: "Apply AI to vendor evaluation and procurement decision-making.", image: P1, link: "#" },
    { id: 5, name: "Operational Analytics with Machine Learning", description: "Build models to enhance operational accuracy and performance.", image: P4, link: "#" },
  ],

  // You can add similar 12-course arrays for 3, 4, 5 below...
  3: [
    { id: 1, name: "AI-Driven Supply Chain Optimization", description: "Create end-to-end optimization models for supply networks.", image: P1, link: "#" },
    { id: 2, name: "Smart Manufacturing and Industry 4.0", description: "Integrate AI with automation, IoT, and digital manufacturing.", image: P2, link: "#" },
    { id: 3, name: "Resilient and Sustainable Operations", description: "Use AI to design sustainable, carbon-efficient supply models.", image: P3, link: "#" },
    { id: 4, name: "Predictive Maintenance and Asset Intelligence", description: "Apply AI to monitor equipment health and reduce downtime.", image: P7, link: "#" },
    { id: 5, name: "Advanced Logistics Simulation", description: "Develop digital twins and simulations for logistics performance.", image: P5, link: "#" },
],
  4: [
    { id: 1, name: "AI Strategy for Supply Chain Leaders", description: "Lead digital transformation initiatives in supply and logistics.", image: P1, link: "#" },
    { id: 2, name: "Enterprise Operations Intelligence", description: "Design organization-wide AI-driven performance frameworks.", image: P2, link: "#" },
    { id: 3, name: "AI in Global Logistics Networks", description: "Manage multi-country logistics using predictive and autonomous tools.", image: P3, link: "#" },
    { id: 4, name: "Sustainable Supply Chain Governance", description: "Build ethical and eco-efficient AI governance models.", image: P4, link: "#" },
    { id: 5, name: "Digital Transformation in Operations", description: "Management	Oversee AI adoption across procurement, production, and delivery.", image: P5, link: "#" },
 ],
  5: [
    { id: 1, name: "Frontier Research in AI for Supply Chain", description: "Explore emerging AI paradigms for logistics and manufacturing innovation.", image: P1, link: "#" },
    { id: 2, name: "Autonomous Supply Chain Systems", description: "Research fully automated supply and logistics ecosystems.", image: P2, link: "#" },
    { id: 3, name: "Predictive Global Trade Analytics", description: "Use AI for forecasting and modeling international trade flows.", image: P3, link: "#" },
    { id: 4, name: "AI for Circular and Green Operations", description: "Innovate in sustainable logistics and closed-loop supply chains.", image: P9, link: "#" },
    { id: 5, name: "Intelligent Enterprise Systems Design", description: "Create AI-integrated enterprise frameworks for smart global operations.", image: P5, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6"
    style={{
      backgroundImage: `url(${Bg})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }}>
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        AI in Technology, Robotics & Automation
      </h1>

      {/* Main Product Grid */}
      
  <div className="flex flex-wrap justify-center gap-15 max-w-[1160px] mx-auto">
  {products.map((p, i) => (
    <motion.div
      key={p.id}
      custom={i}
      variants={fadeUp}
      initial="visible"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="relative w-[280px] h-[330px] bg-[#dcfce7] rounded-2xl overflow-hidden group shadow-md transition-all duration-500"
    >
      {/* Animated background */}
      <div
        className="absolute top-[-50%] left-0 w-full h-full transform skew-y-[345deg] transition-all duration-500 group-hover:top-[-70%] group-hover:skew-y-[390deg]"
        style={{ backgroundColor: hoverColor }}
      ></div>

      <div className="relative flex justify-center items-center h-[180px] z-[1] p-1">
        <img
          src={p.image}
          alt={p.name}
          className="h-[200px] w-[250px] object-contain rounded-[20px] transition-all duration-500 group-hover:scale-90"
        />
      </div>

      <div className="relative z-[2] flex flex-col items-center text-center p-5">
        <h3 className="text-black text-[15px] font-bold uppercase tracking-wide mb-1">{p.name}</h3>
        <p>{p.description}</p>
        <button
          onClick={() => setSelectedProduct(p)}
          className="relative top-[30px] opacity-0 mt-2 px-5 py-2 text-white font-semibold rounded-full uppercase tracking-wide transition-all duration-500 group-hover:top-0 group-hover:opacity-100"
          style={{ backgroundColor: hoverColor }}
        >
          View Details
        </button>
      </div>
    </motion.div>
))}
</div>




      {/* Modal Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl max-w-6xl w-full p-8 overflow-y-auto max-h-[90vh] border border-white/30 relative"
          >
            {/* Header */}
            <div className="flex justify-center items-center mb-8 relative">
              <h3 className="text-3xl font-extrabold text-[#572eda] text-center uppercase tracking-wider">
                {selectedProduct.name} Courses
              </h3>
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute right-0 top-1 text-gray-500 hover:text-red-500 hover:rotate-90 transition-transform duration-300 text-3xl font-bold"
              >
                &times;
              </button>
            </div>

            {/* Course Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCourses[selectedProduct.id]?.map((c) => (
                <motion.div
                  key={c.id}
                  whileHover={{ scale: 1.04, y: -4 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="flex flex-col items-center bg-white shadow-md hover:shadow-2xl rounded-2xl p-5 transition-all duration-300 border border-gray-100"
                >
                  <div className="relative w-full h-40 flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.name}
                      className="h-full w-full object-contain transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  <h4 className="font-bold text-lg text-center text-gray-800 mt-4">
                    {c.name}
                  </h4>
                  <p className="text-sm text-gray-600 mt-2 mb-4 text-center line-clamp-3">
                    {c.description}
                  </p>

                  <a
                    href={c.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#572eda] to-[#6b48ff] text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition-all"
                  >
                    Learn More →
                  </a>
                </motion.div>
            ))}
            </div>
          </motion.div>
        </div>

    )}
    </div>
);
};

export default ProductGrid;
