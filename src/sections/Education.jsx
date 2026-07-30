import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "M.Sc Computer Science",
    college: "Loyola College, Chennai",
    year: "2024 – 2026",
    cgpa: "CGPA 9.35",
  },
  {
    degree: "B.Sc Computer Science",
    college: "Bhaktavatsalam Memorial College for Women",
    year: "2021 – 2024",
    cgpa: "CGPA 8.40",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="relative py-32 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <p className="uppercase tracking-[8px] text-violet-400">
          EDUCATION
        </p>

        <h2 className="text-5xl font-black mt-4">
          Academic Journey
        </h2>

        <div className="mt-20 grid md:grid-cols-2 gap-10">

          {education.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/60 backdrop-blur-lg p-8 transition"
            >

              <div className="w-14 h-14 rounded-full bg-violet-600 flex items-center justify-center">

                <GraduationCap size={28} />

              </div>

              <h3 className="mt-8 text-2xl font-bold">

                {item.degree}

              </h3>

              <p className="text-zinc-400 mt-3">

                {item.college}

              </p>

              <div className="flex justify-between mt-8 text-zinc-500">

                <span>{item.year}</span>

                <span>{item.cgpa}</span>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}