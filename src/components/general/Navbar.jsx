import { Link } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";
import { navLinks } from "../../constant/constant";
import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="absolute top-10 z-10 flex w-full items-center justify-between px-[3%]">
      <div className="flex items-center gap-12 text-white">
        <Link to="/">
          <img
            className="w-[120px]"
            src="https://apexriminternational.com/assets/logo_without_bg.png"
          />
        </Link>
        <ul
          className={`fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-between gap-6 bg-secondary py-12 transition-six-all duration-[0.8s] lg:static lg:h-fit lg:w-fit lg:translate-y-0 lg:flex-row lg:bg-transparent ${isNavOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          {navLinks.map((link, i) => (
            <li key={i}>
              <div className="flex items-center justify-start gap-x-4">
                <Link
                  className="text-sm font-semibold uppercase transition-three-all hover:text-primary"
                  to={link.link}
                  onClick={() => setIsNavOpen(false)}
                >
                  {link.name}
                </Link>
                {i !== navLinks.length - 1 && (
                  <div className="hidden h-2 w-2 rounded-full bg-primary lg:block"></div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="relative z-10 mr-4 block cursor-pointer lg:hidden"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span
          className={`my-2 block h-1 w-10 rounded-md bg-white duration-700 ${isNavOpen ? "rotate-[45deg]" : "rotate-0"}`}
        />

        <span
          className={`my-2 block h-1 w-10 rounded-md bg-white duration-700 ${isNavOpen ? "opacity-0" : "opacity-100"}`}
        />
        <span
          className={`my-2 block h-1 w-10 rounded-md bg-white duration-700 ${isNavOpen ? "-translate-y-[24px] rotate-[-45deg]" : "rotate-0"}`}
        />
      </div>
      <div className="hidden items-center gap-4 font-medium lg:flex">
        <PhoneCallIcon className="text-primary" size={32} />
        <div className="text-white">
          <p className="text-sm">Call us Now</p>
          <a href="tel:+917201065314" className="text-md">
            +91 72 0106 5314
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
