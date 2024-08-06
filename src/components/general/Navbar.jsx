import { Link, useNavigate } from "react-router-dom";
import { PhoneCallIcon } from "lucide-react";
import { Menu, MenuButton, MenuItem, SubMenu } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import { useEffect, useState } from "react";
import BurgerBtn from "./BurgerBtn";

const NavbarTest = () => {
  const navigate = useNavigate();

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [data, setData] = useState({
    seeds: [],
    grains: [],
    spices: [],
  });

  useEffect(() => {
    fetch("https://apexriminternational.com/api/products.php", {
      method: "GET",
    }).then((res) =>
      res.json().then((res) => {
        const data = res.data;
        filterProducts(data);
      }),
    );
  }, []);

  const filterProducts = (data) => {
    const seeds = data.filter((product) => product.type === "oil seed");
    const grains = data.filter((product) => product.type === "grain");
    const spices = data.filter((product) => product.type === "spices");
    setData({ seeds, grains, spices });
  };

  useEffect(() => {
    if (isNavOpen) {
      document.querySelector("body").style.overflowY = "hidden";
    } else {
      document.querySelector("body").style.overflowY = "scroll";
    }
  }, [isNavOpen]);

  const categories = [
    {
      name: "Spices",
      products: data.spices,
    },
    {
      name: "Oil Seeds",
      products: data.seeds,
    },
    {
      name: "Grains",
      products: data.grains,
    },
  ];

  return (
    <nav className="absolute top-10 z-10 flex w-full items-center justify-between px-[3%]">
      <div className="flex items-center gap-12 text-white">
        <Link to="/">
          <img className="w-[120px]" src="/logo.png" alt="Logo" />
        </Link>
        <ul
          className={`fixed left-0 top-0 z-50 flex h-screen w-screen flex-col items-center justify-around gap-6 bg-secondary py-20 transition-six-all duration-700 lg:static lg:h-fit lg:w-fit lg:translate-y-0 lg:flex-row lg:bg-transparent lg:py-0 ${isNavOpen ? "translate-y-0" : "-translate-y-full"}`}
        >
          <li className="flex items-center justify-start gap-x-4">
            <Link
              className="text-sm font-semibold uppercase transition-three-all hover:text-primary"
              to="/"
              onClick={() => setIsNavOpen(false)}
            >
              Home
            </Link>
            <div className="hidden h-2 w-2 rounded-full bg-primary lg:block" />
          </li>
          <li className="flex items-center justify-start gap-x-4">
            <Menu
              menuButton={
                <MenuButton className="text-sm font-semibold uppercase transition-three-all hover:text-primary">
                  Products
                </MenuButton>
              }
            >
              {categories.map((category, index) => (
                <SubMenu
                  key={index}
                  label={category.name}
                  className="font-semibold text-black-3 hover:text-black"
                >
                  {category.products.map((product, i) => (
                    <MenuItem
                      key={i}
                      onClick={() => {
                        setIsNavOpen(false);
                        navigate(`/products/${product.url}`);
                      }}
                      className="font-semibold text-black-3 hover:text-black"
                    >
                      {product.title}
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
            <div className="hidden h-2 w-2 rounded-full bg-primary lg:block" />
          </li>
          <li className="flex items-center justify-start gap-x-4">
            <Link
              className="text-sm font-semibold uppercase transition-three-all hover:text-primary"
              to="/about-us"
              onClick={() => setIsNavOpen(false)}
            >
              About
            </Link>
            <div className="hidden h-2 w-2 rounded-full bg-primary lg:block" />
          </li>
          <li className="flex items-center justify-start gap-x-4">
            <Link
              className="text-sm font-semibold uppercase transition-three-all hover:text-primary"
              to="/contact-us"
              onClick={() => setIsNavOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <BurgerBtn setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen} />

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

export default NavbarTest;
