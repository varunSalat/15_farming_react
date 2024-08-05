import React from "react";

const BurgerBtn = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <div
      className="relative z-50 mr-4 block cursor-pointer lg:hidden"
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
  );
};

export default BurgerBtn;
