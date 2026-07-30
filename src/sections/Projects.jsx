import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[180px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <p className="uppercase tracking-[8px] text-violet-400">
          FEATURED PROJECTS
        </p>

        <h2 className="mt-4 text-5xl lg:text-6xl font-black">
          Things I've Built
        </h2>

        <div className="mt-24 space-y-36">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`grid lg:grid-cols-2 gap-20 items-center ${
                index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              {/* LEFT */}

              <div>

                <h1 className="text-8xl font-black bg-gradient-to-b from-violet-400 to-zinc-700 bg-clip-text text-transparent">
                  0{index + 1}
                </h1>

                <motion.h2
                  whileHover={{ x: 8 }}
                  className="mt-6 text-4xl font-bold"
                >
                  {project.title}
                </motion.h2>

                <p className="mt-8 text-zinc-400 leading-8 text-lg">
                  {project.description}
                </p>

                {/* TECH STACK */}

                <div className="flex flex-wrap gap-4 mt-10">

                  {project.tech.map((tech, i) => {

                    const Icon = tech.icon;

                    return (

                      <motion.div
                       key={`${project.id}-${tech.name}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        whileHover={{
                          y: -5,
                          scale: 1.08,
                        }}
                        title={tech.name}
                        className="
                          w-16
                          h-16
                          rounded-2xl
                          bg-zinc-900
                          border
                          border-zinc-700
                          flex
                          items-center
                          justify-center
                          shadow-lg
                          hover:border-violet-500
                          hover:bg-zinc-800
                          transition-all
                          duration-300
                        "
                      >

                        <Icon
                          size={30}
                          className="text-violet-400"
                        />

                      </motion.div>

                    );

                  })}

                </div>

                {/* LINKS */}

                <div className="flex gap-10 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-violet-400 transition"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-white hover:text-violet-400 transition"
                  >
                    <FiExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

              {/* RIGHT */}

              <motion.div
                whileHover={{
                  scale: 1.03,
                  rotate: -1,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="
                  group
                  relative
                  rounded-3xl
                  overflow-hidden
                  border
                  border-zinc-800
                  bg-zinc-900/40
                  backdrop-blur-md
                  shadow-2xl
                "
              >

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-full
                    object-contain
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/80
                    via-black/20
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                />

                {/* Button */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    opacity-0
                    translate-y-6
                    group-hover:translate-y-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      rounded-full
                      bg-violet-600
                      px-6
                      py-3
                      font-semibold
                      hover:bg-violet-500
                      transition
                    "
                  >
                    View Project →
                  </a>

                </div>

              </motion.div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}