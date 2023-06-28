import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      /** Animations happen for ea child one by one, with 0.2 gap between */
      staggerChildren: 0.2,
    }
  }
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 }
}

const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
  bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div
      variants={projectVariant}
      className="relative"
    >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p classname="mt-7">
          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
          porttitor accumsan tincidunt.
        </p>
      </div>
      <img src={`../assets/${projectTitle}.jpeg`} alt={projectTitle} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* headings */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            My <span className="text-mintgreen-500">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient />
          </div>
        </div>
        <p className="mt-10 mb-10">
          JavaScript, TypeScript, Git, React, Hooks, Node, Express, TDD(Jest+RTL),
          Cypress, Microservices, HTML, CSS, Next.js, TailwindCSS,  PostgreSQL,
          GraphQL, RESTful APIs, Performance, Accessibility
        </p>
      </motion.div>

      {/* projects */}
      <div className="flex justify-center">
        {/** <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Project 1"/>
          <Project title="Project 2"/>

          
          <Project title="Project 3"/>
          <Project title="Project 4"/>
          <Project title="Project 5"/>
          
          <Project title="Project 6"/>
          <Project title="Project 7"/>
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER INTERFACES
          </div>
        </motion.div> */}
        <div class="project-container">
          <div class="project">
            <div class="project-content">
              <div class="project-label">Featured Project</div>
              <h4 class="project-title">Ethereum Options Price History</h4>
              <div class="project-details">
                <p>A web app for visualizing Lyra Finance options pricing. Look at the historical price of the selected option market to gain more insights on an option.</p>
                <ul>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>GraphQL</li>
                </ul>
              </div>
            </div>
            
            <div class="project-img">
              <img src="https://cdn.vox-cdn.com/thumbor/w-IFN0FWpN4BGfhZaV9EYqs4nLo=/51x0:977x617/1200x800/filters:focal(51x0:977x617)/cdn.vox-cdn.com/uploads/chorus_image/image/50017015/Screen_Shot_2016-07-04_at_12.37.15_PM.0.0.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;