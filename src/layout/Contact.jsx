
import React from "react";
import Container from "../component/Container";
import Heading from "../component/Heading";
import ContactImg from "../assets/banner/contactImg.jpeg";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import Image from "../component/Image";

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <Container>

        {/* Heading */}
        <Heading className="mb-10 text-center" text="Contact Me" />

        <Image
          className="w-full pb-4"
          src={ContactImg}
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mt-8">

          {/* Contact Information */}
          <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">

            <h2 className="mb-3 text-2xl font-bold font-pop text-gray-900">
              Get In Touch
            </h2>

            <p className="mb-8 leading-7 font-normal font-pop text-gray-600">
              If you have any questions, project opportunities, or would like
              to discuss professional services, feel free to contact me.
            </p>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/8801676796903"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <FaWhatsapp className="text-2xl text-gray-800" />
              </div>

              <div>
                <p className="text-sm font-pop text-gray-500">
                  WhatsApp
                </p>

                <p className="font-semibold font-pop text-gray-800">
                  01676796903
                </p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+8801676796903"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-5 flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <FaPhoneAlt className="text-2xl text-gray-800" />
              </div>

              <div>
                <p className="text-sm font-pop text-gray-500">
                  Phone
                </p>

                <p className="font-semibold font-pop text-gray-800">
                  01676796903
                </p>
              </div>
            </motion.a>

            {/* Email */}
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=julhasahmed1@gmail.com"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-5 flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <FaEnvelope className="text-xl text-gray-800" />
              </div>

              <div>
                <p className="text-sm font-pop text-gray-500">
                  Email
                </p>

                <p className="font-semibold font-pop text-gray-800">
                  julhasahmed1@gmail.com
                </p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.a
              href="https://www.google.com/maps/search/?api=1&query=College+Road,+Barguna"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 rounded-xl border border-gray-200 p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-100">
                <FaMapMarkerAlt className="text-xl text-gray-800" />
              </div>

              <div>
                <p className="text-sm font-pop text-gray-500">
                  Location
                </p>

                <p className="font-semibold font-pop text-gray-800">
                  College Road, Barguna, Bangladesh
                </p>
              </div>
            </motion.a>

          </div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden rounded-2xl bg-white shadow-sm"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1926.9710451890369!2d90.11176209839479!3d22.157773300000024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa99005e7f4909%3A0x29d7dc434fd43d74!2sCollege%20Road%2C%20Barguna!5e1!3m2!1sen!2sbd!4v1790758672199!5m2!1sen!2sbd"
              className="h-full min-h-[400px] w-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="College Road, Barguna Location"
            />
          </motion.div>

        </div>
      </Container>
    </section>
  );
};

export default Contact;




