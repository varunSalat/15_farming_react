import { Link } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";
import { navLinks } from "../../constant/constant";

const Navbar = () => {
  return (
    <nav className="absolute top-10 z-10 flex w-full items-center justify-between px-[3%]">
      <div className="flex items-center gap-12 text-white">
        <Link to="/">
          <img
            className="w-[120px]"
            src="https://apexriminternational.com/assets/logo_without_bg.png"
          />
        </Link>
        <ul className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-between gap-6 bg-secondary py-12 lg:static lg:h-fit lg:w-fit lg:flex-row">
          {navLinks.map((link, i) => (
            <li key={i}>
              <div className="flex items-center justify-start gap-x-4">
                <Link
                  className="text-sm font-semibold uppercase transition-three-all hover:text-primary"
                  to={link.link}
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
