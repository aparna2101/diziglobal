import { useState, useEffect, useCallback } from "react";
import { testimonials } from "@/data/siteData";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <section className="section-padding bg-primary/5">
      <div className="container-custom">
        <div className="mb-12 text-center">
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">Testimonials</span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">What Our Clients Say</h2>
        </div>

        <div className="relative mx-auto max-w-2xl">
          <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-lg md:p-12">
            <Quote className="mx-auto mb-4 h-8 w-8 text-primary/30" />
            <p className="text-lg leading-relaxed text-card-foreground">&ldquo;{t.review}&rdquo;</p>
            <div className="mt-6 flex flex-col items-center gap-3">
              <img src={t.image} alt={t.name} className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20" loading="lazy" />
              <div>
                <p className="font-display font-bold text-card-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={prev} className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Previous testimonial">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`h-2.5 w-2.5 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`} aria-label={`Go to testimonial ${i + 1}`} />
              ))}
            </div>
            <button onClick={next} className="rounded-full border border-border bg-card p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground" aria-label="Next testimonial">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
