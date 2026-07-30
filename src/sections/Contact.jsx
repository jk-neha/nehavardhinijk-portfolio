import { motion } from "framer-motion";

import { HiOutlineMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-40 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-8 text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[8px] text-violet-400"
        >
          LET'S CONNECT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-5xl lg:text-7xl font-black leading-tight"
        >
          Let's Build Something
          <br />
          <span className="text-violet-500">
            Amazing Together.
          </span>
        </motion.h2>

        <p className="mt-10 text-zinc-400 text-xl leading-9 max-w-2xl mx-auto">
          I'm currently looking for Backend Developer opportunities,
          internships, and exciting collaborations. Feel free to reach
          out if you'd like to work together.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mt-16">

          <a
            href="mailto:jknehavardhini2004@gmail.com"
            className="flex items-center gap-3 px-7 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition"
          >
            <HiOutlineMail size={18} />
            Email Me
          </a>

          <a
            href="https://linkedin.com/in/nehavardhinijk"
            target="_blank"
            className="flex items-center gap-3 px-7 py-4 rounded-full border border-zinc-700 hover:border-violet-500 transition"
          >
            <FaLinkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/jk-neha"
            className="flex items-center gap-3 px-7 py-4 rounded-full bg-violet-600 hover:bg-violet-500 transition"
          >
            <FaGithub size={18} />
            GitHub
          </a>

          <a
            href="/Neha Vardhini J K Resume.pdf"
            download
            className="flex items-center gap-3 px-7 py-4 rounded-full border border-zinc-700 hover:border-violet-500 transition"
          >
            <FiDownload size={18} />
            Resume
          </a>

        </div>

      </div>
    </section>
  );
}