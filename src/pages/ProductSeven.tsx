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
  { id: 1, name: "FOUNDATION", image: P10, description: "Build AI literacy for educational applications" },
  { id: 2, name: "PRACTITIONER", image: P8, description: "Apply AI to create intelligent learning solutions" },
  { id: 3, name: "PROFESSIONAL", image: P3, description: "Master AI for institutional learning and skill transformation programs" },
  { id: 4, name: "EXPERT", image: P4, description: "Lead AI-driven education transformation at an organizational or policy level" },
  { id: 5, name: "VISIONARY", image: P5, description: "Innovate in AI-driven learning, cognitive skill transformation, and education policy research" },
];

/**
 * Content 2 — Domain VII: AI in Education, Learning & Skill Transformation
 * 12 courses per level (using placeholder images P1..P10)
 */
const productCourses: Record<number, Course[]> = {
  1: [
    { id: 1, name: "EduVision AI (EVA)", description: "Introduction to AI in education", image: P1, link: "#" },
    { id: 2, name: "AI Literacy for Educators (AILE)", description: "Core AI concepts for teachers and trainers", image: P2, link: "#" },
    { id: 3, name: "Learning Analytics Basics (LAB)", description: "Understand AI-powered learning insights", image: P3, link: "#" },
    // { id: 4, name: "Smart Classrooms Introduction (SCI)", description: "Explore AI in classroom environments", image: P4, link: "#" },
    { id: 5, name: "AI-Assisted Curriculum Primer (AICP)", description: "Basics of AI-enabled curriculum design", image: P5, link: "#" },
    // { id: 6, name: "Digital Pedagogy Starter (DPS)", description: "Blend technology and pedagogy with AI", image: P6, link: "#" },
    // { id: 7, name: "Adaptive Learning Overview (ALO)", description: "Introduction to personalized learning AI models", image: P7, link: "#" },
    // { id: 8, name: "AI Tutoring Basics (AITB)", description: "How AI can assist learners in real time", image: P8, link: "#" },
    // { id: 9, name: "Education Data Foundations (EDF)", description: "Fundamentals of learning data collection and analysis", image: P9, link: "#" },
    { id: 10, name: "Ethics in AI Education (EAE)", description: "Address bias and responsible AI in learning", image: P10, link: "#" },
    // { id: 11, name: "Cognitive Learning Essentials (CLE)", description: "Explore cognitive AI applications for learning", image: P1, link: "#" },
    // { id: 12, name: "AI for Lifelong Learning (ALL)", description: "Introduce AI tools for continuous skill development", image: P2, link: "#" },
  ],

  2: [
    { id: 1, name: "AI Curriculum Innovator (AICI)", description: "Design AI-enhanced academic programs", image: P3, link: "#" },
    // { id: 2, name: "SmartClass AI (SCAI)", description: "Build AI-driven virtual learning environments", image: P4, link: "#" },
    { id: 3, name: "PedagoBot Creator (PBC)", description: "Develop intelligent tutoring bots", image: P5, link: "#" },
    { id: 4, name: "Learning Analytics Engineer (LAE)", description: "Use AI to measure and improve student performance", image: P6, link: "#" },
    { id: 5, name: "Assessment Intelligence Designer (AID)", description: "AI-powered testing, grading, and analytics", image: P7, link: "#" },
    { id: 6, name: "Adaptive Learning Developer (ALD)", description: "Personalize content delivery with AI", image: P8, link: "#" },
    // { id: 7, name: "AI-Powered Student Engagement (APSE)", description: "Tools to enhance learning motivation with AI", image: P9, link: "#" },
    // { id: 8, name: "Digital Skill Transformation Lab (DSTL)", description: "Implement AI for upskilling programs", image: P10, link: "#" },
    // { id: 9, name: "AI Literacy & Inclusion Champion (ALIC)", description: "Design accessible AI learning for diverse learners", image: P1, link: "#" },
    // { id: 10, name: "Cognitive Skill Mapping (CSM)", description: "Map skills to AI-driven learning interventions", image: P2, link: "#" },
    // { id: 11, name: "AI Mentorship Platform (AMP)", description: "Use AI to mentor learners effectively", image: P3, link: "#" },
    // { id: 12, name: "Intelligent Tutoring System Lab (ITSL)", description: "Build AI-driven tutoring platforms", image: P4, link: "#" },
  ],

  3: [
    { id: 1, name: "Learning Intelligence Architect (LIA)", description: "Design intelligent educational systems", image: P5, link: "#" },
    { id: 2, name: "AI-Driven Curriculum Strategist (ADCS)", description: "Create AI-integrated learning programs at scale", image: P6, link: "#" },
    // { id: 3, name: "Smart Learning Platform Engineer (SLPE)", description: "Build AI-powered educational platforms", image: P7, link: "#" },
    // { id: 4, name: "Assessment & Feedback AI Specialist (AFAS)", description: "Automate analytics, assessment, and feedback systems", image: P8, link: "#" },
    { id: 5, name: "Adaptive Learning Systems Developer (ALSD)", description: "Create advanced personalized learning solutions", image: P9, link: "#" },
    // { id: 6, name: "AI Mentorship Designer (AMD)", description: "Develop scalable AI mentorship programs", image: P10, link: "#" },
    { id: 7, name: "Education Data Scientist (EDS)", description: "Advanced analytics for institutional learning insights", image: P1, link: "#" },
    // { id: 8, name: "Cognitive Learning Consultant (CLC)", description: "Consult on AI-based learning strategies", image: P2, link: "#" },
    // { id: 9, name: "Virtual Tutor Integration Specialist (VTIS)", description: "Deploy AI tutors for online and blended learning", image: P3, link: "#" },
    // { id: 10, name: "Skill Transformation Program Manager (STPM)", description: "Manage AI-driven skill development programs", image: P4, link: "#" },
    { id: 11, name: "Learning Experience Designer with AI (LED-AI)", description: "Design engaging, AI-enhanced learning experiences", image: P5, link: "#" },
    // { id: 12, name: "AI Learning Analytics Lead (ALAL)", description: "Implement actionable AI insights in institutions", image: P6, link: "#" },
  ],

  4: [
    { id: 1, name: "AI Education Policy Leader (AEPL)", description: "Develop AI policies for schools, colleges, and institutions", image: P7, link: "#" },
    { id: 2, name: "Strategic Learning AI Director (SLAD)", description: "Lead organization-wide AI education programs", image: P8, link: "#" },
    // { id: 3, name: "AI-Driven Institutional Architect (ADIA)", description: "Build AI-first institutional learning frameworks", image: P9, link: "#" },
    { id: 4, name: "Educational AI Innovation Catalyst (EAIC)", description: "Drive innovation in learning technologies", image: P10, link: "#" },
    { id: 5, name: "Executive Learning Analytics Specialist (ELAS)", description: "Lead data-driven decision-making in education", image: P1, link: "#" },
    // { id: 6, name: "AI in Talent & Skill Strategy (AITSS)", description: "Align AI learning tools with talent pipelines", image: P2, link: "#" },
    // { id: 7, name: "Cognitive Education Governance (CEG)", description: "Implement ethical governance for AI in education", image: P3, link: "#" },
    // { id: 8, name: "AI Learning Transformation Lead (ALTL)", description: "Oversee large-scale AI learning initiatives", image: P4, link: "#" },
    // { id: 9, name: "Virtual Learning Operations Executive (VLOE)", description: "Manage AI-driven learning operations", image: P5, link: "#" },
    { id: 10, name: "Responsible AI Education Program (RAIEP)", description: "Promote ethical and inclusive AI learning programs", image: P6, link: "#" },
    // { id: 11, name: "AI-Enhanced Leadership Development (AELD)", description: "Apply AI in executive education programs", image: P7, link: "#" },
    // { id: 12, name: "Strategic Learning Foresight Lab (SLFL)", description: "Design AI scenarios for future skill needs", image: P8, link: "#" },
  ],

  5: [
    { id: 1, name: "Learning AI Research Fellow (LARF)", description: "Conduct cutting-edge AI research for education", image: P9, link: "#" },
    // { id: 2, name: "Cognitive Education Scientist (CES)", description: "Study AI’s role in learning and cognition", image: P10, link: "#" },
    { id: 3, name: "AI Skill Transformation Innovator (ASTI)", description: "Design novel frameworks for lifelong learning", image: P1, link: "#" },
    { id: 4, name: "Adaptive Learning Systems Researcher (ALSR)", description: "Pioneer personalized learning systems with AI", image: P2, link: "#" },
    { id: 5, name: "Global AI in Education Thinker (GAET)", description: "Contribute to international AI education policy", image: P3, link: "#" },
    // { id: 6, name: "AI Literacy & Future Skills Researcher (ALFSR)", description: "Map AI literacy for global skill demands", image: P4, link: "#" },
    // { id: 7, name: "Human-AI Learning Synergy Designer (HALSD)", description: "Design collaborative AI-human learning solutions", image: P5, link: "#" },
    // { id: 8, name: "Frontier Learning Innovation Scientist (FLIS)", description: "Explore next-gen AI-enabled education platforms", image: P6, link: "#" },
    // { id: 9, name: "AI Mentorship & Cognitive Lab (AMC)", description: "Research scalable AI mentoring systems", image: P7, link: "#" },
    // { id: 10, name: "Strategic Education AI Futurist (SEAF)", description: "Anticipate AI’s impact on global education trends", image: P8, link: "#" },
    { id: 11, name: "Responsible AI Learning Innovator (RAILI)", description: "Promote ethical AI innovation in learning", image: P9, link: "#" },
    // { id: 12, name: "Cognitive Skill Frontier Scientist (CSFS)", description: "Drive research on human-AI skill transformation", image: P10, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        AI in Education, Learning & Skill Transformation
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
