import { processSteps } from "@/data/siteData";
import ContactForm from "@/components/ContactForm";

const ProcessSection = () => (
  <section className="section-padding bg-background">
    <div className="container-custom">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">How We Work</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Process</h2>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {processSteps.map((s) => (
          <div key={s.step} className="relative rounded-2xl border border-border/50 bg-card p-8 text-center shadow-sm transition-all hover:shadow-lg">
            <span className="font-display text-4xl font-extrabold text-primary/20">{s.step}</span>
            <div className="mx-auto mb-3 mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
              <s.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-bold text-card-foreground">{s.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
          </div>
        ))}
      </div>

      {/* CTA form */}
      <div className="mx-auto mt-16 max-w-md rounded-2xl border border-border bg-card p-6 shadow-lg md:p-8">
        <h3 className="mb-1 text-center font-display text-xl font-bold text-card-foreground">Ready to Start?</h3>
        <p className="mb-5 text-center text-sm text-muted-foreground">Tell us about your project.</p>
        <ContactForm compact />
      </div>
    </div>
  </section>
);

export default ProcessSection;
