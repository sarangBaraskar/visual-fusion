import { motion } from "framer-motion";

const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
};

const letter = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export default function AnimatedText({ text, className }) {
    return (
        <>
            <motion.div
                variants={textReveal}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className={className}
            >
                {text.split("").map((char, i) => (
                    <motion.span
                        key={i}
                        variants={letter}
                        className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-cyan-200 to-emerald-200"
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </motion.div>
        </>
    )
}
