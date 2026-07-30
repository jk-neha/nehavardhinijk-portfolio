import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative border-t border-zinc-800 bg-black">

  <div className="max-w-7xl mx-auto px-8 py-20">

    <div className="text-center">

      <h2
        className="
        font-heading
        text-6xl
        font-extrabold
        tracking-tight
        bg-gradient-to-r
        from-white
        via-violet-300
        to-violet-500
        bg-clip-text
        text-transparent
        "
      >
        Neha Vardhini J K
      </h2>

      <p
        className="
        mt-4
        font-body
        text-xl
        tracking-[5px]
        uppercase
        text-zinc-400
        "
      >
        Python Backend Developer
      </p>

      <p
        className="
        mt-10
        max-w-3xl
        mx-auto
        font-body
        text-lg
        leading-9
        text-zinc-500
        "
      >
        Crafting scalable backend systems, elegant REST APIs and AI-powered
        applications with a focus on clean architecture, performance and
        real-world impact.
      </p>

    </div>

    <div className="mt-16 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />

    <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4">

      <p
        className="
        font-body
        text-sm
        tracking-wide
        text-zinc-500
        "
      >
        © {new Date().getFullYear()} Neha Vardhini J K
      </p>

      <p
        className="
        font-body
        text-sm
        tracking-[3px]
        uppercase
        text-zinc-600
        "
      >
        Built with React • Tailwind CSS • Framer Motion
      </p>

    </div>

  </div>

</footer>
  )}