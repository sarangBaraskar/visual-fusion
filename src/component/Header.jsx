import { motion } from "framer-motion";
import Hero from "../Pages/Hero";
import Profile from "../Pages/Profile";
import Mproject from "../Pages/Mproject";
import Footer from "./footer";




const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
};

const letter = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export default function Header() {
  return (
    <>
      <motion.header
        variants={textReveal}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="backdrop-blur-xl bg-black/30 border-b border-cyan-400/20"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="tracking-[0.4em] text-cyan-300 font-semibold">
            <motion.span
              variants={textReveal}
              initial="initial"
              animate="animate"
              className="tracking-[0.4em] text-cyan-300 font-semibold"
            >
              {"IRON-ARC".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </span>
          <span className="flex  gap-1 items-center text-xs text-emerald-300 font-bold">
            <span className="w-2 h-2 rounded-full  bg-emerald-400 animate-pulse" />
            <motion.span
              variants={textReveal}
              initial="initial"
              animate="animate"
              className="max-w-xl backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6"
            >
              {"Hello SIR,".split("").map((char, i) => (
                <motion.span
                  key={i}
                  variants={letter}
                  className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>

          </span>
        </div>
      </motion.header>
      <Hero />
      <Profile />
      <Mproject />
      <Footer />

    </>
  )
}
