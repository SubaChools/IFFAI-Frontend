import React, { useEffect, useRef, useState } from "react";
import T1 from "../assets/images/T1.png";
import T2 from "../assets/images/T2.png";
import T3 from "../assets/images/T3.png";
import T4 from "../assets/images/T4.png";
import T5 from "../assets/images/T5.png";

const testimonials = [
  {
    name: "Bassem Sabra",
    role: "Chief Executive Officer, Al Rabie Saudi Foods Co, Ltd",
    image: T1,
    testimonial:
      "CHOOLS has done a great work with our team on multiple fronts, production initiatives and savings projects based on VSM method, top that with the cultural improvement and change team mind set to think as an owner vs employee, I am available for any inquires.",
  },
  {
    name: "Mr. Shridhar Kulkarni",
    role: "Director & Chief Supply Chain Officer, Perfetti Van Melle",
    image: T5,
    testimonial:
      "When it comes to Productivity, It is CHOOLS, we trust. Proud to Say CHOOLS trained our team of 48 professionals on Data Analytics, Advance Statistics and Statistical Business Modelling for the Perfetti Business. We are proud to be associated with CHOOLS.",
  },
  {
    name: "Mr. Tanmay Sahoo",
    role: "President Strategic Alliance – Microsoft, Microsoft India",
    image: T4,
    testimonial:
      "Having trained 10000+ professional across the world in emerging technologies, We MICROSOFT team are privileged to be associated with CHOOLS Learning academy.",
  },
  {
    name: "Mr. N.Rajesh Kumar",
    role: "Head – Governance, Risk & Compliance – IT Solutions, Roshn Saudi Arabia – A PIF Company",
    image: T2,
    testimonial:
      "The State-of-the-Art solutions provided by CHOOLS to ROSHN in the field of data science and Artificial intelligence is beyond world class. We strongly recommend CHOOLS to anyone willing to pursue in the field of Productivity.",
  },
  {
    name: "Mr. Mohamed Hasan",
    role: "Consumer Insights – Pepsico USA - Florida",
    image: T3,
    testimonial:
      "An incredibly talented individual and a perfect human. I was one of those lucky ones who got trained by Satish on Productivity and all our projects got completed in record time. I strongly recommend CHOOLS & Sathish Narayanan in the field of PRODUCTIVITY.",
  },
];

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<typeof testimonials[0] | null>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scroll = () => {
      if (!scrollContainer) return;

      scrollAmount += 0.5; // adjust speed
      scrollContainer.style.transform = `translateX(-${scrollAmount}px)`;

      const totalWidth = scrollContainer.scrollWidth / 2;
      if (scrollAmount >= totalWidth) {
        scrollAmount = 0;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-white py-20 overflow-hidden relative">
      <h2 className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold drop-shadow-lg mb-20 text-center">
        Our Success Stories
      </h2>

      <div className="relative w-full">
        <div ref={scrollRef} className="flex gap-10 px-10 pb-10">
          {testimonials.concat(testimonials).map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className={`flex-shrink-0 w-80 bg-gradient-to-b from-[oklch(0.59_0.19_7.27)] to-[#6800d2] rounded-3xl shadow-2xl p-6 cursor-pointer transform transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0 ? "-translate-y-6" : "translate-y-6"
              }`}
            >
              <div className="flex justify-center -mt-12 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-full border-4 border-green-500 shadow-lg"
                />
              </div>
              <p className="text-white-300 italic text-center mb-6 line-clamp-4">
                “{item.testimonial}”
              </p>
              <h3 className="text-center text-lg font-semibold text-white">
                {item.name}
              </h3>
              <p className="text-center text-sm text-green-300 font-semibold">{item.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selected && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-indigo-500/70 rounded-2xl shadow-2xl max-w-lg w-full p-8 relative">
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-4 text-gray-100 hover:text-white text-2xl"
            >
              &times;
            </button>

            <div className="flex flex-col items-center">
              <img
                src={selected.image}
                alt={selected.name}
                className="w-28 h-28 object-cover rounded-full border-4 border-green-500 shadow-md mb-4"
              />
              <h3 className="text-xl font-bold text-green-400 mb-2">
                {selected.name}
              </h3>
              <p className="text-sm font-semibold text-white-400 mb-4 text-center">
                {selected.role}
              </p>
              <p className="text-gray-200 text-center leading-relaxed italic">
                “{selected.testimonial}”
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
