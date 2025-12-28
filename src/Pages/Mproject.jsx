import { motion } from "framer-motion";

const softZoom = {
  initial: { opacity: 0, scale: 0.92 },
  whileInView: { opacity: 1, scale: 1, transition: { duration: 1.2 } }
};

export default function Mproject() {
  return (
    <>
      <h1
        className="
    w-full text-center mb-12
    text-4xl md:text-5xl font-semibold tracking-tight
    bg-clip-text text-transparent
    bg-gradient-to-r from-cyan-200 to-emerald-200
  "
      >
        SKILLS
      </h1>


      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap gap-6">

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">C & C++</h5>
          <p class="text-body mb-6">Strong foundation in programming with problem-solving using C language.
            Good knowledge of object-oriented programming and efficient coding in C++.
          </p>
        </div>



        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">HTML:5</h5>
          <p class="text-body mb-6">Ability to create clean and well-structured web pages using HTML.</p>
        </div>



        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">CSS:3</h5>
          <p class="text-body mb-6">Skilled in designing responsive and attractive layouts with CSS,Talwind.</p>
        </div>

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">JS5/JS6</h5>
          <p class="text-body mb-6">Capable of building interactive and dynamic web applications using JavaScript.</p>
        </div>

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">React.js</h5>
          <p class="text-body mb-6">Hands-on experience in creating modern single-page applications with React and better knowledge how to handle state using Hooks or Redux.</p>
        </div>

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">React-Redux</h5>
          <p class="text-body mb-6">i am Familiar with React-Redux for managing application state in React applications and how to handle middleware Globle-State.</p>
        </div>

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Node.js</h5>
          <p class="text-body mb-6">Familiar with Node.js for building basic server-side applications and REST APIs. Have experience working with Express.js, handling routes, middleware, and integrating MongoDB for simple backend functionality. Comfortable with understanding backend logic and API integration.</p>
        </div>

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">Express</h5>
          <p class="text-body mb-6">Familiar with Express.js for creating RESTful APIs and managing routing, middleware, and request–response handling. Have experience building simple backend services with structured and maintainable code.</p>
        </div>

        <div class="bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs backdrop-blur">
          <h5 class="mb-3 text-2xl font-semibold tracking-tight text-heading leading-8">MongoDb</h5>
          <p class="text-body mb-6">Familiar with MongoDB for designing basic schemas, performing CRUD operations, and managing data using Mongoose. Have experience integrating MongoDB with Node.js applications for data storage and retrieval.</p>
        </div>
      </div>

    </>
  )
}
