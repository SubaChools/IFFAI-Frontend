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

const products: Product[] = [
  { id: 1, name: "FOUNDATION", image: P10, description: "Learn AI basics for leadership and strategic awareness" },
  { id: 2, name: "PRACTITIONER", image: P8, description: "Apply AI in strategic and policy contexts with small initiatives" },
  { id: 3, name: "PROFESSIONAL", image: P3, description: "Lead enterprise-level AI integration and strategic projects" },
  { id: 4, name: "EXPERT", image: P4, description: "Drive AI strategy, governance, and policy at a global scale" },
  { id: 5, name: "VISIONARY", image: P5, description: "Innovate in AI leadership, strategy, governance, and global policy" },
];

// Domain VI — AI in Leadership, Strategy & Policy
const productCourses: Record<number, Course[]> = {
  // LEVEL 1 — FOUNDATION
  1: [
    { id: 1, name: "AI Leadership Fundamentals (AILF)", description: "Introduction to AI for organizational leadership", image: P1, link: "#" },
    { id: 2, name: "Strategy & AI Primer (SAP)", description: "Understand how AI transforms business strategy", image: P2, link: "#" },
    { id: 3, name: "AI Governance Basics (AGB)", description: "Explore frameworks for responsible AI adoption", image: P3, link: "#" },
    { id: 4, name: "Decision Intelligence Foundations (DIF)", description: "Learn AI-driven decision-making concepts", image: P4, link: "#" },
    { id: 5, name: "Ethics in AI Leadership (EAL)", description: "Introduce fairness, bias, and governance principles", image: P5, link: "#" },
    // { id: 6, name: "AI Risk Awareness (AIRA)", description: "Understand AI risk, compliance, and accountability", image: P6, link: "#" },
    // { id: 7, name: "Executive AI Literacy (EAL2)", description: "Basics of AI tools and applications for managers", image: P7, link: "#" },
    // { id: 8, name: "Digital Transformation Primer (DTP)", description: "Explore AI’s role in digital business evolution", image: P8, link: "#" },
    // { id: 9, name: "Strategic Thinking with AI (STAI)", description: "Apply AI concepts to problem-solving frameworks", image: P9, link: "#" },
    // { id: 10, name: "AI in Policy Fundamentals (AIPF)", description: "Understand AI policy, regulations, and ethics", image: P10, link: "#" },
    // { id: 11, name: "Leadership Intelligence Starter (LIS)", description: "Learn AI-enhanced leadership decision approaches", image: P1, link: "#" },
    // { id: 12, name: "AI for Organizational Awareness (AIOA)", description: "Explore AI trends and enterprise impact", image: P2, link: "#" },
  ],

  // LEVEL 2 — PRACTITIONER
  2: [
    { id: 1, name: "AI Strategy & Governance Leader (AIGL)", description: "Build frameworks for enterprise AI adoption", image: P3, link: "#" },
    { id: 2, name: "Executive Decision Analytics (EDA)", description: "Use AI models for data-driven decision-making", image: P4, link: "#" },
    { id: 3, name: "Policy Implementation with AI (PIA)", description: "Apply AI to organizational and government policies", image: P5, link: "#" },
    { id: 4, name: "AI Risk & Compliance Practitioner (ARCP)", description: "Ensure ethical and legal compliance in AI projects", image: P6, link: "#" },
    { id: 5, name: "Strategic AI Project Management (SAPM)", description: "Plan, manage, and execute AI-driven initiatives", image: P7, link: "#" },
    // { id: 6, name: "Cognitive Enterprise Starter (CES)", description: "Introduce AI-driven process intelligence", image: P8, link: "#" },
    // { id: 7, name: "AI-Enhanced Competitive Intelligence (AECI)", description: "Gain strategic insights using AI analytics", image: P9, link: "#" },
    // { id: 8, name: "Innovation Leadership with AI (ILAI)", description: "Guide AI-powered innovation teams", image: P10, link: "#" },
    // { id: 9, name: "Governance & Ethics in Practice (GEP)", description: "Practical approaches to AI ethics", image: P1, link: "#" },
    // { id: 10, name: "Strategic AI Roadmap Builder (SARB)", description: "Design actionable AI adoption roadmaps", image: P2, link: "#" },
    // { id: 11, name: "Decision Science Application Lab (DSAL)", description: "Hands-on AI-supported decision scenarios", image: P3, link: "#" },
    // { id: 12, name: "Organizational AI Awareness (OAA)", description: "Embed AI literacy in corporate culture", image: P4, link: "#" },
  ],

  // LEVEL 3 — PROFESSIONAL
  3: [
    { id: 1, name: "Executive Program in AI Leadership (EPAL)", description: "Master enterprise AI leadership techniques", image: P5, link: "#" },
    { id: 2, name: "AI Transformation Catalyst (ATC)", description: "Lead AI adoption across organizations", image: P6, link: "#" },
    { id: 3, name: "AI Policy & Ethics Director (APED)", description: "Design and enforce AI policy frameworks", image: P7, link: "#" },
    { id: 4, name: "Cognitive Enterprise Architect (CEA)", description: "Integrate AI into business architectures", image: P8, link: "#" },
    { id: 5, name: "Strategic AI Navigator (SAIN)", description: "Plan national or corporate AI strategies", image: P9, link: "#" },
    // { id: 6, name: "AI-Driven Change Management (ADCM)", description: "Guide cultural and organizational transformation with AI", image: P10, link: "#" },
    // { id: 7, name: "Enterprise AI Risk Analyst (EARA)", description: "Evaluate and mitigate AI project risks", image: P1, link: "#" },
    // { id: 8, name: "Responsible Innovation Practitioner (RIP)", description: "Embed ethical practices in AI innovation", image: P2, link: "#" },
    // { id: 9, name: "Leadership AI Simulation Lab (LASL)", description: "Scenario-based enterprise AI decision simulations", image: P3, link: "#" },
    // { id: 10, name: "AI Strategy Communication Lab (ASCL)", description: "Communicate AI strategy to stakeholders effectively", image: P4, link: "#" },
    // { id: 11, name: "Executive AI Operations Designer (EAOD)", description: "Operationalize AI strategy in corporate environments", image: P5, link: "#" },
    // { id: 12, name: "Cognitive Leadership Analytics (CLA)", description: "Leverage AI for talent and organizational insights", image: P6, link: "#" },
  ],

  // LEVEL 4 — EXPERT
  4: [
    { id: 1, name: "AI Boardroom Excellence Program (ABEP)", description: "Integrate AI into executive decision-making", image: P7, link: "#" },
    { id: 2, name: "Strategic AI Policy Leader (SAPL)", description: "Design AI policies for national or corporate strategy", image: P8, link: "#" },
    { id: 3, name: "Enterprise AI Innovation Director (EAID)", description: "Lead high-impact AI innovation projects", image: P9, link: "#" },
    { id: 4, name: "AI Governance Strategist (AGS)", description: "Ensure responsible, compliant AI deployment", image: P10, link: "#" },
    // { id: 5, name: "AI-Enabled Risk & Compliance Director (AERCD)", description: "Oversee AI ethics, risk, and regulatory compliance", image: P1, link: "#" },
    { id: 6, name: "Transformational AI Leader (TAL)", description: "Drive organization-wide AI adoption and transformation", image: P2, link: "#" },
    // { id: 7, name: "AI-Driven Corporate Architect (ADCA)", description: "Build AI-first business and operational ecosystems", image: P3, link: "#" },
    // { id: 8, name: "Cognitive Policy Implementation Lead (CPIL)", description: "Operationalize AI policy and governance", image: P4, link: "#" },
    // { id: 9, name: "Executive AI Ethics Program (EAEP)", description: "Promote ethical AI at an enterprise level", image: P5, link: "#" },
    // { id: 10, name: "Strategic AI Innovation Lab (SAIL)", description: "Test, implement, and scale AI initiatives", image: P6, link: "#" },
    // { id: 11, name: "AI Leadership Excellence Workshop (ALEW)", description: "Executive-level decision and leadership lab", image: P7, link: "#" },
    // { id: 12, name: "Responsible AI Executive Program (RAIEP)", description: "Ethics, compliance, and sustainability leadership in AI", image: P8, link: "#" },
  ],

  // LEVEL 5 — VISIONARY
  5: [
    { id: 1, name: "Global AI Strategy Researcher (GASR)", description: "Lead AI policy and governance research worldwide", image: P9, link: "#" },
    // { id: 2, name: "AI Leadership Futurist (AILF2)", description: "Explore next-gen leadership for AI-driven enterprises", image: P10, link: "#" },
    { id: 3, name: "Cognitive Policy Architect (CPA)", description: "Design novel frameworks for AI governance", image: P1, link: "#" },
    { id: 4, name: "Ethical AI Visionary (EAV)", description: "Innovate ethical practices for global AI deployment", image: P2, link: "#" },
    { id: 5, name: "Strategic AI Think Tank Fellow (SATTF)", description: "Conduct research to guide AI policy and strategy", image: P3, link: "#" },
    { id: 6, name: "AI Sustainability & Policy Researcher (ASPR)", description: "Study AI for climate, economy, and society", image: P4, link: "#" },
    // { id: 7, name: "Human-Centric AI Leadership Designer (HALD)", description: "Promote human-in-the-loop AI governance research", image: P5, link: "#" },
    // { id: 8, name: "Frontier AI Governance Scientist (FAGS)", description: "Develop frameworks for AI regulation at scale", image: P6, link: "#" },
    // { id: 9, name: "AI-Enabled Strategic Foresight Lab (ASSFL)", description: "Anticipate future AI-driven societal and enterprise scenarios", image: P7, link: "#" },
    // { id: 10, name: "Cognitive Global Policy Innovator (CGPI)", description: "Design AI policies for cross-border applications", image: P8, link: "#" },
    // { id: 11, name: "Leadership AI Research Fellow (LARF)", description: "Advance research in AI-driven leadership methodologies", image: P9, link: "#" },
    // { id: 12, name: "AI Ethics & Strategy Thinker (AEST)", description: "Pioneer ethical and strategic AI frameworks for global impact", image: P10, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        AI in Leadership, Strategy & Policy
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
