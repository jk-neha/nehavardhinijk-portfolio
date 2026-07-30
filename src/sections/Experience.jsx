import experience from "../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-8">

        <p className="uppercase tracking-[6px] text-violet-400">
          EXPERIENCE
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Professional Journey
        </h2>

        <div className="relative mt-20 border-l border-zinc-700 pl-12">

          {experience.map((exp, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .5 }}
              className="relative mb-20"
            >

              <span className="absolute -left-[58px] top-1 w-5 h-5 rounded-full bg-violet-500 border-4 border-black"></span>

              <p className="text-violet-400 font-semibold">
                {exp.year}
              </p>

              <h3 className="text-2xl font-bold mt-2">
                {exp.role}
              </h3>

              <p className="text-zinc-400 mt-1">
                {exp.company}
              </p>

              <p className="text-sm text-zinc-500 mb-5">
                {exp.location}
              </p>

              <ul className="space-y-3">

                {exp.points.map((point, i) => (

                  <li
                    key={i}
                    className="text-zinc-300 leading-8 flex gap-3"
                  >
                    <span className="text-violet-400 mt-2">•</span>

                    {point}
                  </li>

                ))}

              </ul>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}