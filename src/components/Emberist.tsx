import classNames from "classnames";
import { motion } from "framer-motion";
import { FC, useState } from "react";

const words = "emberist".toUpperCase().split("");

export const Emberist: FC<{ onComplete?: () => void }> = () => {
  const [selectedLetters, setSelectedLetters] = useState<
    Record<string, boolean>
  >({});

  // useEffect(() => {
  //   const allSelected = words.every((letter) => selectedLetters[letter]);

  //   if (allSelected) {
  //     onComplete();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [selectedLetters]);

  return (
    <div className="flex gap-2 select-none">
      {words.map((letter, index) => (
        <motion.button
          key={index}
          className={classNames(
            {
              "text-yellow-200": selectedLetters[letter],
              "text-white hover:text-gray-200": !selectedLetters[letter],
            },
            "text-5xl md:text-8xl font-bold"
          )}
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
          onClick={() =>
            setSelectedLetters((current) => ({
              ...current,
              [letter]: !current[letter],
            }))
          }
        >
          {letter}
        </motion.button>
      ))}
    </div>
  );
};
