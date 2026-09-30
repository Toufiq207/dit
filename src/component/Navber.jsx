import React, { useState } from "react";
import Container from "../component/Container";
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navber = () => {
const [open, setOpen] = useState(false);

const menuItems = [
{ name: "Home", link: "#home" },
{ name: "About", link: "#about" },
{ name: "Service", link: "#service" },
{ name: "Skills", link: "#skills" },
{ name: "FAQ", link: "#faq" },
{ name: "Experience", link: "#experience" },
{ name: "Project", link: "#project" },
{ name: "Contact", link: "#contact" },
];

return ( <nav className="fixed inset-x-0 top-0 z-[999999] w-full font-pop">


  {/* ================= DESKTOP NAVBAR ================= */}
  <div className="hidden border-b border-white/10 bg-[#111827]/95 backdrop-blur-lg lg:block">
    <Container className="flex h-[80px] items-center justify-between px-4">
      
      {/* Logo */}
      <a href="#home" className="group">
        <h1 className="text-4xl font-bold tracking-wider text-white">
          RI<span className="text-red-500">B</span>
        </h1>

        <div className="h-[2px] w-0 bg-red-500 transition-all duration-300 group-hover:w-full" />
      </a>

      {/* Desktop Menu */}
      <ul className="flex items-center rounded-full border border-white/10 bg-white/5 p-2 shadow-lg backdrop-blur-md">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              className="block rounded-full px-4 py-2 text-sm font-medium text-gray-300 transition-all duration-300 hover:bg-red-500 hover:text-white xl:px-5 xl:text-base"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </Container>
  </div>


  {/* ================= MOBILE NAVBAR ================= */}
  <div className="relative w-screen border-b border-white/10 bg-[#111827] lg:hidden">
    
    {/* Mobile Top Bar */}
    <Container className="flex h-[70px] items-center justify-between px-4">
      
      {/* Logo */}
      <a href="#home">
        <h1 className="text-3xl font-bold text-white">
          RI<span className="text-red-500">B</span>
        </h1>
      </a>

      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white transition duration-300"
      >
        {open ? <RxCross2 /> : <FaBars />}
      </button>

    </Container>


    {/* ================= MOBILE MENU ================= */}
    <div
      className={`absolute left-0 top-[70px] w-full overflow-hidden border-t border-white/10 bg-[#111827] transition-all duration-500 ease-in-out ${
        open
          ? "max-h-[700px] opacity-100"
          : "pointer-events-none max-h-0 opacity-0"
      }`}
    >
      <div className="px-4 py-5">
        
        <ul className="grid grid-cols-2 gap-3">
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <a
                href={item.link}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium text-gray-200 transition-all duration-300 active:bg-red-500"
              >
                <span>{item.name}</span>

                <span className="text-xs text-red-500 transition group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>

  </div>
</nav>


);
};

export default Navber;
