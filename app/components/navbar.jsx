"use client";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent relative">
      <div className="flex items-center py-5">
        {/* Logo */}
        <div className="flex flex-grow items-center">
          <Link href="/" className="text-[#e09e3c] text-3xl font-bold">
            Taufeeq Ahmed
          </Link>
        </div>

        {/* Spacer for Center Alignment */}
        <div className="flex-grow"></div>

        {/* Burger Icon */}
        <div className="flex justify-end md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Menu Items (Desktop) */}
        <ul className="hidden md:flex mt-4 flex-col md:flex-row md:space-x-1 md:border-0" id="navbar-default">
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-300">ABOUT</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-300">EXPERIENCE</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-300">SKILLS</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-300">EDUCATION</div></Link>
          </li>
          <li>
            <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects"><div className="text-sm text-white transition-colors duration-300 hover:text-orange-300">PROJECTS</div></Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu (Slide-out) */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } absolute top-0 left-0 z-10 w-2/3 h-screen bg-black text-white transform transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col space-y-4 mt-16 ml-5">
          <li>
            <Link href="/#about" className="text-white text-lg hover:text-orange-300">
              ABOUT
            </Link>
          </li>
          <li>
            <Link href="/#experience" className="text-white text-lg hover:text-orange-300">
              EXPERIENCE
            </Link>
          </li>
          <li>
            <Link href="/#skills" className="text-white text-lg hover:text-orange-300">
              SKILLS
            </Link>
          </li>
          <li>
            <Link href="/#education" className="text-white text-lg hover:text-orange-300">
              EDUCATION
            </Link>
          </li>
          <li>
            <Link href="/#projects" className="text-white text-lg hover:text-orange-300">
              PROJECTS
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
