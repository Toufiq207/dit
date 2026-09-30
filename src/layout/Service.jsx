import React, { useEffect, useState } from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import serviceData from "../data/serviceData";
import { motion } from "framer-motion";

import {
FaTimes,
FaArrowRight,
FaCheckCircle,
} from "react-icons/fa";

const Service = () => {
const [selectedService, setSelectedService] = useState(null);

useEffect(() => {
const handleKeyDown = (event) => {
if (event.key === "Escape") {
setSelectedService(null);
}
};


window.addEventListener("keydown", handleKeyDown);

return () => {
  window.removeEventListener("keydown", handleKeyDown);
};


}, []);

return ( <section className="py-16 font-pop" id="service"> <Container>


    {/* Heading */}
    <div className="mb-10 text-center">
      

      <Heading
        className="text-center"
        intro=" WHAT I OFFER"
        text="My Services"
        para='Professional digital marketing solutions designed to improve
        your online presence, generate leads, and grow your business.'
      />

      
      
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {serviceData.map((service, index) => {
        const Icon = service.icon;

        return (
          <motion.div
            key={service.id}
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
            }}
            className="group flex flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Icon */}
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 transition-all duration-300 group-hover:bg-black">
              <Icon className="text-2xl text-gray-800 transition-all duration-300 group-hover:text-white" />
            </div>

            {/* Title */}
            <h3 className="mb-3 text-xl font-bold text-gray-800">
              {service.title}
            </h3>

            {/* Description */}
            <p className="mb-6 flex-grow text-sm leading-6 text-gray-600">
              {service.description}
            </p>

            {/* Learn More */}
            <button
              onClick={() => setSelectedService(service)}
              className="flex w-fit items-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800"
            >
              Learn More

              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        );
      })}
    </div>

    {/* Modal */}
    {selectedService && (
      <div
  className="fixed inset-x-0 bottom-0 top-4 w-screen md:top-16 z-[9999] flex items-center justify-center bg-black/70 px-3 py-3 backdrop-blur-sm sm:px-4 md:top-[70px]"
  onClick={() => setSelectedService(null)}
>
  <motion.div
    initial={{
      opacity: 0,
      scale: 0.9,
      y: 30,
    }}
    animate={{
      opacity: 1,
      scale: 1,
      y: 0,
    }}
    transition={{
      duration: 0.3,
    }}
    className="relative max-h-[calc(100vh-80px)] w-full max-w-md overflow-y-auto rounded-xl bg-white p-4 shadow-2xl sm:max-w-lg sm:p-6 md:max-w-2xl md:p-8"
    onClick={(e) => e.stopPropagation()}
  >
    {/* Close Icon */}
    <button
      onClick={() => setSelectedService(null)}
      className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-600 transition-all duration-300 hover:bg-black hover:text-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
    >
      <FaTimes />
    </button>

    {/* Service Icon */}
    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black text-white sm:mb-5 sm:h-16 sm:w-16">
      {React.createElement(selectedService.icon, {
        className: "text-xl sm:text-2xl",
      })}
    </div>

    {/* Title */}
    <h2 className="mb-3 pr-10 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl md:text-3xl">
      {selectedService.title}
    </h2>

    {/* Details */}
    <p className="mb-4 text-sm leading-6 text-gray-600 sm:mb-6 sm:text-base sm:leading-7">
      {selectedService.details}
    </p>

    {/* Features */}
    <h3 className="mb-3 text-base font-bold text-gray-900 sm:mb-4 sm:text-lg">
      What I Can Help With
    </h3>

    <div className="space-y-2 sm:space-y-3">
      {selectedService.features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.3,
            delay: index * 0.08,
          }}
          className="flex items-center gap-2 rounded-lg bg-gray-50 p-2.5 sm:gap-3 sm:p-3"
        >
          <FaCheckCircle className="shrink-0 text-sm text-gray-800 sm:text-base" />

          <span className="text-xs text-gray-700 sm:text-sm">
            {feature}
          </span>
        </motion.div>
      ))}
    </div>

    {/* Close */}
    <button
      onClick={() => setSelectedService(null)}
      className="mt-5 w-full rounded-lg bg-black px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 sm:mt-7 sm:w-auto sm:px-6 sm:py-3"
    >
      Close
    </button>
  </motion.div>
</div>
    )}

  </Container>
</section>


);
};

export default Service;
