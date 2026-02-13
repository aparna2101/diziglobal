import { services } from "@/data/siteData";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => (
  <section id="services" className="section-padding bg-muted/50">
    <div className="container-custom">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">What We Do</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Our Services</h2>
        <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">Comprehensive digital solutions tailored to your business needs.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((s) => (
          <Card key={s.title} className="group border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
