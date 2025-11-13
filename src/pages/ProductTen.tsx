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
  { id: 1, name: "FOUNDATION", image: P10, description: "Build foundational knowledge of emerging AI concepts and frontier technologies" },
  { id: 2, name: "PRACTITIONER", image: P8, description: "Apply emerging AI technologies to practical problems and pilot projects" },
  { id: 3, name: "PROFESSIONAL", image: P3, description: "Master advanced frontier AI systems and integrate them into real-world applications" },
  { id: 4, name: "EXPERT", image: P4, description: "Lead AI innovation in emerging technologies at enterprise and research levels" },
  { id: 5, name: "VISIONARY", image: P5, description: "Pioneer next-gen AI research, develop novel architectures, and define future AI frontiers" },
];

const productCourses: Record<number, Course[]> = {
  1: [
    { id: 1, name: "Quantum AI Basics (QAB)", description: "Introduction to quantum computing and AI intersections", image: P1, link: "#" },
    { id: 2, name: "Neuromorphic Computing Primer (NCP)", description: "Basics of brain-inspired AI architectures", image: P2, link: "#" },
    // { id: 3, name: "Emerging AI Systems 101 (EAS101)", description: "Overview of next-gen AI technologies and applications", image: P3, link: "#" },
    { id: 4, name: "Metaverse Intelligence Foundations (MIF)", description: "Introduction to AI in virtual worlds and immersive platforms", image: P4, link: "#" },
    { id: 5, name: "Autonomous Agents Intro (AAI)", description: "Basics of multi-agent systems and intelligent collaboration", image: P5, link: "#" },
    { id: 6, name: "AI in Human Augmentation (AIHA)", description: "Explore AI for cognitive and physical augmentation", image: P6, link: "#" },
    // { id: 7, name: "Frontier Robotics Essentials (FRE)", description: "Introduction to AI-powered autonomous robotics", image: P7, link: "#" },
    // { id: 8, name: "AI in Space & Aerospace (ASA)", description: "Fundamentals of AI applications in space technologies", image: P8, link: "#" },
    // { id: 9, name: "Brain-Inspired AI Basics (BIAB)", description: "Learn hybrid neural and symbolic AI concepts", image: P9, link: "#" },
    // { id: 10, name: "Intelligent Ecosystems Primer (IEP)", description: "Overview of AI in self-sustaining autonomous systems", image: P10, link: "#" },
    // { id: 11, name: "Future Tech Awareness (FTA)", description: "Understanding trends and disruptive AI technologies", image: P1, link: "#" },
    // { id: 12, name: "AI Experimentation Lab (AIEL)", description: "Hands-on small experiments in frontier AI tools", image: P2, link: "#" },
  ],

  2: [
    { id: 1, name: "Quantum Neural Developer (QND)", description: "Build hybrid quantum-classical neural models", image: P3, link: "#" },
    { id: 2, name: "Neuromorphic Systems Engineer (NSE)", description: "Develop AI models inspired by neural circuits", image: P4, link: "#" },
    { id: 3, name: "Multi-Agent Coordination Practitioner (MACP)", description: "Apply AI in cooperative autonomous systems", image: P5, link: "#" },
    { id: 4, name: "Metaverse AI Developer (MAID)", description: "Implement AI for immersive, interactive virtual worlds", image: P6, link: "#" },
    // { id: 5, name: "Autonomous System Designer (ASD)", description: "Design AI agents for adaptive environments", image: P7, link: "#" },
    { id: 6, name: "Human-Centric AI Innovator (HCAI)", description: "Apply AI to enhance human decision-making and capabilities", image: P8, link: "#" },
    // { id: 7, name: "SpaceAI Application Developer (SAAD)", description: "Build AI tools for aerospace and satellite operations", image: P9, link: "#" },
    // { id: 8, name: "Frontier Robotics Practitioner (FRP)", description: "Implement AI-powered autonomous robotics solutions", image: P10, link: "#" },
    // { id: 9, name: "Cognitive Hybrid Intelligence (CHI)", description: "Merge symbolic and neural AI for advanced applications", image: P1, link: "#" },
    // { id: 10, name: "Predictive AI Explorer (PAE)", description: "Create predictive models for frontier technologies", image: P2, link: "#" },
    // { id: 11, name: "Self-Evolving AI Developer (SEAD)", description: "Experiment with AI models that learn to adapt autonomously", image: P3, link: "#" },
    // { id: 12, name: "Immersive Intelligence Practitioner (IIP)", description: "Develop AI for augmented and virtual reality environments", image: P4, link: "#" },
  ],

  3: [
    { id: 1, name: "QuantumMind AI Engineer (QMAI)", description: "Advanced AI design interfacing with quantum computing", image: P5, link: "#" },
    { id: 2, name: "NeuroFusion Intelligence (NFI)", description: "Develop brain-inspired hybrid AI architectures", image: P6, link: "#" },
    // { id: 3, name: "SpaceAI Systems Engineer (SAISE)", description: "Apply AI in aerospace, satellite, and orbital navigation", image: P7, link: "#" },
    // { id: 4, name: "BioCognitive Intelligence Developer (BCID)", description: "Merge AI with biotech and cognitive science for innovation", image: P8, link: "#" },
    { id: 5, name: "Metaverse Intelligence Designer (MID)", description: "Create immersive AI-driven virtual experiences", image: P9, link: "#" },
    { id: 6, name: "AI for Human Enhancement (AI-HE)", description: "Build augmented intelligence systems for human collaboration", image: P10, link: "#" },
    { id: 7, name: "AI in Autonomous Ecosystems (AIAE)", description: "Design multi-agent, self-evolving intelligent systems", image: P1, link: "#" },
    // { id: 8, name: "Frontier Simulation & Modeling (FSM)", description: "Model advanced AI systems for frontier applications", image: P2, link: "#" },
    // { id: 9, name: "Cognitive Quantum Architect (CQA)", description: "Develop hybrid cognitive models for quantum platforms", image: P3, link: "#" },
    // { id: 10, name: "Advanced Neuromorphic Systems (ANS)", description: "Implement brain-inspired AI for complex problem solving", image: P4, link: "#" },
    // { id: 11, name: "Predictive Frontier Analytics (PFA)", description: "AI-driven prediction for frontier technologies", image: P5, link: "#" },
    // { id: 12, name: "Autonomous Robotics Frontier (ARF)", description: "Build AI-driven autonomous robotic systems for exploration", image: P6, link: "#" },
  ],

  4: [
    { id: 1, name: "Frontier AI Innovation Leader (FAIL)", description: "Lead AI R&D for emerging technology initiatives", image: P7, link: "#" },
    { id: 2, name: "Quantum AI Strategy Director (QASD)", description: "Guide enterprise-level AI quantum integration", image: P8, link: "#" },
    { id: 3, name: "Metaverse Intelligence Program Director (MIPD)", description: "Oversee immersive AI platforms and projects", image: P9, link: "#" },
    // { id: 4, name: "Autonomous Systems Governance Director (ASGD)", description: "Implement policy, compliance, and strategy for AI ecosystems", image: P10, link: "#" },
    { id: 5, name: "Cognitive AI Enterprise Architect (CAEA)", description: "Design enterprise-scale frontier AI systems", image: P1, link: "#" },
    { id: 6, name: "Human–AI Synergy Executive (HASE)", description: "Lead augmentation and human-centric AI programs", image: P2, link: "#" },
    // { id: 7, name: "SpaceAI Program Manager (SAPM)", description: "Oversee AI programs in aerospace and satellite sectors", image: P3, link: "#" },
    // { id: 8, name: "Neuromorphic Systems Director (NSD)", description: "Guide implementation of brain-inspired AI architectures", image: P4, link: "#" },
    // { id: 9, name: "AI for Frontier Industries Executive (AFIE)", description: "Deploy advanced AI in frontier industrial applications", image: P5, link: "#" },
    // { id: 10, name: "Predictive Technology Leader (PTL)", description: "Strategically use AI for emerging technology foresight", image: P6, link: "#" },
    // { id: 11, name: "Autonomous Intelligence Strategist (AIS)", description: "Lead multi-agent AI and self-evolving system initiatives", image: P7, link: "#" },
    // { id: 12, name: "AI Research & Innovation Director (ARID)", description: "Direct research programs in next-gen AI frontiers", image: P8, link: "#" },
  ],

  5: [
    { id: 1, name: "Frontier AI Researcher (FAIR)", description: "Explore novel architectures and next-gen AI paradigms", image: P9, link: "#" },
    { id: 2, name: "Quantum Neural Architect (QNA)", description: "Design AI models that interface with quantum computing", image: P10, link: "#" },
    { id: 3, name: "NeuroCognitive Model Innovator (NCMI)", description: "Build brain-inspired hybrid neural models", image: P1, link: "#" },
    { id: 4, name: "Autonomous Multi-Agent Scientist (AMAS)", description: "Research coordinated AI systems for autonomous operations", image: P2, link: "#" },
    // { id: 5, name: "Metaverse Intelligence Futurist (MIF)", description: "Innovate AI in virtual, augmented, and immersive worlds", image: P3, link: "#" },
    // { id: 6, name: "Human–AI Synergy Designer (HASD)", description: "Develop interfaces and systems for human-in-the-loop AI", image: P4, link: "#" },
    // { id: 7, name: "AI Sustainability Research Fellow (AISRF)", description: "Innovate AI for energy, climate, and sustainable systems", image: P5, link: "#" },
    // { id: 8, name: "Cognitive Quantum Research Scientist (CQRS)", description: "Advance AI and quantum computing integration", image: P6, link: "#" },
    // { id: 9, name: "Bio-Enhanced AI Innovator (BAI)", description: "Combine AI with biotech for human enhancement research", image: P7, link: "#" },
    // { id: 10, name: "Predictive Frontier Intelligence (PFI)", description: "Develop AI for forecasting and frontier problem solving", image: P8, link: "#" },
    // { id: 11, name: "Autonomous Robotics Visionary (ARV)", description: "Pioneer AI-driven exploration robotics and autonomous systems", image: P9, link: "#" },
    { id: 12, name: "Cognitive Frontier Scientist (CFS)", description: "Lead global research at the intersection of neuroscience and AI", image: P10, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        Frontier & Emerging AI Domains
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
