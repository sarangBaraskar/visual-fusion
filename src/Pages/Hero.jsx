import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
};


const letter = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};



export default function Hero() {

  const [canRender, setCanRender] = useState(false);

  useEffect(() => {
    // wait until model-viewer custom element is defined
    if (window.customElements.get("model-viewer")) {
      setCanRender(true);
    } else {
      window.customElements.whenDefined("model-viewer").then(() => {
        setCanRender(true);
      });
    }
  }, []);

  return (
    <>
      <section className="relative py-28 flex flex-col items-center text-center gap-10">
        {/* Heading */}
        <motion.h1
          variants={textReveal}
          initial="initial"
          animate="animate"
          className="text-5xl md:text-7xl font-bold"
        >
          {"THE SKILL OF MINE".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl text-slate-400 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6"
        >
          Technology does not have to be loud to be powerful. I am a front-end
          developer with strong knowledge of HTML, CSS, Tailwind, Bootstrap,
          JavaScript, and React.
        </motion.p>

        {/* 3D Model */}
        {canRender && (
        <model-viewer
          src="/svg11.glb"
          auto-rotate
          camera-controls
          crossorigin="anonymous"
          exposure="1"
          shadow-intensity="1"
          className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]"
        />
      )}
      </section>

    </>
  )
}
