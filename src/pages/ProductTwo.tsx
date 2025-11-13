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
  { id: 1, name: "FOUNDATION", image: C1, description: "Learn the basics of AI." },
  { id: 2, name: "PRACTITIONER", image: C2, description: "Deep dive into AI."},
  { id: 3, name: "PROFESSIONAL", image: C3, description: "Advanced AI strategies." },
  { id: 4, name: "EXPERT", image: C4, description: "Expert-level AI techniques." },
  { id: 5, name: "VISIONARY", image: C5, description: "Innovative AI models." },
];

// --- 🔹 Define 12 Courses per Product ---
const productCourses: Record<number, Course[]> = {
  1: [ { id: 1, name: "Robotics Fundamentals with AI (RFAI)", description: "Introduction to robotics principles and AI-based control systems.", image: P1, link: "#" }, 
    // { id: 2, name: "Mechatronics Made Smart (MMS)", description: "Basics of integrating mechanics, electronics, and computation.", image: P2, link: "#" }, 
    { id: 3, name: "Introduction to Automation Intelligence (IAI)", description: "Learn how AI drives industrial and digital automation.", image: P3, link: "#" }, 
    { id: 4, name: "AI for Sensors & Systems (AISS)", description: "Understand how AI processes signals from sensors and IoT devices.", image: P4, link: "#" }, 
    { id: 5, name: "Coding for Robotics (CFR)", description: "Python and ROS (Robot Operating System) fundamentals.", image: P5, link: "#" }, 
    // { id: 6, name: "Intelligent Machines 101 (IM101)", description: "Basics of autonomous and adaptive systems.", image: P6, link: "#" }, 
    // { id: 7, name: "Industrial AI Concepts (IAIC)", description: "Explore AI’s role in smart factories and predictive maintenance.", image: P7, link: "#" }, 
    // { id: 8, name: "Embedded Systems with AI (ESAI)", description: "Learn how AI integrates into microcontrollers and devices.", image: P8, link: "#" }, 
    // { id: 9, name: "Human–Machine Interaction Basics (HMI-B)", description: "Explore the interface between humans and intelligent machines.", image: P9, link: "#" }, 
    // { id: 10, name: "AI in Everyday Automation (AIEA)", description: "Case studies of AI-based automation in industries and homes.", image: P10, link: "#" }, 
    // { id: 11, name: "Smart Mobility Starter (SMS)", description: "Learn how AI powers smart vehicles, drones, and navigation systems.", image: P9, link: "#" }, 
    { id: 12, name: "Digital Twin Foundations (DTF)", description: "Discover the basics of creating digital replicas of real-world machines.", image: P10, link: "#" }, 
   ],

  2: [
    { id: 1, name: "Autonomous Robotics Starter (ARS)", description: "Learn motion, mapping, and navigation with AI.", image: P3, link: "#" },
    // { id: 2, name: "Applied Mechatronic Intelligence (AMI)", description: "Merge hardware control and AI for adaptive mechatronics.", image: P4, link: "#" },
    // { id: 3, name: "Industrial Automation Developer (IAD)", description: "Design PLC and SCADA systems with AI analytics.", image: P5, link: "#" },
    { id: 4, name: "AI-Driven IoT Systems (ADIOT)", description: "Integrate IoT and edge AI for predictive maintenance.", image: P6, link: "#" },
    // { id: 5, name: "Cognitive Control Systems (CCS)", description: "Program robots to perceive, decide, and act intelligently.", image: P7, link: "#" },
    { id: 6, name: "Computer Vision in Robotics (CVR)", description: "Apply image processing and recognition in robot perception.", image: P8, link: "#" },
    // { id: 7, name: "Robotics Simulation with AI (RSAI)", description: "Use simulation platforms to model intelligent robotic behavior.", image: P9, link: "#" },
    // { id: 8, name: "Edge Computing Essentials (ECE)", description: "Deploy AI at the edge for real-time data processing.", image: P10, link: "#" },
    { id: 9, name: "Intelligent Process Automation (IPA)", description: "Automate workflows using RPA and AI bots.", image: P1, link: "#" },
    // { id: 10, name: "Smart Factory Engineer (SFE)", description: "Understand cyber-physical production systems and Industry 4.0.", image: P2, link: "#" },
    // { id: 11, name: "AI for Motion & Dynamics (AIMD)", description: "Learn AI-driven motion planning, kinematics, and control.", image: P3, link: "#" },
    { id: 12, name: "Collaborative Robots Essentials (CoRE)", description: "Understand and develop safe, intelligent cobots for shared workspaces.", image: P4, link: "#" },
  ],

  // You can add similar 12-course arrays for 3, 4, 5 below...
  3: [
    { id: 1, name: "Autonomix: The Future Robotics Engineer (ARE)", description: "Build intelligent autonomous robots and drones.", image: P1, link: "#" },
    { id: 2, name: "RoboCognition Specialist (RCS)", description: "Implement perception, motion, and control in robotics.", image: P2, link: "#" },
    { id: 3, name: "Cognitive Automation Architect (CAA)", description: "Design intelligent process automation and RPA systems.", image: P3, link: "#" },
    { id: 4, name: "Drone Intelligence Developer (DID)", description: "Build autonomous drone systems with AI-based navigation.", image: P7, link: "#" },
    { id: 5, name: "Vision Robotics Engineer (VRE)", description: "Specialize in 3D perception, object detection, and scene understanding for robotics.", image: P5, link: "#" },
],
  4: [
    { id: 1, name: "AI Robotics Program Director (ARPD)", description: "Lead and manage robotic intelligence programs at scale.", image: P1, link: "#" },
    { id: 2, name: "Enterprise Robotics Architect (ERA)", description: "Create scalable AI robotics architectures for production.", image: P2, link: "#" },
    { id: 3, name: "Digital Twin Intelligence (DTI)", description: "Model and optimize real-world systems using AI digital twins.", image: P3, link: "#" },
    { id: 4, name: "Intelligent Systems Transformation Leader (ISTL)", description: "Drive Industry 4.0 and AI-driven transformation projects.", image: P4, link: "#" },
    { id: 5, name: "Robotics-as-a-Service Innovator (RaaSI)", description: "Build AI-powered service robotics business ecosystems.", image: P5, link: "#" },
 ],
  5: [
    { id: 1, name: "Cognitive Robotics Researcher (CRR)", description: "Innovate in human-robot collaboration and adaptive cognition.", image: P1, link: "#" },
    { id: 2, name: "Quantum Robotics Research Scientist (QRRS)", description: "Explore quantum computing for super-intelligent robotics.", image: P2, link: "#" },
    { id: 3, name: "Swarm Intelligence Innovator (SII)", description: "Study multi-robot cooperative systems and collective AI.", image: P3, link: "#" },
    { id: 4, name: "NeuroRobotics Scientist (NRS)", description: "Develop bio-inspired robotic control and motor intelligence.", image: P9, link: "#" },
    { id: 5, name: "Sentient Robotics Visionary (SRV)", description: "Shape the frontier of robotics where intelligence meets empathy.", image: P5, link: "#" },
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
