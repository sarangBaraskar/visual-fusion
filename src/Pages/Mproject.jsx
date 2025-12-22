import { motion } from "framer-motion";

const softZoom = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
};

export default function Mproject() {
  return (
    <>
      <motion.section
          variants={softZoom}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-24"
        >
          <div className="relative overflow-hidden z-0 rounded-2xl">
            <img
              src="/ss.jpg"
              alt="Tony Stark"
              className="w-full saturate-0  contrast-125 mix-blend-screen"
            />
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(34,211,238,0.12)_0_1px,transparent_1px_6px)]" />
          </div>
          <p className="mt-10 text-center text-slate-500 tracking-widest text-sm">
            PART OF THE JOURNEY IS THE END
          </p>
        </motion.section>
    </>
  )
}
