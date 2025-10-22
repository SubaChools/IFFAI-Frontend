import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
// Import your assets
import certificate1 from "../assets/certificate/1.jpg";
import certificate2 from "../assets/certificate/2.jpg";
import certificate3 from "../assets/certificate/3.jpg";
import certificate4 from "../assets/certificate/4.jpg";
import certificate5 from "../assets/certificate/5.jpg";
import leftHero from "../assets/new/iffai1.png";

// Define a type for the image objects for type safety
type ImageItem = {
  id: number;
  src: string;
  alt: string;
};

// Use the imported variables directly and apply the type
const rightImages: ImageItem[] = [
  { id: 1, src: certificate1, alt: "Gallery 1" },
  { id: 2, src: certificate2, alt: "Gallery 2" },
  { id: 3, src: certificate3, alt: "Gallery 3" },
  { id: 4, src: certificate4, alt: "Gallery 4" },
  { id: 5, src: certificate5, alt: "Gallery 5" },
];

// Use the 'Variants' type from Framer Motion
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({ // Type the custom parameter 'i'
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
  }),
};

// Define the component's return type as JSX.Element
const Certificate: React.FC = () =>  {
  return (
    <div className="min-h-screen bg-slate-50 mt-10 rounded-2xl rounded-tl-4xl">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          {/* LEFT: fixed-ish image */}
          <aside className="md:w-1/3 lg:w-2/5 md:sticky md:top-0 self-start z-20">
            <div className="overflow-hidden rounded-2xl  ">
              <img
                src={leftHero}
                alt="Fixed showcase"
                className="w-full h-[60vh] md:h-[80vh] rounded-tr-[11rem] rounded-tl-[11rem]  object-cover"
                loading="lazy"
              />
            </div>
          </aside>

          {/* RIGHT: local images that reveal one-by-one */}
          <main className="md:w-2/3 lg:w-3/5">
            <header className="py-6">
              <h1 className="text-green-500 text-3xl font-semibold uppercase md:text-3xl ">
                Our Certificates
              </h1>
              <p className="mt-2 text-slate-600">
                
              </p>
            </header>

            <div className="grid grid-cols-1 gap-6">
              {rightImages.map((img, i) => (
                <motion.article
                  key={img.id}
                  className="overflow-hidden rounded-2xl  border border-slate-200 bg-white shadow"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.4 }}
                  custom={i}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-[380px] md:h-[460px] object-cover"
                    loading="lazy"
                  />
                  {/* <div className="p-4">
                    <h2 className="text-lg font-medium text-slate-900">
                      {img.alt}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      This card animates into view when you scroll.
                    </p>
                  </div> */}
                </motion.article>
              ))}
            </div>

            <div className="h-24" />
          </main>
        </div>
      </div>
    </div>
  );
}
export default Certificate;