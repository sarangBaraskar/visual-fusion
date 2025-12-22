import { useEffect, useRef } from "react";
import Snowfall from "react-snowfall";
import Header from "./component/Header";
import Footer from "./component/footer";
import Hero from "./Pages/Hero";
import Profile from "./Pages/Profile";
import Mproject from "./Pages/Mproject";




export default function App() {
  const reactorRef = useRef(null);

  /* -------- Mouse Parallax (Soft) -------- */
  useEffect(() => {
    const el = reactorRef.current;
    const move = (e) => {
      if (!el) return;
      const x = (e.clientX / window.innerWidth - 0.5) * 8;
      const y = (e.clientY / window.innerHeight - 0.5) * -8;
      el.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <Snowfall
        style={{
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          zIndex: 0,
          pointerEvents:"none"
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-[#020617] to-[#020617] text-slate-200 overflow-x-hidden">

        {/* Ambient Energy Lines */}
        <div className="fixed left-8 top-0 h-full w-px bg-[linear-gradient(transparent,#22d3ee,transparent)] opacity-30" />
        <div className="fixed right-8 top-0 h-full w-px bg-[linear-gradient(transparent,#10b981,transparent)] opacity-30" />

        {/* NAVBAR */}

        <Header/>

        {/* HERO */}

        <Hero/>

        {/* PROFILE */}

        <Profile/>

        {/* MAJOR PROJECT */}
        
        <Mproject/>
        
        {/* FOOTER */}
        
        <Footer/>
      
      </div>
    </>
  );
}
