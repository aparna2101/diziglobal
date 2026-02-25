import { CheckCircle2 } from "lucide-react";

const features = [
  "Fast",
  "Mobile-responsive",
  "Secure",
  "SEO-optimized",
  "Conversion-focused"
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="container-custom">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop"
              alt="Team collaborating on a project"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating card */}
          <div className="absolute -bottom-6 -right-4 rounded-xl border border-border bg-card p-4 shadow-lg md:-right-8">
            <p className="font-display text-3xl font-bold text-primary">8+</p>
            <p className="text-sm text-muted-foreground">Years of Excellence</p>
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">Who We Are</span>
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            
Top Website Design Company in Oman – Build Your Digital Identity With Confidence

          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
           We help businesses across Oman build powerful digital presences that turn visitors into customers. At Dizi Global Solution, our team of expert web designers and developers combine creativity, strategy, and cutting-edge technology to deliver websites.

<br></br>Whether you’re a startup in Muscat or an established business in Salalah — we have the perfect website solution for you.
<br></br>
We understand the unique business culture of both Oman and the UAE, which allows us to create websites that match regional customer behavior, language preferences, and industry expectations. From modern corporate sites to high-performing online stores, Dizi Global Solution ensures your brand stands out with a digital presence that looks professional, loads quickly, and drives real results.
          </p>
          <ul className="mt-6 space-y-3">
            {features.map((f) => (
              <li key={f} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-secondary" />
                <span className="text-foreground">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
