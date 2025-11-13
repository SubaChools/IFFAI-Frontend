"use client";

import React, { useState} from "react";
import { motion } from 'framer-motion';
import { Cpu, Bot, CircuitBoard, Zap, CheckCircle2, Brain, Users, Sparkles,  Clock, Monitor, DollarSign, Calendar, Star  } from 'lucide-react';
import type { Variants } from "framer-motion";

 const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as any, // ✅ Fix: explicitly cast
    },
  },
  hover: {
    scale: 1.05,
    y: -6,
    boxShadow: "0px 8px 24px rgba(0,0,0,0.12)",
    transition: { duration: 0.3 },
  },
};

const NNUCourseLandingPage = () => {

    const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    translateX: 0,
    translateY: 0,
  });

  // Handle mouse movement for 3D parallax tilt
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
  const { innerWidth, innerHeight } = window;
  const x = event.clientX - innerWidth / 2;
  const y = event.clientY - innerHeight / 2;

  const rotateX = (y / innerHeight) * 15; // up-down tilt
  const rotateY = (x / innerWidth) * -15; // left-right tilt
  const translateX = (x / innerWidth) * 20;
  const translateY = (y / innerHeight) * 20;

  setTransform({ rotateX, rotateY, translateX, translateY });
};

  const handleMouseLeave = () => {
    // Reset to normal position when cursor leaves
    setTransform({ rotateX: 0, rotateY: 0, translateX: 0, translateY: 0 });
  };

   //Feature Section
  const features = [
    {
      icon: "src/assets/images/choose1.svg",
      title: "Decode the Mind Behind the Machine",
      description: "Understand neurons, layers, activation functions, and how AI recognizes patterns."
    },
    {
      icon: "src/assets/images/choose2.svg",
      title: "Build Your First Neural Network",
      description: "Hands-on Python coding to train your first feedforward neural model."
    },
    {
      icon: "src/assets/images/choose4.svg",
      title: "Explore Cutting-Edge Architectures ",
      description: "CNNs, RNNs, and Autoencoders powering real-world AI applications."
    },
    {
      icon: "src/assets/images/choose3.svg",
      title: "Master Learning Techniques",
      description: "Explore backpropagation and optimization to make smarter networks."
    },
    {
      icon: "src/assets/images/choose1.svg",
      title: "Learn AI with Ethics",
      description: "Bias, transparency, and responsible AI practices for building trustworthy systems."
    },
    {
      icon: "src/assets/images/choose2.svg",
      title: "Portfolio-Ready Showcase ",
      description: "Complete a mini-capstone project to present your neural intelligence skills."
    }
  ]

  // const additionalFeatures = [
  //   {
  //     icon: "src/assets/images/choose2.svg",
  //     title: "Making Smarter Networks",
  //     description: "Explore the ethics of learning machines. Bias, transparency, and responsible AI — learn to build with empathy and accountability."
  //   },
  //   {
  //     icon: "src/assets/images/choose3.svg",
  //     title: "Your Neural Showcase",
  //     description: "Conclude with a Mini Capstone Project — design, train, and present your own neural model. Leave with a portfolio-ready proof of skill."
  //   },
  //   {
  //     icon: "src/assets/images/choose4.svg",
  //     title: "Architectures That Changed the World",
  //     description: "Step into the world of CNNs, RNNs, and Autoencoders — the models that power image recognition, chatbots, and self-driving cars."
  //   }
  // ]

//WHY NNU
const nnufeatures = [
    'Learn how machines think, not just how to code.',
    'Gain hands-on experience with real neural systems.',
    'Build a portfolio project that stands out globally.',
    'Mentorship from IFFAI’s global AI educators and innovators.',
    'Join a worldwide community of future AI leaders.',
  ]

//WHO JOIN
const points = [
    "Students, beginners, or professionals exploring a shift into AI.",
    "Curious minds who love to understand how things think.",
    "Coders familiar with basic Python and ready to explore the next frontier.",
    "No advanced math required — just curiosity, logic, and a spark of ambition.",
  ]

  //Certificate

// interface Certificate {
//   img: string;
//   title: string;
//   desc: string;
// }

