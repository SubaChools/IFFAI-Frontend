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
}

interface Course {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
}

/**
 * Products (5 levels)
 */
const products: Product[] = [
  { id: 1, name: "FOUNDATION", image: P10, description: "Build foundational knowledge in AI applications for sustainability" },
  { id: 2, name: "PRACTITIONER", image: P8, description: "Apply AI to sustainability projects and energy management systems" },
  { id: 3, name: "PROFESSIONAL", image: P3, description: "Master complex AI models for large-scale environmental and energy solutions" },
  { id: 4, name: "EXPERT", image: P4, description: "Lead sustainability initiatives with enterprise-level AI solutions" },
  { id: 5, name: "VISIONARY", image: P5, description: "Pioneer AI research in climate, energy, and sustainability innovations" },
];

/**
 * Content 2: Domain VIII — AI for Climate, Energy & Sustainability
 * 12 courses per level (Foundation -> Visionary) using placeholder images P1..P10
 */
const productCourses: Record<number, Course[]> = {
  1: [
    { id: 1, name: "EcoMind AI Engineer (EMAI)", description: "Introduction to AI for environmental applications", image: P1, link: "#" },
    // { id: 2, name: "GreenVision Basics (GVB)", description: "Satellite and sensor-based AI for monitoring ecosystems", image: P2, link: "#" },
    { id: 3, name: "Renewable Energy AI Primer (REAP)", description: "AI applications in solar, wind, and hydro energy", image: P3, link: "#" },
    { id: 4, name: "Climate Data Foundations (CDF)", description: "Collecting and analyzing environmental data", image: P4, link: "#" },
    { id: 5, name: "AI for Smart Cities Introduction (ASSCI)", description: "Overview of AI-enabled urban sustainability", image: P5, link: "#" },
    // { id: 6, name: "Water Systems AI Starter (WSAS)", description: "Basics of AI for water conservation and quality", image: P6, link: "#" },
    // { id: 7, name: "Agricultural AI Fundamentals (AAF)", description: "Introduction to precision farming using AI", image: P7, link: "#" },
    { id: 8, name: "Carbon Footprint Analytics (CFA)", description: "Measuring and analyzing emissions with AI", image: P8, link: "#" },
    // { id: 9, name: "Environmental Ethics & AI (EEAI)", description: "Understand responsibility in sustainable AI", image: P9, link: "#" },
    // { id: 10, name: "Smart Grid Essentials (SGE)", description: "Fundamentals of AI in energy distribution", image: P10, link: "#" },
    // { id: 11, name: "AI in Wildlife & Conservation (AIWC)", description: "Protect biodiversity using AI analytics", image: P1, link: "#" },
    // { id: 12, name: "Sustainable Systems Orientation (SSO)", description: "How AI integrates with ecological systems", image: P2, link: "#" },
  ],

  2: [
    { id: 1, name: "Renewable Energy Systems Developer (RESD)", description: "Optimize energy production with AI", image: P3, link: "#" },
    { id: 2, name: "AI for Climate Modeling (AICM)", description: "Build predictive models for climate scenarios", image: P4, link: "#" },
    { id: 3, name: "Smart Water Management Systems (SWMS)", description: "AI-driven water distribution and quality control", image: P5, link: "#" },
    { id: 4, name: "Precision Agriculture Engineer (PAE)", description: "Implement AI in farming for yield optimization", image: P6, link: "#" },
    // { id: 5, name: "Environmental Forecasting Specialist (EFS)", description: "Predict environmental changes with AI", image: P7, link: "#" },
    // { id: 6, name: "Urban Sustainability AI Developer (USAD)", description: "Create AI tools for smart city planning", image: P8, link: "#" },
    { id: 7, name: "Carbon Reduction Analyst (CRA)", description: "Develop AI solutions to minimize carbon emissions", image: P9, link: "#" },
    // { id: 8, name: "EcoSensor Networks Engineer (ESNE)", description: "Design AI sensor networks for monitoring ecosystems", image: P10, link: "#" },
    // { id: 9, name: "AI-Powered Energy Grid Analyst (AEGA)", description: "Predictive maintenance and load optimization", image: P1, link: "#" },
    // { id: 10, name: "Sustainable Supply Chain AI (SSCAI)", description: "Optimize logistics with environmental focus", image: P2, link: "#" },
    // { id: 11, name: "Climate Resilience Program Designer (CRPD)", description: "Build AI strategies for climate adaptation", image: P3, link: "#" },
    // { id: 12, name: "AI-Enabled Green Innovation Lab (AGIL)", description: "Prototype AI solutions for sustainability", image: P4, link: "#" },
  ],

  3: [
    // { id: 1, name: "EcoPredict Analytics (EPA)", description: "Advanced environmental forecasting using AI", image: P5, link: "#" },
    { id: 2, name: "Smart Energy Optimization Specialist (SEOS)", description: "AI for grid efficiency and renewable integration", image: P6, link: "#" },
    { id: 3, name: "AI for Circular Economy (AICE)", description: "Build sustainable AI-driven business models", image: P7, link: "#" },
    { id: 4, name: "Climate Risk Modeling Engineer (CRME)", description: "Assess environmental risk with AI simulations", image: P8, link: "#" },
    { id: 5, name: "Urban Sustainability Intelligence (USI)", description: "Implement AI systems in cities for climate goals", image: P9, link: "#" },
    // { id: 6, name: "Water Resource AI Strategist (WRAS)", description: "Optimize water systems using predictive AI", image: P10, link: "#" },
    // { id: 7, name: "Agriculture Intelligence Architect (AIA)", description: "End-to-end AI integration in farming systems", image: P1, link: "#" },
    { id: 8, name: "Carbon Analytics Professional (CAP)", description: "Quantify and optimize carbon footprint with AI", image: P2, link: "#" },
    // { id: 9, name: "GreenTech AI Developer (GTAD)", description: "Innovate AI solutions for renewable technologies", image: P3, link: "#" },
    // { id: 10, name: "Environmental AI Policy Designer (EAPD)", description: "Align AI with environmental regulations", image: P4, link: "#" },
    // { id: 11, name: "Smart Grid AI Engineer (SGAE)", description: "Design intelligent energy distribution systems", image: P5, link: "#" },
    // { id: 12, name: "AI for Climate Resilience Consultant (ACRC)", description: "Develop adaptive solutions for ecosystems", image: P6, link: "#" },
  ],

  4: [
    { id: 1, name: "AI Sustainability Program Director (AISPD)", description: "Lead AI-powered environmental initiatives", image: P7, link: "#" },
    { id: 2, name: "Climate Policy & AI Strategist (CPAS)", description: "Align AI with national and corporate climate policies", image: P8, link: "#" },
    { id: 3, name: "Renewable Energy AI Architect (REAA)", description: "Design AI systems for renewable energy optimization", image: P9, link: "#" },
    // { id: 4, name: "Smart Cities AI Executive (SCAE)", description: "Oversee AI-driven urban sustainability programs", image: P10, link: "#" },
    { id: 5, name: "AI-Enabled Corporate Sustainability Lead (AEC-SL)", description: "Integrate AI in corporate ESG initiatives", image: P1, link: "#" },
    // { id: 6, name: "Strategic Climate AI Innovator (SCAI)", description: "Lead innovation in AI for climate solutions", image: P2, link: "#" },
    // { id: 7, name: "EcoGovernance AI Director (EGAD)", description: "Implement responsible AI governance for sustainability", image: P3, link: "#" },
    // { id: 8, name: "Intelligent Resource Management Executive (IRME)", description: "Oversee AI-based resource optimization strategies", image: P4, link: "#" },
    // { id: 9, name: "AI Environmental Risk Executive (AERE)", description: "Lead predictive risk assessment using AI", image: P5, link: "#" },
    { id: 10, name: "Global Green AI Strategist (GGAIS)", description: "Shape international AI sustainability frameworks", image: P6, link: "#" },
    // { id: 11, name: "Energy Transformation Executive (ETE)", description: "Drive enterprise-level renewable energy transitions", image: P7, link: "#" },
    // { id: 12, name: "AI-Driven Climate Foresight Director (ACFD)", description: "Plan for long-term climate resilience using AI", image: P8, link: "#" },
  ],

  5: [
    { id: 1, name: "AI Climate Innovation Researcher (ACIR)", description: "Develop next-gen AI models for climate solutions", image: P9, link: "#" },
    { id: 2, name: "Sustainable AI Systems Scientist (SASS)", description: "Design self-learning systems for resource optimization", image: P10, link: "#" },
    { id: 3, name: "Renewable Energy Intelligence Innovator (REII)", description: "Research AI for efficient renewable technologies", image: P1, link: "#" },
    // { id: 4, name: "Environmental AI Futurist (EAF)", description: "Predict and shape future AI sustainability applications", image: P2, link: "#" },
    // { id: 5, name: "Smart Cities AI Visionary (SCAV)", description: "Lead futuristic AI-enabled urban systems", image: P3, link: "#" },
    // { id: 6, name: "Water AI Research Fellow (WARF)", description: "Innovate AI for sustainable water management", image: P4, link: "#" },
    // { id: 7, name: "EcoAI Lab Director (EALD)", description: "Pioneer research in AI for ecological impact", image: P5, link: "#" },
    // { id: 8, name: "Climate Risk AI Scientist (CRAS)", description: "Study predictive climate risk modeling with AI", image: P6, link: "#" },
    // { id: 9, name: "Agriculture Intelligence Researcher (AIR)", description: "Build AI frameworks for next-gen farming", image: P7, link: "#" },
    { id: 10, name: "Carbon Neutral AI Innovator (CNAI)", description: "Develop AI models to achieve carbon neutrality", image: P8, link: "#" },
    { id: 11, name: "Global Sustainability AI Strategist (GSAI)", description: "Drive research for international AI sustainability goals", image: P9, link: "#" },
    // { id: 12, name: "Cognitive EcoFrontier Scientist (CEFS)", description: "Integrate AI, ecology, and cognitive modeling", image: P10, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        AI for Climate, Energy & Sustainability
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
