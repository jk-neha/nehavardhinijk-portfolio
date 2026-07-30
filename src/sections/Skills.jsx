import { motion } from "framer-motion";
import skills from "../data/skills";

export default function Skills() {

return (

<section
id="skills"
className="relative py-32"
>

<div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[180px]" />

<div className="max-w-7xl mx-auto px-6">

<p className="uppercase tracking-[8px] text-violet-400">
TECH STACK
</p>

<h2 className="mt-5 text-6xl font-black">
Technologies I Use
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

{skills.map((skill,index)=>{

const Icon=skill.icon;

return(

<motion.div

key={skill.name}

initial={{
opacity:0,
y:40
}}

whileInView={{
opacity:1,
y:0
}}

transition={{
duration:.5,
delay:index*.05
}}

whileHover={{
y:-8,
scale:1.03
}}

className="relative rounded-3xl border border-zinc-800 bg-[#111111] p-8 transition-all duration-300 hover:border-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,.25)]"

>



<div className="flex justify-center mt-6">

<div className="flex h-24 w-24 items-center justify-center rounded-full border border-zinc-700 bg-zinc-900">

<Icon
  size={54}
  style={{ color: skill.color }}
/>
</div>

</div>

<h3 className="mt-8 text-center text-2xl font-bold">

{skill.name}

</h3>

<div className="mt-8 flex items-center justify-between">

<span className="text-zinc-400">

{skill.level}

</span>

<span className="text-sm text-violet-400">

{skill.progress}%

</span>

</div>

<div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-800">

<motion.div

initial={{
width:0
}}

whileInView={{
width:`${skill.progress}%`
}}

transition={{
duration:1
}}

className="h-full rounded-full bg-violet-500"

/>

</div>

</motion.div>

);

})}

</div>

</div>

</section>

);

}