import { motion } from "framer-motion";

export default function Edu_Expcard({ Com_name, duration, desc }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-6 mb-10"
            >
                <h3 className="text-xl font-semibold text-emerald-200">{Com_name}</h3>
                <p className="text-sm text-slate-500 mb-2">{duration}</p>
                <p className="text-slate-400">{desc}</p>
            </motion.div>
        </>
    )
}
