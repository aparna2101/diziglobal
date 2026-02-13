import { portfolioItems } from "@/data/siteData";

const PortfolioSection = () => (
  <section id="portfolio" className="section-padding bg-background">
    <div className="container-custom">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">Our Work</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Featured Projects</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">A selection of projects we're proud to have delivered.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioItems.map((item) => (
          <div key={item.title} className="group relative overflow-hidden rounded-2xl shadow-lg">
            <img
              src={item.image}
              alt={item.title}
              className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-xs font-semibold uppercase tracking-wider text-secondary">{item.category}</span>
              <h3 className="font-display text-xl font-bold text-primary-foreground">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PortfolioSection;
