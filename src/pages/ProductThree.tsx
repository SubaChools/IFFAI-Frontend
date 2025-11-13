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
  { id: 1, name: "FOUNDATION", image: C1, description: "Build literacy in AI fundamentals applied to medicine, digital health, and life sciences." },
  { id: 2, name: "PRACTITIONER", image: C2, description: "Apply AI in practical healthcare settings, including imaging, clinical analytics, and digital therapeutics."},
  { id: 3, name: "PROFESSIONAL", image: C3, description: "Master AI systems for complex healthcare applications and integrate them with enterprise healthcare frameworks." },
  { id: 4, name: "EXPERT", image: C4, description: "Lead enterprise AI projects in hospitals, biotech, and research institutions; focus on strategic impact." },
  { id: 5, name: "VISIONARY", image: C5, description: "Innovate at the frontiers of medical AI, genomics, bioinformatics, and healthcare research." },
];

// --- 🔹 Define 12 Courses per Product ---
const productCourses: Record<number, Course[]> = {
  1: [ { id: 1, name: "Digital Health Foundations (DHF)", description: "Learn the building blocks of AI in modern healthcare systems.", image: P1, link: "#" }, 
    { id: 2, name: "AI for Medical Beginners (AIMB)", description: "Introduction to machine learning applications in diagnostics and patient monitoring.", image: P3, link: "#" }, 
    { id: 3, name: "Biomedical Data Basics (BDB)", description: "Understand how health data is collected, structured, and used by AI models.", image: P4, link: "#" }, 
    { id: 4, name: "Predictive Health 101 (PH101)", description: "Explore how AI predicts diseases and patient outcomes.", image: P5, link: "#" }, 
    { id: 5, name: "Ethics in Medical AI (EMAI)", description: "Explore fairness, consent, and bias in digital health.", image: P10, link: "#" }, 
   ],

  2: [
    { id: 1, name: "AI in Medical Imaging (AIMI)", description: "Use computer vision to detect diseases from X-rays, MRIs, and CT scans.", image: P3, link: "#" },
    { id: 2, name: "Clinical Data Analytics (CDA)", description: "Analyze patient datasets to derive actionable healthcare insights.", image: P6, link: "#" },
    { id: 3, name: "Diagnostic AI Applications (DAA)", description: "Build basic AI models for early disease detection.", image: P8, link: "#" },
    { id: 4, name: "Predictive Patient Monitoring (PPM)", description: "Use AI to anticipate patient deterioration and critical events.", image: P1, link: "#" },
    { id: 5, name: "Drug Discovery Essentials (DDE)", description: "Explore AI applications in early-stage drug research.", image: P4, link: "#" },
  ],

  // You can add similar 12-course arrays for 3, 4, 5 below...
  3: [
    { id: 1, name: "BioMind AI Specialist (BMS)", description: "Design AI systems for genomics, proteomics, and molecular biology.", image: P1, link: "#" },
    { id: 2, name: "Clinical AI Developer (CAD)", description: "Implement perception, motion, and control in robotics.", image: P2, link: "#" },
    { id: 3, name: "Genomic Intelligence Engineer (GIE)", description: "Decode complex genetic data for precision medicine.", image: P3, link: "#" },
    { id: 4, name: "PharmaLogic AI (PHAI)", description: "Optimize drug discovery, clinical trials, and pharmacovigilance with AI.", image: P7, link: "#" },
    { id: 5, name: "AI for Personalized Medicine (APM)", description: "Design patient-specific treatment plans using AI insights.", image: P5, link: "#" },
],
  4: [
    { id: 1, name: "Healthcare AI Program Director (HAPD)", description: "Lead large-scale AI implementation across hospital systems.", image: P1, link: "#" },
    { id: 2, name: "Clinical AI Systems Architect (CASA)", description: "Design scalable AI infrastructures for healthcare enterprises.", image: P2, link: "#" },
    { id: 3, name: "AI-Driven Biotech Strategist (ADBS)", description: "Apply AI for strategic decision-making in pharmaceutical and biotech companies.", image: P3, link: "#" },
    { id: 4, name: "Responsible Healthcare AI Leader (RHAL)", description: "Promote ethical, safe, and transparent AI systems in medicine.", image: P4, link: "#" },
    { id: 5, name: "Smart Hospital Innovation Director (SHID)", description: "Introduce AI innovations to improve patient experience and outcomes.", image: P5, link: "#" },
 ],
  5: [
    { id: 1, name: "Frontier Clinical AI Researcher (FCAR)", description: "Pioneer novel AI diagnostic and treatment models.", image: P1, link: "#" },
    { id: 2, name: "Quantum AI in Healthcare (QAH)", description: "Explore quantum computing applications for medical intelligence.", image: P2, link: "#" },
    { id: 3, name: "Explainable Medical AI Scientist (EMAIS)", description: "Develop interpretable models for clinical decision-making.", image: P3, link: "#" },
    { id: 4, name: "AI-Powered Drug Discovery Researcher (APDDR)", description: "Innovate AI methods for novel therapeutics.", image: P9, link: "#" },
    { id: 5, name: "Precision Medicine Visionary (PMV)", description: "Lead groundbreaking work in patient-specific AI interventions.", image: P5, link: "#" },
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
