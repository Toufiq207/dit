
import React from "react";
import Container from "../component/Container";
import Coursecart from "../component/Coursecart";
import Heading from "../component/Heading";
import coursedata from "../data/coursedata";
import { motion } from "framer-motion";

const Course = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="courses" className="scroll-mt-3 py-10">
      <Container>
        {/* Heading Animation */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <Heading
            intro="Our Courses"
            text="Learn Skills That Matter"
            para="Explore industry-focused courses designed to help you develop practical skills and build a strong foundation for your professional career."
          />
        </motion.div>

        {/* Course Cards Animation */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 pt-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {coursedata.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
                transition: { duration: 0.25 },
              }}
            >
              <Coursecart img={item.img} />
            </motion.div>
          ))}
        </motion.div>

        {/* Registration Button Animation */}
        <motion.div
          className="flex justify-center mt-8"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdhKbHIo2J7eWmoEQvt834jGAjFlb_US1wR4z0zg_5pQpEOyg/viewform?usp=publish-editor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button  className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
              Registration Now
            </button>
          </a>
        </motion.div>
      </Container>
    </div>
  );
};

export default Course;
