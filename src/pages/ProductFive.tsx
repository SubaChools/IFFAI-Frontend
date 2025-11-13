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

/* Product levels */
const products: Product[] = [
  { id: 1, name: "FOUNDATION", image: P10, description: "Understand AI creativity, generative models, and their basic applications" },
  { id: 2, name: "PRACTITIONER", image: P8, description: "Apply generative AI for projects in text, visuals, and audio" },
  { id: 3, name: "PROFESSIONAL", image: P3, description: "Master generative AI techniques for professional creative output" },
  { id: 4, name: "EXPERT", image: P4, description: "Lead AI creativity projects and integrate into enterprise strategies" },
  { id: 5, name: "VISIONARY", image: P5, description: "Innovate new paradigms, models, and research in generative AI" },
];

/* Domain V — Generative AI & Creative Intelligence (12 courses × 5 levels) */
const productCourses: Record<number, Course[]> = {
  1: [
    { id: 1, name: "Generative AI 101 (GAI101)", description: "Intro to AI-generated content and its possibilities", image: P1, link: "#" },
    // { id: 2, name: "Creative AI Fundamentals (CAF)", description: "Basic principles of creativity using machine intelligence", image: P2, link: "#" },
    { id: 3, name: "Intro to LLMs (LLMI)", description: "Understand large language models and text generation basics", image: P3, link: "#" },
    { id: 4, name: "Visual AI Starter (VAS)", description: "Explore AI image generation and visualization tools", image: P4, link: "#" },
    // { id: 5, name: "Music AI Essentials (MAIE)", description: "Intro to AI-generated sound, music, and audio processing", image: P5, link: "#" },
    { id: 6, name: "Prompt Crafting Basics (PCB)", description: "Learn fundamentals of prompt design for quality outputs", image: P6, link: "#" },
    // { id: 7, name: "Storytelling AI Fundamentals (SAF)", description: "Narrative and script generation basics with AI", image: P7, link: "#" },
    { id: 8, name: "AI in Design (AIDe)", description: "AI applications in graphic and product design", image: P8, link: "#" },
    // { id: 9, name: "Ethics in Creative AI (ECAI)", description: "Fairness, copyright and responsible creativity", image: P9, link: "#" },
    // { id: 10, name: "Generative Workflows 101 (GW101)", description: "Hands-on introduction to GenAI pipelines", image: P10, link: "#" },
    // { id: 11, name: "AI-Assisted Content Tools (AACT)", description: "Beginner tools for AI writing, video and media", image: P1, link: "#" },
    // { id: 12, name: "Digital Creativity Foundations (DCF)", description: "Understand multimodal AI systems and workflows", image: P2, link: "#" },
  ],

  2: [
    { id: 1, name: "PromptAlchemy Specialist (PAS)", description: "Transform prompts into high-value outputs", image: P3, link: "#" },
    { id: 2, name: "Image Generation Lab (IGL)", description: "Apply diffusion and GAN models for visuals", image: P4, link: "#" },
    { id: 3, name: "AI Storytelling Workshop (ASW)", description: "Develop AI-assisted narrative and scriptwriting skills", image: P5, link: "#" },
    // { id: 4, name: "Sound & Music Synthesis AI (SMSA)", description: "Generate compositions and soundscapes with AI", image: P6, link: "#" },
    // { id: 5, name: "Text-to-Visual Integration (TVI)", description: "Convert textual descriptions into images and graphics", image: P7, link: "#" },
    // { id: 6, name: "Creative Data Visualization (CDV)", description: "Build expressive visualizations with AI insights", image: P8, link: "#" },
    { id: 7, name: "Applied GenAI Tools (AGT)", description: "Hands-on with OpenAI, MidJourney, Stable Diffusion etc", image: P9, link: "#" },
    // { id: 8, name: "AI-Enhanced Branding (AEB)", description: "Integrate AI creativity into marketing", image: P10, link: "#" },
    // { id: 9, name: "Generative Content Workflow (GCW)", description: "End-to-end pipelines for creative production", image: P1, link: "#" },
    // { id: 10, name: "Virtual Character & Avatar AI (VCAI)", description: "Create AI-driven characters for games & media", image: P2, link: "#" },
    // { id: 11, name: "Creative AI Ethics in Practice (CAEP)", description: "Apply responsible practices in real projects", image: P3, link: "#" },
    { id: 12, name: "Multimodal Creative Intelligence (MCI)", description: "Combine text, audio and visual models", image: P4, link: "#" },
  ],

  3: [
    { id: 1, name: "GenesisX: Generative AI Architect (GXG)", description: "Build, fine-tune and deploy advanced generative models", image: P5, link: "#" },
    { id: 2, name: "CreaSynth: AI for Art & Media (CAM)", description: "Generate designs, animations and media content", image: P6, link: "#" },
    // { id: 3, name: "SonicAI Producer (SAP)", description: "Professional AI-generated music and audio effects", image: P7, link: "#" },
    { id: 4, name: "VisionAI Studio Designer (VASD)", description: "Develop high-quality AI-generated images and video", image: P8, link: "#" },
    { id: 5, name: "Cognitive Storytelling Engineer (CSE)", description: "Produce robust narratives using AI", image: P9, link: "#" },
    { id: 6, name: "HyperPrompt Developer (HPD)", description: "Advanced prompt engineering for multimodal models", image: P10, link: "#" },
    // { id: 7, name: "AI Video Generation Lab (AVG)", description: "Create AI-generated video and short-form media", image: P1, link: "#" },
    // { id: 8, name: "Generative UX/UI Designer (GUXD)", description: "Apply AI to interface & UX design workflows", image: P2, link: "#" },
    // { id: 9, name: "AI-Driven Content Analytics (ADCA)", description: "Measure engagement and optimize outputs", image: P3, link: "#" },
    // { id: 10, name: "Generative Media Automation (GMA)", description: "Automate creative production pipelines", image: P4, link: "#" },
    // { id: 11, name: "AI Creative Consulting Lab (ACCL)", description: "Solve client problems with GenAI solutions", image: P5, link: "#" },
    // { id: 12, name: "Generative Intellectual Property (GIP)", description: "Copyright, IP and licensing for AI works", image: P6, link: "#" },
  ],

  4: [
    { id: 1, name: "Creative AI Program Director (CAPD)", description: "Lead AI-driven creative teams and projects", image: P7, link: "#" },
    { id: 2, name: "Generative Media Strategy Leader (GMSL)", description: "Design GenAI strategies for media businesses", image: P8, link: "#" },
    { id: 3, name: "Enterprise Generative AI Architect (EGAA)", description: "Build scalable content pipelines for orgs", image: P9, link: "#" },
    { id: 4, name: "AI Content Governance Director (ACGD)", description: "Ensure responsible and compliant GenAI deployment", image: P10, link: "#" },
    // { id: 5, name: "Strategic AI Creativity Consultant (SACC)", description: "Advise enterprises on creative AI adoption", image: P1, link: "#" },
    { id: 6, name: "AI Digital Experience Innovator (AIDE)", description: "Lead immersive AI experiences & virtual media", image: P2, link: "#" },
    // { id: 7, name: "Multimodal Creative Director (MCD)", description: "Oversee combined text, audio and visual projects", image: P3, link: "#" },
    // { id: 8, name: "AI-Enabled Storytelling Executive (ASE)", description: "Guide corporate storytelling using GenAI", image: P4, link: "#" },
    // { id: 9, name: "Brand Intelligence AI Leader (BIAL)", description: "Integrate AI creativity in marketing at scale", image: P5, link: "#" },
    // { id: 10, name: "Responsible GenAI Executive (RGE)", description: "Executive-level responsible GenAI governance", image: P6, link: "#" },
    // { id: 11, name: "AI Production & Studio Manager (APSM)", description: "Manage AI-driven content production operations", image: P7, link: "#" },
    // { id: 12, name: "Innovation Catalyst for Creative AI (ICCA)", description: "Drive corporate innovation through GenAI tools", image: P8, link: "#" },
  ],

  5: [
    { id: 1, name: "Generative AI Research Fellow (GARF)", description: "Lead frontier research in generative models", image: P9, link: "#" },
    { id: 2, name: "Multi-Modal Creative Intelligence (MMCI)", description: "Develop models combining text, audio and video", image: P10, link: "#" },
    { id: 3, name: "AI in Immersive Worlds (AIW)", description: "Pioneer AI-driven VR & metaverse content", image: P1, link: "#" },
    // { id: 4, name: "Creative Neural Architect (CNA)", description: "Design novel architectures for creative AI tasks", image: P2, link: "#" },
    { id: 5, name: "Explainable GenAI Scientist (EGS)", description: "Develop interpretable models for creative apps", image: P3, link: "#" },
    // { id: 6, name: "AI Music & Sound Researcher (AMSR)", description: "Innovate in AI audio generation & synthesis", image: P4, link: "#" },
    { id: 7, name: "Human-AI Creative Synergy Designer (HACS)", description: "Human-in-the-loop collaboration design for art", image: P5, link: "#" },
    // { id: 8, name: "Ethical Frontier Creative AI (EFCA)", description: "Research ethics and sustainability in GenAI", image: P6, link: "#" },
    // { id: 9, name: "AI Media Innovation Lab (AMIL)", description: "Build next-gen AI content platforms for research", image: P7, link: "#" },
    // { id: 10, name: "Cognitive Story & World Builder (CSWB)", description: "Create AI-driven narrative universes", image: P8, link: "#" },
    // { id: 11, name: "Generative AI Future Lab (GAFL)", description: "Prototype experimental GenAI systems and tools", image: P9, link: "#" },
    // { id: 12, name: "AI in Cultural Intelligence (AICI)", description: "Research AI applications for global cultural domains", image: P10, link: "#" },
  ],
};

const hoverColor = "#00c951";

const ProductGrid: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-white py-10 px-6">
      <h1 className="text-4xl text-center md:text-5xl font-extrabold text-[#572eda] drop-shadow-lg mb-15">
        Generative AI & Creative Intelligence
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

                  <h4 className="font-bold text-lg text-center text-gray-800 mt-4">{c.name}</h4>
                  <p className="text-sm text-gray-600 mt-2 mb-4 text-center line-clamp-3">{c.description}</p>

                  <a href={c.link} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-[#572eda] to-[#6b48ff] text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition-all">
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
