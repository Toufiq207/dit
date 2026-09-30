import React from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import { motion } from "framer-motion";

import {
  FaChalkboardTeacher,
  FaLaptopCode,
  FaBriefcase,
  FaCertificate,
  FaAward,
} from "react-icons/fa";

const Exprierence = () => {
  const experiences = [
    {
      title: "Digital Marketing Trainer",
      organization: "E-Learning & Earning Limited",
      period: "2024 – Present",
      description:
        "Providing practical digital marketing training and mentoring to help learners develop professional skills and build successful careers.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Digital Marketing Trainer",
      organization: "Youth Development Department, Barguna",
      period: "Freelancing Training Project",
      description:
        "Conducted digital marketing and freelancing training sessions to help learners develop practical online earning skills.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Internship – Digital Marketing",
      organization: "Creative IT Institute",
      period: "3 Months",
      description:
        "Completed practical internship training focused on digital marketing strategies, SEO, social media marketing, and online promotion.",
      icon: FaLaptopCode,
    },
    {
      title: "Other Professional Experience",
      organization: "Training & Development Activities",
      period: "Various Projects",
      description:
        "Participated in multiple professional training, mentoring, soft-skill development, and organizational activities.",
      features: [
        "Grameenphone-related training and soft-skill activities",
        "Faria Lara Foundation",
        "Soft-skill related training activities",
        "Training and mentoring projects",
      ],
      icon: FaBriefcase,
    },
  ];

  const certifications = [
    {
      title: "NSDA Certification",
      description:
        "Professional certification demonstrating recognized skills and competency.",
      icon: FaAward,
    },
    {
      title: "Digital Marketing Level 03",
      description:
        "Professional Digital Marketing training and certification.",
      icon: FaCertificate,
    },
    {
      title: "Digital Marketing Level 04",
      description:
        "Advanced Digital Marketing training and certification.",
      icon: FaCertificate,
    },
    {
      title: "Digital Marketing Level 06",
      description:
        "Professional-level Digital Marketing training and certification.",
      icon: FaCertificate,
    },
  ];

  return (
    <section className="py-20 font-pop overflow-hidden" id="experience">
      <Container>
        {/* Heading */}
        <div className="mb-16 text-center">
        

          <Heading para="Explore my expertise in Digital Marketing, SEO, Social Media Marketing, and professional marketing tools." intro="MY JOURNEY" text="Experience & Certifications" />

        
        </div>

        {/* Experience Timeline */}
        <div className="relative mx-auto max-w-5xl">
          {/* Timeline Line */}
          <div className="absolute left-5 top-0 h-full w-[2px] bg-gray-200 md:left-1/2 md:-translate-x-1/2" />

          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: isLeft ? -80 : 80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.15,
                }}
                className={`relative mb-10 flex items-center md:justify-between ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Desktop Empty Side */}
                <div className="hidden w-[45%] md:block" />

                {/* Timeline Icon */}
                <div className="absolute left-5 z-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full bg-black text-white shadow-lg md:left-1/2">
                  <Icon className="text-lg" />
                </div>

                {/* Card */}
                <div className="ml-14 w-full rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:ml-0 md:w-[45%]">
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {experience.title}
                      </h3>

                      <p className="mt-1 font-medium text-blue-600">
                        {experience.organization}
                      </p>
                    </div>
                  </div>

                  <span className="inline-block rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700">
                    {experience.period}
                  </span>

                  <p className="mt-4 text-sm leading-7 text-gray-600">
                    {experience.description}
                  </p>

                  {/* Features */}
                  {experience.features && (
                    <ul className="mt-4 space-y-2">
                      {experience.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2 text-sm text-gray-600"
                        >
                          <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Certifications & Professional Training
            </h2>

            <p className="mt-3 text-gray-600">
              Recognized training and certifications in Digital Marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((certification, index) => {
              const Icon = certification.icon;

              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 50,
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
                    duration: 0.5,
                    delay: index * 0.15,
                  }}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 transition-all duration-300 group-hover:bg-black">
                    <Icon className="text-2xl text-gray-800 transition-all duration-300 group-hover:text-white" />
                  </div>

                  <h3 className="mb-3 text-lg font-bold text-gray-900">
                    {certification.title}
                  </h3>

                  <p className="text-sm leading-6 text-gray-600">
                    {certification.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Exprierence;