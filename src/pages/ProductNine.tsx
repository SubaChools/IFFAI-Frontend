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
  { id: 1, name: "FOUNDATION", image: P10, description: "Build foundational knowledge in AI for cybersecurity and defense" },
  { id: 2, name: "PRACTITIONER", image: P8, description: "Apply AI for practical cybersecurity and defense solutions" },
  { id: 3, name: "PROFESSIONAL", image: P3, description: "Master AI-driven cybersecurity systems and defense intelligence" },
  { id: 4, name: "EXPERT", image: P4, description: "Lead cybersecurity and defense AI strategies at the enterprise or national level" },
  { id: 5, name: "VISIONARY", image: P5, description: "Innovate AI for cybersecurity, defense intelligence, and autonomous security research" },
];

// Content 2 — Domain IX: AI in Cybersecurity, Defense & Intelligence
const productCourses: Record<number, Course[]> = {
  1: [
    { id: 1, name: "CyberSentience Basics (CSB)", description: "Introduction to AI in cybersecurity and digital defense", image: P1, link: "#" },
    { id: 2, name: "Ethical Hacking Foundations (EHF)", description: "Learn basic penetration testing and security principles", image: P2, link: "#" },
    { id: 3, name: "Threat Intelligence 101 (TI101)", description: "Understanding cyber threats and AI-driven detection", image: P3, link: "#" },
    { id: 4, name: "AI for Digital Security (AIDS)", description: "Introduction to AI in malware detection and risk analysis", image: P4, link: "#" },
    // { id: 5, name: "Cryptography Fundamentals (CF)", description: "Basics of encryption and secure communications", image: P5, link: "#" },
    // { id: 6, name: "Defensive AI Starter (DAS)", description: "Learn how AI protects systems from attacks", image: P6, link: "#" },
    // { id: 7, name: "Network Security Essentials (NSE)", description: "AI applications in network threat monitoring", image: P7, link: "#" },
    // { id: 8, name: "AI Awareness in Defense Systems (AADS)", description: "Understanding AI integration in defense mechanisms", image: P8, link: "#" },
    { id: 9, name: "Data Privacy & Protection (DPP)", description: "Learn AI approaches to data security and privacy", image: P9, link: "#" },
    // { id: 10, name: "Cyber Ethics & Responsibility (CER)", description: "Ethical considerations in AI cybersecurity applications", image: P10, link: "#" },
    // { id: 11, name: "Intelligent Alert Systems (IAS)", description: "Introduction to AI-driven monitoring tools", image: P1, link: "#" },
    // { id: 12, name: "Security Automation Basics (SAB)", description: "Automate routine cybersecurity tasks using AI", image: P2, link: "#" },
  ],

  2: [
    { id: 1, name: "AI Threat Intelligence Analyst (ATIA)", description: "Build AI systems for automated threat detection", image: P3, link: "#" },
    { id: 2, name: "Adversarial AI Defender (AAID)", description: "Defend AI models from adversarial attacks", image: P4, link: "#" },
    // { id: 3, name: "Network Intrusion Analytics (NIA)", description: "Use AI to detect anomalous network activity", image: P5, link: "#" },
    { id: 4, name: "Cognitive Security Engineer (CSE)", description: "Implement AI-driven defense mechanisms", image: P6, link: "#" },
    { id: 5, name: "Malware Detection AI (MDAI)", description: "Build AI models to detect malware and ransomware", image: P7, link: "#" },
    // { id: 6, name: "Secure AI Lifecycle (SAIL)", description: "Apply AI for secure model training and deployment", image: P8, link: "#" },
    // { id: 7, name: "Cyber Risk Modeling (CRM)", description: "Predict and mitigate risks using AI", image: P9, link: "#" },
    // { id: 8, name: "AI for Defense Systems (AIDF)", description: "Develop intelligent defense automation frameworks", image: P10, link: "#" },
    { id: 9, name: "Incident Response AI (IRAI)", description: "Automate incident detection, classification, and response", image: P1, link: "#" },
    // { id: 10, name: "Secure Data Analytics (SDA)", description: "Use AI to ensure privacy and compliance in analytics", image: P2, link: "#" },
    // { id: 11, name: "Cloud Security AI (CSAI)", description: "Implement AI-driven security for cloud environments", image: P3, link: "#" },
    // { id: 12, name: "Ethical Cyber Intelligence (ECI)", description: "Apply AI ethically in cybersecurity and defense", image: P4, link: "#" },
  ],

  3: [
    { id: 1, name: "Cognitive Warfare Specialist (CWS)", description: "AI in defensive and offensive cybersecurity strategy", image: P5, link: "#" },
    { id: 2, name: "Quantum Secure AI Architect (QSA)", description: "Integrate quantum encryption with AI defense systems", image: P6, link: "#" },
    { id: 3, name: "Advanced Threat Intelligence Developer (ATID)", description: "Build predictive models for cyber threat intelligence", image: P7, link: "#" },
    { id: 4, name: "AI Cyber Defense Architect (ACDA)", description: "Design enterprise-scale AI security architectures", image: P8, link: "#" },
    // { id: 5, name: "Autonomous Security Systems Engineer (ASSE)", description: "Develop self-learning AI defense systems", image: P9, link: "#" },
    // { id: 6, name: "Ethical CyberAI Commander (ECAC)", description: "Lead AI-enabled secure operations ethically", image: P10, link: "#" },
    // { id: 7, name: "Network Defense Optimization (NDO)", description: "AI-driven optimization for secure networks", image: P1, link: "#" },
    // { id: 8, name: "AI Security Operations Manager (ASOM)", description: "Oversee AI-based cybersecurity operations", image: P2, link: "#" },
    // { id: 9, name: "Adversarial Threat Simulation (ATS)", description: "Simulate and analyze attacks using AI", image: P3, link: "#" },
    // { id: 10, name: "Cognitive Encryption Analyst (CEA)", description: "Apply AI to improve encryption and data integrity", image: P4, link: "#" },
    // { id: 11, name: "AI in Critical Infrastructure Protection (AICIP)", description: "Protect industrial and national infrastructure using AI", image: P5, link: "#" },
    { id: 12, name: "Predictive Cyber Defense Engineer (PCDE)", description: "Anticipate attacks with AI-based threat models", image: P6, link: "#" },
  ],

  4: [
    { id: 1, name: "AI Cybersecurity Program Director (ACPD)", description: "Lead enterprise AI cybersecurity programs", image: P7, link: "#" },
    { id: 2, name: "Defense AI Strategist (DAS)", description: "Develop national and organizational AI defense strategies", image: P8, link: "#" },
    { id: 3, name: "Enterprise Security AI Architect (ESAA)", description: "Design AI architectures for large-scale security systems", image: P9, link: "#" },
    // { id: 4, name: "Cognitive Threat Governance Director (CTGD)", description: "Implement AI-driven security governance frameworks", image: P10, link: "#" },
    // { id: 5, name: "AI Policy Integration for Cybersecurity (APICS)", description: "Align AI systems with security regulations and policy", image: P1, link: "#" },
    // { id: 6, name: "Security Innovation Catalyst (SIC)", description: "Lead AI-driven innovation in defense systems", image: P2, link: "#" },
    { id: 7, name: "Cybersecurity Intelligence Executive (CIE)", description: "Oversee enterprise threat intelligence using AI", image: P3, link: "#" },
    // { id: 8, name: "Risk & Compliance AI Executive (RCAE)", description: "Ensure compliance and risk mitigation through AI", image: P4, link: "#" },
    // { id: 9, name: "AI-Enhanced National Defense Planner (AENDP)", description: "Plan AI deployment for defense operations", image: P5, link: "#" },
    // { id: 10, name: "Cyber Operations AI Executive (COAE)", description: "Lead AI-managed operational defense systems", image: P6, link: "#" },
    { id: 11, name: "Ethical AI in National Security Director (EANS)", description: "Govern ethical AI adoption in defense", image: P7, link: "#" },
    // { id: 12, name: "Intelligent Defense Program Manager (IDPM)", description: "Manage AI-driven integrated defense programs", image: P8, link: "#" },
  ],

  5: [
    { id: 1, name: "Cybersecurity AI Researcher (CAIR)", description: "Develop next-gen AI defense and threat models", image: P9, link: "#" },
    { id: 2, name: "Autonomous Defense Intelligence Innovator (ADI)", description: "AI for self-adaptive, autonomous security systems", image: P10, link: "#" },
    { id: 3, name: "Quantum Cyber Defense Scientist (QCDS)", description: "Research AI integration with quantum security", image: P1, link: "#" },
    // { id: 4, name: "AI in Cyber Warfare Futurist (ACWF)", description: "Explore AI for future conflict and cyber operations", image: P2, link: "#" },
    // { id: 5, name: "Ethical AI Defense Research Fellow (EADRF)", description: "Develop responsible AI strategies for national defense", image: P3, link: "#" },
    // { id: 6, name: "Multi-Agent Security Systems Researcher (MASR)", description: "Design coordinated AI defense networks", image: P4, link: "#" },
    { id: 7, name: "Predictive Threat Modeling Scientist (PTMS)", description: "Research advanced AI-based threat prediction", image: P5, link: "#" },
    // { id: 8, name: "Cognitive Security Systems Innovator (CSSI)", description: "Pioneer AI-driven intelligent security systems", image: P6, link: "#" },
    // { id: 9, name: "AI for Critical Infrastructure Researcher (ACIR)", description: "Protect critical systems with AI research solutions", image: P7, link: "#" },
    // { id: 10, name: "Human–AI Defense Interface Designer (HADID)", description: "Develop human-in-the-loop AI defense systems", image: P8, link: "#" },
    { id: 11, name: "Global Cybersecurity AI Strategist (GCAIS)", description: "Shape international AI security frameworks", image: P9, link: "#" },
    // { id: 12, name: "Frontier Cyber Intelligence Scientist (FCIS)", description: "Drive research at the intersection of AI, defense, and security", image: P10, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        AI in Cybersecurity, Defense & Intelligence
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
