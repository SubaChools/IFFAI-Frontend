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
  // { id: 1, name: "FOUNDATION", image: P10, description: "Learn the basics of AI", enrollmentLink: "#" },
  { id: 1, name: "FOUNDATION", image: C1, description: "Build AI literacy in finance, economics, and business intelligence" },
  { id: 2, name: "PRACTITIONER", image: C2, description: "Apply AI to practical financial and business scenarios"},
  { id: 3, name: "PROFESSIONAL", image: C3, description: "Master advanced AI applications for finance, economics, and business intelligence" },
  { id: 4, name: "EXPERT", image: C4, description: "Lead enterprise-level AI strategy in finance and business" },
  { id: 5, name: "VISIONARY", image: C5, description: "Innovate at the frontiers of financial AI, predictive economics, and corporate intelligence" },
];

// --- 🔹 Define 12 Courses per Product ---
const productCourses: Record<number, Course[]> = {
  1: [ { id: 1, name: "Finance AI Fundamentals (FAIF)", description: "Learn the basics of AI in banking, trading, and business analytics", image: P1, link: "#" }, 
    { id: 2, name: "Python for Finance (PFF)", description: "Hands-on introduction to Python libraries for finance and data analytics", image: P3, link: "#" }, 
    { id: 3, name: "Business Intelligence Essentials (BIE)", description: "Learn foundational BI concepts and visualization tools", image: P4, link: "#" }, 
    { id: 4, name: "Machine Learning for Finance (MLF)", description: "Explore simple ML models applied to financial data", image: P5, link: "#" }, 
    { id: 5, name: "Predictive Analytics Basics (PAB)", description: "Build small models to forecast business and market trends", image: P10, link: "#" }, 
   ],

  2: [
    { id: 1, name: "Algorithmic Trading Starter (ATS)", description: "Build entry-level trading bots and market predictors", image: P3, link: "#" },
    { id: 2, name: "Credit Risk Modeling (CRM)", description: "Apply AI to assess creditworthiness and risk profiles", image: P6, link: "#" },
    { id: 3, name: "Fraud Detection Essentials (FDE)", description: "Implement basic AI models to detect financial fraud", image: P8, link: "#" },
    { id: 4, name: "Business Analytics Practitioner (BAP)", description: "Use AI to transform business data into insights", image: P1, link: "#" },
    { id: 5, name: "AI in Investment Strategies (AIS)", description: "Build AI-based portfolio optimization models", image: P4, link: "#" },
  ],

  // You can add similar 12-course arrays for 3, 4, 5 below...
  3: [
    { id: 1, name: "AlgoWealth Architect (AWA)", description: "Design and implement algorithmic trading strategies", image: P1, link: "#" },
    { id: 2, name: "RiskVision AI (RVA)", description: "Develop predictive models for credit, fraud, and operational risk", image: P2, link: "#" },
    { id: 3, name: "Cognitive CFO Program (CCFO)", description: "Automate financial operations, reporting, and audit intelligence", image: P3, link: "#" },
    { id: 4, name: "Sentiment Finance Analyst (SFA)", description: "Leverage NLP for market sentiment and behavioral economics", image: P7, link: "#" },
    { id: 5, name: "Predictive Corporate Analytics (PCA)", description: "Forecast corporate KPIs and operational outcomes with AI", image: P5, link: "#" },
],
  4: [
    { id: 1, name: "AI Finance Executive Program (AFEP)", description: "Lead AI-driven transformation in banking and financial institutions", image: P1, link: "#" },
    { id: 2, name: "Enterprise Risk AI Director (ERAD)", description: "Manage enterprise risk using predictive AI models", image: P2, link: "#" },
    { id: 3, name: "Strategic Investment AI Leader (SIAL)", description: "Oversee AI-based portfolio and wealth strategies", image: P3, link: "#" },
    { id: 4, name: "Cognitive Business Intelligence Director (CBID)", description: "Design enterprise BI ecosystems with AI insights", image: P4, link: "#" },
    { id: 5, name: "AI Governance & Compliance in Finance (AGCF)", description: "Implement regulatory and ethical frameworks in financial AI", image: P5, link: "#" },
 ],
  5: [
    { id: 1, name: "Quantum AI for Finance (QAF)", description: "Explore quantum computing applications in financial modeling", image: P1, link: "#" },
    { id: 2, name: "Explainable Finance AI Scientist (EFAS)", description: "Build transparent and interpretable models for critical decisions", image: P2, link: "#" },
    { id: 3, name: "Multi-Agent Market Intelligence (MAMI)", description: "Develop AI agents simulating complex financial ecosystems", image: P3, link: "#" },
    { id: 4, name: "Sustainable Finance AI Fellow (SFAIF)", description: "Research AI solutions for sustainable investment and ESG", image: P9, link: "#" },
    { id: 5, name: "Next-Gen FinTech Visionary (NGFV)", description: "Shape the future of finance with pioneering AI solutions", image: P5, link: "#" },
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