// const certificate: Certificate = {
//   img: "src/assets/images/service1.jpg", // your certificate image
//   title: "AI Professional Certification",
//   desc: "This certification validates your applied expertise in Artificial Intelligence and Neural Systems.",
// };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
   const [isPopupOpen, setIsPopupOpen] = useState(false)

  const certificate = {
    img: '/src/assets/certificate/1.jpg',
    title: 'IFFAI Certified AI Professional',
    desc: 'Issued by International Federation for Artificial Intelligence • 2025'
  }


// Pricing

 const items = [
    {
      label: "Duration",
      value: "6 Weeks (4–6 hours/week)",
      icon: Clock,
    },
    {
      label: "Mode",
      value: "100% Online – Self-paced + Live Mentor Sessions",
      icon: Monitor,
    },
    {
      label: "Fee",
      value: "USD 499 (Early Bird: USD 399)",
      icon: DollarSign,
    },
    {
      label: "Cohort Start Date",
      value: "15th of Every Month",
      icon: Calendar,
    },
    {
      label: "Extras",
      value: "Access to coding labs, community forum, mentor Q&As, downloadable resources",
      icon: Star,
    },
  ]

  const colors = ["green", "blue", "red"] // sequence

  //Modules
  const modules = [
    {
      title: 'The Digital Brain',
      description: 'Understanding Neurons, Layers & Learning',
      img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    },
    {
      title: 'Python Meets Intelligence',
      description: 'Setting Up Your Neural Playground',
      img: 'src/assets/images/project2.jpg',
    },
    {
      title: 'The Hidden Genius',
      description: 'Layers That Learn What You Don’t See',
      img: 'src/assets/images/project3.jpg',
    },
    {
      title: 'Taming the Chaos',
      description: 'Optimization & Regularization Secrets',
      img: 'src/assets/images/project1.jpg',
    },
    {
      title: 'Neural Realms',
      description: 'Vision, Speech & Sequential Learning Explained',
      img: 'src/assets/images/project2.jpg',
    },
    {
      title: 'Ethics of Intelligence',
      description: 'Building AI with Heart and Integrity',
      img: 'src/assets/images/project3.jpg',
    },
  ]

  return (
    <div >
      
       {/* 🧠 HERO / BANNER SECTION */}
      <section
        className="relative flex items-center justify-center min-h-[70vh] pt-[80px] text-center overflow-hidden"
        >
        {/* 🔹 Background Video */}
        <video
            loop
            muted
            autoPlay
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source src="src/assets/images/banner-video.mp4" type="video/mp4" />
        </video>

        {/* 🔹 Overlay (optional for better contrast) */}
        <div className="absolute inset-0 bg-black/50 z-0" />

        {/* 🔹 Foreground Content */}
        <div
            className="relative z-10 w-full max-w-7xl px-6 md:px-12 text-white ranade-font-style"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ cursor: "default", perspective: "1000px" }}
        >
            <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div className="flex flex-col justify-center text-white">
                <h2 className="text-4xl font-bold ">
                Neural Networks Unlocked (NNU™)
                </h2>
                <h2 className="mt-3 text-2xl text-blue-100 text-green-100">
                Where Curiosity Meets Cognition
                </h2>
                <h5 className="text-lg mt-4 font-bold text-blue-100 ">
                Core Artificial Intelligence & Machine Learning
                </h5>
                
                <div className="mt-6 ">
                {/* <h6 className="default-btn inline-block bg-green-700 text-white px-4 py-2 rounded-md shadow-lg">
                    Level 1 – Foundation
                </h6> */}
                <motion.a
                  href="/product"
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-[#572eda] transition-all duration-300 shadow-md hover:shadow-xl"
                >
                  Level 1 – Foundation
                  <i className="ri-arrow-right-up-line ml-2"></i>
                </motion.a> 
                </div>
            </div>

            {/* Right Image with 3D movement */}
            <div className="flex justify-center items-center">
                <div
                className="ai-agency-banner-image"
                style={{
                    transform: `
                    rotateX(${transform.rotateX}deg)
                    rotateY(${transform.rotateY}deg)
                    translate(${transform.translateX}px, ${transform.translateY}px)
                    `,
                    transformStyle: "preserve-3d",
                    transition: "transform 0.15s ease-out",
                }}
                >
                <img
                    src="src/assets/images/banner.png"
                    alt="Neural Networks Banner"
                    className="w-full max-w-md drop-shadow-[0_8px_15px_rgba(0,0,0,0.4)]"
                    style={{ transform: "translateZ(30px)" }}
                />
                </div>
            </div>
            </div>
        </div>
        </section>



      {/* 🧩 ABOUT SECTION */}
     <section className="relative bg-white text-gray-800 py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
        {/* Left Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          {/* Main Static Image */}
          <motion.img
            src="src/assets/images/df.png"  // ✅ your own image here
            alt="AI Robotics"
            className="rounded-2xl  w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />

          {/* Floating icons (you can keep or remove these) */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
            className="absolute top-10 left-12 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md"
          >
            <Bot className="text-blue-500 w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-10 right-16 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md"
          >
            <Cpu className="text-cyan-500 w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-1/2 -left-8 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md"
          >
            <CircuitBoard className="text-purple-500 w-8 h-8" />
          </motion.div>

          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 2 }}
            className="absolute bottom-1/4 -right-6 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-md"
          >
            <Zap className="text-yellow-500 w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Right Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <div>
            <h2 className="flex items-center text-green-700 font-bold text-lg mb-2">
              {/* <img src="src/assets/images/line.svg" alt="line" className="w-6 mr-2" /> */}
              Course Overview
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Neural Networks Unlocked (NNU™)
            </h2>
          </div>

          <p className="text-gray-700 text-lg leading-relaxed">
            Step inside the digital brain. Neural Networks Unlocked (NNU™) is not just a course — it's your first expedition into how machines think, learn, and evolve.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            From perceptrons to deep networks, you'll explore how artificial neurons mimic human intelligence. Guided through visual demos, hands-on labs, and mini-projects, you'll uncover the "why" behind AI's magic — and learn to build your very first neural model.
          </p>

          {/* <motion.a
            href="/about"
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center px-6 py-3 rounded-full bg-green-700 text-white font-semibold hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-xl"
          >
            Learn More About Us
            <i className="ri-arrow-right-up-line ml-2"></i>
          </motion.a> */}
        </motion.div>
      </div>
    </section>

      {/* 💡 FEATURES SECTION */}
    
 <section className="py-10 bg-white">
  <div className="container mx-auto px-6">
    {/* Section title */}
    <div className="text-center mb-12">
      <div className="flex justify-center items-center gap-2 mb-3">
        {/* <img src="src/assets/images/line.svg" alt="line" className="h-4 w-auto" /> */}
        <h2 className="flex items-center text-green-700 font-bold text-lg mb-2">FEATURES</h2>
      </div>
      <h2 className="text-3xl font-semibold leading-snug text-gray-800">
         What You’ll Learn
      </h2>
    </div>

    {/* Grid layout: 2 rows × 3 columns */}
     <motion.div
      className="grid grid-cols-1 sm:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover="hover"
          className="flex flex-col items-center text-center bg-[#cbfbf1] rounded-xl shadow-sm p-6 transition-all"
        >
          <div className="mb-4">
            <img
              src={feature.icon}
              alt={feature.title}
              className="h-14 w-14 object-contain mx-auto"
            />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-800">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

