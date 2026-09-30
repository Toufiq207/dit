import React from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import Image from "../component/Image";
import Julhas from "../assets/logo/julhas.webp";
import { motion } from "framer-motion";
const About = () => {
  return (
  <section className="py-10" id="about">
<Container>

    {/* Heading */}
  
      <Heading
        className="mb-8 text-center md:mb-10"
        text="CE0 of Dhaka IT"
      />
    

    <div className="flex flex-col gap-8 md:flex-row md:gap-0">

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="flex w-full justify-center md:w-1/2"
      >
        <div className="aspect-square w-[70%] overflow-hidden rounded-full sm:w-[60%] md:w-[75%]">
          <Image
            src={Julhas}
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex w-full items-center justify-center md:w-1/2 md:justify-start"
      >
        <p className="w-[90%] text-center text-base font-normal font-pop leading-relaxed text-gray-500 sm:text-lg md:w-[75%] md:text-left md:text-xl">
         Dhaka IT Institute is a reputed IT training institution where students can develop practical skills for freelancing and the modern digital job market. The institute provides hands-on training in web development, graphic design, digital marketing, and other technology-based skills. Experienced trainers guide learners step by step, helping them understand both technical concepts and real-world project requirements. Students also learn how to create professional portfolios, communicate with clients, and build successful careers on popular freelancing platforms. With a supportive learning environment and practical project-based training, Dhaka IT Institute aims to empower students with the skills, confidence, and knowledge needed to start freelancing and achieve their professional goals in the competitive IT industry.

        </p>
      </motion.div>

    </div>
  </Container>
</section>
  );
};

export default About;