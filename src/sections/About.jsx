import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-40 relative"
    >
      <div className="max-w-7xl mx-auto px-8">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-violet-400"
        >
          WHO AM I
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="mt-8 text-5xl lg:text-7xl font-black leading-tight max-w-5xl"
        >
          I build{" "}
          <span className="text-violet-500">
            scalable backend systems
          </span>{" "}
          that are fast, secure and designed for real-world applications.
        </motion.h2>

        <p className="mt-12 text-zinc-400 text-xl leading-10 max-w-4xl">
          I'm Neha Vardhini, a Python Backend Developer passionate about
          REST APIs, FastAPI, AI applications and clean architecture.
          I enjoy transforming ideas into production-ready software while
          continuously learning modern backend technologies.
        </p>

      </div>
    </section>
  );
}