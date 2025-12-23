import React, { useState, useRef, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar({ lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef();

  const languages = [
    { code: "en", label: "EN" },
    { code: "ur", label: "UR" },
    { code: "de", label: "DE" },
    { code: "fr", label: "FR" },
    { code: "zh", label: "ZH" },
    { code: "ko", label: "KO" },
    { code: "ar", label: "AR" },
  ];

  const navLinks = ["Briefings", "Expertise", "Request Access"];

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  return (
    <nav className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LEFT LOGO */}
        <div className="flex items-center gap-2 cursor-pointer">
          <img
            src="https://oliverwyman.vercel.app/logo-no-background.svg"
            alt="Noble Logo"
            className="h-8 w-auto"
          />
          <span className="text-xl font-bold text-black">NOBLE DOMAIN</span>
        </div>

        {/* CENTER LINKS - DESKTOP */}
        <div className="hidden md:flex gap-12">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-gray-500 text-sm hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* LANGUAGE SELECTOR - DESKTOP */}
        <div className="hidden md:block relative" ref={dropdownRef}>
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="text-sm uppercase px-3 py-1 bg-white text-gray-500"
          >
            {lang.toUpperCase()}
          </button>
          {langOpen && (
            <div className="absolute right-0 mt-2 bg-white rounded shadow-lg flex flex-col">
              {languages.map((l) => (
                <button
                  key={l.code}
                  onClick={() => {
                    setLang(l.code);
                    setLangOpen(false);
                  }}
                  className="px-3 py-2 text-left text-gray-500 hover:text-black transition-colors"
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 pb-6 flex flex-col gap-4 shadow-md">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="text-gray-500 hover:text-black text-sm transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}

          <div className="flex gap-2 flex-wrap pt-4 border-t border-gray-200">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                className={`px-3 py-1 rounded text-sm ${
                  lang === l.code
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-500 hover:text-black transition-colors"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
