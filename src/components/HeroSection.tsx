import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ContactForm from "@/components/ContactForm";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
   <section className="relative z-10 overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24">

{/* Background Image */}

<div className="absolute inset-0 z-0 overflow-hidden">
  <img
    src="/hero-bg.png"
    alt="hero"
    className="w-full h-full object-cover scale-105 blur-sm"
  />

  {/* dark overlay */}
  <div className="absolute inset-0 bg-black/60"></div>
</div>


      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-white/20 text-white backdrop-blur-sm
 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container-custom relative z-10 px-4 md:px-8 lg:px-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="animate-fade-in">
            <span className="mb-4 inline-block rounded-full bg-white/20 text-white backdrop-blur-sm
 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Dizi Global Solutions
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white drop-shadow-lg
 md:text-5xl lg:text-6xl">
              High-Performing Website Design in Oman – Starting at
              <span className="text-primary">– Just OMR 120 Only!</span> 
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/90
">
          🚀 Launch a stunning, mobile-friendly, SEO-optimized website that helps your Oman business grow faster.<br></br>
💼 Trusted by dozens of businesses across Muscat, Salalah, Sohar, Nizwa & Sur.
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
              <div className="bg-white rounded-xl shadow-lg p-5 w-full max-w-sm mx-auto">
    
    <h3 className="text-base font-semibold text-center mb-3">
      Get a Free Quote Now!!
    </h3>
          
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
