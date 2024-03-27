import { motion } from "framer-motion";

const words = "emberist".split("");

export const Emberist = () => (
  <div className="flex">
    {words.map((letter, index) => (
      <motion.button
        key={index}
        className="text-white hover:text-gray-200 text-6xl md:text-8xl font-extrabold"
        initial={{ opacity: 0, y: -200 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: Math.random(),
            duration: 1,
            ease: "easeInOut",
          },
        }}
      >
        {letter}
      </motion.button>
    ))}
  </div>
);
