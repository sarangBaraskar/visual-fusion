import { motion } from "framer-motion";

const softZoom = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
};

export default function Mproject() {
  return (
    <>
      {/* <motion.section
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
        </motion.section> */}


      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-6">
        <div className="w-full z-1 md:w-[48%]">
          <img src="/ss0.png" alt="Armor" className="rounded-xl w-full" />
        </div>

        <div className="w-full z-1 md:w-[48%]">
          <img src="/ss1.png" alt="Armor" className="rounded-xl w-full" />
        </div>

        <div className="w-full z-1 md:w-[48%]">
          <img src="/ss2.png" alt="Armor" className="rounded-xl w-full" />
        </div>

        <div className="w-full z-1 md:w-[48%]">
          <img src="/ss3.png" alt="Armor" className="rounded-xl w-full" />
        </div>
      </div>


      {/* <div className="flex flex-wrap flex-cols-2 gap-2  px-6 py-2 items-center  ">
        <div className="">
          <img src="/mark 47.png" className="rounded-xl border z-1 border-cyan-400/30" alt="Armor" />
        </div>
        <div className="rounded-xl">
          <img src="/mark 47.png" alt="Armor" />
        </div>
      </div>
      <div className="flex flex-wrap flex-col-2 gap-2 px-6 py-2 items-center max-w-7xl mx-auto">
        <div className=" rounded-xl">
          <img src="/mark 47.png" alt="Armor" />
        </div>
        <div className="rounded-xl">
          <img src="/mark 47.png" alt="Armor" />
        </div>
      </div> */}




      {/* <div className="grid h-screen grid-cols-2 grid-rows-2 justify-items-center content-center gap-4">
          <div className="">
            <img src="/mark 47.png" alt="Armor" />
          </div>
          <div className="">
            <img src="/mark 47.png" alt="Armor" />
          </div>
          <div className="">
            <img src="/mark 47.png" alt="Armor" />
          </div>
          <div className="">
            <img src="/mark 47.png" alt="Armor" />
          </div>
        </div> */}

    </>
  )
}