{/* Why Choose NNU */}
<section className="mt-10 relative w-full overflow-hidden">
      
      {/* ✅ Background Image Only */}
      <div className="absolute inset-0">
        <img
          src="src/assets/images/df.png"
          alt="AI Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-8 md:px-6 lg:px-10 py-24 z-20">
        
        {/* Left - Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left text-gray-800"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Why Choose NNU™
            {/* Why Choose <span className="text-black-600 underline decoration-4">NNU™</span> */}
          </h1>

          <p className=" rounded text-green-800 mb-8 text-lg bg-white">
           <span className="mt-2 mb-2">Discover what makes our Neural Networks Unlocked (NNU™) program your gateway to mastering true machine intelligence.</span> 
          </p>

          <div className="flex flex-col gap-6 mb-20">
            {nnufeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0 }}
                whileHover={{ scale: 1.3 }}
                className="flex items-center  backdrop-blur-md bg-gray-100 opacity-60 shadow-md rounded-lg px-10 py-3 hover:shadow-xl transition-all"
              >
                <CheckCircle2 className="text-green-700 w-7 h-7 mr-3 flex-shrink-0" />
                <p className="text-gray-900 font-lg">{feature}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right - Animation Image */}
        {/* <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex justify-center items-center"
        >
          <motion.img
            src="src/assets/images/ainew.png"
            alt="AI Illustration"
            className="w-full max-w-lg "
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />
        </motion.div> */}
      </div>

      {/* Curved Divider */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,288L48,261.3C96,235,192,181,288,160C384,139,480,149,576,165.3C672,181,768,203,864,197.3C960,192,1056,160,1152,160C1248,160,1344,192,1392,208L1440,224L1440,320L0,320Z"
        ></path>
      </svg>
    </section>


      {/* 🤖 WHO SHOULD JOIN SECTION */}
      <section className=" relative min-h-screen overflow-hidden bg-gradient-to-b from-[#f7fbff] via-[#e8f8f1] to-[#f0fff8] flex items-center justify-center py-24 px-6 md:px-16 lg:px-24">
      {/* Background Robotics Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="src/assets/images/dk.jpg"
          alt="AI Robotics Background"
          className="w-full h-full object-cover opacity-100"
        />
        <div className="absolute inset-20 bg-white-to-r from-[#0f172a]/30 via-[#14532d]/40 to-transparent" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center max-w-7xl">
        {/* Left: AI Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-center items-center"
        >
          <motion.img
            src="src/assets/images/dh.png"
            alt="AI Robot"
            className="w-full h-fullmax-w-lg rounded-2xl "
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          />

          {/* Floating glowing icons */}
          <motion.div
            animate={{ y: [0, -30, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
            className="absolute top-5 left-20 bg-white/70 backdrop-blur-lg p-3 rounded-full shadow-md"
          >
            <Brain className="text-green-600 w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            className="absolute bottom-12 right-14 bg-white/900 backdrop-blur-md p-3 rounded-full shadow-md"
          >
            <Cpu className="text-blue-600 w-8 h-8" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
            className="absolute bottom-24 left-14 bg-white/80 backdrop-blur-md p-3 rounded-full shadow-md"
          >
            <Users className="text-emerald-600 w-8 h-8" />
          </motion.div>
        </motion.div>

        {/* Right: Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-900 "
        >
          <h2 className="text-green-600 text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            Who Should Join <br></br>
            <span className="text-blue-100 ">
              Is This Your Neural Moment?
            </span>
          </h2>

          <div className="space-y-10 mb-10">
            {points.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0, duration: 0.1 }}
                 whileHover={{ scale: 1.2 }}
                className="flex items-start gap-3 bg-white/90 backdrop-blur-md shadow-md p-4 rounded-xl border border-green-100 hover:shadow-lg hover:scale-[1.02] transition-all"
              >
                <Sparkles className="text-green-500 w-6 h-6 mt-1" />
                <p className="text-white-700 font-large">{text}</p>
              </motion.div>
            ))}
          </div>

          
        </motion.div>
      </div>

      {/* Floating light orbs for atmosphere */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </section>


 {/* 💰 PRICING SECTION */}
       <section className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden">

      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="src/assets/images/aigif.mp4" type="video/mp4" />
      </video>

      {/* ✅ Overlay */}
      <div className="absolute inset-0"></div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 px-8 py-20 text-left">

        {/* LEFT SIDE CONTENT */}
        <div className="flex flex-col ">
          <h2 className="flex items-center text-green-700 font-bold text-lg mb-5 mt-15">
            PRICING DURATION 
          </h2>

          <h1 className="text-5xl font-bold text-[#572eda] leading-tight mb-10">
            An Investment in Intelligent Learning
          </h1>

          <p className="text-black text-lg max-w-md mb-15">
            Learn at your own pace, with structured mentor guidance and real-world projects.
          </p>

          <button className="bg-gradient-to-r from-green-600 via-blue-600 to-red-600 hover:opacity-90 text-white font-semibold py-4 px-10 rounded-xl text-lg transition-all">
            Enroll Now →
          </button>
        </div>

        {/* RIGHT SIDE — TIMELINE */}
        <div>
          <div className="space-y-10 relative">

            {/* Line */}
            <div className="absolute top-0 left-6 w-[2px] h-full bg-gray-300 opacity-70"></div>

            {items.map((item, index) => {
              const Icon = item.icon
              const color = colors[index % colors.length] // cycle colors

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4 }}
                  className="relative flex gap-6"
                >

                  {/* ✅ Number Circle */}
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-${color}-500 text-${color}-500 font-bold bg-white z-10`}
                    >
                      {index + 1}
                    </div>
                  </div>

                  {/* ✅ Content Box */}
                  <div className="bg-white/90 rounded-xl p-6 shadow-sm border border-gray-200 w-full">
                    <div className="flex items-center gap-2">
                      <Icon className={`w-5 h-5 text-${color}-600`} />

                      <span
                        className={`text-sm font-semibold px-3 py-1 rounded-md bg-${color}-100 text-${color}-700`}
                      >
                        {item.label}
                      </span>
                    </div>

                    <h3 className="text-xl font-semibold mt-3 text-gray-800">{item.value}</h3>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
      


{/* ✅ TRAINING OPTIONS SECTION — NO AUTO SCROLL */}
<section className="py-20 bg-[#f8fbff]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Title */}
    <h2 className="text-4xl font-bold text-center text-gray-800 mb-14">
      Choose Your Learning Format
    </h2>

    {/* ✅ Static 3-card grid (NO SCROLL) */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >

      {/* ✅ Card 1 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 relative"
      >
        <h3 className="text-green-600 text-2xl font-bold mb-5">Online Bootcamp</h3>

        {/* <span className="absolute top-6 right-6 bg-[#572eda] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Preferred
        </span> */}

        <ul className="space-y-4 text-gray-700 text-base">
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Flexi Pass Enabled: Reschedule in first 90 days.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Live online classroom training by top instructors.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> One-year access to curated eLearning content.
          </li>
        </ul>
      </motion.div>

      {/* ✅ Card 2 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 relative"
      >
        <h3 className="text-green-600 text-2xl font-bold mb-5">Classroom Training</h3>

        {/* <span className="absolute top-6 right-6 bg-[#572eda] text-white px-4 py-1 rounded-full text-sm font-semibold">
          Preferred
        </span> */}

        <ul className="space-y-4 text-gray-700 text-base">
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Tailored training for your team.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> One-year access to curated eLearning content.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Interactive and hands-on learning.
          </li>
        </ul>
      </motion.div>

      {/* ✅ Card 3 */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white border rounded-2xl p-8 shadow-xl hover:shadow-2xl transition duration-300 relative"
      >
        <h3 className="text-green-600 text-2xl font-bold mb-5">Corporate Training</h3>

        <ul className="space-y-4 text-gray-700 text-base">
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Custom learning model for your team.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Flexible pricing as per requirements.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> Simple LMS + dashboard insights.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> 24/7 Support.
          </li>
          <li className="flex gap-2 items-start">
            <CheckCircle2 className="text-[#572eda] w-5 h-5" /> One-year access to curated eLearning content.
          </li>
        </ul>
      </motion.div>

    </motion.div>
  </div>
</section>

 {/* 🎓 CERTIFICATION SECTION */}
     
    <section
      
      className="relative flex flex-wrap items-center mt-20 justify-between py-24 px-[8%] overflow-hidden text-white font-poppins bg-[#161b2cff]"
    >
      {/* Background Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-15 brightness-200"
        style={{ backgroundImage: "url('src/assets/images/service1.jpg')" }}
      />

      {/* Text Content */}
      <div className="relative z-10 flex-1 min-w-[320px] md:pr-10 mb-10 md:mb-0">
        <h2 className="text-[2.8rem] mb-5 text-[#cbfbf1] drop-shadow-[0_0_12px_rgba(0,255,255,0.5)]">
          Earn Your IFFAI Certification
        </h2>
        <p className="text-[1.15rem] leading-[1.8] text-[#cce7f7] mb-6">
          Showcase your mastery in Artificial Intelligence and Neural Systems.
          This globally recognized certification verifies your applied knowledge
          and marks your official entry into the AI professional ecosystem.
        </p>

        <div className="flex flex-col gap-3 text-[1.1rem] text-[#99ffff]">
          <div>
            <i className="fa-solid fa-robot text-[#cbfbf1] mr-2"></i> Industry-recognized credential
          </div>
          <div>
            <i className="fa-solid fa-certificate text-[#cbfbf1] mr-2"></i> Verified by IFFAI Global
          </div>
          <div>
            <i className="fa-solid fa-brain text-[#cbfbf1] mr-2"></i> Neural Network Foundations
          </div>
        </div>
      </div>

      {/* Certificate Card */}
      <div
        className="relative z-10 flex justify-center items-center flex-1 min-w-[320px] cursor-pointer group"
        onClick={openPopup}
      >
        <img
          src={certificate.img}
          alt={certificate.title}
          className="w-full max-w-[500px] rounded-2xl shadow-[0_15px_40px_rgba(0,255,255,0.25)] transform transition-all duration-400 group-hover:scale-105 group-hover:shadow-[0_20px_60px_rgba(0,255,255,0.35)]"
        />
        <div className="absolute inset-0 rounded-2xl bg-[rgba(88, 50, 240, 0.17)] opacity-0 group-hover:opacity-100 flex justify-center items-center font-semibold text-[#00ffff] text-[1.1rem] transition-opacity duration-300">
          Click to View Certificate
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/70 z-[999] animate-fadeIn"
          onClick={closePopup}
        >
          <div
            className="relative bg-white/5 border border-[rgba(0,255,255,0.2)] backdrop-blur-2xl p-10 rounded-2xl text-center max-w-[650px] text-white shadow-[0_0_30px_rgba(0,255,255,0.25)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-6 text-[2rem] text-[#00f6ff] hover:scale-110 transition-transform"
              onClick={closePopup}
            >
              &times;
            </button>
            <div className="mb-6 animate-pulse">
              <img
                src={certificate.img}
                alt={certificate.title}
                className="w-full rounded-xl shadow-[0_0_25px_rgba(0,255,255,0.4)]"
              />
            </div>
            <h3 className="text-[1.6rem] mb-2 text-[#00f6ff]">{certificate.title}</h3>
            <p className="text-[#cce7f7] text-[1rem]">{certificate.desc}</p>
          </div>
        </div>
      )}
    </section>
 


     

      {/* ⚙️ FOOTER */}
      <section
      className="relative min-h-screen py-20 bg- bg-center overflow-hidden"
      style={{
      //  backgroundImage: "url('src/assets/images/project2.jpg')",

      }}
    >
      {/* Light overlay for clarity */}
      <div className="absolute inset-0 bg-white/25 backdrop-blur-[0px]"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <div className="text-center mb-15">
          <div className="flex justify-center items-center gap-2 mb-3">
            {/* <img src="src/assets/images/line.svg" alt="line" className="h-4 w-auto" /> */}
            <h2 className="flex items-center text-green-700 font-bold text-lg mb-2">COURSE MODULES</h2>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            <span className="text-[#572eda]">Your Roadmap to Neural Mastery</span> 
          </h2>
          
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {modules.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 5, y: 0 }}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group flex flex-col sm:flex-row bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300"
            >
              {/* Left Image */}
              <div className="sm:w-1/2 h-56 sm:h-auto overflow-hidden">
                <img
                  src={m.img}
                  alt={m.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* Right Content */}
              <div className="sm:w-1/2 flex flex-col justify-center p-8">
                <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-blue-900 transition-colors">
                  {m.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">{m.description}</p>
                {/* <a
                  href="#"
                  className="text-blue-900 text-sm font-medium hover:text-green-500 transition-all flex items-center"
                >
                  More Details ↗
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating light blobs for soft ambient AI glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl animate-pulse"></div>
    </section>

    {/* Join Now */}

    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8faff] via-[#eaf3ff] to-white py-10 text-center flex flex-col items-center justify-center">
      {/* Background Root AI Image */}
      <div className="absolute inset-0">
        <img
          src="src/assets/images/proect2.jpg"
          
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40"></div>
      </div>

      {/* Curved Shape at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[120px]"
        >
          <path
            d="M321.39,56.44C180.74,34.27,90.3,0,0,0V120H1200V0c-90.3,0-180.74,34.27-321.39,56.44C712.61,78.61,600,120,600,120S487.39,78.61,321.39,56.44Z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6"
        >
          Join the Movement <br></br>
          <span className="text-green-700 text-3xl">Unlock Neural Intelligence Today!</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 text-lg leading-relaxed mb-6"
        >
          The future belongs to those who can teach machines to think.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Step into that future with <span className="font-semibold text-[#572eda]">Neural Networks Unlocked (NNU™)</span> — 
          and become the mind behind tomorrow’s intelligent systems.
        </motion.p>

        {/* Button */}
        <motion.a
          href="/enroll"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="inline-block bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          🚀 Enroll Now | Begin Your Neural Journey with IFFAI
        </motion.a>
      </div>

      {/* Floating AI Glow Effects */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
        className="absolute top-10 left-10 w-64 h-64 bg-blue-300/30 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-300/30 rounded-full blur-3xl"
      ></motion.div>
    </section>
    </div>
  );
};

export default NNUCourseLandingPage;
