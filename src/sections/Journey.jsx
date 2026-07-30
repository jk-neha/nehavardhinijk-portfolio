import { motion } from "framer-motion";

const timeline = [
  {
    year: "2021-2024",
    title: "Completed B.Sc Computer Science",
  },
  {
    year: "2024-2026",
    title: "Completed M.Sc Computer Science",
  },
  {
    year: "2025–2026",
    title: "Software Engineer Trainee",
  },
  {
    year: "Now",
    title: "Building Backend Projects",
  },
];

export default function Journey() {
  return (
    <section id="journey" className="py-40">

      <div className="max-w-7xl mx-auto px-8">

        <p className="uppercase tracking-[8px] text-violet-400">

          MY JOURNEY

        </p>

        <div className="mt-20">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              className="flex items-center gap-12 border-b border-zinc-800 py-10"
            >

              <h2 className="text-violet-500 text-2xl font-bold w-40">

                {item.year}

              </h2>

              <h3 className="text-3xl font-semibold">

                {item.title}

              </h3>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}