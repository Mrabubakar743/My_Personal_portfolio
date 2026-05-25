import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="flex items-center justify-between px-12 py-6 fixed top-0 left-0 w-full bg-[#0F172A] z-50">
      <h1 className="text-2xl md:text-3xl font-black text-white">
        Muhammad{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
          Abubakar
        </span>
      </h1>
      <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-300">
        <li>
          <a
            href="/"
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400"
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#services"
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400"
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400"
          >
            Contact
          </a>
        </li>
      </ul>
      <button
        className="md:hidden text-white"
        onClick={() => setOpenMenu(!openMenu)}
      >
        {openMenu ? (
          <X size={30} className="text-cyan-400" />
        ) : (
          <Menu size={30} className="text-cyan-400" />
        )}
      </button>
      {openMenu && (
        <div className="absolute top-20 right-4 bg-[#0F172A] border border-white/10 flex flex-col items-center gap-6 py-8 px-8 rounded-2xl md:hidden">

          <a
            href="/"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400 text-lg text-white"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400 text-lg text-white"
          >
            About
          </a>

          <a
            href="#services"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400 text-lg text-white"
          >
            Services
          </a>

          <a
            href="#projects"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400 text-lg text-white"
          >
            Projects
          </a>

          <a
            href="#contact"
            onClick={() => setOpenMenu(false)}
            className="hover:text-cyan-400 hover:border-b hover:border-cyan-400 text-lg text-white"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;