import { industries } from "@/data/siteData";

const IndustriesSection = () => (
  <section className="section-padding bg-muted/50">
    <div className="container-custom">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">Industries</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Industries We Serve</h2>
      </div>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((ind) => (
          <div
            key={ind.label}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border/50 bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ind.icon className="h-7 w-7" />
            </div>
            <span className="text-sm font-semibold text-card-foreground">{ind.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesSection;
