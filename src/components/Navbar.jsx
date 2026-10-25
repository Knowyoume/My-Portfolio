import React, { useState } from "react";
import { MenuIcon } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#0808b18]/90 backdrop-blur-md border border-white/10">
        <div className="flex justify-between items-center px-6 py-5 max-w-8xl">
          
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-bold text-white"
            onClick={() => setIsOpen(false)}
          >
            Suraj
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 text-gray-300">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#skill" className="hover:text-cyan-400">Skills</a>
            <a href="#project" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden bg-zinc-800 text-white p-2 rounded-md aspect-square shrink-0"
            aria-label="Toggle navigation menu"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden flex flex-col gap-5 px-6 py-5 text-gray-300 bg-[#0808b1]/90 backdrop-blur-md border border-white/10">
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Home
            </a>

            <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              About
            </a>

            <a href="#skill" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Skills
            </a>

            <a href="#project" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Projects
            </a>

            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-cyan-400">
              Contact
            </a>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

