import React from "react";
import Heading from "../component/Heading";
import skillCategories from "../data/skillCategoriesData";
import { motion } from "framer-motion";
import skillCategoriesData from "../data/skillCategoriesData";

const Skill = () => {
  return (
    <section id="skills" className="py-20 font-pop overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          
          

          <Heading intro='MY EXPERTISE' para='Explore my expertise in Digital Marketing, SEO, Social Media Marketing, and professional marketing tools.

' text="My Professional Skills" />

          
          
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategoriesData.map((category, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 80,
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
              }}
              className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                {category.title}
              </h3>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + skillIndex * 0.05,
                    }}
                    className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm md:text-base font-medium hover:bg-blue-600 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;