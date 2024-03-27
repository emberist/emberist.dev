import { motion } from "framer-motion";
import { Emberist } from "./components/Emberist";

const App = () => (
  <>
    <div className="bg-black flex flex-col w-full h-screen justify-center items-center py-9">
      <div className="flex flex-col">
        <Emberist />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              delay: 2,
              duration: 0.6,
            },
          }}
        >
          <div className="flex gap-2">
            <a className="text-white hover:underline" href="#projects">
              projects
            </a>

            <a className="text-white hover:underline" href="#">
              github
            </a>

            <a className="text-white hover:underline" href="#">
              contact
            </a>

            <a className="text-white hover:underline" href="#">
              donate
            </a>
          </div>
        </motion.div>
      </div>
      {/* <svg
        viewBox="0 0 595 114"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        overflow="visible"
      >
        <path
          id="curve"
          d="M0.999908 112.999C143 104 202 0.998993 305 0.998993C408 0.998993 471 104 595 104"
          fill="none"
        />

        <text fill="white" style={{ fontSize: 8 }}>
          {duplicatedSlides.map((text, i) => (
            <motion.textPath
              href="#curve"
              initial={{ startOffset: i * 20 + "%" }}
              animate={{
                startOffset: ["-50%", "110%"],
                transition: {
                  ease: "linear",
                  duration: 6,
                  repeat: Infinity,
                  delay: i * 0.6,
                },
              }}
              style={{ width: `${100 / slides.length}%`, flexShrink: 0 }}
            >
              {text}
            </motion.textPath>
          ))}
        </text>
      </svg> */}
    </div>

    <div id="projects" className="h-screen w-full bg-yellow-300"></div>
  </>
);

export default App;
