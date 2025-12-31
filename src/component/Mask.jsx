import { motion } from "framer-motion";

export default function Mask() {
    return (
        <>
            <div className="fixed inset-0 z-[9999] bg-black">



                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 px-4">

                    <motion.p
                        initial={{ scale: 0.6, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className=" text-white 
                                font-bold 
                                capitalize 
                                tracking-wide
                                text-[28px] 
                                sm:text-[36px] 
                                md:text-[48px] 
                                lg:text-[60px]
                                text-center"
                    >
                        <img
                            src="/portmask.jpg"
                            alt="Intro"
                            className="w-full h-full object-cover"
                        />

                    </motion.p>

                </div>
            </div>

        </>
    )
}

