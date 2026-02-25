import { portfolioItems } from "@/data/siteData";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="container-custom">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-primary font-semibold uppercase tracking-widest">
            OUR WORK
          </p>
          <h2 className="mt-2 text-4xl font-display font-bold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3">
            A selection of projects we’re proud to have delivered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              className="group rounded-2xl bg-white shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={item.image}
                className="h-48 w-full object-cover group-hover:scale-105 transition"
              />

              <div className="p-5">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  {item.description}
                </p>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSection;
