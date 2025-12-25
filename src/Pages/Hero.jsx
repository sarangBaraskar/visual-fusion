import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
};


const letter = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};



export default function Hero() {
  const controls = useAnimation();

  // start normal rotation on load
  useEffect(() => {
    startNormal();
  }, []);

  const startNormal = async () => {
    await controls.stop
    controls.start({
      rotateY: [0, 360],
      transition: {
        duration: 6,
        ease: "linear",
        repeat: Infinity
      }
    });
  };

  const startSlow = async () => {
    await controls.stop()
    controls.start({
      rotateY: [0, 360],
      rotateX: -15,
      scale: 2,
      transition: {
        duration: 12, // slower on hover
        ease: "linear",
        repeat: Infinity
      }
    });
  };


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




        <div style={{ perspective: 1000 }}>
          <motion.img
            src="/svg.png"
            alt="Rotating image"
            style={{
              width: 260,
              transformStyle: "preserve-3d",
              cursor: "pointer"
            }}
            animate={controls}
            onHoverStart={startSlow}
            onHoverEnd={startNormal}
          />
        </div>

      </section>
    </>
  )
}
