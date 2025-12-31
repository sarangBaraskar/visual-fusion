import { motion} from "framer-motion";


const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
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

        <motion.p
          variants={textReveal}
          initial="initial"
          animate="animate"
          className="max-w-xl text-slate-400 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-6"
        >
          {"Technology does not have to be loud to be powerful. I am front-end developer by using my strong knowledge of HTML, CSS,Tailwind, Bootstrap, JavaScript, and React. I am dedicated, hardworking, and always ready to take challenges that help me and my team grow".split("").map((char, i) => (
            <motion.span
              key={i}
              variants={letter}
              className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        
        </motion.p>


        <model-viewer
          src="/svg11.glb"
          alt="3D Model"
          auto-rotate
          auto-rotate-delay="1"
          rotation-per-second="2.8"
          camera-controls
          interaction-policy="allow-when-focused"
          style={{ width: "400px", height: "400px" }}
        />



      </section>
    </>
  )
}
