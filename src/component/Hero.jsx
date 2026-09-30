
import React from "react";
import Container from "./Container";
import Image from "./Image";
import bannerData from "../data/bannerData";

import Facebook from "../assets/icon/facebook.webp";
import Linkdin from "../assets/icon/linkedin.webp";
import Instagram from "../assets/icon/instagram.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { motion } from "framer-motion";

import {
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        w-full
        max-w-full
        overflow-x-hidden
        bg-white
        pt-20
        pb-8

        sm:pt-24
        sm:pb-12

        md:pt-28
        md:pb-14

        lg:pt-32
        lg:pb-16
      "
    >
      <Container>

        {/* ================= Banner Area ================= */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-full

            sm:w-[full]

            md:w-[full]

            lg:w-[8full

            xl:w-[full]
          "
        >

          {/* Previous Arrow */}
          <button
            className="
              custom-prev
              absolute
              left-2
              top-1/2
              z-30
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/60
              text-white
              shadow-lg
              backdrop-blur-sm
              transition-all
              duration-300

              hover:scale-110
              hover:bg-black/80

              sm:-left-5
              sm:h-10
              sm:w-10

              md:-left-7
              md:h-11
              md:w-11

              lg:-left-10
              lg:h-12
              lg:w-12
            "
          >
            <RiArrowLeftSLine
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl
              "
            />
          </button>


          {/* ================= Swiper ================= */}
          <div
            className="
              w-full
              overflow-hidden
              rounded-xl
              shadow-xl

              sm:rounded-2xl

              lg:rounded-3xl
            "
          >
            <Swiper
              modules={[
                Autoplay,
                Pagination,
                Navigation,
              ]}
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
            >
              {bannerData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item.banner}
                    className="
                      block
                      h-auto
                      w-full
                      max-w-full
                      object-contain
                    "
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>


          {/* Next Arrow */}
          <button
            className="
              custom-next
              absolute
              right-2
              top-1/2
              z-30
              flex
              h-8
              w-8
              -translate-y-1/2
              items-center
              justify-center
              rounded-full
              bg-black/60
              text-white
              shadow-lg
              backdrop-blur-sm
              transition-all
              duration-300

              hover:scale-110
              hover:bg-black/80

              sm:-right-5
              sm:h-10
              sm:w-10

              md:-right-7
              md:h-11
              md:w-11

              lg:-right-10
              lg:h-12
              lg:w-12
            "
          >
            <RiArrowRightSLine
              className="
                text-xl
                sm:text-2xl
                lg:text-3xl
              "
            />
          </button>

        </div>


        {/* ================= Hero Intro ================= */}
        <div
          className="
            mx-auto
            mt-7
            w-full
            max-w-4xl
            px-3
            text-center
            font-pop

            sm:mt-10

            md:mt-12

            lg:mt-14
          "
        >

          {/* ================= Name Animation ================= */}
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="
             flex
    flex-wrap
    justify-center
    gap-x-4
    gap-y-1
    px-2

    text-center
    text-2xl
    font-bold
    leading-tight
    text-gray-900

    sm:text-3xl
    md:text-4xl
    lg:text-5xl
    xl:text-6xl
            "
          >
            {[
              "DHAKA", 
              
              "INFORMATION",
              "TECNOLOGY",
              
            ].map((word, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 25,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>


          {/* ================= Professional Title ================= */}
          <motion.p
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.8,
              duration: 0.6,
            }}
            className="
              mx-auto
              mt-3
              max-w-2xl

              text-sm
              font-medium
              leading-relaxed
              text-gray-500

              sm:text-base

              md:text-lg

              lg:text-xl
            "
          >
            Digital Marketing Specialist
            <span className="hidden sm:inline">
              {" | "}
            </span>

            <span className="block sm:inline">
              Trainer
            </span>

            <span className="hidden sm:inline">
              {" | "}
            </span>

            <span className="block sm:inline">
              ICT Professional
            </span>
          </motion.p>


          {/* ================= CTA Buttons ================= */}
          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
              duration: 0.7,
            }}
            className="
              mt-6
              flex
              w-full
              flex-col
              items-center
              justify-center
              gap-3

              sm:mt-8
              sm:flex-row
              sm:gap-4
            "
          >

            {/* Hire Me */}
            <a
              href="#contact"
              className="
                w-full
                rounded-lg
                bg-gray-900
                px-6
                py-3

                text-center
                text-sm
                font-semibold
                text-white

                shadow-md

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-white
                hover:text-gray-900
                hover:shadow-lg

                sm:w-auto
              "
            >
              Hire Me
            </a>


            {/* View My Work */}
            <a
              href="#project"
              className="
                w-full
                rounded-lg
                bg-gray-900
                px-6
                py-3

                text-center
                text-sm
                font-semibold
                text-white

                shadow-md

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-white
                hover:text-gray-900
                hover:shadow-lg

                sm:w-auto
              "
            >
              View My Work
            </a>


            {/* Contact Me */}
            <a
              href="#contact"
              className="
                w-full
                rounded-lg
                bg-gray-900
                px-6
                py-3

                text-center
                text-sm
                font-semibold
                text-white

                shadow-md

                transition-all
                duration-300

                hover:-translate-y-1
                hover:bg-white
                hover:text-gray-900
                hover:shadow-lg

                sm:w-auto
              "
            >
              Contact Me
            </a>

          </motion.div>

        </div>


        {/* ================= Social Icons ================= */}
        <div
          className="
            mt-8
            flex
            w-full
            items-center
            justify-center
            gap-4
            pb-4

            sm:mt-10
            sm:gap-6

            md:mt-12
            md:gap-7

            lg:mt-14
            lg:gap-8
          "
        >

          {/* Facebook */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300

              hover:-translate-y-2
              hover:scale-110
            "
          >
            <Image
              src={Facebook}
              className="
                w-10

                sm:w-12

                md:w-14

                lg:w-16
              "
            />
          </a>


          {/* LinkedIn */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300

              hover:-translate-y-2
              hover:scale-110
            "
          >
            <Image
              src={Linkdin}
              className="
                w-10
                rounded-lg

                sm:w-12

                md:w-14

                lg:w-16
              "
            />
          </a>


          {/* Instagram */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="
              transition-all
              duration-300

              hover:-translate-y-2
              hover:scale-110
            "
          >
            <Image
              src={Instagram}
              className="
                w-10

                sm:w-12

                md:w-14

                lg:w-16
              "
            />
          </a>

        </div>

      </Container>
    </section>
  );
};

export default Hero;

