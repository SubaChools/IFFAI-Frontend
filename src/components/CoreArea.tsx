import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import learn from "../assets/images/AI Learn 3D.jpg";
import certi from "../assets/images/AI certi1.jpg";
import consult from "../assets/images/AI Consulting2.jpg";
import research from "../assets/images/AI research.jpg";
import hub from "../assets/images/AI research1.jpg";
import bgImg from "../assets/images/AI certi.jpg";

const slides = [
  {
    title: "Courses & Curriculum Development",
    content:
      "IFFAI provides AI education across all levels — from K–12 electives to AI-integrated university programs in engineering, medicine, business, and science. Professionals can upskill through specialized tracks in Generative AI, Cloud AI, Robotics, and more. Corporates benefit from tailored bootcamps and workforce-ready AI training solutions.",
    img: learn,
    bg: "bg-gradient-to-br from-green-50 to-teal-100",
  },
  {
    title: "Certifications",
    content:
      "IFFAI offers globally recognized AI certifications, from foundational to specialist levels, in partnership with ISU and IQF. Our tiered programs support professionals across sectors including Finance, Supply Chain, UI/UX, and Digital Marketing. Trusted by academia, industry, and government, these credentials are designed for high-impact careers in AI.",
    img: certi,
    bg: "bg-gradient-to-br from-rose-50 to-pink-100",
  },
  {
    title: "Consulting & Advisory",
    content:
      "IFFAI offers AI strategy consulting for enterprises, government agencies, and NGOs—driving digital transformation through ethical, compliant, and impactful AI integration. Our services include AI governance design, talent development, and advisory on policy and regulation. We align AI innovation with organizational goals and societal responsibility.",
    img: consult,
    bg: "bg-gradient-to-br from-yellow-50 to-orange-50",
  },
  {
    title: "Research & Innovation",
    content:
      "IFFAI leads applied AI research across domains like Generative AI, Smart Cities, Healthcare, and Climate, partnering with universities and R&D centers. We incubate AI innovations with industry and share knowledge through global conferences, white papers, and journals. Our mission: translating research into meaningful societal impact.",
    img: research,
    bg: "bg-gradient-to-br from-sky-50 to-indigo-100",
  },
  {
    title: "AI Hubs & Global Outreach",
    content:
      "IFFAI is building AI Hubs worldwide to foster collaboration between academia, government, startups, and corporates. Through live projects, hackathons, and internships, these hubs drive real-world innovation and skills development. Our inclusive AI literacy initiatives ensure no community is left behind in the AI revolution.",
    img: hub,
    bg: "bg-gradient-to-br from-stone-50 to-slate-100",
  },
];

const StackingBoxes = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  
  return (
    <div
  className="relative min-h-screen bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${bgImg})`,}}
>
  
  {/* 🌟 Fixed Header Overlay */}
  <header className=" top-0 left-0 w-full text-center  z-50 bg-transparent py-6">
  <h1 className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold mt-20 drop-shadow-lg ">
    Our Services
  </h1>
  <p className=" text-xl  mt-2 max-w-2xl mx-auto text-white">
    Explore our comprehensive AI education, certifications, research, and global initiatives
  </p>
</header>

{/* 📌 Stacking Boxes */}
<div
  ref={containerRef}
  className="-mt-[480px] relative"
  style={{ height: `${slides.length * 85}vh` }} // keep scrollable height
>
  <div className="sticky top-0 h-[85vh] flex items-center justify-left">
    {slides.map((slide, index) => {
      const start = index / slides.length;
      const end = (index + 1) / slides.length;
      const y = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);


      return (
        <motion.div
          key={index}
          style={{ y }}
          className={`absolute top-0 left-0 right-0 mx-auto max-w-5xl w-[90%] h-[65vh] rounded-2xl shadow-xl overflow-hidden ${slide.bg}`}
        >
          <div className="flex flex-col lg:flex-row items-center justify-center h-full p-4 gap-4">
            <div className="w-full lg:w-1/2 flex justify-center">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full max-w-sm h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                {slide.title}
              </h2>
              <p className="text-gray-800 text-base">{slide.content}</p>
            </div>
          </div>
        </motion.div>
      );
    })}
  </div>
</div>

</div>


  );
};

export default StackingBoxes;
