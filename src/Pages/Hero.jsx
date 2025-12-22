import { motion } from "framer-motion";

const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
};


const softZoom = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
};

const letter = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};



export default function Hero() {
  return (
    <>
      <section className="relative py-28 flex flex-col items-center text-center">
          <motion.h1
            variants={textReveal}
            initial="initial"
            animate="animate"
            className="text-5xl md:text-7xl font-bold mb-10"
          >
            {"THE ARC OF PEACE".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            variants={textReveal}
            initial="initial"
            animate="animate"
            className="max-w-xl text-slate-400 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6"
          >
            {"Technology does not have to be loud to be powerful.This core represents balance, intelligence, and humanity".split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letter}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            .
          </motion.p>

          {/* Reactor */}
          <motion.div
            ref={Reflect.ref}
            variants={softZoom}
            viewport={{ once: true }}
            className="relative "
          >
            <img
              src="/svg.png"
              alt="Arc Reactor"
              className="w-115 h-150 mt--3 drop-shadow-[0_0_90px_rgba(34,211,238,0.6)]"
            />
          </motion.div>
        </section>
    </>
  )
}
