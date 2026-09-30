import React from "react";
import { motion } from "framer-motion";
import Container from "../component/Container";
import projectsData from "../data/projectsData";
import Heading from "../component/Heading";

const Project = () => {
  return (
    <section id="project" className="py-20 font-pop overflow-hidden">
      <Container>
        {/* Section Heading */}
        <div className="text-center mb-14">
          <Heading
            intro="My Work"
            para="Here are some of my selected projects, showing the problem,
            solution and approach behind each project."
            text="Projects & Case Studies"
          />
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-gray-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Project Number */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm font-semibold text-blue-600">
                  PROJECT {String(project.id).padStart(2, "0")}
                </span>

                <span className="rounded-full bg-blue-50 px-4 py-1.5 text-xs font-medium text-blue-600">
                  {project.service}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>

              {/* Problem */}
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Problem
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.problem}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Solution
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.solution}
                </p>
              </div>

              {/* Result */}
              <div className="rounded-xl bg-gray-50 p-5">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Result
                </h4>

                <p className="text-gray-600 leading-7">
                  {project.result}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Project;