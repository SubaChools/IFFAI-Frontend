import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

// 👇 Replace this path with your actual image
import mainImage from "../assets/images/AI certi2.jpg";

type Stat = { id: string; end: number; label: string };

const stats: Stat[] = [
  { id: "years", end: 30, label: "Years in Business" },
  { id: "ea", end: 32000, label: "Projects's Completed" },
  { id: "detected", end: 15000, label: "Case Studies" },
];

function formatDisplay(value: number, end: number): string {
  if (end >= 1000) {
    const k = Math.round(value / 1000);
    return `${k}K+`;
  }
  return `${Math.round(value)}+`;
}

function animateValueTo(
  el: HTMLElement | null,
  start: number,
  end: number,
  duration: number,
  endThreshold: number
): void {
  if (!el) return;
  const range = end - start;
  if (range === 0) {
    el.textContent = formatDisplay(end, endThreshold);
    return;
  }
  const startTime = performance.now();

  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const rawValue = start + Math.floor(range * eased);
    el.textContent = formatDisplay(rawValue, endThreshold);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = formatDisplay(end, endThreshold);
  };

  requestAnimationFrame(step);
}

const Sixpart: React.FC = () => {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const elemsRef = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            stats.forEach((s, i) => {
              const el = elemsRef.current[s.id];
              if (!el) return;

              const base = 900;
              const extra = s.end >= 10000 ? 900 : s.end >= 5000 ? 500 : 0;
              const duration = base + extra;

              setTimeout(() => {
                animateValueTo(el, 0, s.end, duration, s.end);
              }, i * 200);
            });
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[50%_40%] items-center gap-12">
        {/* Left text */}
        <div className="order-2 lg:order-1">
          <p className="text-4xl text-green-500 uppercase md:text-4xl font-extrabold mt-20 drop-shadow-lg">Milestones</p>
          <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6">
            Real Impact. <br /> Real Lives.
          </h2>
          <p className="text-gray-600 max-w-xl mr-[80px]">
           Our journey is marked by impactful milestones that reflect both learner progress and our commitment to quality education. Each milestone—whether it's completing a module, finishing a capstone project, or earning a certificate—represents meaningful progress toward your career goals. At every step, we celebrate your growth and empower you to reach new heights.
          </p>
        </div>

        {/* Right image + stats */}
        <div className="relative order-1 lg:order-2 overflow-visible" ref={rootRef}>
          {/* ✅ IMAGE BACKGROUND */}
          <div className="rounded-3xl rounded-tl-4xl rounded-bl-full overflow-hidden shadow-lg relative z-0">
            <img
              src={mainImage}
              alt="Office"
              className="w-full h-80  sm:h-[420px] md:h-[520px] object-cover"
            />
          </div>

          {/* ✅ STATS ON TOP OF IMAGE */}
          <div className="absolute inset-0 flex flex-col justify-center items-start lg:pl-6 pointer-events-none z-10">
            <div className="space-y-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: -60, scale: 0.98 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="w-30 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-gray-300"
                  style={{ pointerEvents: "auto" }}
                >
                  <div className="text-center">
                    <div
                      ref={(el: HTMLDivElement | null) => {
                        elemsRef.current[s.id] = el;
                      }}
                      className="text-3xl md:text-4xl font-semibold text-cyan-600"
                    >
                      0
                    </div>
                    <div className="text-sm text-gray-500 mt-1 px-1.5">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sixpart;
