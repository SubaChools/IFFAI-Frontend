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
  { id: 1, name: "FOUNDATION", image: C1, description: "Build awareness of AI’s role in agriculture, sustainability, and agri-data systems" },
  { id: 2, name: "PRACTITIONER", image: C2, description: "Apply AI and data-driven tools to solve key agricultural challenges"},
  { id: 3, name: "PROFESSIONAL", image: C3, description: "Build advanced, scalable AI systems for farm-to-fork optimization" },
  { id: 4, name: "EXPERT", image: C4, description: "Lead agricultural transformation through AI innovation and sustainable strategy" },
  { id: 5, name: "VISIONARY", image: C5, description: "Create scalable AI frameworks addressing hunger and sustainability challenges" },
];

// --- 🔹 Define 12 Courses per Product ---
const productCourses: Record<number, Course[]> = {
  1: [ { id: 1, name: "Introduction to AI in Agriculture", description: "Understand how AI transforms farming, from soil to market", image: P1, link: "#" }, 
    { id: 2, name: "Digital Agriculture Fundamentals", description: "Learn how IoT, drones, and sensors collect and use farm data", image: P3, link: "#" }, 
    { id: 3, name: "Agricultural Data Analytics", description: "Explore the basics of data collection and interpretation for crop insights", image: P4, link: "#" }, 
    { id: 4, name: "Precision Farming Concepts", description: "Introduction to precision irrigation, nutrient management, and yield prediction", image: P5, link: "#" }, 
    { id: 5, name: "Smart Farm Technologies", description: "Study modern digital tools enabling automation and sustainability in agriculture", image: P10, link: "#" }, 
   ],

  2: [
    { id: 1, name: "Crop Health Monitoring with AI", description: "Use image recognition and deep learning to detect diseases and pests", image: P3, link: "#" },
    { id: 2, name: "Smart Irrigation Systems", description: "Develop AI models for water optimization and resource efficiency", image: P6, link: "#" },
    { id: 3, name: "Soil Intelligence and Fertility", description: "Mapping	Apply machine learning to assess soil composition and fertility patterns", image: P8, link: "#" },
    { id: 4, name: "Weather Prediction and Climate Analytics", description: "Use AI for forecasting and adapting to climate impacts", image: P1, link: "#" },
    { id: 5, name: "Agri-Robotics and Automation", description: "Explore drones, robotic harvesters, and autonomous tractors", image: P4, link: "#" },
  ],

  // You can add similar 12-course arrays for 3, 4, 5 below...
  3: [
    { id: 1, name: "AI-Driven Crop Yield Prediction", description: "Build predictive models for crop yield and performance analytics", image: P1, link: "#" },
    { id: 2, name: "Agricultural Supply Chain Intelligence", description: "Apply AI to logistics, demand forecasting, and market analysis", image: P2, link: "#" },
    { id: 3, name: "Smart Pest and Weed Detection Systems", description: "Design AI-based surveillance and control systems", image: P3, link: "#" },
    { id: 4, name: "Livestock Monitoring and Management", description: "Use computer vision and sensors for animal health and productivity tracking", image: P7, link: "#" },
    { id: 5, name: "Climate-Smart Agriculture Modeling", description: "Integrate AI with sustainability and carbon management practices", image: P5, link: "#" },
],
  4: [
    { id: 1, name: "Agricultural AI Strategy and Policy", description: "Develop frameworks for digital transformation in agriculture", image: P1, link: "#" },
    { id: 2, name: "Enterprise AgriTech Deployment", description: "Implement AI systems at farm, cooperative, and enterprise scales", image: P2, link: "#" },
    { id: 3, name: "Sustainable Agri-Intelligence Leadership", description: "Drive responsible and sustainable AI adoption in food systems", image: P3, link: "#" },
    { id: 4, name: "Advanced Agri Data Governance", description: "Establish data ethics, interoperability, and sharing standards", image: P4, link: "#" },
    { id: 5, name: "AgriTech Innovation Management", description: "Lead innovation programs in precision and digital agriculture", image: P5, link: "#" },
 ],
  5: [
    { id: 1, name: "Frontier Research in Agri-AI", description: "Explore next-generation AI models for global food security", image: P1, link: "#" },
    { id: 2, name: "Autonomous Farm Systems Design", description: "Research fully automated farming ecosystems using AI and robotics", image: P2, link: "#" },
    { id: 3, name: "Predictive Agri-Climate Modeling", description: "Build AI models for long-term crop and climate forecasting", image: P3, link: "#" },
    { id: 4, name: "Bioinformatics for Crop Genomics", description: "Apply AI to genetic analysis and crop improvement", image: P9, link: "#" },
    { id: 5, name: "AI for Global Food Systems Innovation", description: "Create scalable AI frameworks addressing hunger and sustainability challenges", image: P5, link: "#" },
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
        AI in Agriculture
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
