import { motion } from "framer-motion";

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  target = "_self",
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm md:text-base font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-violet-600 text-white hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.45)]",

    secondary:
      "border border-zinc-700 bg-transparent text-white hover:border-violet-500 hover:text-violet-400",

    ghost:
      "text-zinc-300 hover:text-violet-400",
  };

  const className = `${base} ${styles[variant]}`;

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        whileHover={{
          y: -3,
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.97,
        }}
        className={className}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        y: -3,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className={className}
    >
      {children}
    </motion.button>
  );
}