import { useState } from "react";
import { faqs } from "@/data/siteData";
import { ChevronDown } from "lucide-react";

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container-custom grid lg:grid-cols-2 gap-12 items-start">

        {/* LEFT FAQ */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mb-8">
            Find clear answers about our services, pricing and timelines.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-gray-100 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-4 text-left font-medium"
                >
                  {faq.question}
                  <ChevronDown
                    className={`transition-transform ${
                      open === i ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {open === i && (
                  <p className="px-4 pb-4 text-gray-600 text-sm">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT GREEN BOX */}
       <div className="bg-[#a6e22e] rounded-3xl p-10 shadow-xl min-h-[250px] flex flex-col justify-center">

  <h3 className="text-2xl font-bold mb-4 text-black">
    Get 1 Year Free Support
  </h3>

  <p className="text-gray-900 leading-relaxed text-base">
    Enjoy 12 months of free expert support after your website goes live.
    We handle updates, edits, and technical issues so you can focus on your business.
  </p>

</div>

      </div>
    </section>
  );
};

export default FAQSection;
