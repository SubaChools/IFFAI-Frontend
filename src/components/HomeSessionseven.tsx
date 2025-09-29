import React from "react";

type Props = {
  /** Duration of one full loop, in seconds (default 60s). */
  durationSeconds?: number;
};

// allow CSS variable in style prop
type MarqueeStyle = React.CSSProperties & {
  ["--marquee-duration"]?: string;
};

const logos: string[] = Array.from({ length: 31 }, (_, i) => `/assets/partner (${i + 1}).png`);

const MarqueeSlider: React.FC<Props> = ({ durationSeconds = 60 }) => {
  // duplicate the array for seamless looping
  const logosLoop = [...logos, ...logos];

  // convert numeric seconds to CSS duration string
  const duration = `${Math.max(1, durationSeconds)}s`;

  return (
    <section className="py-12 bg-gradient-to-b from-sky-800 to-indigo-900">
      {/* Small injected CSS for marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee {
          animation: marquee var(--marquee-duration, 60s) linear infinite;
        }
        .marquee:hover {
          animation-play-state: paused;
        }
        @media (max-width: 640px) {
          .marquee .logo-pill img { width: 160px; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        <h3 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-8">
          Unified payment experience across business apps
        </h3>

        <div className="overflow-hidden">
          <div
            className="marquee flex items-center gap-6"
            style={{ ["--marquee-duration"]: duration } as MarqueeStyle}
          >
            {logosLoop.map((src, i) => (
              <div
                key={i}
                className="flex-shrink-0 rounded-full shadow-2xl border border-white/10"
              >
                <div
                  className="logo-pill flex items-center justify-center px-6 py-3 bg-white/95 rounded-full"
                  style={{
                    minWidth: 160,
                    boxShadow: "0 10px 30px rgba(2,6,23,0.25)",
                  }}
                  aria-hidden={i >= logos.length}
                >
                  <img
                    src={src}
                    alt={i < logos.length ? `partner-${i + 1}` : ""}
                    className="w-28 h-auto object-contain"
                    style={{ filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.18))" }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSlider;
