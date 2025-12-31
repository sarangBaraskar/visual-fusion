import { motion } from "framer-motion";

export default function Projectcard({ title, desc, link }) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-xl p-6"
            >
                <h3 className="text-xl font-semibold text-cyan-200 mb-3">{title}</h3>
                <p className="text-slate-400">{desc}</p>
                <span className='text-blue-700 cursor-pointer'>{link && (
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-semibold
            text-cyan-300 hover:text-emerald-300 transition"
                    >
                        View Project →
                    </a>
                )}</span>
            </motion.div>
        </>
    )
}
