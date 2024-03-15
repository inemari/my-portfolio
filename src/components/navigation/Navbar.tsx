import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { m, Variants } from "framer-motion";
import NavToggle from "./NavToggle";
import Logo from "../Logo";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const generateNavLink = (href: string, label: string) => {
        return {
            href: href,
            label: label,
            current: href === location.pathname,
        };
    };

    const navLinks = [
        generateNavLink("#home", "Home"),
        generateNavLink("#projects", "Projects"),
        generateNavLink("#Contact", "Contact"),
    ];

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const mobileMenuVariant: Variants = {
        opened: { y: "0%", transition: { duration: 1.1, ease: [0.74, 0, 0.19, 1.02] } },
        closed: { y: "-100%", transition: { delay: 0.35, duration: 0.50, ease: [0.74, 0, 0.19, 1.02] } },
    };

    const ulVariant: Variants = {
        opened: { transition: { delayChildren: 1, staggerChildren: 0.18 } },
        closed: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
    };

    const liVariant: Variants = {
        opened: { opacity: 1, y: "0%", transition: { duration: 0.65, ease: "easeOut" } },
        closed: { opacity: 0, y: "100%", transition: { duration: 0.25, ease: "easeInOut" } },
    };

    return (
        <m.div className="bg-[#171717] flex w-screen h-[90px] items-center md:justify-start justify-between shadow-sm px-3 fixed top-0 z-20" initial="closed" animate={isMenuOpen ? "opened" : "closed"}>
            {/* Logo*/}
            <div className="w-1/3 h-full items-start justify-start">
                <Logo />
            </div>

            {/* Menu on large screen */}
            <ul className="flex justify-center items-center gap-16 max-lg:hidden w-1/3">
                {navLinks.map((item) => (
                    <li key={item.label}>
                        <a href={item.href} className={`font-montserrat leading-normal text-lg text-slate-gray text-nowrap ${item.current ? "font-bold" : ""}`}>
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Menu items on mobile screen */}
            {isMenuOpen && (
                <m.div variants={mobileMenuVariant} className="fixed top-20 right-0 left-0 h-fit lg:bottom-auto z-20 bg-black">
                    <m.ul className="md:hidden flex flex-col items-center justify-center h-full gap-3 p-3" variants={ulVariant}>
                        {navLinks.map((item) => (
                            <m.li key={item.label} className={`w-full text-center group ease-in-out transition ${!item.current && "hover:scale-110 hover:-translate-y-1 hover:bg-indigo"}`}>
                                <a href={item.href} className={`font-montserrat leading-normal text-lg text-slate-gray ${item.current ? "font-semibold" : "group-hover:text-black "}`} onClick={toggleMenu}>
                                    <m.div variants={liVariant}>{item.label}</m.div>
                                </a>
                            </m.li>
                        ))}
                    </m.ul>
                </m.div>
            )}

            <NavToggle toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </m.div>
    );
};

export default Navbar;
