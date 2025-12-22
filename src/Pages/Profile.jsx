import { motion } from "framer-motion";
import { Heart, Cpu } from "lucide-react";


const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } }
};

export default function Profile() {
  return (
    <>
      <motion.section
          variants={fadeUp}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center"
        >
          <img src="/mark 47.png" alt="Armor" className="rounded-xl border z-1 border-cyan-400/30" />
          <div className="backdrop-blur">
            <h3 className="text-3xl font-semibold z-1 mb-4">Designed with Purpose</h3>
            <p className="text-slate-400 z-1 mb-6 leading-relaxed">
              Every component responds gently and precisely —
              not to dominate, but to protect.
            </p>
            <div className="flex gap-6 z-1 text-cyan-300 text-sm">
              <span className="flex items-center z-1 gap-2"><Cpu size={16} /> Adaptive AI</span>
              <span className="flex items-center z-1 gap-2"><Heart size={16} /> Human-Centered</span>
            </div>
          </div>
        </motion.section>

    </>
  )
}
