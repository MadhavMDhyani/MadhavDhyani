import { useState, useEffect } from "react";
import LOGO from "../assets/images/logo.png";
import { MENU_LINKS } from "../utils/data";
import { FaSun, FaMoon } from "react-icons/fa6";

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="container mx-auto sticky top-5 z-50">
      <div className="flex items-center justify-between rounded-full bg-white/60 dark:bg-slate-900/70 border border-[#fee6cc] dark:border-slate-800 backdrop-blur-[10px] mx-5 my-3 p-3 md:py-3 md:px-6 transition-colors">
        {/* Logo */}
        <img className="h-8 object-contain" src={LOGO} alt="Logo" />

        {/* Navigation Links */}
        <ul className={`${isOpen ? "flex" : "hidden"} menu-wrapper`}>
          {MENU_LINKS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.to}`}
                className="menu-item text-slate-700 dark:text-slate-200 hover:text-[#ac573f] dark:hover:text-[#f4a44f] transition-colors"
                onClick={() => {
                  if (window.innerWidth < 768) setIsOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Controls: Dark Mode Toggle & Hire Me Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            className="p-2.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-amber-400 hover:scale-110 transition-all border border-orange-100 dark:border-slate-700"
            aria-label="Toggle Theme"
          >
            {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
          </button>

          {/* Hamburger Icon */}
          <button
            className="block md:hidden text-slate-700 dark:text-slate-200 focus:outline-none ml-1"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center justify-center h-12 text-[15px] font-medium text-white bg-gradient-primary rounded-full px-9 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;