import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  {name: "Experience", href:"#experience"},
  { name: "Contact", href: "#contact" },

];

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = links.map((l) =>
        document.querySelector(l.href)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const bottom = top + section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < bottom) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-black/70 border-b border-zinc-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-8">

        {/* Logo */}

        <a
  href="#home"
  className="flex items-center gap-3 select-none"
>

  <img
    src="/logo.png"
    alt="Neha Vardhini Logo"
    className="h-11 w-auto transition duration-300 hover:scale-105"
  />

</a>
        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm uppercase tracking-[3px] transition ${
                active === link.href.replace("#", "")
                  ? "text-violet-400"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}

              {active === link.href.replace("#", "") && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 -bottom-2 h-[2px] w-full bg-violet-500 rounded-full"
                />
              )}
            </a>
          ))}
        </div>

        {/* Resume */}

        <a
          href="/Neha_Vardhini_JK_Resume.pdf"
          download
          className="hidden md:flex items-center gap-2 border border-zinc-700 px-5 py-2 rounded-full hover:border-violet-500 transition"
        >
          Resume ↗
        </a>

      </div>
    </motion.nav>
  );
}