import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { path: "/", title: "الرئيسية" },
    { path: "/blog", title: "المدونة" },
    { path: "/about", title: "من نحن" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#171717] ${scrolled ? "shadow-2xl backdrop-blur-sm" : "shadow-none"
        }`}
    >
      <div className="container mx-auto h-20 px-5 flex items-center justify-around">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="Logo" className="w-12" />

          <div>
            <h1 className="text-white text-2xl font-bold leading-none">
              عدسة
            </h1>

            <p className="text-[#d78a1f] text-xs mt-1">
              عالم التصوير الفوتوغرافي
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center rounded-full border border-[#2b2b2b] bg-[#1a1a1a] p-1">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full transition ${isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-5">

          <button className="text-2xl text-gray-300 hover:text-white transition">
            <IoMdSearch />
          </button>

          <Link to="/blog" className="rounded-full bg-orange-500 px-7 py-3 font-bold text-white transition hover:bg-orange-600">
            ابدأ القراءة
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white lg:hidden"
        >
          {isOpen ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-[#171717] border-t border-[#2b2b2b] lg:hidden transition-all duration-300 overflow-hidden ${isOpen ? "max-h-96" : "max-h-0"
          }`}
      >
        <nav className="flex flex-col py-3">

          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `px-6 py-4 transition ${isActive
                  ? "bg-[#252525] text-orange-500"
                  : "text-white hover:bg-[#222]"
                }`
              }
            >
              {link.title}
            </NavLink>
          ))}

          <div className="mt-4 flex items-center justify-between px-6">

            <button className="text-2xl text-white">
              <IoMdSearch />
            </button>

            <Link to="/blog" onClick={() => setIsOpen(false)} className="rounded-full bg-orange-500 px-6 py-2 font-bold text-white hover:bg-orange-600 transition">
              ابدأ القراءة
            </Link>

          </div>

        </nav>
      </div>
    </header>
  );
}
