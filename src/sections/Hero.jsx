import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "../components/Button";
import { Typewriter } from "react-simple-typewriter";
export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center pt-24"
    >
      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      {/* Purple Blur */}
      <div className="absolute -top-48 left-0 w-[500px] h-[500px] bg-violet-700/20 blur-[180px] rounded-full" />

      {/* Huge Typography */}
      <h1 className="absolute top-12 left-1/2 -translate-x-1/2 text-[250px] font-black text-white/5 select-none tracking-tight">
        BACKEND
      </h1>

      <div className="relative z-10 max-w-[1400px] mx-auto px-12 grid lg:grid-cols-2 items-center">

        {/* LEFT */}

        <motion.div
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:.8}}
        >
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm text-violet-300 mb-8">
  <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
  Available for Opportunities
</div>
<br></br>


          <span className="uppercase tracking-[7px] text-violet-400 text-sm">
            
            HELLO I'M

          </span>

          <h1 className="text-[88px] lg:text-[110px] leading-[0.95] font-bold">

Neha

<br/>

Vardhini JK

</h1>
         <h2 className="text-3xl lg:text-5xl font-bold mt-6 h-16">
  <span className="text-violet-400">
    <Typewriter
      words={[
        "Python Backend Developer",
        "FastAPI Developer",
        "API Developer",
        
      ]}
      loop={0}
      cursor
      cursorStyle="|"
      typeSpeed={70}
      deleteSpeed={45}
      delaySpeed={1800}
    />
  </span>
</h2>

          <p className="mt-8 max-w-xl text-zinc-400 leading-8">

            Building scalable backend systems,
            REST APIs and AI powered applications
            with clean architecture.

          </p>

          <div className="flex gap-5 mt-12">

            <Button
onClick={() =>
document
.getElementById("projects")
.scrollIntoView({
behavior:"smooth"
})
}
>

Explore

</Button>

            <Button
href="/Neha Vardhini J K Resume.pdf"
target="_blank"
rel="noopener noreferrer"
>
Resume
  
</Button>

          </div>

        </motion.div>

      {/* RIGHT */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute top-20 right-0 lg:right-12 z-10"
>
  {/* Soft purple glow behind image */}
  <div className="absolute top-10 left-10 w-[350px] h-[350px] bg-violet-600/20 blur-[120px] rounded-full -z-10"></div>

  {/* Floating image */}
  <motion.img
    src="/profile.png"
    alt="Neha"
    className="w-[300px] lg:w-[420px] object-contain"
    animate={{
      y: [0, -10, 0],
      rotate: [0, 1, 0, -1, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />
</motion.div>
          </div>

    </section>

  );

}