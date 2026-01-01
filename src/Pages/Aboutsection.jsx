import { motion } from "framer-motion";
import Edu_Expcard from "./Edu_Expcard";
import Projectcard from "./Projectcard";
import AnimatedText from "../component/AnimatedText";


const textReveal = {
  animate: { transition: { staggerChildren: 0.06 } }
};

const letter = {
  initial: { y: 20, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export default function Aboutsection() {
  return (
    <>
      <section className="relative  py-28 max-w-7xl mx-auto px-6">

        {/* ABOUT HEADING */}
        <AnimatedText
          text="ABOUT ME"
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        />

        {/* ABOUT DESCRIPTION */}
        <motion.p
          variants={textReveal}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-slate-400 bg-white/5 backdrop-blur-xl border border-cyan-400/20 rounded-2xl p-8 mb-20"
        >
          {"Aim to build a successful career as a front-end developer by using my strong knowledge of HTML, CSS,Tailwind, Bootstrap, JavaScript, and React. I am dedicated, hardworking, and always ready to take challenges that help me and my team grow. My goal is to become an excellent code"
            .split("")
            .map((char, i) => (
              <motion.span key={i} variants={letter} className="inline-block">
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
        </motion.p>

        {/* PROJECTS */}
        <AnimatedText
          text="PROJECTS"
          className="text-3xl md:text-4xl font-semibold mb-10"
        />

        <div className="grid md:grid-cols-2 gap-10 mb-20">
          <Projectcard title="Furniro – Elevate Your Living Space" desc="Furniro is a sleek and modern furniture blog designed to inspire home decor enthusiasts, Developed and deployed 'Furniro', a responsive furniture blog using HTML, CSS, and JavaScript, showcasing expertise in front-end development and user-centric design"
            link="https://sarangbaraskar.github.io/demo/" />


          <Projectcard title="E-commerce web clone" desc="An E-commerce web clone implementing add-to-cart functionality using HTML, JavaScript, and CSS. The project showcases dynamic cart updates, product listing, and interactive user experience."
          link="https://sarangbaraskar.github.io/E-commerce-add_to_cart/" />

          <Projectcard title="Note-app" desc="This application delivers a fast, intuitive, and responsive note-taking experience—with real-time updates, smooth navigation, and clean design. “It uses a modular component-based structure to ensure maintainability, scalability, and code reuse as the project grows. The user interface is designed to be accessible, responsive, and user-friendly—combining modern design with high performance."
          link="https://notes-app-one-bice.vercel.app/" />

          <Projectcard title="Photo Gallery Web Application " desc="Developed a dynamic, responsive online gallery using modern web technologies. Designed user-friendly UI/UX, implemented efficient image management and display features, and ensured smooth cross-device performance. The project demonstrates my ability to build polished front-end applications, manage media content effectively, and deliver a clean user experience from design through deployment.."
          link=" https://gallery-project-murex.vercel.app/" />

          <Projectcard title="To-Do List Application (Redux + React) " desc="Designed and implemented a responsive task-management application using React and Redux. The project includes features such as task creation, status updates, filtering, and persistent state management. Built with clean component architecture and optimized state handling to ensure smooth and reliable user interactions. Deployed on Vercel for fast and stable performance."
          link=" https://todolist-with-redux-zeta.vercel.app/" />
        </div>

        {/* EXPERIENCE */}
        <AnimatedText
          text="EXPERIENCE"
          className="text-3xl md:text-4xl font-semibold mb-10"
        />

        <Edu_Expcard
          Com_name="INFO Origin"
          duration="3 Month"
          desc="I hold three month internship certificate from info origin, Where I gained valuable industry experience, I work from there as a developer"
        />

        <Edu_Expcard
          Com_name="CMP School "
          duration="1 Year"
          desc="I also have a solid one-year teaching background, showcasing my ability to effectively communication and impart knowledge"
        />

        {/* EDUCATION */}
        <AnimatedText
          text="EDUCATION"
          className="text-3xl md:text-4xl font-semibold mt-20 mb-10"
        />

        <Edu_Expcard
          Com_name="BCA (Bachelor of Computer Applications)"
          duration="Dr. C. V. Raman University,BILASPUR"
          desc="8.26 (CGPA)"
        />

         <Edu_Expcard
          Com_name="DB.Science "
          duration="Gondia.(Nagpur Board)"
          desc="68.50%"
        />

      </section>

    </>
  )
}
