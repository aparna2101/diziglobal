import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/30 pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-custom relative z-10 px-4 md:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="animate-fade-in">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Digital Solutions Partner
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-foreground md:text-5xl lg:text-6xl">
              Building Digital
              <span className="text-primary"> Experiences</span> That Matter
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">
              We craft innovative software solutions that empower businesses to grow, scale, and thrive in the digital era.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" onClick={() => scrollTo("#services")}>
                Explore Services <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("#portfolio")}>
                View Portfolio
              </Button>
            </div>
            <div className="mt-10 flex gap-8">
              {[
                { value: "150+", label: "Projects" },
                { value: "50+", label: "Clients" },
                { value: "8+", label: "Years" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Contact Form */}
          <div className="animate-fade-in-right" id="contact">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
              <h3 className="mb-1 font-display text-xl font-bold text-card-foreground">Get in Touch</h3>
              <p className="mb-5 text-sm text-muted-foreground">Fill out the form and we'll respond within 24 hours.</p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
