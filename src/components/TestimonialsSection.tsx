import { useState } from "react";
import { testimonials } from "@/data/siteData";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const visible = [
    testimonials[index],
    testimonials[(index + 1) % testimonials.length],
    testimonials[(index + 2) % testimonials.length],
  ];

  return (
    <section className="bg-[#0f4c63] py-20 text-white relative overflow-hidden">
      <div className="container-custom text-center relative">

        <p className="text-lime-400 font-semibold uppercase tracking-widest mb-3">
          Testimonials
        </p>

        <h2 className="text-4xl font-bold mb-14">
          Trusted By Businesses Across Oman
        </h2>

        {/* arrows */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/30"
        >
          <ChevronRight />
        </button>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-8 px-12">

          {visible.map((t, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 rounded-2xl p-8 shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <span className="text-lime-500 text-5xl mb-4 block">❝</span>

              <p className="text-sm leading-relaxed mb-6">
                {t.message}
              </p>

              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-3 object-cover"
              />

              <h4 className="font-semibold">{t.name}</h4>
              <p className="text-xs text-gray-500 mb-3">{t.city}</p>

              <div className="flex justify-center gap-1 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="flex justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${
                i === index ? "bg-lime-400 w-5" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
