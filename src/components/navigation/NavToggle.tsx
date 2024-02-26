import React from "react";
import { m, useAnimation } from "framer-motion";

interface NavToggleProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const NavToggle: React.FC<NavToggleProps> = ({ isMenuOpen, toggleMenu }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    controls.start({
      d: isMenuOpen
        ? "M6 18 18 6M6 6l12 12"
        : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5",
      transition: { duration: 0.5, ease: "easeInOut" },
    });
  }, [isMenuOpen, controls]);

  return (
    <div
      className="cursor-pointer justify-end md:hidden hover:scale-105  hover:text-white z-30"
      onClick={toggleMenu}
    >
      <m.svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-10 h-10 focus:animate-spin"
      >
        <m.path
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={false}
          animate={controls}
        />
      </m.svg>
    </div>
  );
};

export default NavToggle;
