import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import Container from "../component/Container";
import serviceData from "../data/serviceData";

const Footer = () => {
  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Experience", link: "#experience" },
    { name: "Projects", link: "#project" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: <FaFacebookF />,
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com/",
      label: "Twitter",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-20 overflow-hidden bg-[#0a0a0a] text-white font-pop">

      {/* Decorative Glow */}
      <div className="absolute -top-32 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-purple-600/20 blur-[100px]" />

      <Container>
        {/* Main Footer */}
        <div className="relative grid grid-cols-1 gap-12 py-14 text-center sm:grid-cols-2 md:py-16 md:text-left lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">

            {/* Logo */}
            <a href="#home" className="group inline-block">
              <h1 className="text-4xl font-bold tracking-wider text-white">
                RI<span className="text-red-500">B</span>
              </h1>
            </a>

            {/* Description */}
            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-400">
              Welcome! I’m Md Rakibul Islam Badhan. I help businesses
              transform their digital presence into revenue-generating
              engines through targeted digital marketing, strategic SEO,
              and high-converting ad campaigns.
            </p>

            {/* Social Icons */}
            <div className="mt-7 flex justify-center gap-3 md:justify-start">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600 hover:text-white"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="group flex items-center justify-center gap-2 text-sm text-gray-400 transition-all duration-300 hover:translate-x-1 hover:text-purple-400 md:justify-start"
                  >
                    <span className="h-[1px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-4" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-lg font-semibold">
              Services
            </h3>

            <ul className="space-y-3">
              {serviceData.map((service, index) => (
                <li
                  key={index}
                  className="text-sm text-gray-400 transition-colors duration-300 hover:text-purple-400"
                >
                  {service.title}
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-lg font-semibold">
              Let's Work Together
            </h3>

            <p className="mb-6 max-w-xs text-sm leading-6 text-gray-400">
              Have a project in mind? Let's build something amazing
              together.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-sm font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-600/30"
            >
              Contact Me
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col items-center justify-between gap-5 py-7 text-center text-sm text-gray-500 md:flex-row md:text-left">

          {/* Copyright */}
          <p>
            © {new Date().getFullYear()} Rakibul Islam Badhan.
            <span className="hidden sm:inline"> All rights reserved.</span>
          </p>

          {/* Made With */}
          <p className="flex items-center gap-1">
            Made with
            <FaHeart className="text-red-500" />
            by Rakibul
          </p>

          {/* Back To Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-purple-500 hover:bg-purple-600 hover:text-white"
          >
            <FaArrowUp />
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;