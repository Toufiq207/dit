
import React from "react";
import Container from "./Container";
import Image from "./Image";
import bannerData from "../data/bannerData";




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
     className="pt-18 md:pt-20"
    >
      <Container>

        {/* ================= Banner Area ================= */}
        <div
          className="
            relative
            mx-auto
            w-full
            max-w-full

           
            
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
        {/* <div
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
              "Dhaka",
              
              "Information",
              "Tecnology",
              
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
        


          {/* ================= CTA Buttons ================= */}
          {/* <motion.div
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
          
          


            {/* View My Work */}
          

          
          

          {/* </motion.div> */} */

        {/* </div> */} */


       

      </Container>
    </section>
  );
};

export default Hero;

