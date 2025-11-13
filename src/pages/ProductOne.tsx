import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
  { id: 1, name: "FOUNDATION", image: C1, description: "Learn the basics of AI" },
  { id: 2, name: "PRACTITIONER", image: C2, description: "Deep dive into AI"},
  { id: 3, name: "PROFESSIONAL", image: C3, description: "Advanced AI strategies" },
  { id: 4, name: "EXPERT", image: C4, description: "Expert-level AI techniques" },
  { id: 5, name: "VISIONARY", image: C5, description: "Innovative AI models" },
];

// --- 🔹 Define 12 Courses per Product ---
const productCourses: Record<number, Course[]> = {
  1: [ { id: 1, name: "AI Essentials for Everyone (AIEE)", description: "Learn the core concepts, logic, and history behind Artificial Intelligence", image: P1, link: "#" }, 
    { id: 2, name: "Machine Learning Primer (MLP)", description: "Introduces supervised and unsupervised learning fundamentals", image: P2, link: "#" }, 
    { id: 3, name: "Neural Networks Unlocked (NNU)", description: "A visual, interactive introduction to neural architectures", image: P3, link: "/course" }, 
    // { id: 4, name: "Data Science Foundations (DSF)", description: "Basics of data handling, cleaning, and visualization for AI workflows", image: P4, link: "#" }, 
    { id: 5, name: "AI Coding Bootcamp (AICB)", description: "Hands-on introduction to Python and AI libraries", image: P5, link: "#" }, 
    { id: 6, name: "Applied AI Thinking (AAIT)", description: "Understanding how AI solves real-world problems", image: P6, link: "#" }, 
    // { id: 7, name: "Cognitive Computing Basics (CCB)", description: "Explore the human–machine intelligence bridge", image: P7, link: "#" }, 
    // { id: 8, name: "AI in Everyday Life (AIEL)", description: "Learn AI applications in business, health, and communication", image: P8, link: "#" }, 
    // { id: 9, name: "Ethics and Responsibility in AI (ERAI)", description: "Introduces fairness, bias, and AI accountability", image: P9, link: "#" }, 
    // { id: 10, name: "Smart Systems Orientation (SSO)", description: "How sensors, algorithms, and learning combine to form smart systems", image: P10, link: "#" }, 
    // { id: 11, name: "Pattern Recognition Playground (PRP)", description: "Experiment with how machines identify and classify data patterns", image: P9, link: "#" }, 
    // { id: 12, name: "The Future of Intelligence (TFI)", description: "Discover how AI is redefining industries, education, and human potential", image: P10, link: "#" }, 
   ],

  2: [
    // { id: 1, name: "Applied Machine Mind Program (AMMP)", description: "Build and deploy simple ML models for predictive analytics", image: P3, link: "#" },
    { id: 2, name: "Deep Learning Essentials (DLE)", description: "Foundations of CNNs, RNNs, and transfer learning", image: P4, link: "#" },
    { id: 3, name: "Neural Design Studio (NDS)", description: "Design neural architectures using TensorFlow and PyTorch", image: P5, link: "#" },
    // { id: 4, name: "Cognitive Intelligence Developer (CID)", description: "Create AI systems that mimic human learning", image: P6, link: "#" },
    { id: 5, name: "Data Intelligence Engineer (DIE)", description: "Transform raw data into actionable machine insights", image: P7, link: "#" },
    { id: 6, name: "Responsible AI Implementation (RAII)", description: "Ensure fairness and accountability in applied AI", image: P8, link: "#" },
    // { id: 7, name: "AI Toolchain Mastery (ATM)", description: "Master Scikit-learn, HuggingFace, OpenAI, and related toolkits", image: P9, link: "#" },
    { id: 8, name: "Predictive Analytics Practitioner (PAP)", description: "Build forecasting and classification models for business", image: P10, link: "#" },
    // { id: 9, name: "AI in Decision Science (AIDS)", description: "Use machine intelligence for smarter strategic decisions", image: P1, link: "#" },
    // { id: 10, name: "Cognitive Automation Starter (CAS)", description: "Develop AI-based workflow automation", image: P2, link: "#" },
    // { id: 11, name: "Intelligent Data Visualization (IDV)", description: "Learn storytelling through AI-powered dashboards and models", image: P3, link: "#" },
    // { id: 12, name: "AI Applications Workshop (AIAW)", description: "Build mini-projects applying AI to marketing, health, and logistics", image: P4, link: "#" },
  ],

  // You can add similar 12-course arrays for 3, 4, 5 below...
  3: [
    { id: 1, name: "Cognitive Intelligence Architect (CIA)", description: "Master end-to-end AI model design, training, and deployment", image: P1, link: "#" },
    { id: 2, name: "Neural Genesis Engineer (NGE)", description: "Build and train advanced deep learning architectures", image: P2, link: "#" },
    // { id: 3, name: "The Machine Mind Program (MMP)", description: "Applied AI & ML from concept to implementation", image: P3, link: "#" },
    { id: 4, name: "NeuroNet Fusion Specialist (NNF)", description: "Integrate computer vision, NLP, and reinforcement learning", image: P4, link: "#" },
    // { id: 5, name: "Ethical AI Vanguard (EAIV)", description: "Learn responsible AI design and governance principles", image: P5, link: "#" },
    // { id: 6, name: "Adaptive Intelligence Developer (AID)", description: "Create adaptive algorithms that learn and evolve", image: P6, link: "#" },
    { id: 7, name: "Hybrid Cognitive Systems Engineer (HCSE)", description: "Combine symbolic AI with neural computing for hybrid intelligence", image: P7, link: "#" },
    // { id: 8, name: "Algorithmic Intelligence Analyst (AIA)", description: "Analyze and optimize machine learning workflows", image: P8, link: "#" },
    { id: 9, name: "Reinforcement Learning Practitioner (RLP)", description: "Learn model-free and policy-gradient RL methods", image: P9, link: "#" },
    // { id: 10, name: "Applied Generative Intelligence (AGI)", description: "Early-stage work on text, image, and data generation", image: P10, link: "#" },
    // { id: 11, name: "AI Systems Integration Professional (ASIP)", description: "Integrate AI modules with enterprise IT and data infrastructures", image: P1, link: "#" },
    // { id: 12, name: "Cognitive Optimization Specialist (COS)", description: "Design self-learning systems that continuously optimize performance", image: P2, link: "#" },
  ],
  4: [
    { id: 1, name: "Strategic AI Deployment Leader (SAIDL)", description: "Manage enterprise-scale AI initiatives and teams", image: P1, link: "#" },
    { id: 2, name: "AI Systems Architect (AISA)", description: "Design scalable, cloud-integrated AI infrastructures", image: P2, link: "#" },
    { id: 3, name: "Enterprise ML Ops Manager (EMOM)", description: "Oversee lifecycle automation for AI models in production", image: P3, link: "#" },
    // { id: 4, name: "Cognitive Governance Director (CGD)", description: "Implement AI compliance and governance frameworks", image: P4, link: "#" },
    // { id: 5, name: "AI Policy Integration Strategist (APIS)", description: "Bridge policy, ethics, and technology in AI deployment", image: P5, link: "#" },
    // { id: 6, name: "AI Innovation Catalyst (AIC)", description: "Lead innovation cells within organizations", image: P6, link: "#" },
    // { id: 7, name: "AI-Driven Decision Architect (ADDA)", description: "Integrate AI for high-stakes business decision environments", image: P7, link: "#" },
    // { id: 8, name: "Model Governance Specialist (MGS)", description: "Ensure model auditability, explainability, and compliance", image: P8, link: "#" },
    // { id: 9, name: "Intelligent Systems Manager (ISM)", description: "Oversee adaptive AI ecosystem implementation", image: P9, link: "#" },
    { id: 10, name: "Responsible AI Executive Program (RAIEP)", description: "Strategic management for ethical and sustainable AI", image: P10, link: "#" },
    // { id: 11, name: "Cognitive Infrastructure Leader (CIL)", description: "Architect data pipelines, compute clusters, and AI orchestration systems", image: P1, link: "#" },
    { id: 12, name: "AI Transformation Consultant (AITC)", description: "Advise governments and enterprises on AI readiness and transformation roadmaps", image: P2, link: "#" },
  ],
  5: [
    { id: 1, name: "Frontier AI Researcher (FAIR)", description: "Explore novel architectures and next-gen learning paradigms", image: P1, link: "#" },
    // { id: 2, name: "Quantum Neural Architect (QNA)", description: "Design AI models that interface with quantum computing", image: P2, link: "#" },
    // { id: 3, name: "NeuroCognitive Model Innovator (NCMI)", description: "Build brain-inspired hybrid neural models", image: P3, link: "#" },
     { id: 4, name: "Explainable AI Scientist (XAIS)", description: "Develop transparent and interpretable AI models", image: P4, link: "#" },
    // { id: 5, name: "Autonomous System Researcher (ASR)", description: "Study AI for self-evolving systems and cognition", image: P5, link: "#" },
    { id: 6, name: "Meta-Learning Engineer (MLE)", description: "Build systems that learn how to learn", image: P6, link: "#" },
    { id: 7, name: "Human–AI Synergy Designer (HASD)", description: "Design interfaces for human-in-the-loop intelligence", image: P7, link: "#" },
    // { id: 8, name: "AI Sustainability Research Fellow (AISRF)", description: "Research sustainable AI for climate and energy optimization", image: P8, link: "#" },
    { id: 9, name: "Multi-Agent Intelligence Engineer (MAIE)", description: "Develop coordinated autonomous AI systems", image: P9, link: "#" },
    // { id: 10, name: "Cognitive Frontier Scientist (CFS)", description: "Drive global research at the intersection of neuroscience and AI", image: P10, link: "#" },
    // { id: 11, name: "Neural Innovation Fellow (NIF)", description: "Create transformative neural architectures for emerging AI challenges", image: P1, link: "#" },
    // { id: 12, name: "AI Singularity Theorist (AIST)", description: "Explore theoretical frontiers of consciousness, sentience, and post-human intelligence", image: P2, link: "#" },
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
        Core Artificial Intelligence & Machine Learning
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center w-full">
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

                  <Link
                    to={c.link}
                    
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-[#572eda] to-[#6b48ff] text-white px-6 py-2 rounded-full font-semibold shadow hover:shadow-lg transition-all"
                  >
                    Learn More →
                  </Link>
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
