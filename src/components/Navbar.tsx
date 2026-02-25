import { useEffect, useState } from "react";
import logo from "@/assets/logo.png"; // 👉 put logo inside src/assets/logo.png

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4">

        {/* 🔥 LEFT SIDE → Logo + Text */}
        <div className="flex items-center gap-3 cursor-pointer">

          <img
            src={logo}
            alt="Dizi Global Solutions"
            className="h-10 w-auto object-contain"
          />

          <h2
            className={`font-bold text-lg transition ${
              scrolled ? "text-black" : "text-white"
            }`}
          >
            Dizi Global Solutions
          </h2>

        </div>


        {/* 🔥 RIGHT SIDE → Menu */}
        <ul className="flex gap-6 font-medium">
          {["Home", "About Us", "Services", "Portfolio", "Contact Us"].map(
            (item) => (
              <li
                key={item}
                className={`cursor-pointer transition ${
                  scrolled
                    ? "text-black hover:text-primary"
                    : "text-white hover:text-primary"
                }`}
              >
                {item}
              </li>
            )
          )}
        </ul>

      </nav>
    </header>
  );
};

export default Navbar;
