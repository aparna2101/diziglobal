import { industries } from "@/data/siteData";

const IndustriesSection = () => {
  return (
    <section className="bg-white py-20 md:py-28" id="industries">
      <div className="container-custom px-4 text-center">

        {/* heading */}
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">
          INDUSTRIES WE WORK WITH IN OMAN
        </p>

        <h2 className="mt-3 text-3xl md:text-5xl font-bold">
          We Build Websites For Over 50+ Industries
        </h2>

        <p className="mt-4 max-w-3xl mx-auto text-muted-foreground">
          We've worked with businesses across many industries, giving us deep
          insight into what each sector needs.
        </p>

        {/* GRID EXACT STYLE */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">

          {industries.map((item, i) => {
            const Icon = item.icon;

            return (
              <div
                key={i}
                className="
                  bg-white
                  border
                  border-gray-200
                  rounded-lg
                  p-6
                  flex flex-col
                  items-center
                  justify-center
                  shadow-sm
                  hover:shadow-md
                  hover:-translate-y-1
                  transition
                "
              >
                {/* colored icon */}
                <Icon className={`h-9 w-9 ${item.color} mb-4`} />

                <p className="text-sm font-semibold text-gray-800">
                  {item.label}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
