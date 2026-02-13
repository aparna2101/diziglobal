import { faqs } from "@/data/siteData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQSection = () => (
  <section className="section-padding bg-background">
    <div className="container-custom">
      <div className="mb-12 text-center">
        <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-secondary">FAQ</span>
        <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">Frequently Asked Questions</h2>
      </div>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="rounded-xl border border-border bg-card px-6 shadow-sm">
              <AccordionTrigger className="text-left font-display font-semibold text-card-foreground hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);

export default FAQSection;
